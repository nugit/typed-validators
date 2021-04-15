import RuntimeTypeErrorItem from './RuntimeTypeErrorItem'
export default class RuntimeTypeError extends TypeError {
  name: string
  readonly errors: RuntimeTypeErrorItem[]
  constructor(errors: RuntimeTypeErrorItem[])
  get message(): string
  formatMessage({ limit }?: { limit?: number }): string
}
