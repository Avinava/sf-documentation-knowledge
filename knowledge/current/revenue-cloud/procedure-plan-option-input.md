---
title: "Procedure Plan Option Input"
domain: revenue-cloud
topic: procedure-plan-option-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.200Z
estimatedTokens: 429
keywords: [Procedure, Plan, Option, Input, representation]
---

# Procedure Plan Option Input

> Input representation of the details of a procedure plan option.

# Procedure Plan Option Input

Input representation of the details of a procedure plan option.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expression​Set​ApiName | String | API name of the expression set. | Optional | 62.0 |
| expression​Set​Definition | String | Expression set definition that’s associated with this procedure plan option record. | Required | 62.0 |
| expression​Set​Label | String | Label of the expression set that’s associated with this procedure plan option record. | Optional | 62.0 |
| logic | String | Computation logic for the conditions applied to a procedure plan option.This property value must be blank if the resolution type is default. | Optional | 62.0 |
| priority | Integer | Priority for the specified criteria. This property value must be greater than 0 and must be unique within a procedure plan section. | Required | 62.0 |
| procedure​Plan​Criterion | Procedure Plan Criterion Input[] | Details of the rule-based criteria for the procedure.You can edit or delete a procedure plan criterion only if it isn’t associated with an active procedure plan version. | Optional | 62.0 |
| readContext​Mapping | String | Mapping that’s used to read from the mapped object and populate the context definition.This property value must be associated with a context definition. | Optional | 62.0 |
| recordId | String | ID of the procedure plan option record. | Required | 62.0 |
| saveContext​Mapping | String | Mapping that’s used to save data from the context definition and populate the mapped object.This property value must be associated with a context definition. | Optional | 62.0 |

## Code Examples

```
"procedurePlanOptions": [
        {
          "saveContextMapping": "AssetToSalesTransactionMapping",
          "expressionSetDefinition": "9QAZ60000004ECOOA2",
          "expressionSetLabel": "Revenute_Default_Pricing_Procedure",
          "expressionSetApiName": "Revenue Default Pricing Procedure",
          "logic": "1 AND 2 AND 3",
          "priority": 1,
          "procedurePlanCriterion": [
            {
              "conditionSequence": 1,
              "fieldObject": "BillingCountry",
              "fieldPath": "BillingCountry",
              "literalValue": "test",
              "operator": "Equals",
              "dataType": "Text"
            },
            {
              "conditionSequence": 2,
              "fieldObject": "BillingPostalCode",
              "fieldPath": "BillingPostalCode",
              "literalValue": "sample",
              "operator": "Equals",
              "dataType": "Text"
            },
            {
              "conditionSequence": 3,
              "fieldObject": "LastActivityDate",
              "fieldPath": "LastActivityDate",
              "literalValue": "2024-07-14",
              "operator": "LessThan",
              "dataType": "Date"
            }
          ]
        }
      ]
```

## Related Topics

- Procedure Plan Criterion Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_procedure_plan_criterion_input.htm)
