---
title: "Loyalty Program Process Rule Condition Filter Criteria"
domain: loyalty
topic: loyalty-program-process-rule-condition-filter-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.481Z
estimatedTokens: 270
keywords: [Loyalty, Program, Process, Rule, Condition, Filter, Criteria, Output, representation]
---

# Loyalty Program Process Rule Condition Filter Criteria

> Output representation of the loyalty program process rule condition
         filter criteria.

# Loyalty Program Process Rule Condition Filter Criteria

Output representation of the loyalty program process rule condition filter criteria.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| filterCriteria​Result | Boolean | Indicates whether the transaction journal meets this filter criteria (true) or not (false). | Small, 55.0 | 55.0 |
| operator | String | The operator of a condition filter criteria.Possible values are:ContainsDoesNotContainEqualsGreaterThanGreaterThanOrEqualsIsNOtNullIsNullLessThanLessThanOrEqualsNotEquals | Small, 55.0 | 55.0 |
| sequence | Integer | The sequence number of the criteria in a rule condition. | Small, 55.0 | 55.0 |
| sourceFieldName | Expression | The source field of a condition or action. | Small, 55.0 | 55.0 |
| value | Expression | The value of an expression. | Small, 55.0 | 55.0 |
| valueType | String | The type of value that is specified for a condition or an action parameter.Possible values are:FixedValueFormulaLookupParameter | Small, 55.0 | 55.0 |

## Related Topics

- Expression (atlas.en-us.loyalty.meta/loyalty/connect_responses_expression.htm)
