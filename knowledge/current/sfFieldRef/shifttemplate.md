---
title: "ShiftTemplate"
domain: sfFieldRef
topic: shifttemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.900Z
estimatedTokens: 471
keywords: [ShiftTemplate, template, creating, shifts, API, version, 51.0, later]
---

# ShiftTemplate

> Represents a template for creating shifts. This object is available in
      API version 51.0 and later.

# ShiftTemplate

Represents a template for creating shifts. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ShiftTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_shifttemplate.htm "HTML (New Window)") in the Consumer Goods Cloud Developer Guide, Field Service Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BackgroundColor | Background Color | string |  | 7 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| Duration | Duration | double |  |  | 6 | 2 |
| Id | Shift Template ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsNonStandard | Non-Standard | boolean |  |  |  |  |
| JobProfileId | Job Profile ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Shift Template Name | string |  | 50 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecordsetFilterCriteriaId | Recordset Filter Criteria ID | reference |  | 18 |  |  |
| ShiftTemplateDurationType | Duration Type | picklist |  | 255 |  |  |
| StartTime | Start Time | time |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeSlotType | Time Slot Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
