---
title: "Personalization Recommender Related Field Rule"
domain: chatterapi
topic: personalization-recommender-related-field-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.331Z
estimatedTokens: 205
keywords: [Personalization, Recommender, Rule]
---

# Personalization Recommender Related Field Rule

> Represents a rule based on a related field.

# Personalization Recommender Related Field Rule

Represents a rule based on a related field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from [Personalization Recommender Abstract Field Rule](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_abstract_field_rule.htm "Represents an abstract rule based on a field.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| relatedObjectsPath | List<String> | The path from root DMO to leaf DMO’s field API name. |  | 64.0 |
| aggregateFunction | String | The aggregation to apply when multiple related values exist. For enum values, see AggregateFunctionEnum. |  | 64.0 |

## Related Topics

- Personalization Recommender Abstract Field Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_abstract_field_rule.htm)
