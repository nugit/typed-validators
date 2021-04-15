import PrimitiveLiteralType from './PrimitiveLiteralType'
export default class NumericLiteralType<
  T extends number
> extends PrimitiveLiteralType<T> {
  typeName: string
  constructor(value: T)
  toString(): string
}
