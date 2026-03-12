---
title: "Personalization Recommender Number Predicate Input"
domain: chatterapi
topic: personalization-recommender-number-predicate-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.441Z
estimatedTokens: 185
keywords: [Personalization, Recommender, Number, Predicate, Input]
---

# Personalization Recommender Number Predicate Input

> Represents a predicate based on a number.

# Personalization Recommender Number Predicate Input

Represents a predicate based on a number.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from [Base Predicate Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_predicate_input.htm "The base representation for a recommender rule predicate.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operator | Personalization Recommender Number Operator Enum | The number operator. | Required | 64.0 |
| values | String | The static values for comparison, in decimal format. | Required | 64.0 |

## Related Topics

- Base
          Predicate Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_predicate_input.htm)
- Personalization Recommender Number Operator Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_number_operator_enum.htm)
