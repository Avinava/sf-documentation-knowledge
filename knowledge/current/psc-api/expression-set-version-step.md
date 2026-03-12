---
title: "Expression Set Version Step"
domain: psc-api
topic: expression-set-version-step
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.015Z
estimatedTokens: 1110
keywords: [Expression, Version, Step, Output, representation]
---

# Expression Set Version Step

> Output representation of a step in an expression set
    version.

# Expression Set Version Step

Output representation of a step in an expression set version.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| action​Type | String | Business Knowledge Model of the expression set.Valid values are:AiAccelerator​SubscriberChurn​PredictionAssignBadge​ToMemberAssignParameter​ValuesAutomated​Claims​Processing​ValidationBreAggregatorBreAggregator​AssignmentChangeMember​TierCheckMember​BadgeAssignmentCreditPointsCrudDebitPointsEvaluate​QualificationEvaluate​DisqualificationGetMember​Attributes​ValuesGetMember​PointBalanceGetMember​PromotionsGetMemberTierGetOutputs​FromDecision​MatrixGetOutputs​FromDecision​TableGetUser​DataIncreaseUsage​ForCumulative​PromotionIssueVoucherList​Group​CalculationPriceListRecordAlertRedeem​VoucherRedeem​VoucherRunFlowRunProgram​ProcessSampleBusiness​ElementWith​ContextSampleDynamic​Custom​ElementSendMailTestCustom​ElementUpdateCurrent​ValueFor​MemberAttributeUpdatePoint​BalanceUpdateUsage​ForCumulative​PromotionVolumeDiscount | Small, 58.0 | 58.0 |
| advanced​Condition | Expression Set Advanced Condition Step | Details of the advanced condition in case of an advanced condition step. | Small, 58.0 | 58.0 |
| aggregation | Expression Set Aggregation Step | Details of the aggregation step in case of an aggregation step. | Small, 58.0 | 58.0 |
| assignment | Expression Set Assignment Step | Details of the assignment step in case of an assignment step. | Small, 58.0 | 58.0 |
| condition​Expression | Expression Set Condition Expression Step | Details of the condition step in case of a condition step. | Small, 58.0 | 58.0 |
| custom​Element | Expression Set Custom Element Step | Details of the custom element step in case of a custom element step. | Small, 58.0 | 58.0 |
| description | String | Description of the step in expression set version. | Small, 58.0 | 58.0 |
| failed​Explainer​Template | String | Name of the failed explainability message template. | Small, 58.0 | 58.0 |
| failed​Message​TokenMappings | Expression Set DES Token Mapping | List of the token resource mappings of the failed explainability message template. | Optional | 59.0 |
| lookup​Table | Expression Set Lookup Table Step | Details of the lookup table in case of a decision matrix or decision table step. | Small, 58.0 | 58.0 |
| name | String | Unique name of the step in expression set version. | Small, 58.0 | 58.0 |
| noResult​Explainer​Template | String | Name of the explainability message template that’s used when the evaluation result of the selected element type is No Result. This field is applicable for a Decision Table only. | Small, 59.0 | 59.0 |
| noResult​MessageToken​Mappings | Expression Set DES Token Mapping | List of the token resource mappings of the no result explainability message template. | Small, 59.0 | 59.0 |
| parent​Step | String | Unique name of the parent step of this step in the expression set version. | Small, 58.0 | 58.0 |
| passed​Explainer​Template | String | Name of the passed explainability message template. | Small, 58.0 | 58.0 |
| passed​Message​TokenMappings | Expression Set DES Token Mapping | List of the token resource mappings of the passed explainability message template. | Small, 59.0 | 59.0 |
| result​Included | Boolean | Indicates whether to include the step output in the expression set result (true) or not (false). | Small, 58.0 | 58.0 |
| sequence​Number | Integer | Sequence number of the step in the expression set version. | Small, 58.0 | 58.0 |
| shouldExpose​Condition​Details | Boolean | Indicates whether the decision explanation includes the condition details (true) or not (false) for the condition element type. | Small, 58.0 | 58.0 |
| should​ExposeExec​PathMsg​Only | Boolean | Indicates whether the decision explanation includes details of the executed path only (true) or not (false) for the branch element type. | Small, 58.0 | 58.0 |
| should​ShowExpl​Externally | Boolean | Indicates whether the decision explanation is exposed to community users for the step (true) or not (false). | Small, 58.0 | 58.0 |
| step​Type | String | Step type of the expression set.Valid values are:Advanced​ConditionBranchBusiness​Knowledge​ModelConditionDefaultPathSubExpression | Small, 58.0 | 58.0 |
| sub​Expression | Expression Set SubExpression Step | Details of the subexpression set in case of a subexpression step. | Small, 58.0 | 58.0 |

## Related Topics

- Expression Set Advanced Condition
                                    Step (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_advanced_condition_step_output.htm)
- Expression Set Aggregation
                                Step (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_aggregation_step_output.htm)
- Expression Set Assignment
                                Step (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_assignment_step_output.htm)
- Expression Set Condition Expression
                                    Step (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_condition_expression_step_output.htm)
- Expression Set Custom Element
                                Step (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_custom_element_step_output.htm)
- Expression Set DES Token
                                Mapping (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_des_token_mapping.htm)
- Expression Set Lookup Table
                                Step (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_lookup_table_step_output.htm)
- Expression Set SubExpression
                                Step (atlas.en-us.psc_api.meta/psc_api/connect_responses_expression_set_sub_expression_step_output.htm)
