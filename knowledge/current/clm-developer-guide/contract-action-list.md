---
title: "Contract Action List"
domain: clm-developer-guide
topic: contract-action-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.414Z
estimatedTokens: 88
keywords: [Contract, Action, actions]
---

# Contract Action List

> List of contract actions.

# Contract Action List

List of contract actions.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actions | Contract Action[] | Specifies list of actions. | Big, 56.0 | 56.0 |
| contractId | String | Indicates ID of the contract. | Small, 56.0 | 56.0 |

JSON example

```

```

## Code Examples

```
{
    "actions": [
        {
            "apiName": "cancelContract",
            "uiText": "Cancel Contract"
        },
        {
            "apiName": "submitForApproval",
            "uiText": "Submit for Approval"
        }
    ],
    "contractId": "800RO000000U7FaYAK"
}
```

## Related Topics

- Contract Action[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_contract_action_respons.htm)
