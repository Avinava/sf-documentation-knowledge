---
title: "Program Rebate Type Validation Error Response"
domain: channel-revenue-management-dev-guide
topic: program-rebate-type-validation-error-response
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.904Z
estimatedTokens: 120
keywords: [Program, Rebate, Validation, Error, setup]
---

# Program Rebate Type Validation Error Response

> Represents error details for program rebate type setup validation.

# Program Rebate Type Validation Error Response

Represents error details for program rebate type setup validation.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | The code of the error due to which the request failed. | Big, 65.0 | 65.0 |
| errorMessage | String | The error message that provides the reason the request failed. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [
    {
      "errorCode": "INVALID_API_INPUT",
      "errorMessage": "Please provide a valid program rebate type id."
    }
  ]
}
```
