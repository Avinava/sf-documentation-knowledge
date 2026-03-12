---
title: "Sample Parameters Input"
domain: salesforce-recipes-api
topic: sample-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.443Z
estimatedTokens: 172
keywords: [Sample, Input, loading, data]
---

# Sample Parameters Input

> The sample parameters for loading data.

# Sample Parameters Input

The sample parameters for loading data.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Filter​Parameters​Input | The sample filters. | Required | 55.0 |
| sort​By | String[] | A list of fields to sort sample. | Required | 55.0 |
| sort​Direction | Recipe​Sort​Order​Enum | The sample sort direction. Valid values are:AscendingDescending | Required | 55.0 |
| sample​Type | Sample​Type | The recipe sample type. Valid values are:CustomRandomTop​NUnique | Required | 55.0 |
| unique​Sample​Field​Name | String | The field name for a unique sample. | Required | 55.0 |

## Related Topics

- Filter​Parameters​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_filter_parameters_input.htm)
