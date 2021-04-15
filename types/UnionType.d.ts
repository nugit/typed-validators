import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class UnionType<T> extends Type<T> {
  typeName: string
  readonly types: Type<any>[]
  private _determinantProperty
  constructor(types: Type<any>[])
  get determinantProperty():
    | [string | number | symbol, Map<any, Type<any>>]
    | null
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  toString(options?: { formatForMustBe?: boolean }): string
}
