---
title: "UserLogin"
domain: sfFieldRef
topic: userlogin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.133Z
estimatedTokens: 257
keywords: [UserLogin, settings, affect, user’s, ability, log, organization, access, UserPermissions.ManageUsers, permission, API, version, 29.0, later]
---

# UserLogin

> Represents the settings that affect a user’s ability to log
      into an organization. To access this object, you need the
        UserPermissions.ManageUsers permission. This object is available
    in API version 29.0 and later.

# UserLogin

Represents the settings that affect a user’s ability to log into an organization. To access this object, you need the UserPermissions.ManageUsers permission. This object is available in API version 29.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserLogin](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userlogin.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Id | User Login ID | id |  | 18 |  |  |
| IsFrozen | Is Frozen | boolean |  |  |  |  |
| IsPasswordLocked | Is Password Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
