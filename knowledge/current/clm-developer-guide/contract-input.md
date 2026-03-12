---
title: "Contract Input"
domain: clm-developer-guide
topic: contract-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.102Z
estimatedTokens: 148
keywords: [Contract, Input]
---

# Contract Input

> Input to create and update contract.

# Contract Input

Input to create and update contract.

JSON example for creating and updating contract

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isAutoDocgenRequired | Boolean | Specifies whether automatic document generation is required or not. | Required | 56.0 |
| recordTypeName | String | Contract record type name. | Optional | 56.0 |
| sourceObjectId | String | Source record ID. | Required | 56.0 |
| templateName | String | Document template name for document generation. | Optional | 56.0 |

## Code Examples

```
{
"sourceObjectId" : "006xx000001a4KaAAI",
"templateName" : "Value1",
"isAutoDocgenRequired" :true/false
}
```
