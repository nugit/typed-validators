import Type from '../types/Type'
import RuntimeTypeErrorItem from './RuntimeTypeErrorItem'
import { IdentifierPath } from '../Validation'
export default class UnknownPropertyErrorItem extends RuntimeTypeErrorItem {
  static readonly code: 'UNKNOWN_PROPERTY'
  readonly key: string | number | symbol
  constructor(
    path: IdentifierPath,
    valueAtPath: unknown,
    expectedTypeAtPath: Type<unknown>,
    key: string | number | symbol
  )
  messageAtPath(): string
}
