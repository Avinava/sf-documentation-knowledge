---
title: "ContactShare"
domain: sfFieldRef
topic: contactshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.041Z
estimatedTokens: 289
keywords: [ContactShare, access, levels, Contact, along, explanation, level, record, because, own, ContactAccessLevel, RowCause, Owner]
---

# ContactShare

> Represents a list of access levels to a Contact along with an
      explanation of the access level. For example, if you have access to a record because you own
      it, the ContactAccessLevel is All and
        RowCause is Owner.

# ContactShare

Represents a list of access levels to a Contact along with an explanation of the access level. For example, if you have access to a record because you own it, the ContactAccessLevel is All and RowCause is Owner.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContactShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactshare.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContactAccessLevel | Contact Access | picklist |  | 40 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| Id | Contact Share ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| RowCause | Row Cause | picklist |  | 40 |  |  |
| UserOrGroupId | User/Group ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
