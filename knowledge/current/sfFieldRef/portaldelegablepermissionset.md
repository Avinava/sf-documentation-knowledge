---
title: "PortalDelegablePermissionSet"
domain: sfFieldRef
topic: portaldelegablepermissionset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.438Z
estimatedTokens: 363
keywords: [PortalDelegablePermissionSet, base, platform, store, permission, assigned, delegated, portal, external, user, admin, DPUA, users, API, version]
---

# PortalDelegablePermissionSet

> PortalDelegablePermissionSet is a base platform object used to store permission
      sets that can be assigned by a delegated portal/external user admin (DPUA) to portal
      users. This object is available in API version 47.0 and later.

# PortalDelegablePermissionSet

PortalDelegablePermissionSet is a base platform object used to store permission sets that can be assigned by a delegated portal/external user admin (DPUA) to portal users. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PortalDelegablePermissionSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_portaldelegablepermissionset.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Portal Delegable Permission Set ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| PermissionSetId | Permission Set ID | reference |  | 18 |  |  |
| ProfileId | Profile ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
