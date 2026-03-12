---
title: "Array Type"
domain: bi-dev-guide-rest
topic: array-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.965Z
estimatedTokens: 172
keywords: [Array, Analytics, template, variable]
---

# Array Type

> The array type of an Analytics template variable.

# Array Type

The array type of an Analytics template variable.

## Properties

Inherits properties from [Variable​Type](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_type.htm "The abstract type for an Analytics template variable.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enums | Object | The restricted list of enumerated values, where applicable for the inner variable types. | Small, 36.0 | 36.0 |
| items​Type | Variable​Type | The variable type of the array contents. | Small, 36.0 | 36.0 |
| size​Limit | Size​Limit | The size limit of the array. | Small, 37 | 37.0 |

## Related Topics

- Variable​Type (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_variable_type.htm)
- Size​Limit (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_size_limit.htm)
