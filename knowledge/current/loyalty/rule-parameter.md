---
title: "Rule Parameter"
domain: loyalty
topic: rule-parameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.667Z
estimatedTokens: 459
keywords: [Rule, Output, representation, promotion]
---

# Rule Parameter

> Output representation of the details of a promotion rule parameter.

# Rule Parameter

Output representation of the details of a promotion rule parameter.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregateFunction | String | The aggregate function that's used in the rule parameter. | Small, 61.0 | 61.0 |
| contextTag | String | The context tag that is used in the rule parameter. The context tag belongs to the context definition associated with the promotion's rule library. | Small, 61.0 | 61.0 |
| dataType | String | The data type of the rule parameter. | Small, 61.0 | 61.0 |
| decimalPlaces | Integer | The number of decimal places supported by a numeric type rule parameter. | Small, 61.0 | 61.0 |
| groupByContextTag | String | The customer activity inputs are grouped by the context tag. | Small, 61.0 | 61.0 |
| hasContextTagMapping | Boolean | Indicates whether the context tag has a corresponding context tag mapping. The context mapping is available in the active version of the rule library associated with the promotion. | Small, 61.0 | 61.0 |
| isCollection | Boolean | Indicates whether the parameter stores a list of comma-seperated values. | Small, 61.0 | 61.0 |
| isInput | Boolean | Indicates whether the parameter stores a value that's used to process the rule. | Small, 61.0 | 61.0 |
| isOutput | Boolean | Indicates whether the parameter stores a value that's provided after the rule is processed. | Small, 61.0 | 61.0 |
| name | String | The name of the parameter associated with the rule. | Small, 61.0 | 61.0 |
| relatedFilterCriteriaName | String | The name of the rule filter criteria that's associated with the rule parameter. | Small, 61.0 | 61.0 |
| type | String | The type of rule parameter. | Small, 61.0 | 61.0 |
| value | String | The value of the rule parameter. | Small, 61.0 | 61.0 |
