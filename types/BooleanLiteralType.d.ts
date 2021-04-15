import PrimitiveLiteralType from './PrimitiveLiteralType'
export default class BooleanLiteralType<
  T extends boolean
> extends PrimitiveLiteralType<T> {
  typeName: string
  constructor(value: T)
}
