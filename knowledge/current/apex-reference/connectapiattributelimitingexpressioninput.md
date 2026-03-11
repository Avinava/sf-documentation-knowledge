---
title: "ConnectApi.AttributeLimitingExpressionInput"
domain: apex-reference
topic: connectapiattributelimitingexpressioninput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.779Z
keywords: [ConnectApi.AttributeLimitingExpressionInput]
---

# ConnectApi.AttributeLimitingExpressionInput

# ConnectApi.AttributeLimitingExpressionInput

Represents the limiting expression input for an activation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeName | String | Name of the attribute. |  | 63.0 |
| entityName | String | Name of the entity. |  | 63.0 |
| order | FilterSortOrderEnum | The sort order for filtering.FilterSortOrderAscFilterSortOrderDesc |  | 63.0 |
| queryPathConfig | List< ConnectApi.QueryPathInputConfig> | Query path configuration input. |  | 63.0 |
| type | String | Type of attribute. |  | 63.0 |