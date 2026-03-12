---
title: "Cancel Policy Input"
domain: insurance-developer-guide
topic: cancel-policy-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.665Z
estimatedTokens: 117
keywords: [Cancel, Policy, Input, Representation]
---

# Cancel Policy Input

> Input Representation of cancel policy details.

# Cancel Policy Input

Input Representation of cancel policy details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date on which the cancellation of the policy goes into effect. | Required | 63.0 |
| transactionRecord | Insurance Policy Transaction Input[] | The JSON structure that overrides the transaction information. | Optional | 63.0 |

## Code Examples

```
{
   "effectiveDate": "2024-09-08",
   "transactionRecord":{
      "name" : "Cancel Transaction"
   }
}
```

## Related Topics

- Insurance Policy Transaction Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_policy_transaction_input.htm)
