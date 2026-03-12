---
title: "Loyalty Program Process Rule"
domain: loyalty
topic: loyalty-program-process-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.428Z
estimatedTokens: 541
keywords: [Loyalty, Program, Process, Rule, Output, representation, rules]
---

# Loyalty Program Process Rule

> Output representation of the loyalty program process
        rules.

# Loyalty Program Process Rule

Output representation of the loyalty program process rules.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionResultSummary | Various | The result provided by each action that processed the transaction journals. The type of action must be configured in the loyalty program process rule.CreditPoints—Credit loyalty points to a specified loyalty program member’s balance. See Credit Points Action Output.DebitPoints—Debit loyalty points from a specified loyalty program member’s balance. See Debit Points Action Output.IssueVoucher—Issue a voucher for a loyalty program member. See Issue Voucher Action Output.UpdateUsageForCumulativePromotion—Update the progress made by a loyalty program member towards attaining a cumulative type promotion. See Update Cumulative Action Output. | Small, 55.0 | 55.0 |
| errorMessage | String | The message stating the reason for error, if any. | Small, 55.0 | 55.0 |
| executionStatus | String | The execution status of the loyalty program process rule.Valid values are:CriteriaNotMetFailedSuccess | Small, 55.0 | 55.0 |
| executionSummary | Summary | The summary of how the loyalty program process rules processed the transaction journals. | Small, 55.0 | 55.0 |
| previousRuleName | String | The name of the loyalty program process rule that processed the transaction journals before the current loyalty program process rule. | Small, 55.0 | 55.0 |
| processRuleName | String | The name of the loyalty program process rule that processed the transaction journals. | Small, 55.0 | 55.0 |
| promotionName | String | The name of the loyalty program promotion associated with the rule. | Small, 55.0 | 55.0 |
| ruleSteps | Various | A list of steps that are part of the loyalty process process rules.Action—Loyalty program process rule action. See Loyalty Program Process Rule Action.Condition—Loyalty program process rule condition. See Loyalty Program Process Rule Condition.ConditionGroup—Loyalty program process rule condition group. See Loyalty Program Process Rule Condition Group.DefaultPath | Small, 55.0 | 55.0 |

## Related Topics

- Credit Points Action
                                                Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_credit_points_action_output.htm)
- Debit Points Action
                                                Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_debit_points_action_output.htm)
- Issue Voucher Action
                                                Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_issue_voucher_action_output.htm)
- Update Cumulative Action
                                                Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_update_cumulative_usage_action_output.htm)
- Summary (atlas.en-us.loyalty.meta/loyalty/connect_responses_summary.htm)
- Loyalty Program Process Rule
                                                Action (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_program_process_rule_action.htm)
- Loyalty Program Process Rule
                                                Condition (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_program_process_rule_condition.htm)
- Loyalty Program Process Rule Condition
                                                Group (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_program_process_rule_condition_group.htm)
