---
title: "execute(decisionTableId, DecisionTableInput)"
domain: omnistudio
topic: executedecisiontableid-decisiontableinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.535Z
keywords: [execute, decisionTableId, DecisionTableInput, API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# execute(decisionTableId, DecisionTableInput)

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