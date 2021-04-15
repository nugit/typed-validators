import Type from './types/Type'
import RuntimeTypeErrorItem from './errorReporting/RuntimeTypeErrorItem'
export declare type IdentifierPath = Array<string | number | symbol>
export default class Validation {
  readonly input: any
  readonly path: IdentifierPath
  readonly prefix: string
  readonly errors: RuntimeTypeErrorItem[]
  cyclic: WeakMap<Type<any>, WeakSet<any>>
  constructor(input: any, prefix?: string, path?: IdentifierPath)
  inCycle(type: Type<any>, input: any): boolean
  startCycle(type: Type<any>, input: any): void
  endCycle(type: Type<any>, input: any): void
  hasErrors(): boolean
}
export declare function stringifyPath(path: IdentifierPath): string
