---
title: "Sequence Error"
domain: revenue-cloud
topic: sequence-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:46.689Z
estimatedTokens: 125
keywords: [Sequence, Error, that's, policy, assign, sequences]
---

> Output representation of the error response that's associated with a request to create or
    update a sequence policy, or assign sequences.

# Sequence Error

Output representation of the error response that's associated with a request to create or update a sequence policy, or assign sequences.

JSON example

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code for the resultant error. | Big, 65.0 | 65.0 |
| message | String | Error message for the resultant error. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "error": {
    "errorCode": "INVALID_INPUT",
    "message": "Specify a valid selectionLogic."
  },
  "isSuccess": false,
  "sequencePolicyId": null
}
```
