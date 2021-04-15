import Type from './types/Type'
export declare function inValidationCycle(type: Type<any>, input: any): boolean
export declare function startValidationCycle(type: Type<any>, input: any): void
export declare function endValidationCycle(type: Type<any>, input: any): void
export declare function inToStringCycle(type: Type<any>): boolean
export declare function startToStringCycle(type: Type<any>): void
export declare function endToStringCycle(type: Type<any>): void
export declare function weakSetHas<V extends {}>(
  weakset: WeakSet<V>,
  value: V
): boolean
export declare function weakSetAdd<V extends {}>(
  weakset: WeakSet<V>,
  value: V
): void
export declare function weakSetDelete<V extends {}>(
  weakset: WeakSet<V>,
  value: V
): void
