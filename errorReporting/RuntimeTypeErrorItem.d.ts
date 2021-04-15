import { IdentifierPath } from '../Validation'
import Type from '../types/Type'
export default abstract class RuntimeTypeErrorItem {
  static readonly code: string
  readonly path: IdentifierPath
  readonly valueAtPath: unknown
  readonly expectedTypeAtPath: Type<unknown>
  readonly depth: number
  constructor(
    path: IdentifierPath,
    valueAtPath: unknown,
    expectedTypeAtPath: Type<unknown>,
    depth?: number
  )
  abstract messageAtPath(): string
  toString(): string
}
