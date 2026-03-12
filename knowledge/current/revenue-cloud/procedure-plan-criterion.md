---
title: "Procedure Plan Criterion"
domain: revenue-cloud
topic: procedure-plan-criterion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.638Z
estimatedTokens: 329
keywords: [Procedure, Plan, Criterion, Output, representation]
---

# Procedure Plan Criterion

> Output representation of the details of a procedure plan criterion.

# Procedure Plan Criterion

Output representation of the details of a procedure plan criterion.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| condition​Sequence | Integer | Sequence to be followed to process the conditions defined in the procedure plan option. | Small, 62.0 | 62.0 |
| dataType | String | Data type of the field from the selected object. | Small, 62.0 | 62.0 |
| error | Procedure Plan Generic Error[] | Details of the error encountered during the processing of the API request. | Small, 62.0 | 62.0 |
| fieldObject | String | Value of the object field that’s used to resolve the procedure plan option. | Small, 62.0 | 62.0 |
| fieldPath | String | Path of the field that’s used in a procedure in relation to the object that the field belongs to. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |
| literalValue | String | User-defined value that’s compared to the value of the sObject field value. | Small, 62.0 | 62.0 |
| operator | String | Operator that’s used by the procedure plan criterion. | Small, 62.0 | 62.0 |
| recordId | String | ID of the procedure plan criterion record. | Small, 62.0 | 62.0 |

## Code Examples

```
"procedurePlanCriterion": [
                       {
                         "conditionSequence": 1,
                         "dataType": "Text",
                         "fieldObject": "BillingCountry",
                         "fieldPath": "BillingCountry",
                         "isSuccess": true,
                         "literalValue": "test",
                         "operator": "Equals",
                         "recordId": "1FiZ60000004C9cKAE"
                        },
                        {
                         "conditionSequence": 2,
                         "dataType": "Text",
                         "fieldObject": "BillingPostalCode",
                         "fieldPath": "BillingPostalCode",
                         "isSuccess": true,
                         "literalValue": "pramit",
                         "operator": "Equals",
                         "recordId": "1FiZ60000004C9dKAE"
                         },
                         {
                           "conditionSequence": 3,
                           "dataType": "Date",
                           "fieldObject": "LastActivityDate",
                           "fieldPath": "LastActivityDate",
                           "isSuccess": true,
                           "literalValue": "2024-07-14",
                           "operator": "LessThan",
                           "recordId": "1FiZ60000004C9eKAE"
                          }
                        ]
```

## Related Topics

- Procedure Plan Generic Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_generic_error.htm)
