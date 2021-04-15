import Type from '../types/Type'
import RuntimeTypeErrorItem from './RuntimeTypeErrorItem'
import { IdentifierPath } from '../Validation'
export default class InvalidLengthErrorItem extends RuntimeTypeErrorItem {
  static readonly code: 'INVALID_LENGTH'
  readonly valueAtPath: Array<unknown>
  readonly expectedLength: number
  constructor(
    path: IdentifierPath,
    valueAtPath: Array<unknown>,
    expectedTypeAtPath: Type<unknown>,
    expectedLength: number
  )
  messageAtPath(): string
  toString(): string
}
