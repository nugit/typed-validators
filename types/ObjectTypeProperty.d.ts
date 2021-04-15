import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class ObjectTypeProperty<
  K extends string | number | symbol,
  V
> extends Type<V> {
  typeName: string
  readonly key: K
  readonly value: Type<V>
  readonly optional: boolean
  __objectType: Type<any>
  constructor(key: K, value: Type<V>, optional: boolean)
  clone(): ObjectTypeProperty<K, V>
  /**
   * Determine whether the property exists on the given input or its prototype chain.
   */
  existsOn(input: Record<string, any>): boolean
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: Record<K, V>): input is any
  toString(): string
}
