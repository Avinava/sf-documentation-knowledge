---
title: "Loyalty Program Process Rule Condition Group"
domain: loyalty
topic: loyalty-program-process-rule-condition-group
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.486Z
estimatedTokens: 245
keywords: [Loyalty, Program, Process, Rule, Condition, Group, Output, representation]
---

# Loyalty Program Process Rule Condition Group

> Output representation of the loyalty program process rule condition
      group.

# Loyalty Program Process Rule Condition Group

Output representation of the loyalty program process rule condition group.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| childSteps | Loyalty Program Process Rule Step[] | The child steps of the condition group. | Small, 55.0 | 55.0 |
| errorMessage | String | The message stating the reason for error, if any. | Small, 55.0 | 55.0 |
| sequenceNumber | Integer | The sequence number of a rule step in a rule. | Small, 55.0 | 55.0 |
| status | String | The status of the loyalty program process rule step execution.Possible values are:CriteriaNotMetFailedSuccess | Small, 55.0 | 55.0 |
| stepName | String | The name of the step in the loyalty program process rule. | Small, 55.0 | 55.0 |
| stepType | String | Specifies the type of step in the loyalty program process rule.Possible values are:ActionConditionConditionGroupDefaultPath | Small, 55.0 | 55.0 |

## Related Topics

- Loyalty Program Process Rule Step (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_program_process_rule_step.htm)
