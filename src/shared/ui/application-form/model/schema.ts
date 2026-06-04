import { z } from 'zod'

const VALID_CONTACT_METHODS = ['telegram', 'whatsapp', 'email'] as const

export type ContactMethod = (typeof VALID_CONTACT_METHODS)[number]

const TELEGRAM_RE = /^@[a-zA-Z0-9_]{5,32}$/

const PHONE_RE = /^\+?[\d\s\-().]{7,20}$/

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface SchemaMessages {
  nameMin: string
  contactMethodRequired: string
  contactMin: string
  contactInvalidEmail: string
  contactInvalidTelegram: string
  contactInvalidPhone: string
}

export function createApplicationSchema(messages: SchemaMessages) {
  return z
    .object({
      name: z.string().min(2, messages.nameMin).or(z.literal('')),
      contactMethod: z
        .string()
        .refine(
          (v): v is ContactMethod => (VALID_CONTACT_METHODS as readonly string[]).includes(v),
          messages.contactMethodRequired,
        ),
      contact: z.string().min(1, messages.contactMin),
    })
    .superRefine((data, ctx) => {
      const { contactMethod, contact } = data

      if (contactMethod === 'email' && !EMAIL_RE.test(contact)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['contact'],
          message: messages.contactInvalidEmail,
        })
      }

      if (contactMethod === 'telegram' && !TELEGRAM_RE.test(contact)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['contact'],
          message: messages.contactInvalidTelegram,
        })
      }

      if (contactMethod === 'whatsapp' && !PHONE_RE.test(contact)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['contact'],
          message: messages.contactInvalidPhone,
        })
      }
    })
}

export type ApplicationSchema = ReturnType<typeof createApplicationSchema>

export type ApplicationFormValues = z.output<ApplicationSchema>

export type ApplicationFormInput = z.input<ApplicationSchema>
