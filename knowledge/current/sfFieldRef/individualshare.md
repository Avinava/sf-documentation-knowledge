---
title: "IndividualShare"
domain: sfFieldRef
topic: individualshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.060Z
estimatedTokens: 317
keywords: [IndividualShare, access, levels, data, privacy, record, along, explanation, level, because, own, IndividualAccessLevel, RowCause, Owner, API]
---

# IndividualShare

> Represents a list of access levels to a data privacy record along
			with an explanation of the access level. For example, if you have access to a record
			because you own it, the IndividualAccessLevel is
				All and RowCause is Owner. This
		object is available in API version 42.0 and later.

# IndividualShare

Represents a list of access levels to a data privacy record along with an explanation of the access level. For example, if you have access to a record because you own it, the IndividualAccessLevel is All and RowCause is Owner. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [IndividualShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_individualshare.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Id | Individual Share ID | id |  | 18 |  |  |
| IndividualAccessLevel | Individual Access Level | picklist |  | 40 |  |  |
| IndividualId | Individual ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| RowCause | Apex Sharing Reason ID | picklist |  | 40 |  |  |
| UserOrGroupId | User/Group ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
