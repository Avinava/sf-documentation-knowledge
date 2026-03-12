---
title: "Decision Table Bulk Input"
domain: omnistudio
topic: decision-table-bulk-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.262Z
estimatedTokens: 132
keywords: [Decision, Bulk, Input, representation, lookup]
---

# Decision Table Bulk Input

> Input representation of the Decision Table bulk
      lookup.

# Decision Table Bulk Input

Input representation of the Decision Table bulk lookup.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Decision Table Condition List | The list of decision table conditions on which the decision table executes and provides outcomes. | Required | 58.0 |
| datasetLinkName | String | The API name of the dataset link provided as an input for the decision table execution. | Optional | 58.0 |

## Code Examples

```
{
   "datasetLinkName" : "transactionMapping",
   “conditions” :[
      {
        “conditionsList”: [
          {
              "fieldName": "Product__c",
              "value": "Nike",
              "operator": "Matches" //Operator is optional
          },
          {
              "fieldName": "Price__c",
              "value": 1000,
              "operator": "GreaterThan"
          }
        ]
      },
      {
        “conditionsList”: [
          {
              "fieldName": "Product__c",
              "value": "Adidas",
              "operator": "Matches" //Operator is optional
          },
          {
              "fieldName": "Price__c",
              "value": 1500,
              "operator": "GreaterThan"
          }
        ]
```

## Related Topics

- Decision Table Condition
                                    List (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_table_condition_list_input.htm)
