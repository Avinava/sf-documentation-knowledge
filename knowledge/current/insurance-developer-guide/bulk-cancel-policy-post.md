---
title: "Bulk Cancel Policy (POST)"
domain: insurance-developer-guide
topic: bulk-cancel-policy-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.018Z
estimatedTokens: 241
keywords: [Bulk, Cancel, Policy, POST, policies, carriers, insurance, IDs]
---

# Bulk Cancel Policy (POST)

> Bulk cancel policies with the same (existing) carriers for the specified insurance
    policy IDs.

# Bulk Cancel Policy (POST)

Bulk cancel policies with the same (existing) carriers for the specified insurance policy IDs.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldValueMap | Object | JSON object that contains name-value pairs to store details of insurance policy. The fieldValueMap expect the keys to be API name and is case sensitive. | Required | 64.0 |
| insurancePolicyIds | Object | List of insurance policy IDs that must be renewed from the same carrier. | Required | 64.0 |

Response body for POST

[Insurance Policy Bulk](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_policy_bulk_output.htm "Output representation details of bulk renew policy and bulk cancel policy requests.")

## Code Examples

```
/connect/insurance/brokerage/policies/bulk-cancel
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/brokerage/policies/bulk-cancel
```

```
{
    "insurancePolicyIds" : ["0YTxx0000000001GAA", "0YTxx0000000001GAB"],
    "fieldValueMap": { "Name": "test" }
}
```

## Related Topics

- Insurance Policy Bulk (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_policy_bulk_output.htm)
