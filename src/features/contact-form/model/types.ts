export type ContactMethod = 'telegram' | 'whatsapp' | 'email'

export type FormPayload = {
  name: string
  method: ContactMethod
  contact: string
}

export type FormResponse = {
  message: string
  data: FormPayload
}
