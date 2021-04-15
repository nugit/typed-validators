import PrimitiveLiteralType from './PrimitiveLiteralType'
export default class StringLiteralType<
  T extends string
> extends PrimitiveLiteralType<T> {
  typeName: string
  constructor(value: T)
  toString(): string
}
