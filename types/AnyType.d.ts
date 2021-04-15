import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
import Type from './Type'
export default class AnyType<T = any> extends Type<T> {
  typeName: string
  errors(): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  toString(): string
}
