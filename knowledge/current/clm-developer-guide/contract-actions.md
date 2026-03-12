---
title: "Contract Actions"
domain: clm-developer-guide
topic: contract-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.239Z
estimatedTokens: 298
keywords: [Contract, Actions, Execute, possible, status, trigger, work, flows, change]
---

# Contract Actions

> Execute possible actions for a contract based on the status. Actions
      can trigger work flows and change the status for a contract.

# Contract Actions

Execute possible actions for a contract based on the status. Actions can trigger work flows and change the status for a contract.

Resource

```

```

Available version

56.0

HTTP methods

PATCH

Example for PATCH

```

```

Request body for PATCH

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

Response body for PATCH

[Generic Output Representation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_generic_output.htm "Generic output response.")

## Code Examples

```
/connect/clm/contract/${contractId}
```

```
https://yourInstance.salesforce.com/services/data/v56.0/clm/contract/${contractId}
```

```
{
    "actionApiName" : "updateEnvelopeStatus",
...."actionId" : //object state action definition id,
    "actionData":{
        "isUpdateEnvelopeStatusSuccess": true
    }
}
```

## Related Topics

- Generic Output Representation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_generic_output.htm)
