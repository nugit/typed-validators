import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class RecordType<
  K extends string | number | symbol,
  V
> extends Type<Record<K, V>> {
  typeName: string
  readonly key: Type<K>
  readonly value: Type<V>
  constructor(key: Type<K>, value: Type<V>)
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is Record<K, V>
  get acceptsSomeCompositeTypes(): boolean
  toString(options?: { formatForMustBe?: boolean }): string
}
