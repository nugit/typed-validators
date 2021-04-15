import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class TupleType<T extends any[]> extends Type<T> {
  typeName: string
  readonly types: {
    [Index in keyof T]: Type<T[Index]>
  }
  constructor(
    types: {
      [Index in keyof T]: Type<T[Index]>
    }
  )
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  toString(options?: { formatForMustBe?: boolean }): string
}
