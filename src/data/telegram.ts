export type BriefPayload = {
  name: string
  company: string
  service: string
  task: string
  channel: string
  contact: string
}

export async function sendBriefToTelegram(brief: BriefPayload) {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(brief),
    })
    const result = (await response.json()) as { ok?: boolean }
    return response.ok && result.ok === true
  } catch {
    return false
  }
}
