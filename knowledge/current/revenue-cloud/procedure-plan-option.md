---
title: "Procedure Plan Option"
domain: revenue-cloud
topic: procedure-plan-option
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.695Z
estimatedTokens: 427
keywords: [Procedure, Plan, Option, Output, representation]
---

# Procedure Plan Option

> Output representation of the details of a procedure plan option.

# Procedure Plan Option

Output representation of the details of a procedure plan option.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Procedure Plan Generic Error[] | Details of the error encountered during the processing of the API request. | Small, 62.0 | 62.0 |
| expression​SetApi​Name | String | API name of the expression set. | Small, 62.0 | 62.0 |
| expression​Set​Definition | String | Expression set definition that’s associated with this procedure plan option record. | Small, 62.0 | 62.0 |
| expression​SetLabel | String | Label of the expression set that’s associated with this procedure plan option record. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |
| logic | String | Computation logic for the conditions applied to a procedure plan option. | Small, 62.0 | 62.0 |
| primary​Object | String | Source object that’s used to create a procedure with rule-based criteria. | Small, 62.0 | 62.0 |
| priority | Integer | Priority for the specified criteria. | Small, 62.0 | 62.0 |
| procedure​PlanCriterion | Procedure Plan Criterion[] | Details of the rule-based criteria for the procedure. | Small, 62.0 | 62.0 |
| readContext​Mapping | String | Mapping that’s used to read from the mapped object and populate the context definition. | Small, 62.0 | 62.0 |
| recordId | String | ID of the procedure plan option record. | Small, 62.0 | 62.0 |
| saveContext​Mapping | String | Mapping that’s used to save data from the context definition and populate the mapped object. | Small, 62.0 | 62.0 |

## Code Examples

```
"procedurePlanOptions": [
                   {
                     "expressionSetApiName": "Revenue_Mgmt_Default_Pricing_Procedure",
                     "expressionSetDefinition": "9QAZ60000004ECOOA2",
                     "expressionSetLabel": "Revenue Management Default Pricing Procedure",
                     "isSuccess": true,
                     "logic": "1 AND 2 AND 3",
                     "primaryObject": "Account",
                     "priority": 1,
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
                        ],
                       "recordId": "1FYZ6000000000fOAA",
                       "saveContextMapping": "AssetToSalesTransactionMapping"
                        }
                      ]
```

## Related Topics

- Procedure Plan Generic Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_generic_error.htm)
- Procedure Plan Criterion (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_procedure_plan_criterion_output.htm)
