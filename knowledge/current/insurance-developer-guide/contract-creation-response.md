---
title: "Contract Creation Response"
domain: insurance-developer-guide
topic: contract-creation-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.551Z
estimatedTokens: 168
keywords: [Contract, Creation, Output, representation, group, benefits, Quote-to-Contract, process]
---

# Contract Creation Response

> Output representation of the group benefits Quote-to-Contract process.

# Contract Creation Response

Output representation of the group benefits Quote-to-Contract process.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | ConnectApi.ErrorResponse[] | List of errors that occurred during processing. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the contract creation is successfully initiated (true) or not (false). | Small, 65.0 | 65.0 |
| message | String | Status message for the contract creation process. | Small, 65.0 | 65.0 |
| requestId | String | ID of the asynchronous bulk request job. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "isSuccess": true,
  "message": "Contract creation process has been initiated.",
  "requestId": "707p00000004C9wAAE"
}
```
