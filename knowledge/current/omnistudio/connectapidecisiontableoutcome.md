---
title: "ConnectApi.DecisionTableOutcome"
domain: omnistudio
topic: connectapidecisiontableoutcome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:47.739Z
estimatedTokens: 233
keywords: [ConnectApi.DecisionTableOutcome, Output, representation, decision, table, execution.]
---

# ConnectApi.DecisionTableOutcome

> Output representation of the decision table
    execution.

# ConnectApi.DecisionTableOutcome

Output representation of the decision table execution.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errorCode | Integer | The error code if transaction fails for any reason. | 51.0 |
| errorMessage | String | The error message if transaction fails for any reason. | 51.0 |
| outcomeList | List<ConnectApi.​DecisionTableOutcomeItem> | The outcome list that stores two or more outcomes provided by the decision table.NoteA decision table that is invoked by the Decision Table custom invocable action can provide up to 50 outcomes. | 51.0 |
| outcomeType | String | The outcome type after the request is successful. Valid values are:MultipleMatch—Outcome returns multiple matches.NoMatch—Outcome returns no match.SingleMatch—Outcome returns single match. | 51.0 |
| successStatus | Boolean | Indicates the status of the decision table execution. | 51.0 |

## Related Topics

- ConnectApi.​DecisionTableOutcomeItem (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_decision_table_outcome_item.htm)
