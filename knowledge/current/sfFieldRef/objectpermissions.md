---
title: "ObjectPermissions"
domain: sfFieldRef
topic: objectpermissions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.971Z
estimatedTokens: 387
keywords: [ObjectPermissions, enabled, permissions, parent, PermissionSet, API, version, 24.0, later]
---

# ObjectPermissions

> Represents the enabled object permissions for
            the parent PermissionSet.
      This object is available in API version 24.0 and later.

# ObjectPermissions

Represents the enabled object permissions for the parent PermissionSet. This object is available in API version 24.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ObjectPermissions](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_objectpermissions.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | ObjectPermissions ID | id |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| PermissionsCreate | Create Records | boolean |  |  |  |  |
| PermissionsDelete | Delete Records | boolean |  |  |  |  |
| PermissionsEdit | Edit Records | boolean |  |  |  |  |
| PermissionsModifyAllRecords | Edit All Records | boolean |  |  |  |  |
| PermissionsRead | Read Records | boolean |  |  |  |  |
| PermissionsViewAllFields | ViewAllFields | boolean |  |  |  |  |
| PermissionsViewAllRecords | Read All Records | boolean |  |  |  |  |
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
