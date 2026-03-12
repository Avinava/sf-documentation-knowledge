---
title: "SessionPermSetActivation"
domain: sfFieldRef
topic: sessionpermsetactivation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.746Z
estimatedTokens: 399
keywords: [SessionPermSetActivation, permission, assignment, activated, individual, user, session, inserted, activation, event, fires, allowing, settings, apply, user’s]
---

# SessionPermSetActivation

> The SessionPermSetActivation object represents a
   permission set assignment activated during an individual user session. When a SessionPermSetActivation object is inserted into a
   permission set, an activation event fires, allowing the permission settings to apply to the
   user’s specific session. This object is available in API versions 37.0 and
  later.

# SessionPermSetActivation

The SessionPermSetActivation object represents a permission set assignment activated during an individual user session. When a SessionPermSetActivation object is inserted into a permission set, an activation event fires, allowing the permission settings to apply to the user’s specific session. This object is available in API versions 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SessionPermSetActivation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_sessionpermsetactivation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthSessionId | Auth Session ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| Id | SessionPermSetActivation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| PermissionSetGroupId | Permission Set Group ID | reference |  | 18 |  |  |
| PermissionSetId | Permission Set ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
