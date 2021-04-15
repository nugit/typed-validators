import RuntimeTypeErrorItem from './errorReporting/RuntimeTypeErrorItem'
import Type from './types/Type'
import Validation, { IdentifierPath } from './Validation'
export declare type TypeConstraint<T> = (input: T) => string | null | undefined
export declare type ConstrainableType<T> = Type<T> & {
  constraints: TypeConstraint<T>[]
}
/**
 * Collect any errors from constraints on the given subject type.
 */
export declare function collectConstraintErrors(
  subject: ConstrainableType<any>,
  validation: Validation,
  path: IdentifierPath,
  input: any
): Iterable<RuntimeTypeErrorItem>
/**
 * Determine whether the input passes the constraints on the subject type.
 */
export declare function constraintsAccept(
  subject: ConstrainableType<any>,
  ...input: any[]
): boolean
