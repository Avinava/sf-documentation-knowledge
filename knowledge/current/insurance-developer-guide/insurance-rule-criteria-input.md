---
title: "Insurance Rule Criteria Input"
domain: insurance-developer-guide
topic: insurance-rule-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.897Z
estimatedTokens: 205
keywords: [Insurance, Rule, Criteria, Input, representation]
---

# Insurance Rule Criteria Input

> Input representation details of the insurance rule criteria.

# Insurance Rule Criteria Input

Input representation details of the insurance rule criteria.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Insurance Rule Condition Input[] | List of rule conditions. | Optional | 63.0 |
| criteriaIndex | Integer | Index of the rule criteria. | Required | 63.0 |
| rootObjectId | String | ID of the root object. | Required | 63.0 |
| sourceContextTagName | String | Name of the source context tag. | Required | 63.0 |
| sourceDataType | String | Source data type. Possible values are:StringInteger | Required | 63.0 |
| sourceOperator | String | Source operator. Possible value:Equals | Required | 63.0 |
| sourceValues | String[] | List of source values. | Required | 63.0 |

## Code Examples

```
"ruleCriteria": [
       {
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

## Related Topics

- Insurance Rule Condition Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_rule_condition_input.htm)
