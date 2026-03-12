---
title: "Personalization Recommender Field Predicate Input"
domain: chatterapi
topic: personalization-recommender-field-predicate-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.435Z
estimatedTokens: 234
keywords: [Personalization, Recommender, Predicate, Input, RHS, another]
---

# Personalization Recommender Field Predicate Input

> Represents a predicate where the RHS is another field.

# Personalization Recommender Field Predicate Input

Represents a predicate where the RHS is another field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from the [Personalization Recommender Base Predicate Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_predicate_input.htm "The base representation for a recommender rule predicate.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operator | Personalization Recommender Field Operator Enum | The comparison operator. | Required | 64.0 |
| fieldName | String | The API name of the direct attribute field. | Required | 64.0 |
| dataGraphType | Personalization Recommender Data Graph Type Enum | Whether the field belongs to the Profile or Catalog data graph. | Required | 64.0 |

## Related Topics

- Personalization Recommender Base Predicate Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_predicate_input.htm)
- Personalization Recommender Field Operator Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_field_operator_enum.htm)
- Personalization Recommender Data Graph Type Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_data_graph_type_enum.htm)
