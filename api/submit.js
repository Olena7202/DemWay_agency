const allowedChannels = new Set(['phone', 'telegram', 'email'])

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function sendJson(response, status, body) {
  response.status(status).setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return sendJson(response, 405, { ok: false })
  }

  const origin = request.headers.origin
  const host = request.headers.host
  if (origin && host && new URL(origin).host.toLowerCase() !== host.toLowerCase()) {
    return sendJson(response, 403, { ok: false })
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {}
  if (clean(body.fax_line, 200)) {
    return sendJson(response, 200, { ok: true })
  }

  const brief = {
    name: clean(body.name, 120),
    company: clean(body.company, 160) || '—',
    service: clean(body.service, 160),
    task: clean(body.task, 3000),
    channel: clean(body.channel, 24),
    contact: clean(body.contact, 240),
  }

  if (
    !brief.name ||
    !brief.service ||
    !brief.task ||
    !brief.contact ||
    !allowedChannels.has(brief.channel)
  ) {
    return sendJson(response, 400, { ok: false })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!botToken || !chatId) {
    return sendJson(response, 503, { ok: false, code: 'delivery_not_configured' })
  }

  const text = [
    'DemWay · нова заявка',
    '',
    `Імʼя: ${brief.name}`,
    `Компанія: ${brief.company}`,
    `Послуга: ${brief.service}`,
    `Канал: ${{ phone: 'Телефон', telegram: 'Telegram', email: 'Email' }[brief.channel]}`,
    `Контакт: ${brief.contact}`,
    '',
    'Задача:',
    brief.task,
  ].join('\n')

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(8000),
    })
    const result = await telegramResponse.json()
    if (!telegramResponse.ok || result.ok !== true) {
      console.error('Telegram notification failed:', telegramResponse.status)
      return sendJson(response, 502, { ok: false })
    }
    return sendJson(response, 200, { ok: true })
  } catch (error) {
    console.error('Telegram notification request failed:', error instanceof Error ? error.name : 'unknown')
    return sendJson(response, 502, { ok: false })
  }
}
