---
title: "Insurance Create Underwriting Rules Input"
domain: insurance-developer-guide
topic: insurance-create-underwriting-rules-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.819Z
estimatedTokens: 338
keywords: [Insurance, Underwriting, Rules, Input, Rule, Representation]
---

# Insurance Create Underwriting Rules Input

> Create Underwriting Rule Input Representation

# Insurance Create Underwriting Rules Input

Create Underwriting Rule Input Representation

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | Unique API name of the underwriting rule. | Required | 63.0 |
| description | String | Description of the underwriting rule | Optional | 63.0 |
| effectiveFromDate | String | Date from which the underwriting rule is effective. | Required | 63.0 |
| effectiveToDate | String | Date until which the underwriting rule is effective. | Optional | 63.0 |
| evaluationFailureTaskGroup | Evaluation Task Group Input[] | Input details for failed evaluation tasks. | Optional | 63.0 |
| evaluationSuccessTaskGroup | Evaluation Task Group Input[] | Input details for successful evaluation tasks. | Optional | 63.0 |
| name | String | Name of the underwriting rule | Required | 63.0 |
| productPath | String | Name of the product path. | Required | 63.0 |
| ruleCriteria | Insurance Rule Criteria Input[] | Rule criteria for the underwriting rule. | Required | 63.0 |
| status | String | Status of the underwriting rule. Possible values are:ActiveInactiveDraft | Optional | 63.0 |
| underwritingRuleGroup | Insurance Underwriting Rule Group Input[] | The UnderwritingRuleGroup input data. | Required | 63.0 |

## Code Examples

```
{
       "name": "Automatically Approve Quote",
       "apiName": "approveQuoteBasedonComprehensiveCoverageDeductibles",
       "effectiveFromDate": "2024-05-30T10:30:00",
       "effectiveToDate": "2024-11-01T10:30:00",
       "status": "Draft",
       "description": "Rule description”,
       "underwritingRuleGroup": {
       "underwritingRuleGroupId": "1KQ000000MKJIK", // Optional,
       // if underwritingRuleGroupId exist, then use it as parent instead of create a new record.
       "stageTransitionId": "0jjDR00000000VGAAA", // State Transition id.
       "stageTransitionName": "Draft to Approved",
       "objectType": "Quote",
       "recordType": "--Master--",
       "fromStage": "Draft",
       "toStage": "Approved",
       "rootProductId": "01tDR000000EMslYAG" // Auto Gold.
       "criteriaExpression": "1" // Exmple "(1 AND 2) OR 3" if more than 1 rules.
       }
       "productPath": "01tDR000000EMslYAG/11BDR00000000T72AI", // "Auto Gold/Auto Vehicle"
       "sequence": 1,
       "ruleCriteria": [
       {
       "conditions": [
       {
       "contextTagName": "SalesTransactionItemAttribute",
       "operator": "LessThan",
       "conditionIndex": 1,
       "attributeName": "Annual Milage",
       "attributePicklistValueId": null,
       "type": "Attribute",
       "attributeId": "0tjDR00000000VGYAY",
       "dataType": "Number",
       "values": [
       "50000"
       ]
       }
       ],
       "rootObjectId": "01tDR000000EMslYAG", // Auto Gold.
       "productRelatedComponent" : // Need More details on it.
       "criteriaIndex": 1,
       "sourceContextTagName": "ProductBasedOn",
       "sourceOperator": "Equals",
       "sourceDataType": "String",
       "sourceValues": [
       "11BDR00000000T72AI" // Auto Vehicle.
       ]
       },
       {
       "conditions": [
       {
       "contextTagName": "SalesTransactionItemAttribute",
       "operator": "LessThan",
       "conditionIndex": 1,
       "attributeName": "Comprehensive Deductible",
       "type": "Attribute",
       "attributePicklistValueId": null,
       "attributeId": "0tjDR00000000UaYAI",
       "dataType": "Number",
       "values": [
       "$5000"
       ]
       }
       ],
       "rootObjectId": "01tDR000000EMslYAG", // Auto Bundle
       "productRelatedComponent" : // Need More details on it.
       "criteriaIndex": 2,
       "sourceContextTagName": "Product",
       "sourceOperator": "Equals",
       "sourceDataType": "String",
       "sourceValues": [
       "01tDR000000EMsoYAG" // Comprehensive Product.
       ]
       }
       ],
       // EvaluationSuccessTaskGroup and EvaluationFailureTaskGroup are optional
       // Fulfillment plan design time entities will be created.
       "evaluationSuccessTaskGroup": // Create FulfillmentStepDefinitionGroup records
       {
       "name": "QuoteApproveSuccessTaskGroup",
       "tasks": [ // create FulfillmentStepDefinition records
       {
       "name": "KYC check flow", // FulfillmentStepDefinition API Names
       "type": "AutoTask",// FulfillmentStepDefinition type
       "flowApiName": "KYC check flow", // Flow API Names
       }
       ]
       },
       "evaluationFailureTaskGroup": //Similar to EvaluationSuccessTaskGroup
       {
       "name": "QuoteApproveFailureTaskGroup",
       "tasks": [
       {
       "name": "Vehicle ineligible",
       "type": "AutoTask",
       "flowApiName": "Mail Notification - Vehicle ineligible",
       }
       ]
       }
       }
```

## Related Topics

- Evaluation Task Group Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_evaluation_task_group_input.htm)
- Insurance Rule Criteria Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_rule_criteria_input.htm)
- Insurance Underwriting Rule Group Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_underwriting_rule_group_input.htm)
