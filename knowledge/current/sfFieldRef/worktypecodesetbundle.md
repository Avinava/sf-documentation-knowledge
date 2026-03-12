---
title: "WorkTypeCodeSetBundle"
domain: sfFieldRef
topic: worktypecodesetbundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.684Z
estimatedTokens: 320
keywords: [WorkTypeCodeSetBundle, relationship, code, visit, Work]
---

# WorkTypeCodeSetBundle

> Represents a relationship between a code set and a visit type (Work
         Type).

# WorkTypeCodeSetBundle

Represents a relationship between a code set and a visit type (Work Type).

For more information, see WorkTypeCodeSetBundle in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppointmentTypeId | Code Set Bundle ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FlowName | Flow Name | string |  | 255 |  |  |
| Id | Work Type Code Set Bundle ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentId | Work Type ID | reference |  | 18 |  |  |
| SchedulingSystem | Scheduling System | picklist |  | 255 |  |  |
| ServiceCategoryId | Code Set Bundle ID | reference |  | 18 |  |  |
| ServiceTypeId | Code Set Bundle ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
