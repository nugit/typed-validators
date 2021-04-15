declare const errorMessages: {
  ERR_CONSTRAINT_VIOLATION: string
  ERR_EXPECT_ARRAY: string
  ERR_EXPECT_BOOLEAN: string
  ERR_EXPECT_EMPTY: string
  ERR_EXPECT_EXACT_VALUE: string
  ERR_EXPECT_INSTANCEOF: string
  ERR_EXPECT_KEY_TYPE: string
  ERR_EXPECT_NUMBER: string
  ERR_EXPECT_OBJECT: string
  ERR_EXPECT_STRING: string
  ERR_EXPECT_SYMBOL: string
  ERR_EXPECT_VOID: string
  ERR_EXPECT_LENGTH: string
  ERR_MISSING_PROPERTY: string
  ERR_NO_INDEXER: string
  ERR_NO_UNION: string
  ERR_UNKNOWN_PROPERTY: string
}
export declare type ErrorKey = keyof typeof errorMessages
export default errorMessages
