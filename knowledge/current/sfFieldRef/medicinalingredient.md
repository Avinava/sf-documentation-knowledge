---
title: "MedicinalIngredient"
domain: sfFieldRef
topic: medicinalingredient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.053Z
estimatedTokens: 404
keywords: [MedicinalIngredient, child, Medication, substances, drugs, ingredients, API, version, 52.0, later]
---

# MedicinalIngredient

> MedicinalIngredient is a child object of Medication that represents
         substances or drugs that are used as ingredients in the medication.  This object is
      available in API version 52.0 and later.

# MedicinalIngredient

MedicinalIngredient is a child object of Medication that represents substances or drugs that are used as ingredients in the medication. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see MedicinalIngredient in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Medicinal Ingredient ID | id |  | 18 |  |  |
| IngredientId | Ingredient ID | reference |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentRecordId | Medication ID | reference |  | 18 |  |  |
| StrengthDenominator | Strength Denominator | double |  |  | 18 | 5 |
| StrengthDenominatorUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| StrengthNumerator | Strength Numerator | double |  |  | 18 | 5 |
| StrengthNumeratorUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
