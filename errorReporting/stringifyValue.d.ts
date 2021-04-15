declare type Options = {
  indent?: string
  limit?: number
  enclosing?: WeakMap<any, number | null>
  refCounter?: [number]
  reachedLimit?: [boolean]
}
export default function stringifyValue(value: any, options?: Options): string
export {}
