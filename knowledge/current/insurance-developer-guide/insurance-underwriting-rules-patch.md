---
title: "Insurance Underwriting Rules (Patch)"
domain: insurance-developer-guide
topic: insurance-underwriting-rules-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.257Z
estimatedTokens: 387
keywords: [Insurance, Underwriting, Rules, Patch, rule, root, product]
---

# Insurance Underwriting Rules (Patch)

> Update an existing underwriting rule for a root product.

# Insurance Underwriting Rules (Patch)

Update an existing underwriting rule for a root product.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

PATCH

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the underwriting rule. | Optional | 63.0 |
| effectiveFromDate | String | Date from which the underwriting rule is effective. | Optional | 63.0 |
| effectiveToDate | String | Date until which the underwriting rule is effective. | Optional | 63.0 |
| evaluationFailureTaskGroup | Evaluation Task Group Input[] | Input details for failed evaluation tasks. | Optional | 63.0 |
| evaluationSuccessTaskGroup | Evaluation Task Group Input[] | Input details for successful evaluation tasks. | Optional | 63.0 |
| name | String | Name of the underwriting rule. | Optional | 63.0 |
| productPath | String | Name of the product path. | Optional | 63.0 |
| ruleCriteria | Insurance Rule Criteria Input[] | Rule criteria for the underwriting rule. | Required | 63.0 |
| status | String | Status of the underwriting rule. Possible values are:ActiveInactiveDraft | Optional | 63.0 |

Response body for PATCH

[Insurance Update Underwriting Rules](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_update_underwriting_rules_output.htm "Output representation details of the insurance update underwriting rules request.")

## Code Examples

```
/connect/insurance/underwriting-rules/underwritingRuleId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/underwriting-rules/underwritingRuleId
```

```
{
       "name": "Automatically Approve Quote",
       "apiName": "approveQuoteBasedonComprehensiveCoverageDeductibles",
       "effectiveFromDate": "2024-05-30T10:30:00",
       "effectiveToDate": "2024-11-01T10:30:00",
       "productPath": "01tDR000000EMslYAG/11BDR00000000T72AI", // "Auto Gold/Auto Vehicle"
       "ruleCriteria": [ // ruleCrieteria will be replaced as a whole. Updating only one condition is not supported
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
       // EvaluationSuccessTaskGroup and EvaluationFailureTaskGroup are opitional
       // Fulfillment plan design time entities will be created.
       "EvaluationSuccessTaskGroup": // Create FulfillmentStepDefinitionGroup records
       {
       "name": "QuoteApproveSuccessTaskGroup",
       "taks": [ // create FulfillmentStepDefinition records
       {
       "name": "KYC check flow", // FulfillmentStepDefinition API Names
       "type": "AutoTask",// FulfillmentStepDefinition type
       "flowApiName": "KYC check flow", // Flow API Names
       }
       ]
       },
       "EvaluationFailureTaskGroup": //Similar to EvaluationSuccessTaskGroup
       {
       "name": "QuoteApproveFailureTaskGroup",
       "taks": [
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
- Insurance Update Underwriting Rules (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_update_underwriting_rules_output.htm)
