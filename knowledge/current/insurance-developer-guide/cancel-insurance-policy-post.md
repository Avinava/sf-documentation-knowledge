---
title: "Cancel Insurance Policy (POST)"
domain: insurance-developer-guide
topic: cancel-insurance-policy-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.046Z
estimatedTokens: 240
keywords: [Cancel, Insurance, Policy, POST, version, API, effective, date, cancellation, input, JSON, advance, term, can’t, postpone]
---

# Cancel Insurance Policy (POST)

> Cancel an insurance policy version. The API takes the effective date of cancellation
    from the input JSON. You can advance the cancellation date within the policy term, but you can’t
    postpone the cancellation.

# Cancel Insurance Policy (POST)

Cancel an insurance policy version. The API takes the effective date of cancellation from the input JSON. You can advance the cancellation date within the policy term, but you can’t postpone the cancellation.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date on which the cancellation of the policy goes into effect. | Required | 63.0 |
| transactionRecord | Insurance Policy Transaction Input[] | The JSON structure that overrides the transaction information. | Optional | 63.0 |

Response body for POST

[Cancel Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_cancel_policy_output.htm "Output representation of cancel policy details.")

## Code Examples

```
/connect/insurance/policies/policyId/cancel
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/policies/0YTxx000000006TGAQ/cancel
```

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
- Cancel Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_cancel_policy_output.htm)
