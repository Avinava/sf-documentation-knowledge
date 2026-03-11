---
title: "Expression Set Aggregation Step Input"
domain: omnistudio
topic: expression-set-aggregation-step-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.255Z
keywords: [Expression, Set, Aggregation, Step, Input]
---

# Expression Set Aggregation Step Input

# Expression Set Aggregation Step Input

Input representation of an aggregation step in an expression set.

Root XML tag

<ExpressionSetAggregationStepInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aggergated​Parameter | String | Expression set version variable that’s present on the right side of the aggregation step. | Required | 58.0 |
| aggregate​Function | String | Aggregation function of the expression set.Valid values are:AvgMaxMinSum | Required | 58.0 |
| expression | String | Expression that’s present on the left side of the aggregation step. | Required | 58.0 |