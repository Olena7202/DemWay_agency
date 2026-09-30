const allowedChannels = new Set(['phone', 'telegram', 'email'])
const contactInbox = process.env.CONTACT_EMAIL || 'demway.agency@gmail.com'

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function sendJson(response, status, body) {
  response.status(status).setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

async function sendTelegram(brief) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!botToken || !chatId) {
    console.error('Telegram notification is not configured')
    return false
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
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(8000),
    })
    const result = await telegramResponse.json()
    if (!telegramResponse.ok || result.ok !== true) {
      console.error('Telegram notification failed:', telegramResponse.status)
      return false
    }
    return true
  } catch (error) {
    console.error('Telegram notification request failed:', error instanceof Error ? error.name : 'unknown')
    return false
  }
}

async function sendEmail(brief) {
  const gmailUser = process.env.GMAIL_USER
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '')
  if (!gmailUser || !gmailAppPassword) {
    console.error('Gmail notification is not configured')
    return false
  }

  try {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.default.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailAppPassword },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
    })
    await transporter.sendMail({
      from: `DemWay <${gmailUser}>`,
      to: contactInbox,
      replyTo: brief.channel === 'email' ? brief.contact : undefined,
      subject: 'DemWay: нова заявка',
      text: [
        'Нова заявка з сайту DemWay',
        '',
        `Імʼя: ${brief.name}`,
        `Компанія: ${brief.company}`,
        `Послуга: ${brief.service}`,
        `Канал відповіді: ${{ phone: 'Телефон', telegram: 'Telegram', email: 'Email' }[brief.channel]}`,
        `Контакт: ${brief.contact}`,
        '',
        'Задача:',
        brief.task,
      ].join('\n'),
    })
    return true
  } catch (error) {
    console.error('Gmail notification failed:', error instanceof Error ? error.name : 'unknown')
    return false
  }
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

  const [telegramOk, emailOk] = await Promise.all([sendTelegram(brief), sendEmail(brief)])
  if (!telegramOk && !emailOk) return sendJson(response, 502, { ok: false })
  return sendJson(response, 200, { ok: true, telegram: telegramOk, email: emailOk })
}
