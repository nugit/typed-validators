import AnyType from './types/AnyType'
import ArrayType from './types/ArrayType'
import BooleanLiteralType from './types/BooleanLiteralType'
import BooleanType from './types/BooleanType'
import InstanceOfType from './types/InstanceOfType'
import IntersectionType from './types/IntersectionType'
import merge from './merge'
import MergedObjectType from './types/MergedObjectType'
import mergeInexact from './mergeInexact'
import NullLiteralType from './types/NullLiteralType'
import NumberType from './types/NumberType'
import NumericLiteralType from './types/NumericLiteralType'
import ObjectType from './types/ObjectType'
import ObjectTypeProperty from './types/ObjectTypeProperty'
import oneOf from './oneOf'
import RecordType from './types/RecordType'
import RuntimeTypeError from './errorReporting/RuntimeTypeError'
import RuntimeTypeErrorItem from './errorReporting/RuntimeTypeErrorItem'
import StringLiteralType from './types/StringLiteralType'
import StringType from './types/StringType'
import SymbolLiteralType from './types/SymbolLiteralType'
import SymbolType from './types/SymbolType'
import TupleType from './types/TupleType'
import Type from './types/Type'
import TypeAlias from './types/TypeAlias'
import TypeReference from './types/TypeReference'
import UndefinedLiteralType from './types/UndefinedLiteralType'
import UnionType from './types/UnionType'
import UnknownType from './types/UnknownType'
import Validation from './Validation'
export {
  AnyType,
  ArrayType,
  BooleanLiteralType,
  BooleanType,
  InstanceOfType,
  IntersectionType,
  merge,
  MergedObjectType,
  mergeInexact,
  NullLiteralType,
  NumberType,
  NumericLiteralType,
  ObjectType,
  ObjectTypeProperty,
  oneOf,
  RecordType,
  RuntimeTypeError,
  RuntimeTypeErrorItem,
  StringLiteralType,
  StringType,
  SymbolLiteralType,
  SymbolType,
  TupleType,
  Type,
  TypeAlias,
  TypeReference,
  UndefinedLiteralType,
  UnionType,
  UnknownType,
  Validation,
}
export declare const any: () => Type<any>
export declare const unknown: () => Type<unknown>
export declare const array: <T>(elementType: Type<T>) => Type<T[]>
export declare const readonlyArray: <T>(
  elementType: Type<T>
) => Type<readonly T[]>
export declare const readonly: <T extends {}>(
  type: Type<T>
) => Type<Readonly<T>>
export declare const nullLiteral: () => Type<null>
export { nullLiteral as null }
export declare const nullOr: <T>(type: Type<T>) => Type<T | null>
export declare const undefinedLiteral: () => Type<undefined>
export { undefinedLiteral as undefined }
export declare const nullish: () => Type<null | undefined>
export declare const nullishOr: <T>(type: Type<T>) => Type<T | null | undefined>
export declare function boolean(): Type<boolean>
export declare function boolean<T extends true | false>(literal: T): Type<T>
export declare function number(): Type<number>
export declare function number<T extends number>(literal: T): Type<T>
export declare function string(): Type<string>
export declare function string<T extends string>(literal: T): Type<T>
export declare function symbol(): Type<symbol>
export declare function symbol<T extends symbol>(literal: T): Type<T>
export declare function object<
  R extends Record<string | number | symbol, Type<any>>
>(
  required: R
): ObjectType<
  {
    [K in keyof R]: ExtractType<R[K]>
  }
>
export declare function object<
  R extends Record<string | number | symbol, Type<any>>
>({
  required,
  exact,
}: {
  required: R
  exact?: boolean
}): ObjectType<
  {
    [K in keyof R]: ExtractType<R[K]>
  }
>
export declare function object<
  S extends Record<string | number | symbol, Type<any>>
>({
  optional,
  exact,
}: {
  optional: S
  exact?: boolean
}): ObjectType<
  {
    [K in keyof S]?: ExtractType<S[K]>
  }
>
export declare function object<
  R extends Record<string | number | symbol, Type<any>>,
  S extends Record<string | number | symbol, Type<any>>
>({
  required,
  optional,
  exact,
}: {
  required: R
  optional: S
  exact?: boolean
}): ObjectType<
  {
    [K in keyof R]: ExtractType<R[K]>
  } &
    {
      [K in keyof S]?: ExtractType<S[K]>
    }
>
export declare const record: <K extends string | number | symbol, V>(
  key: Type<K>,
  value: Type<V>
) => RecordType<K, V>
export declare const instanceOf: <T>(
  classType: () => new (...args: any[]) => T
) => Type<T>
export declare const tuple: <T extends Type<any>[]>(
  ...types: T
) => Type<{ [Index in keyof T]: T[Index] extends Type<infer E> ? E : never }>
export declare function allOf<T1>(...types: [Type<T1>]): Type<T1>
export declare function allOf<T1, T2>(
  ...types: [Type<T1>, Type<T2>]
): Type<T1 & T2>
export declare function allOf<T1, T2, T3>(
  ...types: [Type<T1>, Type<T2>, Type<T3>]
): Type<T1 & T2 & T3>
export declare function allOf<T1, T2, T3, T4>(
  ...types: [Type<T1>, Type<T2>, Type<T3>, Type<T4>]
): Type<T1 & T2 & T3 & T4>
export declare function allOf<T1, T2, T3, T4, T5>(
  ...types: [Type<T1>, Type<T2>, Type<T3>, Type<T4>, Type<T5>]
): Type<T1 & T2 & T3 & T4 & T5>
export declare function allOf<T1, T2, T3, T4, T5, T6>(
  ...types: [Type<T1>, Type<T2>, Type<T3>, Type<T4>, Type<T5>, Type<T6>]
): Type<T1 & T2 & T3 & T4 & T5 & T6>
export declare function allOf<T1, T2, T3, T4, T5, T6, T7>(
  ...types: [
    Type<T1>,
    Type<T2>,
    Type<T3>,
    Type<T4>,
    Type<T5>,
    Type<T6>,
    Type<T7>
  ]
): Type<T1 & T2 & T3 & T4 & T5 & T6 & T7>
export declare function allOf<T1, T2, T3, T4, T5, T6, T7, T8>(
  ...types: [
    Type<T1>,
    Type<T2>,
    Type<T3>,
    Type<T4>,
    Type<T5>,
    Type<T6>,
    Type<T7>,
    Type<T8>
  ]
): Type<T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8>
export declare const alias: <T>(name: string, type: Type<T>) => TypeAlias<T>
export declare const ref: <T>(type: () => TypeAlias<T>) => Type<T>
export declare type ExtractType<T extends Type<any>> = T['__type']
