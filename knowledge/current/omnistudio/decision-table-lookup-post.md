---
title: "Decision Table Lookup (POST)"
domain: omnistudio
topic: decision-table-lookup-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.885Z
estimatedTokens: 216
keywords: [Decision, Table, Lookup, POST, Performs, lookup, decision, table.]
---

# Decision Table Lookup (POST)

> Performs a lookup on a decision table.

# Decision Table Lookup (POST)

Performs a lookup on a decision table.

Resource

```

```

Resource Example

```

```

Available version

55.0

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

## Code Examples

```
/connect/business-rules/decision-table/${decisionTableId}
```

```
https://yourInstance.salesforce.com/services/data/v55.0/connect
/decision-table/0lDB0000000TNQzMAO
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

## Related Topics

- Decision Table Condition (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_decision_table_condition.htm)
- Decision Table Outcome (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_outcome.htm)
