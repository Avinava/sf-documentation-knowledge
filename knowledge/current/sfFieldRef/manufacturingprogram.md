---
title: "ManufacturingProgram"
domain: sfFieldRef
topic: manufacturingprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.678Z
estimatedTokens: 409
keywords: [ManufacturingProgram, manufacturing, program, Verican, Account, manufacture, auto, components, their, upcoming, concept, vehicle, staring, 01-Jan-2022, until]
---

# ManufacturingProgram

> Represents information about a manufacturing program. For example, Verican X
         program for Verican Account to manufacture auto components for their upcoming concept
         vehicle, staring from 01-Jan-2022 and valid until 01-Dec-2024.

# ManufacturingProgram

Represents information about a manufacturing program. For example, Verican X program for Verican Account to manufacture auto components for their upcoming concept vehicle, staring from 01-Jan-2022 and valid until 01-Dec-2024.

For more information, see ManufacturingProgram in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| ExternalName | External Name | string |  | 255 |  |  |
| Id | Manufacturing Program ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ManufacturingProgramTemplateId | Manufacturing Program Template ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProgramType | Program Type | picklist |  | 40 |  |  |
| RelatedManufacturingProgramId | Manufacturing Program ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
