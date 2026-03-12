---
title: "PermissionSetAssignment"
domain: sfFieldRef
topic: permissionsetassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.804Z
estimatedTokens: 280
keywords: [PermissionSetAssignment, user’s, assignment, permission, group, API, version, 22.0, later]
---

# PermissionSetAssignment

> Represents a user’s assignment to a permission set or permission set
   group. This object is available in API version 22.0 and later.

# PermissionSetAssignment

Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PermissionSetAssignment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_permissionsetassignment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssigneeId | Assignee ID | reference |  | 18 |  |  |
| ExpirationDate | Expires On | datetime |  |  |  |  |
| Id | Permission Set Assignment ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsRevoked | Is Revoked | boolean |  |  |  |  |
| PermissionSetGroupId | Permission Set Group ID | reference |  | 18 |  |  |
| PermissionSetId | Permission Set ID | reference |  | 18 |  |  |
| SystemModstamp | Date Assigned | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
