import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class MergedObjectType<T extends {}> extends Type<T> {
  typeName: string
  readonly objects: Type<T>[]
  readonly exact: boolean
  private resolved
  constructor(objects: Type<T>[], exact?: boolean)
  resolveType(): Type<T>
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  toString(options?: { formatForMustBe?: boolean }): string
}
