---
title: "Duplicate Rule"
domain: uiapi
topic: duplicate-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.783Z
estimatedTokens: 352
keywords: [Duplicate, Rule]
---

# Duplicate Rule

> Describes a duplicate rule.

# Duplicate Rule

Describes a duplicate rule.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionOnInsert | String | Whether users can create a duplicate record. Possible values are:Allow—duplicate records can be createdBlock—duplicate records can't be created | Small, 50.0 | 50.0 |
| actionOnUpdate | String | Whether users can create a duplicate record while editing an existing record. Possible values are:Allow—users can create a duplicate record while editing an existing recordBlock—users can't create a duplicate record while editing an existing record | Small, 50.0 | 50.0 |
| active | Boolean | Indicates whether the duplicate rule is active (true) or not (false). | Small, 50.0 | 50.0 |
| duplicateRuleFilters | Duplicate Rule Filter[] | A list of filters that are used by the duplicate rule. | Small, 50.0 | 50.0 |
| matchRules | Match Rule[] | A list of the match rules that are used by the duplicate rule. | Small, 50.0 | 50.0 |
| name | String | The name of the duplicate rule. | Small, 50.0 | 50.0 |
| operationsOnInsert | String[] | Actions to take when a user creates a duplicate record. Possible values are:AlertReport | Small, 50.0 | 50.0 |
| operationsOnUpdate | String[] | Actions to take when the edits to a record cause it to become a duplicate record. Possible values are:AlertReport | Small, 50.0 | 50.0 |

## Related Topics

- Duplicate Rule Filter (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_rule_filter.htm)
- Match Rule (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_match_rule.htm)
