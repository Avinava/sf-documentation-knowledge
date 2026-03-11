---
title: "ConnectApi.DMOFilterInput"
domain: apex-reference
topic: connectapidmofilterinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.068Z
keywords: [ConnectApi.DMOFilterInput]
---

# ConnectApi.DMOFilterInput

# ConnectApi.DMOFilterInput

Represents the DMO filter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityFilter | BaseComparisonInputRepresentation | Entity filter. |  | 60.0 |
| entityFilterType | String | Type of the entity filter. |  | 60.0 |
| entityName | String | Name of the entity. |  | 60.0 |
| filterLimit | DmoFilterLimitInputRepresentation | Filter limit. |  | 60.0 |
| inheritedFilter | BaseComparisonInputRepresentation | Inherited filter. |  | 60.0 |
| inheritedFilterType | String | Type of the inherited filter. |  | 60.0 |
| queryPathConfigForActivateOnToContainer | List< ConnectApi.QueryPathInputConfig> | Path from the activation to the container. |  | 60.0 |
| queryPathConfigFromContainerToEntity | List< ConnectApi.QueryPathInputConfig> | Path from the container to the entity. |  | 60.0 |