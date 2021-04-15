import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import { TypeConstraint } from '../typeConstraints'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class TypeAlias<T> extends Type<T> {
  typeName: string
  readonly name: string
  readonly type: Type<T>
  readonly constraints: TypeConstraint<T>[]
  constructor(name: string, type: Type<T>)
  resolveType(): Type<T>
  addConstraint(...constraints: TypeConstraint<T>[]): this
  get hasConstraints(): boolean
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  toString(): string
}
