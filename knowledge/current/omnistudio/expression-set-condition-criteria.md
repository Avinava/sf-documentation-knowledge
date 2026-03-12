---
title: "Expression Set Condition Criteria"
domain: omnistudio
topic: expression-set-condition-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.888Z
estimatedTokens: 226
keywords: [Expression, Condition, Criteria, Output, representation]
---

# Expression Set Condition Criteria

> Output representation of a condition criteria in an expression
      set.

# Expression Set Condition Criteria

Output representation of a condition criteria in an expression set.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| operator | String | Condition operator of the expression set.Valid values are:ContainsDoesNotContainEqualsGreaterThan​OrEqualsGreaterThanIsNotNullIsNullLessThanLessThan​OrEqualsNotEqualTo | Small, 58.0 | 58.0 |
| sequence​Number | Integer | Sequence number of the condition in the advanced condition. | Small, 58.0 | 58.0 |
| source​Field​Name | String | Expression set version variable associated with the condition criteria. | Small, 58.0 | 58.0 |
| value | String | Value specified in the right-hand side of the condition. | Small, 58.0 | 58.0 |
| value​Type | String | Criteria value type of the expression set.Valid values are:FormulaLiteralParameter | Small, 58.0 | 58.0 |
