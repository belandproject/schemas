import {
  generateValidator,
  JSONSchema,
  ValidateFunction
} from '../../validation'

/** @alpha */
export enum WearableBodyShape {
  MALE = 'urn:beland:off-chain:base-avatars:BaseMale',
  FEMALE = 'urn:beland:off-chain:base-avatars:BaseFemale'
}

/** @alpha */
export namespace WearableBodyShape {
  export const schema: JSONSchema<WearableBodyShape> = {
    type: 'string',
    enum: Object.values(WearableBodyShape)
  }

  export const validate: ValidateFunction<WearableBodyShape> =
    generateValidator(schema)
}
