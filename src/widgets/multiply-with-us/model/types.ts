export type MultiplyAudience =
  | 'for_media_buyers'
  | 'for_businesses'
  | 'for_partners'

export type MultiplySteps = {
  step_1: string
  step_2: string
}

export type MultiplyItem = {
  key: string
  title: string
  steps: MultiplySteps
  ctaLabel: string
}

export type MultiplyResponse = MultiplyItem[]
