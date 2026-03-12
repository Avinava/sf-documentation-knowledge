---
title: "Procedure Plan Criterion Input"
domain: revenue-cloud
topic: procedure-plan-criterion-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.309Z
estimatedTokens: 340
keywords: [Procedure, Plan, Criterion, Input, representation, details, procedure, plan, criterion.]
---

# Procedure Plan Criterion Input

> Input representation of the details of a procedure plan criterion.

# Procedure Plan Criterion Input

Input representation of the details of a procedure plan criterion.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| condition​Sequence | Integer | Sequence to be followed to process the conditions defined in the procedure plan option.This property value must be unique within a procedure plan option. | Required | 62.0 |
| dataType | String | Data type of the field from the selected object. | Required | 62.0 |
| field​Object | String | Value of the object field that’s used to resolve the procedure plan option.This property value must belong to the primary object that’s associated with the procedure plan definition, at a maximum two levels up in the hierarchy. | Required | 62.0 |
| fieldPath | String | Path of the field that’s used in a procedure in relation to the object that the field belongs to.The field path must end with the object field that’s associated with the procedure plan criterion. | Required | 62.0 |
| literal​Value | String | User-defined value that’s compared to the value of the sObject field value. | Optional | 62.0 |
| operator | String | Operator that’s used by the procedure plan criterion. | Required | 62.0 |
| recordId | String | ID of the procedure plan criterion record. | Required | 62.0 |

## Code Examples

```
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
```
