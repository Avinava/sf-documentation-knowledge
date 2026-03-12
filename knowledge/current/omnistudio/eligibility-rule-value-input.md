---
title: "Eligibility Rule Value Input"
domain: omnistudio
topic: eligibility-rule-value-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.334Z
estimatedTokens: 170
keywords: [Eligibility, Rule, Input, Representation]
---

# Eligibility Rule Value Input

> Input Representation for Rule Values

# Eligibility Rule Value Input

Input Representation for Rule Values

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| domainEntity | String | Entity domain field is mapped to. | Required | 66.0 |
| domain​EntityId | String | The unique identifier of the entity record domain field is mapped to. | Required | 66.0 |
| fieldName | String | Name of the field in the source object. | Required | 66.0 |
| fieldValue | String | Value of the field. | Required | 66.0 |
| operator | String | The operator applied to an associated decision table field to filter the data. | Required | 66.0 |

## Code Examples

```
[
    {
      "fieldName": "Country",
      "fieldValue": "USA",
      "operator": "Equals",
      "domainEntity": "Account",
      "domainEntityId": "xyz"
    },
    {
      "fieldName": "ProductId",
      "fieldValue": "123",
      "operator": "Equals",
      "domainEntity": "Account",
      "domainEntityId": "xyz"
    },
    {
      "fieldName": "ParentProductId",
      "fieldValue": "123",
      "operator": "Equals",
      "domainEntity": "Account",
      "domainEntityId": "xyz"
    }
  ]
```
