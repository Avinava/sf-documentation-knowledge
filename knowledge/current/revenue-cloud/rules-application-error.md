---
title: "Rules Application Error"
domain: revenue-cloud
topic: rules-application-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.907Z
estimatedTokens: 117
keywords: [Rules, Application, Error, Output, representation, failure]
---

# Rules Application Error

> Output representation of the error details for rules application failure.

# Rules Application Error

Output representation of the error details for rules application failure.

JSON example

This example shows the rules application error.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code that indicates the type of error. | Big, 66.0 | 66.0 |
| message | String | Message that states the reason for error, if any. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "errors": [
    {
      "errorCode": "INVALID_ACCOUNT",
      "message": "The specified account does not exist or is not accessible."
    }
  ]
}
```
