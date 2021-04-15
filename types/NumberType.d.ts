import Type from './Type'
import Validation, { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export default class NumberType extends Type<number> {
  typeName: string
  errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  accepts(input: any): input is number
  toString(options?: { formatForMustBe?: boolean }): string
}
