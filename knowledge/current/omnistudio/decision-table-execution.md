---
title: "Decision Table Execution"
domain: omnistudio
topic: decision-table-execution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.149Z
estimatedTokens: 214
keywords: [Decision, Table, Execution, Execute, active, decision, table.]
---

# Decision Table Execution

> Execute an active decision table.

# Decision Table Execution

Execute an active decision table.

Resource

```

```

Available version

51.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Decision Table Condition[] | The list of decision table conditions on which the decision table executes and provides outcomes. | Required | 55.0 |
| datasetLinkName | String | The API name of the dataset link provided as an input for the decision table execution. | Optional | 55.0 |

Response body for POST

[Decision Table Outcome](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_outcome.htm "Output representation of the decision table execution.")

Sample Response body

```

```

## Code Examples

```
services/data/vXX.X/connect/business-rules/decision-table/lookup/${decisionTableId}
```

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

```
{
   “outcomeType” : “Single Match”,
   "outcomeList" : [
      {
         “values” : {
            “Discount_c”: 5
         }
      }
   ]
}
```

## Related Topics

- Decision Table Condition (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_table_condition.htm)
- Decision Table Outcome (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_outcome.htm)
