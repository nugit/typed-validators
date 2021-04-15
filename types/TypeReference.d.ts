import Type from './Type'
import TypeAlias from './TypeAlias'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class TypeReference<T> extends Type<T> {
  typeName: string
  readonly type: () => TypeAlias<T>
  constructor(type: () => TypeAlias<T>)
  resolveType(): Type<T>
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  toString(): string
}
