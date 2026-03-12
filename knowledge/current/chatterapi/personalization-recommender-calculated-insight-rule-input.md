---
title: "Personalization Recommender Calculated Insight Rule Input"
domain: chatterapi
topic: personalization-recommender-calculated-insight-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.428Z
estimatedTokens: 284
keywords: [Personalization, Recommender, Calculated, Insight, Rule, Input]
---

# Personalization Recommender Calculated Insight Rule Input

> Represents a rule based on a calculated insight.

# Personalization Recommender Calculated Insight Rule Input

Represents a rule based on a calculated insight.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from the [Personalization Recommender Base Rule Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_rule_input.htm "The base representation for a recommender rule input.").

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| calculatedInsightName | String | The API name of the calculated insight. | Required | 64.0 |
| fieldName | String | The API name of the metric or dimension. | Required | 64.0 |
| fieldRuleOperator | Personalization Recommender Logical Operator Enum | The logical operator for the field rules. | Optional | 64.0 |
| fieldRules | Personalization Recommender Field Rule Input[] | A list of field rules for the calculated insight. | Optional | 64.0 |
| predicate | Personalization Recommender Base Predicate Input | The predicate for the rule. | Required | 64.0 |

## Related Topics

- Personalization Recommender Base Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_rule_input.htm)
- Personalization Recommender Logical Operator Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_logical_operator_enum.htm)
- Personalization Recommender Field Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_field_rule_input.htm)
- Personalization Recommender Base Predicate Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_predicate_input.htm)
