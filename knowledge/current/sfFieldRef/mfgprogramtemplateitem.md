---
title: "MfgProgramTemplateItem"
domain: sfFieldRef
topic: mfgprogramtemplateitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.332Z
estimatedTokens: 305
keywords: [MfgProgramTemplateItem, transformation, associated, manufacturing, program, template]
---

# MfgProgramTemplateItem

> Represents information about the transformation type associated with a
         manufacturing program template.

# MfgProgramTemplateItem

Represents information about the transformation type associated with a manufacturing program template.

For more information, see MfgProgramTemplateItem in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdvAccountForecastSetId | Advanced Account Forecast Set ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Manufacturing Program Template Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MfgProgramTemplateId | Manufacturing Program Template ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TemplateItemName | Template Item Name | string |  | 80 |  |  |
| TransformationDisplayOrder | Transformation Display Order | int | 9 |  |  |  |
| TransformationType | Transformation Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
