---
title: "Decision Table Invocation (POST)"
domain: omnistudio
topic: decision-table-invocation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.981Z
estimatedTokens: 232
keywords: [Decision, Invocation, POST, Invoke, passing, multiple, input, conditions]
---

# Decision Table Invocation (POST)

> Invoke a decision table by passing multiple input conditions within
      the same request.

# Decision Table Invocation (POST)

Invoke a decision table by passing multiple input conditions within the same request.

Resource

```

```

Resource example

```

```

Available version

58.0

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
| conditions | Decision Table Condition List | The list of decision table conditions on which the decision table executes and provides outcomes. | Required | 58.0 |
| datasetLinkName | String | The API name of the dataset link provided as an input for the decision table execution. | Optional | 58.0 |

Response body for POST

[Decision Table Bulk Outcome](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_bulk_outcome.htm "Output representation of the decision table bulk look-up.")

## Code Examples

```
/connect/business-rules/decision-table/lookup/${decisionTableId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect
/business-rules/decision-table/lookup/${0lDD2000000004NMAQ}
```

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
- Decision Table Bulk Outcome (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_bulk_outcome.htm)
