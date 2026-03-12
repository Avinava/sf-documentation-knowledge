---
title: "Filter"
domain: chatterapi
topic: filter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.897Z
estimatedTokens: 168
keywords: [Filter, search]
---

# Filter

> Filter parameter for object search.

# Filter

Filter parameter for object search.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Filter field API name. | Small, 63.0 | 63.0 |
| operator | String | Filter operator. Values are:EqOp—EqualExcludesOp—ExcludesGtOp—Greater thanGteOp—Greater than or equalInOp—InIncludesOp—IncludesLikeOp—LikeLtOp—Less thanLteOp—Less than or equalNeOp—Not equalNinOp—Not in | Small, 63.0 | 63.0 |
| values | Object[] | Filter values. | Small, 63.0 | 63.0 |

#### See Also

-   [Parameters](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_parameter.htm "Search query parameters.")

## Related Topics

- Parameters (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_parameter.htm)
