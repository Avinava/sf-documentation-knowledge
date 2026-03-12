---
title: "Procedure Plan Evaluation Input"
domain: revenue-cloud
topic: procedure-plan-evaluation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.327Z
estimatedTokens: 441
keywords: [Procedure, Plan, Evaluation, Input, representation, details, used, evaluate, procedure, plan, definition.]
---

# Procedure Plan Evaluation Input

> Input representation of the details used to evaluate a procedure plan
    definition.

# Procedure Plan Evaluation Input

Input representation of the details used to evaluate a procedure plan definition.

JSON example

This example shows a sample request to evaluate a procedure plan definition by using a primary object.

```

```

This example shows a sample request to evaluate a procedure plan definition by using a definition name.

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

## Code Examples

```
{
    "idList": ["a01DU000000BylcYAC"], 
    "evaluationDate": "2024-07-08T10:15:30.000Z",
    "processType": "Default", 
    "sectionType": ["PricingProcedure"], 
    "subSectionType": ["Revenue"] 
  }
```

```
{
    "evaluationDate": "2024-07-08T10:15:30.000Z",
    "processType": "Default", 
    "sectionType": ["PricingProcedure"], 
    "subSectionType": ["Revenue"] 
  }
```

## Related Topics

- Procedure Plan Evaluation By Object (POST)
                      API (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_evaluate_procedure_plan_definition_by_object.htm)
