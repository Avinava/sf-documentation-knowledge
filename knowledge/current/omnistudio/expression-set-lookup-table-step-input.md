---
title: "Expression Set Lookup Table Step Input"
domain: omnistudio
topic: expression-set-lookup-table-step-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.278Z
keywords: [Expression, Set, Lookup, Table, Step, Input]
---

# Expression Set Lookup Table Step Input

# Expression Set Lookup Table Step Input

Input representation of a lookup table step in an expression set.

Root XML tag

<ExpressionSetLookupTableStepInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lookup​TableName | String | Decision matrix or decision table name that’s used in the lookup table step. | Required | 58.0 |
| type | String | Lookup table type of the expression set.Valid values are:DecisionMatrixDecisionTable | Required | 58.0 |