---
title: "Procedure Plan Definitions"
domain: revenue-cloud
topic: procedure-plan-definitions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.652Z
estimatedTokens: 158
keywords: [Procedure, Plan, Definitions, Output, representation]
---

# Procedure Plan Definitions

> Output representation of the details of procedure plan definitions.

# Procedure Plan Definitions

Output representation of the details of procedure plan definitions.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Procedure Plan Generic Error[] | Details of the error encountered during the processing of the API request. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |
| procedure​PlanDefinitions | Procedure Plan Definition[] | Details of a single procedure plan definition. | Small, 62.0 | 62.0 |

## Code Examples

```
{
            "isSuccess": true,
            "procedurePlanDefinitions": [
                {
                    "description": "test description",
                    "developerName": "sample_test",
                    "name": "sample_test",
                    "primaryObject": "Account",
                    "procedurePlanDefinitionVersions": [
                        {
                            "active": false,
                            "developerName": "sample_test",
                            "effectiveFrom": "2024-07-09T00:00:00.000Z",
                            "contextDefinition": "SalesTransactionContext__stdctx",
                            "procedurePlanSections": [],
                            "rank": 1,
                            "readContextMapping": "ProductDiscoveryContextMapping",
                            "recordId": "1CvZ60000008OIaKAM",
                            "success": true
                        }
                    ],
                    "recordId": "1FNZ60000004CAHOA2",
                    "success": true
                },
                {
                    "developerName": "PriceAdjustmentSchedule",
                    "name": "PriceAdjustmentSchedule",
                    "primaryObject": "PriceAdjustmentSchedule",
                    "procedurePlanDefinitionVersions": [
                        {
                            "active": false,
                            "developerName": "PriceAdjustmentSchedule",
                            "effectiveFrom": "2024-07-10T00:00:00.000Z",
                            "contextDefinition": "SalesTransactionContext__stdctx",
                            "procedurePlanSections": [],
                            "rank": 1,
                            "recordId": "1CvZ6000000CaRbKAK",
                            "success": true
                        }
                    ],
                    "recordId": "1FNZ6000000CaSAOA0",
                    "success": true
                }
                ]
            }
```

## Related Topics

- Procedure Plan Generic Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_generic_error.htm)
- Procedure Plan Definition (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_definition_output.htm)
