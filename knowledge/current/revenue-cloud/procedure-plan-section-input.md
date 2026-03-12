---
title: "Procedure Plan Section Input"
domain: revenue-cloud
topic: procedure-plan-section-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.339Z
estimatedTokens: 386
keywords: [Procedure, Plan, Section, Input, representation, details, procedure, plan, section.]
---

# Procedure Plan Section Input

> Input representation of the details of a procedure plan section.

# Procedure Plan Section Input

Input representation of the details of a procedure plan section.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| is​Inherited | Boolean | Indicates whether the procedure plan section is inherited from a template (true) or not (false). | This property is read-only. | 62.0 |
| procedurePlan​Options | Procedure Plan Option Input[] | List of procedure plan options that defines a group of criteria.You can edit or delete a procedure plan option only if it isn’t associated with an active procedure plan version. | Required | 62.0 |
| recordId | String | ID of the procedure plan section record. | Required | 62.0 |
| resolution​Type | String | Type of resolution used to filter the procedure. You can’t edit this property value if the procedure plan section includes a procedure plan option record. | Required | 62.0 |
| section​Type | String | Type of section. Valid values are:PricingProcedureProductDiscoveryProcedureProductQualificationProcedurePricingDiscoveryProcedureDiscountSpreadServiceProcedureRatingProcedureCustomRatingDiscoveryProcedure | Required | 62.0 |
| sequence | Integer | Sequence to be followed for the processing of the procedures. This property value must be greater than 0 and must be unique for a procedure plan section associated with a procedure plan version. | Required | 62.0 |
| subSection​Type | String | Procedure subsection added to the procedure plan definition. | Required | 62.0 |

## Code Examples

```
"procedurePlanSections": [
    {
      "isInherited": false,
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
      ],
      "resolutionType": "RuleBased",
      "sectionType": "PricingProcedure",
      "sequence": 1,
      "subSectionType": "PricingProcedure",
      "recordId": "1FRZ60000008OIAOA2"
    }
  ]
```

## Related Topics

- Procedure Plan Option Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_procedure_plan_option_input.htm)
