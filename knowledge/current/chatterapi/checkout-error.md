---
title: "Checkout Error"
domain: chatterapi
topic: checkout-error
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.669Z
estimatedTokens: 151
keywords: [Checkout, Error, Commerce, store]
---

# Checkout Error

> Error during a Commerce store checkout.

# Checkout Error

Error during a Commerce store checkout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| detail | String | Detailed information about the error. | Small, 55.0 | 55.0 |
| instance | String | A URI reference that identifies the specific occurrence of the problem. | Small, 55.0 | 55.0 |
| invalid​Parameters | Invalid Parameter[] | List of invalid parameters, if any. | Big, 55.0 | 55.0 |
| title | String | Brief summary of the error. | Small, 55.0 | 55.0 |
| type | String | Type of error. | Small, 55.0 | 55.0 |

## Related Topics

- Invalid Parameter (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_invalid_parameter.htm)
