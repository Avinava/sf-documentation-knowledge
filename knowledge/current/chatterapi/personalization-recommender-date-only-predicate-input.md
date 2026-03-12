---
title: "Personalization Recommender Date Only Predicate Input"
domain: chatterapi
topic: personalization-recommender-date-only-predicate-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.430Z
estimatedTokens: 188
keywords: [Personalization, Recommender, Date, Predicate, Input]
---

# Personalization Recommender Date Only Predicate Input

> Represents a predicate based on a date.

# Personalization Recommender Date Only Predicate Input

Represents a predicate based on a date.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from [Base Predicate Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_predicate_input.htm "The base representation for a recommender rule predicate.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operator | Personalization Recommender Date Only Operator Enum | The date operator. | Required | 64.0 |
| values | String | The static date values for comparison, in yyyy-MM-dd format. | Required | 64.0 |

## Related Topics

- Base
          Predicate Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_predicate_input.htm)
- Personalization Recommender Date Only Operator Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_date_only_operator_enum.htm)
