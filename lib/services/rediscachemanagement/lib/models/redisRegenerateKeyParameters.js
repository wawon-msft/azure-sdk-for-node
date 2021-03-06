/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Specifies which Redis access keys to reset.
 *
 */
class RedisRegenerateKeyParameters {
  /**
   * Create a RedisRegenerateKeyParameters.
   * @member {string} keyType The Redis access key to regenerate. Possible
   * values include: 'Primary', 'Secondary'
   */
  constructor() {
  }

  /**
   * Defines the metadata of RedisRegenerateKeyParameters
   *
   * @returns {object} metadata of RedisRegenerateKeyParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisRegenerateKeyParameters',
      type: {
        name: 'Composite',
        className: 'RedisRegenerateKeyParameters',
        modelProperties: {
          keyType: {
            required: true,
            serializedName: 'keyType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Primary', 'Secondary' ]
            }
          }
        }
      }
    };
  }
}

module.exports = RedisRegenerateKeyParameters;
