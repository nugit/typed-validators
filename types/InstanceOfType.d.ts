import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export declare type ClassTypeOption<T> = () => {
  new (...args: any[]): T
}
export default class InstanceOfType<T> extends Type<T> {
  typeName: string
  private _classType
  get classType(): {
    new (...args: any[]): T
  }
  constructor(classType: ClassTypeOption<T>)
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  toString(options?: { formatForMustBe?: boolean }): string
}
