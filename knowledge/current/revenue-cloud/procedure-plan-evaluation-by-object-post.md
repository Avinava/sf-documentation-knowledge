---
title: "Procedure Plan Evaluation By Object (POST)"
domain: revenue-cloud
topic: procedure-plan-evaluation-by-object-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.627Z
estimatedTokens: 532
keywords: [Procedure, Plan, Evaluation, POST, Evaluate, definition, primary, check, prerequisites, usage, context, mapping]
---

# Procedure Plan Evaluation By Object (POST)

> Evaluate a procedure plan definition based on a primary object to
      check for prerequisites such as usage type and context mapping details.

# Procedure Plan Evaluation By Object (POST)

Evaluate a procedure plan definition based on a primary object to check for prerequisites such as usage type and context mapping details.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

JSON example

This example shows a sample request to evaluate a procedure plan definition by using a primary object.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| evaluationDate | String | Date when the evaluation is applicable. This property value must be within the date range when the procedure plan definition is effective. | Required | 62.0 |
| idList | String[] | List of record IDs of the procedure plan definitions to be evaluated. | Required only if you’re invoking the Procedure Plan Evaluation By Object (POST) API. | 62.0 |
| processType | String | Specifies the business processes that need a procedure plan for each sObject and definition. Valid values based on the available are:BillingDRODeepCloneProductDiscoveryRevenue CloudThese values can be used based on the available license. If unspecified, the value is set to Default.If a procedure plan definition exist in the org with processType value as null, modify the value to Default. | Optional | 63.0 |
| sectionType | String[] | Name of section to be evaluated. Valid values are:PricingProcedureProductDiscoveryProcedureProductQualificationProcedurePricingDiscoveryProcedureDiscountSpreadServiceProcedureRatingProcedureCustomRatingDiscoveryProcedure | Optional | 62.0 |
| subSectionType | String[] | Name of subsection to be evaluated. | Optional | 62.0 |

The combination of the sectionType and subSectionType property values must be unique for every procedure plan version.

Response body for POST

[Procedure Plan Evaluation Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_evaluation_response.htm "Output representation of the evaluation details of a procedure plan definition.")

## Code Examples

```
/connect/procedure-plan-definitions/evaluate
```

```
https://yourInstance.salesforce.com​/services/data​/v66.0/connect/​procedure-plan-definitions/​evaluate
```

```
{
    "idList": ["a01DU000000BylcYAC"], 
    "evaluationDate": "2024-07-08T10:15:30.000Z",
    "processType": "Default", 
    "sectionType": ["PricingProcedure"], 
    "subSectionType": ["Revenue"] 
  }
```

## Related Topics

- Procedure Plan
              Evaluation Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_evaluation_response.htm)
