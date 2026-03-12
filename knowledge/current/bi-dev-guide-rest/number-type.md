---
title: "Number Type"
domain: bi-dev-guide-rest
topic: number-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.450Z
estimatedTokens: 258
keywords: [Number, Analytics, template, variable]
---

# Number Type

> The number type of an Analytics template variable.

# Number Type

The number type of an Analytics template variable.

## Properties

Inherits properties from [Variable​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_type.htm "The abstract type for an Analytics template variable.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enums | Double[] | The restricted list of enumerated numeric values. | Small, 36.0 | 36.0 |
| enums​Labels | String[] | The optional list of display labels for the enumerated values. | Small, 58.0 | 58.0 |
| format | Number​Type​Format​Enum | The format for the number type. Valid values are:CurrencyDecimalPercentPercent​Fixed | Small, 59.0 | 59.0 |
| max | Double | The maximum allowed value of the number. | Small, 36.0 | 36.0 |
| min | Double | The minimum allowed value of the number. | Small, 36.0 | 36.0 |
| scale | Integer | The maximum scale of the number where scale defines the digits after the decimal point. | Small, 59.0 | 59.0 |

## Related Topics

- Variable​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_type.htm)
