---
title: "Personalization Recommender Calculated Insight Rule"
domain: chatterapi
topic: personalization-recommender-calculated-insight-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.313Z
estimatedTokens: 257
keywords: [Personalization, Recommender, Calculated, Insight, Rule]
---

# Personalization Recommender Calculated Insight Rule

> Represents a rule based on a calculated insight.

# Personalization Recommender Calculated Insight Rule

Represents a rule based on a calculated insight.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This representation inherits properties from [Personalization Recommender Base Rule](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_base_rule.htm "The base representation for a recommender rule.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| calculatedInsightName | String | The API name of the calculated insight. |  | 64.0 |
| fieldName | String | The API name of the metric or dimension of the calculated insight. |  | 64.0 |
| fieldRuleOperator | String | The logical operator for the field rules. |  | 64.0 |
| fieldRules | Field Rule[] | A list of field rules for the calculated insight. |  | 64.0 |
| predicate | Personalization Recommender Base Predicate | The predicate for the rule. |  | 64.0 |

## Related Topics

- Personalization Recommender Base Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_base_rule.htm)
- Field Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_field_rule.htm)
- Personalization Recommender Base Predicate (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_personalization_recommender_base_predicate.htm)
