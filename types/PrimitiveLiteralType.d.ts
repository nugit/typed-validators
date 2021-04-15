import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default abstract class PrimitiveLiteralType<
  T extends string | number | boolean | symbol | bigint | null | undefined
> extends Type<T> {
  typeName: string
  readonly value: T
  constructor(value: T)
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  toString(): string
}
