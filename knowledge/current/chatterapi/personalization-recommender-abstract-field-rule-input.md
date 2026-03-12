---
title: "Personalization Recommender Abstract Field Rule Input"
domain: chatterapi
topic: personalization-recommender-abstract-field-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.405Z
estimatedTokens: 187
keywords: [Personalization, Recommender, Abstract, Rule, Input]
---

# Personalization Recommender Abstract Field Rule Input

> Represents an abstract rule based on a field.

# Personalization Recommender Abstract Field Rule Input

Represents an abstract rule based on a field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from [Personalization Recommender Base Rule Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_rule_input.htm "The base representation for a recommender rule input.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | The API name of the field. | Required | 64.0 |
| predicate | Personalization Recommender Base Predicate Input | The predicate for the rule. | Required | 64.0 |

## Related Topics

- Personalization Recommender Base Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_rule_input.htm)
- Personalization Recommender Base Predicate Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_predicate_input.htm)
