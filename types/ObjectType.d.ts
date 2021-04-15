import Type from './Type'
import ObjectTypeProperty from './ObjectTypeProperty'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class ObjectType<T extends {}> extends Type<T> {
  typeName: string
  readonly properties: ObjectTypeProperty<keyof T, any>[]
  readonly exact: boolean
  constructor(properties?: ObjectTypeProperty<keyof T, any>[], exact?: boolean)
  resolveObjectType(): ObjectType<T>
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  toString(options?: { formatForMustBe?: boolean }): string
}
