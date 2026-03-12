---
title: "execute(decisionTableId, DecisionTableInput)"
domain: omnistudio
topic: executedecisiontableid-decisiontableinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.437Z
estimatedTokens: 216
keywords: [execute, decisionTableId, DecisionTableInput, active, decision, API, Version, Requires, Chatter]
---

# execute(decisionTableId, DecisionTableInput)

> Execute an active decision table.

# execute(decisionTableId, DecisionTableInput)

Execute an active decision table.

## API Version

51.0

## Requires Chatter

No

## Signature

public static ConnectApi.DecisionTableOutcome execute(String decisionTableId, ConnectApi.DecisionTableInput DecisionTableInput)

## Parameters

decisionTableId

Type: String

ID of the decision table.

DecisionTableInput

Type: [ConnectApi.DecisionTableInput](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_decision_table.htm "Input representation of the decision table.")

A ConnectApi.DecisionTableInput object with a list of conditions.

## Return Value

Type: [ConnectApi.DecisionTableOutcome](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_decision_table_outcome.htm "Output representation of the decision table execution.")

## Example

```

```

## Code Examples

```apex
ConnectApi.DecisionTableInput input = new ConnectApi.DecisionTableInput();
input.datasetLinkName = ‘DSL1’;//Optional,if you want to use a dataset link mapping definition
input.conditions = new List<ConnectApi.DecisionTableCondition>();
ConnectApi.DecisionTableCondition condition = new ConnectApi.DecisionTableCondition();
condition.fieldName = 'Brand__c';
condition.value = 'Cloud Kicks';
input.conditions.add(condition);
ConnectApi.DecisionTableOutcome output = ConnectApi.DecisionTable.execute('0lDxxxj23444', input);
```

## Related Topics

- ConnectApi.DecisionTableInput (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_decision_table.htm)
- ConnectApi.DecisionTableOutcome (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_decision_table_outcome.htm)
