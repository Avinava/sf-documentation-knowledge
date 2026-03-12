---
title: "Procedure Plan Section Evaluation Runtime"
domain: revenue-cloud
topic: procedure-plan-section-evaluation-runtime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.701Z
estimatedTokens: 343
keywords: [Procedure, Plan, Evaluation, Runtime, Output, representation, results]
---

# Procedure Plan Section Evaluation Runtime

> Output representation of the results from the procedure plan evaluation.

# Procedure Plan Section Evaluation Runtime

Output representation of the results from the procedure plan evaluation.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| expression​SetApi​Name | String | API name of the expression set. | Small, 62.0 | 62.0 |
| expressionSet​Definition​Id | String | ID of the expression set definition. | Small, 62.0 | 62.0 |
| expression​SetLabel | String | Label of the expression set. | Small, 62.0 | 62.0 |
| readContext​Mapping | String | Mapping that’s used to read data from the mapped object and populate the context definition. | Small, 62.0 | 62.0 |
| saveContext​Mapping | String | Mapping that’s used to save data from the context definition and populate the mapped object. | Small, 62.0 | 62.0 |
| sectionType | String | Name of the evaluated section. Valid values are:PricingProcedureProductDiscoveryProcedureProductQualificationProcedurePricingDiscoveryProcedureDiscountSpreadServiceProcedureRatingProcedureCustomRatingDiscoveryProcedure | Small, 62.0 | 62.0 |
| sequence | Integer | Sequence that’s followed for the processing of the procedures. | Small, 62.0 | 62.0 |
| subSection​Type | String | Name of the evaluated subsection. | Small, 62.0 | 62.0 |
| usageType | String | Usage type of the procedure. | Small, 62.0 | 62.0 |

## Code Examples

```
"procedurePlanSections": [
                    {
                        "expressionSetApiName": "pricingProcedure_usageType_3",
                        "expressionSetDefinitionId": "9QAZ60000004Ef6OAE",
                        "expressionSetLabel": "pricingProcedure_usageType_3",
                        "sectionType": "PricingProcedure",
                        "sequence": 1,
                        "subSectionType": "Section1",
                        "usageType": "DefaultPricing"
                    },
                    {
                        "expressionSetApiName": "productQualification_usageType_3",
                        "expressionSetDefinitionId": "9QAZ60000004EfFOAU",
                        "expressionSetLabel": "productQualification_usageType_3",
                        "sectionType": "ProductQualificationProcedure",
                        "sequence": 3,
                        "subSectionType": "Section2",
                        "usageType": "ProductQualification"
                    },
                    {
                        "expressionSetApiName": "rating_usageType_2",
                        "expressionSetDefinitionId": "9QAZ60000004EfHOAU",
                        "expressionSetLabel": "rating_usageType_2",
                        "sectionType": "RatingProcedure",
                        "sequence": 2,
                        "subSectionType": "Section3",
                        "usageType": "DefaultRating"
                    }
                ]
```
