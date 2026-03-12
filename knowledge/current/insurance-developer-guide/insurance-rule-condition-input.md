---
title: "Insurance Rule Condition Input"
domain: insurance-developer-guide
topic: insurance-rule-condition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.892Z
estimatedTokens: 225
keywords: [Insurance, Rule, Condition, Input, representation]
---

# Insurance Rule Condition Input

> Input representation details of insurance rule condition.

# Insurance Rule Condition Input

Input representation details of insurance rule condition.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeId | String | ID of the attribute. | Required | 63.0 |
| attributeName | String | Name of the attribute. | Required | 63.0 |
| attributePicklistValueId | String | ID of the attribute picklist value. | Required | 63.0 |
| conditionIndex | Integer | Index of the rule condition. | Required | 63.0 |
| contextTagName | String | Tag name of the context. | Required | 63.0 |
| dataType | String | Data type of the attribute. | Required | 63.0 |
| operator | String | Type of operator. Possible values are:EqualsLessThan | Required | 63.0 |
| type | String | Type of rule condition. | Required | 63.0 |
| values | String[] | List of values. | Required | 63.0 |

## Code Examples

```
"conditions": [
       {
       "contextTagName": "SalesTransactionItemAttribute",
       "operator": "LessThan",
       "conditionIndex": 1,
       "attributeName": "Annual Milage",
       "attributePicklistValueId": null,
       "type": "Attribute",
       "attributeId": "0tjDR00000000VGYAY",
       "dataType": "Number",
       "values": [
       "50000"
       ]
       }
       ]
```
