---
title: "Rule Filter Criteria"
domain: loyalty
topic: rule-filter-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.659Z
estimatedTokens: 263
keywords: [Rule, Filter, Criteria, Output, representation, promotion]
---

# Rule Filter Criteria

> Output representation of the details of a promotion rule filter criteria.

# Rule Filter Criteria

Output representation of the details of a promotion rule filter criteria.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conditionLogic | String | The condition logic of the promotion rule's filter criteria. | Small, 61.0 | 61.0 |
| name | String | The name of the promotion rule's filter criteria. | Small, 61.0 | 61.0 |
| parentFilterCriteria | String | The parent filter criteria that the promotion rule filter criteria belongs to. | Small, 61.0 | 61.0 |
| ruleActionList | Rule Action[] | The list of actions that belong to the promotion rule filter criteria. | Small, 61.0 | 61.0 |
| ruleConditionList | Rule Condition[] | The list of conditions that belong to the promotion rule filter criteria. | Small, 61.0 | 61.0 |
| sequenceNumber | Integer | The sequence number of the promotion rule's filter criteria in the promotion rule. | Small, 61.0 | 61.0 |
| type | String | Specifies the type of promotion rule filter criteria. | Small, 61.0 | 61.0 |

## Related Topics

- Rule
                Action (atlas.en-us.loyalty.meta/loyalty/connect_responses_rule_action.htm)
- Rule
                Condition (atlas.en-us.loyalty.meta/loyalty/connect_responses_rule_condition.htm)
