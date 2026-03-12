---
title: "Promotion Rule"
domain: loyalty
topic: promotion-rule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.626Z
estimatedTokens: 470
keywords: [Promotion, Rule, Output, representation]
---

# Promotion Rule

> Output representation of the details of a promotion rule.

# Promotion Rule

Output representation of the details of a promotion rule.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name of the promotion rule. | Small, 61.0 | 61.0 |
| description | String | The description of the promotion rule. | Small, 61.0 | 61.0 |
| hasNoQualificationCriteria | Boolean | Indicates whether the promotion rule can be applied without any qualification criteria (true) or not (false). | Small, 65.0 | 65.0 |
| isEligibilityRule | Boolean | Indicates whether the rule is the promotion eligibility rule (true) or not (false). | Small, 61.0 | 61.0 |
| isRuleForAllEligibleCategories | Boolean | Indicates whether the rule applies to all eligible categories associated with the promotion (true) or not (false). | Small, 65.0 | 65.0 |
| isRuleForAllEligibleProducts | Boolean | Indicates whether the rule applies to all eligible products associated with the promotion (true) or not (false). | Small, 65.0 | 65.0 |
| name | String | The name of the promotion rule. A promotion consists of two types of rules. The eligibility rule decides which products, categories, stores, store groups, and customers are eligible for the promotion. The template rules decide which customer activities are eligible for the promotion and the rewards available for each eligible customer activity. | Small, 61.0 | 61.0 |
| ruleActionList | Rule Action[] | The list of actions that belong to the rule. | Small, 61.0 | 61.0 |
| ruleFilterCriteriaList | Rule Filter Criteria[] | The list of filter criteria that belong to the rule. | Small, 61.0 | 61.0 |
| ruleParameterList | Rule Parameter[] | The list of parameters that belong to the rule. | Small, 61.0 | 61.0 |
| sequenceNumber | Integer | The sequence number of the rule in the promotion rules list. | Small, 61.0 | 61.0 |

## Related Topics

- Rule
                Action (atlas.en-us.loyalty.meta/loyalty/connect_responses_rule_action.htm)
- Rule Filter
                  Criteria (atlas.en-us.loyalty.meta/loyalty/connect_responses_rule_filter_criteria.htm)
- Rule
                Parameter (atlas.en-us.loyalty.meta/loyalty/connect_responses_rule_parameter.htm)
