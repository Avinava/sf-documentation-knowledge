---
title: "Personalization Recommender Related Field Predicate Input"
domain: chatterapi
topic: personalization-recommender-related-field-predicate-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.453Z
estimatedTokens: 216
keywords: [Personalization, Recommender, Predicate, Input, RHS]
---

# Personalization Recommender Related Field Predicate Input

> Represents a predicate where the RHS is a related field.

# Personalization Recommender Related Field Predicate Input

Represents a predicate where the RHS is a related field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from the [Personalization Recommender Field Predicate Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_field_predicate_input.htm "Represents a predicate where the RHS is another field.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| relatedObjectsPath | List<String> | The path from root DMO to the related field API name. | Required | 64.0 |
| aggregateFunction | Personalization Recommender Aggregate Function Enum | The aggregation to apply when multiple related values exist. | Optional | 64.0 |

## Related Topics

- Personalization Recommender Field Predicate Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_field_predicate_input.htm)
- Personalization Recommender Aggregate Function Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_aggregate_function_enum.htm)
