---
title: "Decision Table Input"
domain: omnistudio
topic: decision-table-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.288Z
estimatedTokens: 127
keywords: [Decision, Input, representation]
---

# Decision Table Input

> Input representation of a decision table.

# Decision Table Input

Input representation of a decision table.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Decision Table Condition[] | The list of decision table conditions on which the decision table executes and provides outcomes. | Required | 55.0 |
| datasetLinkName | String | The API name of the dataset link provided as an input for the decision table execution. | Optional | 55.0 |

## Code Examples

```
{
   "conditions":[
      {
         "conditionsList":[
            {
               "fieldName":"Product__c",
               "value":"Nike",
               "operator":"Matches"
            },
            {
               "fieldName":"Price__c",
               "value":1000,
               "operator":"GreaterThan"
            }
         ]
      },
      {
         "conditionsList":[
            {
               "fieldName":"Product__c",
               "value":"Adidas",
               "operator":"Matches"
            },
            {
               "fieldName":"Price__c",
               "value":1500,
               "operator":"GreaterThan"
            }
         ]
      }
   ]
}
```

## Related Topics

- Decision Table Condition (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_table_condition.htm)
