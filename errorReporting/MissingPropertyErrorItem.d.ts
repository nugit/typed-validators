import Type from '../types/Type'
import ObjectTypeProperty from '../types/ObjectTypeProperty'
import RuntimeTypeErrorItem from './RuntimeTypeErrorItem'
import { IdentifierPath } from '../Validation'
export default class MissingPropertyErrorItem extends RuntimeTypeErrorItem {
  static readonly code: 'MISSING_PROPERTY'
  readonly propertyType: ObjectTypeProperty<any, any>
  constructor(
    path: IdentifierPath,
    valueAtPath: unknown,
    expectedTypeAtPath: Type<any>,
    propertyType: ObjectTypeProperty<any, any>
  )
  messageAtPath(): string
}
