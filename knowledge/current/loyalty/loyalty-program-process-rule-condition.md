---
title: "Loyalty Program Process Rule Condition"
domain: loyalty
topic: loyalty-program-process-rule-condition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.469Z
estimatedTokens: 336
keywords: [Loyalty, Program, Process, Rule, Condition, Output, representation]
---

# Loyalty Program Process Rule Condition

> Output representation of the loyalty program process rule
      condition.

# Loyalty Program Process Rule Condition

Output representation of the loyalty program process rule condition.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| childSteps | Loyalty Program Process Rule Step[] | The child steps of the condition. | Small, 55.0 | 55.0 |
| errorMessage | String | The message stating the reason for error, if any. | Small, 55.0 | 55.0 |
| filterCondition | String | The logic that is specified to apply the filter conditions. | Small, 55.0 | 55.0 |
| filterCriteria | Loyalty Program Process Rule Condition Filter Criteria[] | The filter criteria of a condition. | Small, 55.0 | 55.0 |
| isConditionMet | Boolean | Indicates whether the transaction journal meets this condition (true) or not (false). | Small, 55.0 | 55.0 |
| sequenceNumber | Integer | Sequence number of a rule step in a rule. | Small, 55.0 | 55.0 |
| status | String | The status of the loyalty program process rule step execution.Possible values are:CriteriaNotMetFailedSuccess | Small, 55.0 | 55.0 |
| stepName | String | The name of the step in the loyalty program process rule. | Small, 55.0 | 55.0 |
| stepType | String | Specifies the type of step in the loyalty program process rule.Possible values are:ActionConditionConditionGroupDefaultPath | Small, 55.0 | 55.0 |

## Related Topics

- Loyalty Program Process Rule Step (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_program_process_rule_step.htm)
- Loyalty Program Process Rule Condition Filter
                Criteria (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_program_process_rule_condition_filter_criteria.htm)
