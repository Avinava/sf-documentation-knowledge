---
title: "Personalization Recommender Rule Group Input"
domain: chatterapi
topic: personalization-recommender-rule-group-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.461Z
estimatedTokens: 113
keywords: [Personalization, Recommender, Rule, Group, Input, rules, logical, operator, apply]
---

# Personalization Recommender Rule Group Input

> Defines a group of rules and the logical operator to apply.

# Personalization Recommender Rule Group Input

Defines a group of rules and the logical operator to apply.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operator | Personalization Recommender Logical Operator Enum | The logical operator to apply to the rules. | Optional | 64.0 |
| rules | Personalization Recommender Base Rule Input[] | The list of filter conditions. | Optional | 64.0 |

## Related Topics

- Personalization Recommender Logical Operator Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_logical_operator_enum.htm)
- Personalization Recommender Base Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_recommender_base_rule_input.htm)
