---
title: "Decision Table Outcome"
domain: omnistudio
topic: decision-table-outcome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.744Z
estimatedTokens: 195
keywords: [Decision, Outcome, Output, representation, execution]
---

# Decision Table Outcome

> Output representation of the decision table
      execution.

# Decision Table Outcome

Output representation of the decision table execution.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | Integer | The error code if transaction fails for any reason. | Small, 55.0 | 55.0 |
| errorMessage | String | The error message if transaction fails for any reason. | Small, 55.0 | 55.0 |
| outcomeList | Decision Table Outcome Item[] | Outcome list that stores two or more outcomes provided by the decision table. | Small, 55.0 | 55.0 |
| outcomeType | String | The outcome type after the request is successful. | Small, 55.0 | 55.0 |
| successStatus | Boolean | Indicates the status of the decision table execution. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "errorCode" : null,
  "errorMessage" : null,
  "outcomeList" : [ {
    "values" : {
      "amount__c" : "399",
      "Name" : "MH 005"
    }
  }, {
    "values" : {
      "amount__c" : "499",
      "Name" : "MH 006"
    }
  }, {
    "values" : {
      "amount__c" : "379",
      "Name" : "MH 007"
    }
  }, {
    "values" : {
      "amount__c" : "1498",
      "Name" : "MH 008"
    }
  }, {
    "values" : {
      "amount__c" : "98",
      "Name" : "MH 009"
    }
  }, {
    "values" : {
      "amount__c" : "251",
      "Name" : "MH 010"
    }
  } ],
  "outcomeType" : "Multiple Matches",
  "successStatus" : true
}
```

## Related Topics

- Decision Table Outcome Item (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_outcome_item.htm)
