import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class ArrayType<T> extends Type<Array<T>> {
  typeName: string
  readonly elementType: Type<T>
  constructor(elementType: Type<T>)
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is Array<T>
  get acceptsSomeCompositeTypes(): boolean
  toString(options?: { formatForMustBe?: boolean }): string
}
