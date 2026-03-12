---
title: "Personalization Recommender Related Field Rule Input"
domain: chatterapi
topic: personalization-recommender-related-field-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.456Z
estimatedTokens: 207
keywords: [Personalization, Recommender, Rule, Input]
---

# Personalization Recommender Related Field Rule Input

> Represents a rule based on a related field.

# Personalization Recommender Related Field Rule Input

Represents a rule based on a related field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from the [Personalization Recommender Abstract Field Rule Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_abstract_field_rule_input.htm "Represents an abstract rule based on a field.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| relatedObjectsPath | List<String> | The path from root DMO to leaf DMO. | Required | 64.0 |
| aggregateFunction | Personalization Recommender Aggregate Function Enum | The aggregation to apply when multiple related values exist. | Optional | 64.0 |

## Related Topics

- Personalization Recommender Abstract Field Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_abstract_field_rule_input.htm)
- Personalization Recommender Aggregate Function Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_aggregate_function_enum.htm)
