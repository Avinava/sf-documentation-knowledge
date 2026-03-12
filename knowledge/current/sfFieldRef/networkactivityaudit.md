---
title: "NetworkActivityAudit"
domain: sfFieldRef
topic: networkactivityaudit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.804Z
estimatedTokens: 390
keywords: [NetworkActivityAudit, audit, trail, moderation, actions, Experience, Cloud, sites, API, version, 30.0, later]
---

# NetworkActivityAudit

> Represents an audit trail of moderation actions in Experience Cloud
   sites. This object is available in API version 30.0 and
   later.

# NetworkActivityAudit

Represents an audit trail of moderation actions in Experience Cloud sites. This object is available in API version 30.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NetworkActivityAudit](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_networkactivityaudit.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Action | Action | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 250 |  |  |
| EntityCreatedById | User ID | reference |  | 18 |  |  |
| EntityId | Entity ID | reference |  | 18 |  |  |
| EntityType | Audited Object Type | picklist |  | 255 |  |  |
| Id | Network Activity Audit Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NetworkId | Network ID | reference |  | 18 |  |  |
| ParentEntityId | Parent Entity ID | reference |  | 18 |  |  |
| ParentEntityType | Parent Type of Audited Object | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
