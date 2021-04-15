import AnyType from './AnyType'
export default class UnknownType extends AnyType<unknown> {
  typeName: string
  toString(): string
}
