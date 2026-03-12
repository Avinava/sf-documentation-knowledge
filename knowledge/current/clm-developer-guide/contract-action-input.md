---
title: "Contract Action Input"
domain: clm-developer-guide
topic: contract-action-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.097Z
estimatedTokens: 204
keywords: [Contract, Action, Input]
---

# Contract Action Input

> Input to get action details for the contract.

# Contract Action Input

Input to get action details for the contract.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionApiName | String | API name for respective contract action. | Optional | 57.0 |
| actionId | String | ID for Object state Action Definition record.NoteFor the list of all standard actions supported, refer Predefined Dynamic (Contract) Actions. | Optional | 57.0 |
| actionData | Map<String, String> | Action body with supported format string. | Optional | 57.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=clm_developer_guide)

#### Note

For any request, either actionApiName or actionId must be passed. If none passed, the application raises an exception.

## Code Examples

```
{
    "actionApiName" : "updateEnvelopeStatus",
...."actionId" : //object state action definition id,
    "actionData":{
        "isUpdateEnvelopeStatusSuccess": true
    }
}
```
