export type BriefPayload = {
  name: string
  company: string
  service: string
  task: string
  channel: string
  contact: string
}

export type DeliveryResult = {
  ok: boolean
  telegram: boolean
  email: boolean
}

export async function sendBrief(brief: BriefPayload): Promise<DeliveryResult> {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(brief),
    })
    const result = (await response.json()) as DeliveryResult
    return {
      ok: response.ok && result.ok === true,
      telegram: result.telegram === true,
      email: result.email === true,
    }
  } catch {
    return { ok: false, telegram: false, email: false }
  }
}
