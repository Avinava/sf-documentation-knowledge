---
title: "Contract Item"
domain: insurance-developer-guide
topic: contract-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.697Z
estimatedTokens: 140
keywords: [Contract, Item, Input, representation, additional, added, items]
---

# Contract Item

> Input representation for additional fields to be added to contract items.

# Contract Item

Input representation for additional fields to be added to contract items.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entity | String | API name of the entity to add fields to, such as ContractGroupPlan. | Optional | 65.0 |
| fields | Apex String[] | List of key-value pairs that represent the fields and their values for the entity. | Optional | 65.0 |
| instanceKey | String | Unique instance key of the Quote Line Item. | Optional | 65.0 |

## Code Examples

```
{
  "entity": "ContractGroupPlan",
  "fields": [
    {
      "key": "CustomField__c",
      "value": "CustomValue"
    }
  ],
  "instanceKey": "d5861be1-9920-42d9-8f43-093b0a709d35"
}
```

## Related Topics

- Apex
            String (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_apex_string.htm)
