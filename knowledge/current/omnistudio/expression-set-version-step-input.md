---
title: "Expression Set Version Step Input"
domain: omnistudio
topic: expression-set-version-step-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.422Z
estimatedTokens: 1150
keywords: [Expression, Version, Step, Input, representation]
---

# Expression Set Version Step Input

> Input representation of a step in an expression set
    version.

# Expression Set Version Step Input

Input representation of a step in an expression set version.

Root XML tag

<ExpressionSetVersionStepInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action​Type | String | Business Knowledge Model of the expression set.Valid values are:AiAccelerator​SubscriberChurn​PredictionAssignBadge​ToMemberAssignParameter​ValuesAutomated​Claims​Processing​ValidationBreAggregatorBreAggregator​AssignmentChangeMember​TierCheckMember​BadgeAssignmentCreditPointsCrudDebitPointsEvaluate​QualificationEvaluate​DisqualificationGetMember​Attributes​ValuesGetMember​PointBalanceGetMember​PromotionsGetMemberTierGetOutputs​FromDecision​MatrixGetOutputs​FromDecision​TableGetUser​DataIncreaseUsage​ForCumulative​PromotionIssueVoucherList​Group​CalculationPriceAdjustmentMatrixPriceListRecordAlertRedeem​VoucherRunFlowRunProgram​ProcessSampleBusiness​ElementWith​ContextSampleDynamic​Custom​ElementSendMailTestCustom​ElementUpdateCurrent​ValueFor​MemberAttributeUpdatePoint​BalanceUpdateUsage​ForCumulative​PromotionVolumeDiscount | Optional | 58.0 |
| advanced​Condition | Expression Set Advanced Condition Step Input | Details of the advanced condition if the step is an advanced condition step. | Optional | 58.0 |
| aggregation | Expression Set Aggregation Step Input | Aggregation details if the step is an aggregation step. | Optional | 58.0 |
| assignment | Expression Set Assignment Step Input | Assignment details if the step is an assignment step. | Optional | 58.0 |
| condition​Expression | Expression Set Condition Expression Step Input | Details of the condition if the step is a condition step. | Optional | 58.0 |
| custom​Element | Expression Set Custom Element Step Input | Details of the custom element if the step is a custom element step. | Optional | 58.0 |
| description | String | Description of the step. | Optional | 58.0 |
| failed​Explainer​Template | String | Name of the failed explainability message template. | Optional | 58.0 |
| failed​Message​TokenMappings | Expression Set DES Token Mapping | List of the token resource mappings of the failed explainability message template. | Optional | 59.0 |
| lookup​Table | Expression Set Lookup Table Step Input | Details of the lookup table for a decision matrix or decision table step. | Optional | 58.0 |
| name | String | Unique name of the step in the expression set version. | Required | 58.0 |
| noResult​Explainer​Template | String | Name of the explainability message template that’s used when the evaluation result of the selected element type is No Result. This field is applicable for a Decision Table only. | Optional | 59.0 |
| noResult​MessageToken​Mappings | Expression Set DES Token Mapping | List of the token resource mappings of the no result explainability message template. | Optional | 59.0 |
| parent​Step | String | Unique name of the parent step in the expression set version. | Optional | 58.0 |
| passed​Explainer​Template | String | Name of the passed explainability message template. | Optional | 58.0 |
| passed​Message​TokenMappings | Expression Set DES Token Mapping | List of the token resource mappings of the passed explainability message template. | Optional | 59.0 |
| result​Included | Boolean | Indicates whether to include the step output in the expression set result (true) or not (false). | Optional | 58.0 |
| sequence​Number | Integer | Sequence number of the step in the expression set version. | Required | 58.0 |
| shouldExpose​ExecPathMsg​Only | Boolean | Indicates whether the decision explanation includes information about the executed path only (true) or not (false) for the Branch element type. | Optional | 58.0 |
| should​ExposeCondition​Details | Boolean | Indicates whether the decision explanation includes the condition details (true) or not (false) for the Condition element type. | Optional | 58.0 |
| shouldShow​Expl​Externally | Boolean | Indicates whether the decision explanation is exposed to community users for the step (true) or not (false). | Optional | 58.0 |
| step​Type | String | Step type of the expression set.Valid values are:Advanced​ConditionAdvanced​ListFilter—Available in version 59.0 and later.BranchBusiness​Knowledge​ModelConditionDefaultPathListFilter—Available in version 59.0 and later.ListGroup—Available in version 59.0 and later.SubExpression | Required | 58.0 |
| sub​Expression | Expression Set Sub Expression Step Input | Details of the subexpression if the step is a subexpression step. | Optional | 58.0 |

## Code Examples

```
"steps": [
            {
              "actionType": null,
              "advancedCondition": null,
              "aggregation": null,
              "assignment": null,
              "conditionExpression": {
                "expression": "productName == 'iPhone' && City == 'Los Angeles'",
                "resultParameter": "condition_output__1"
              },
              "customElement": null,
              "lookupTable": null,
              "description": "Condition step for conditions w.r.t product",
              "failedExplainerTemplate": "FailureTemplate",
              "failedMessageTokenMappings": [
              {
              "expressionSetMessageToken": "model",
              "resourceReference": "Model"
              }],
              "name": "Condition1",
              "noResultExplainerTemplate": "NoResultTemplate",
              "noResultMessageTokenMappings": [
              {
              "expressionSetMessageToken": "year",
              "resourceReference": "Year"
              }],
              "parentStep": null,
              "passedExplainerTemplate": "SuccessTemplate",
              "passedMessageTokenMappings": [
              {
              "expressionSetMessageToken": "price",
              "resourceReference": "DM1__Price"
              }],
              "resultIncluded": true,
              "sequenceNumber": 1,
              "shouldExposeExecPathMsgOnly": false,
              "shouldExposeConditionDetails": false,
              "shouldShowExplExternally": false,
              "stepType": "Condition",
              "subExpression": null
            }
          ]
```

## Related Topics

- Expression Set Advanced Condition Step
                      Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_advanced_condition_step.htm)
- Expression Set Aggregation Step Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_aggregation_step.htm)
- Expression Set Assignment Step Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_assignment_step.htm)
- Expression Set Condition Expression Step
                      Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_condition_expression_step.htm)
- Expression Set Custom Element Step Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_custom_element_step.htm)
- Expression Set DES Token Mapping (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_des_token_mapping.htm)
- Expression Set Lookup Table Step Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_lookup_table_step.htm)
- Expression Set Sub Expression Step Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_expression_set_sub_expression_step.htm)
