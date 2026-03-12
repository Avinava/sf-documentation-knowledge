---
title: "Personalization Recommender Base Rule Input"
domain: chatterapi
topic: personalization-recommender-base-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.417Z
estimatedTokens: 354
keywords: [Personalization, Recommender, Base, Rule, Input, representation]
---

# Personalization Recommender Base Rule Input

> The base representation for a recommender rule input.

# Personalization Recommender Base Rule Input

The base representation for a recommender rule input.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This is a base representation and is extended by the following rule input types.

-   [Personalization Recommender Abstract Field Rule Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_abstract_field_rule_input.htm "Represents an abstract rule based on a field.")
-   [Personalization Recommender Calculated Insight Rule Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_calculated_insight_rule_input.htm "Represents a rule based on a calculated insight.")
-   [Personalization Recommender Related Field Rule Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_related_field_rule_input.htm "Represents a rule based on a related field.")
-   [Personalization Recommender Field Rule Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_field_rule_input.htm "Represents a rule based on a field.")

.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | Personalization Recommender Rule Type Enum | Indicates whether the LHS is a field, related field, or a calculated insight. | Required | 64.0 |

## Related Topics

- Personalization Recommender Abstract Field Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_abstract_field_rule_input.htm)
- Personalization Recommender Calculated Insight Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_calculated_insight_rule_input.htm)
- Personalization Recommender Related Field Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_related_field_rule_input.htm)
- Personalization Recommender Field Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_field_rule_input.htm)
- Personalization Recommender Rule Type Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_rule_type_enum.htm)
