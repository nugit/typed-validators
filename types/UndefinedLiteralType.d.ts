import PrimitiveLiteralType from './PrimitiveLiteralType'
export default class UndefinedLiteralType extends PrimitiveLiteralType<
  undefined
> {
  typeName: string
  constructor()
}
