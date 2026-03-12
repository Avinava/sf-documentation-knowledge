---
title: "UserShare"
domain: sfFieldRef
topic: usershare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.458Z
estimatedTokens: 256
keywords: [UserShare, sharing, entry, user, record, API, version, 26.0, later]
---

# UserShare

> Represents a sharing entry on a user record. This object is available in API version 26.0 and later.

# UserShare

Represents a sharing entry on a user record. This object is available in API version 26.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_usershare.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Id | User Share ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| RowCause | Row Cause | picklist |  | 40 |  |  |
| UserAccessLevel | User Access Level | picklist |  | 40 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| UserOrGroupId | User/Group ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
