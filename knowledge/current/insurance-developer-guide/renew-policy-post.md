---
title: "Renew Policy (POST)"
domain: insurance-developer-guide
topic: renew-policy-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.024Z
estimatedTokens: 174
keywords: [Renew, Policy, POST, insurance]
---

# Renew Policy (POST)

> Renew policy for the specified insurance policy ID.

# Renew Policy (POST)

Renew policy for the specified insurance policy ID.

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
| fieldValueMap | Object | JSON object that contains name-value pairs that store details of insurance policy. | Required | 63.0 |

Response body for POST

[Insurance Policy Process](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_policy_process_output.htm "Output representation details of the renewed policy.")

## Code Examples

```
/connect/insurance/brokerage/policies/policyId/renew
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/brokerage/policies/policyId/renew
```

```
{
    "fieldValueMap": { "Name": "demo" }
}
```

## Related Topics

- Insurance Policy
              Process (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_policy_process_output.htm)
