---
title: "Insurance Policy Bulk Input"
domain: insurance-developer-guide
topic: insurance-policy-bulk-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.857Z
estimatedTokens: 170
keywords: [Insurance, Policy, Bulk, Input, representation, renew, policies, Send, IDs, map, renewal]
---

# Insurance Policy Bulk Input

> Input representation details of the request to bulk renew policies. Send the list of
    insurance policy IDs and field value map of insurance policy fields for bulk policies
    renewal.

# Insurance Policy Bulk Input

Input representation details of the request to bulk renew policies. Send the list of insurance policy IDs and field value map of insurance policy fields for bulk policies renewal.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldValueMap | Object | JSON object that contains name-value pairs to store details of insurance policy. The fieldValueMap expect the keys to be API name and is case sensitive. | Required | 64.0 |
| insurancePolicyIds | Object | List of insurance policy IDs that must be renewed from the same carrier. | Required | 64.0 |

## Code Examples

```
{
    "insurancePolicyIds" : ["0YTxx0000000001GAA", "0YTxx0000000001GAB"],
    "fieldValueMap": { "Name": "test" }
}
```
