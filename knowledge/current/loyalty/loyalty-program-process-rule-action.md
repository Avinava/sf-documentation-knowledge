---
title: "Loyalty Program Process Rule Action"
domain: loyalty
topic: loyalty-program-process-rule-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.436Z
estimatedTokens: 400
keywords: [Loyalty, Program, Process, Rule, Action, Output, representation]
---

# Loyalty Program Process Rule Action

> Output representation of the loyalty program process rule
    action.

# Loyalty Program Process Rule Action

Output representation of the loyalty program process rule action.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionParameters | Loyalty Program Process Rule Action Parameter[] | The list of parameters of the action. | Small, 55.0 | 55.0 |
| actionType | String | The type of action in the loyalty program process rule.Possible values are:AssignParameterValuesCreditPointsDeditPointsGetMemberAttributesValuesGetMemberPointBalanceGetMemberTierGetOutputsFromDecisionTableIncreaseUsageForCumulativePromotionIssueVoucherRunFlowUpdateCurrentValueForMemberAttributeUpdateUsageForCumulativePromotion | Small, 55.0 | 55.0 |
| decisionTable​Name | String | The name of the decision table being executed with the action. | Small, 55.0 | 55.0 |
| errorMessage | String | The message stating the reason for error, if any. | Small, 55.0 | 55.0 |
| flowDefinition​Name | String | The name of the flow definition that is run with the action. | Small, 55.0 | 55.0 |
| sequenceNumber | Integer | The sequence number of a rule step in the process rule. | Small, 55.0 | 55.0 |
| status | String | The status of the loyalty program process rule step execution.Possible values are:CriteriaNotMetFailedSuccess | Small, 55.0 | 55.0 |
| stepName | String | The name of the step in the loyalty program process rule. | Small, 55.0 | 55.0 |
| stepType | String | Specifies the type of step in the loyalty program process rule.Possible values are:ActionConditionConditionGroupDefaultPath | Small, 55.0 | 55.0 |

## Related Topics

- Loyalty Program Process Rule Action Parameter (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_program_process_rule_action_parameter.htm)
