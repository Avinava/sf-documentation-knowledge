---
title: "UserDefinedLabelAssignment"
domain: sfFieldRef
topic: userdefinedlabelassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.047Z
estimatedTokens: 343
keywords: [UserDefinedLabelAssignment, relationship, record, label, item, user, assigned, API, version, 61.0, later]
---

# UserDefinedLabelAssignment

> Represents a relationship between a record label and the item the
         user assigned it to. This object is available in API version 61.0 and
      later.

# UserDefinedLabelAssignment

Represents a relationship between a record label and the item the user assigned it to. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserDefinedLabelAssignment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userdefinedlabelassignment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EntityType | Object Type | string |  | 40 |  |  |
| Id | Label Assignment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemId | Item ID | reference |  | 18 |  |  |
| LabelId | Label ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| SubjectOrName | Item Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
