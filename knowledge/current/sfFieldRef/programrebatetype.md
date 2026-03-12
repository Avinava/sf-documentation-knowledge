---
title: "ProgramRebateType"
domain: sfFieldRef
topic: programrebatetype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:10.407Z
estimatedTokens: 527
keywords: [ProgramRebateType, Provide, rebate, part, program, volume, revenue, every, transaction]
---

# ProgramRebateType

> Provide the rebate types that are part of this program. For example, volume
      rebate, revenue rebate, or rebate on every transaction.

# ProgramRebateType

Provide the rebate types that are part of this program. For example, volume rebate, revenue rebate, or rebate on every transaction.

For more information, see ProgramRebateType in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccrualRate | Accrual Rate | double |  |  | 18 | 2 |
| AggregateObjectName | Custom Object Definition ID | picklist |  | 255 |  |  |
| BenefitQualifierField | Custom Field Definition ID | picklist |  | 255 |  |  |
| CalcObjectId | Batch Calculation Job Definition ID | reference |  | 18 |  |  |
| CalculationBasis | Calculation Basis | picklist |  | 255 |  |  |
| CalculationMethod | Calculation Method | picklist |  | 255 |  |  |
| CalculationType | Calculation Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FilterAction | Filter Action | picklist |  | 255 |  |  |
| FilterCriteria | Filter Criteria | textarea |  | 4000 |  |  |
| FilterLogic | Filter Logic | string |  | 255 |  |  |
| Id | Program Rebate Type ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsIntegratable | Integratable | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MeasureField | Custom Field Definition ID | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductFilterType | Product Filter Type | picklist |  | 255 |  |  |
| RebateMeasureType | Measure Type | picklist |  | 255 |  |  |
| RebateProgramId | Rebate Program ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
