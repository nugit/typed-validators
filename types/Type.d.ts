import Validation from '../Validation'
import { IdentifierPath } from '../Validation'
import RuntimeTypeErrorItem from '../errorReporting/RuntimeTypeErrorItem'
export declare function assertIsType(x: unknown, name: string): void
/**
 * # Type
 *
 * This is the base class for all types.
 */
export default abstract class Type<T> {
  readonly __type: T
  typeName: string
  resolveType(): Type<T>
  abstract errors(
    validation: Validation,
    path: IdentifierPath,
    input: any
  ): Iterable<RuntimeTypeErrorItem>
  abstract accepts(input: any): input is T
  get acceptsSomeCompositeTypes(): boolean
  assert<V extends T>(input: any, prefix?: string, path?: IdentifierPath): V
  validate(input: any, prefix?: string, path?: IdentifierPath): Validation
  abstract toString(options?: { formatForMustBe?: boolean }): string
}
