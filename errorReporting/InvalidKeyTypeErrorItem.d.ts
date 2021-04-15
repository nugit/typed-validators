import Type from '../types/Type'
import { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from './RuntimeTypeErrorItem'
export default class InvalidKeyTypeErrorItem extends RuntimeTypeErrorItem {
  static readonly code: 'INVALID_KEY_TYPE'
  readonly key: string | number | symbol
  readonly expectedKeyType: Type<unknown>
  constructor(
    path: IdentifierPath,
    valueAtPath: unknown,
    expectedTypeAtPath: Type<unknown>,
    key: string | number | symbol,
    expectedKeyType: Type<unknown>
  )
  messageAtPath(): string
}
