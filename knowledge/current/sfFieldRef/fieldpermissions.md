---
title: "FieldPermissions"
domain: sfFieldRef
topic: fieldpermissions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.919Z
estimatedTokens: 252
keywords: [FieldPermissions, enabled, permissions, parent, PermissionSet, API, version, 24.0, later]
---

# FieldPermissions

> Represents the enabled field permissions for the
            parent PermissionSet.
      This object is available in API version 24.0 and later.

# FieldPermissions

Represents the enabled field permissions for the parent PermissionSet. This object is available in API version 24.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FieldPermissions](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fieldpermissions.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Field | Field Name | picklist |  | 40 |  |  |
| Id | Field Permissions ID | id |  | 18 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| PermissionsEdit | Edit Field | boolean |  |  |  |  |
| PermissionsRead | Read Field | boolean |  |  |  |  |
| SobjectType | SObject Type Name | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
