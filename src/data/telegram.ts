const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN ?? ''
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID ?? ''

export type BriefPayload = {
  name: string
  company: string
  service: string
  task: string
  channel: string
  contact: string
}

export async function sendBriefToTelegram(brief: BriefPayload) {
  if (!botToken || !chatId) return false

  const text = [
    'DemWay · нова заявка',
    '',
    `Імʼя: ${brief.name}`,
    `Компанія: ${brief.company}`,
    `Послуга: ${brief.service}`,
    `Канал: ${brief.channel}`,
    `Контакт: ${brief.contact}`,
    '',
    'Задача:',
    brief.task,
  ].join('\n')

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    })
    return response.ok
  } catch {
    return false
  }
}
