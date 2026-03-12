---
title: "NetworkMemberGroup"
domain: sfFieldRef
topic: networkmembergroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.861Z
estimatedTokens: 355
keywords: [NetworkMemberGroup, group, members, Experience, Cloud, site, either, users, internal, org, external, assigned, portal, profiles, administrator]
---

# NetworkMemberGroup

> Represents a group of members in an Experience Cloud site. Members can
   be either users in your internal org or external users assigned portal profiles. An administrator
   adds members to an Experience Cloud site by adding a profile or a permission set, and any user
   with the profile or permission set becomes a member of the site. This object is available in API
   version 26.0 and later.

# NetworkMemberGroup

Represents a group of members in an Experience Cloud site. Members can be either users in your internal org or external users assigned portal profiles. An administrator adds members to an Experience Cloud site by adding a profile or a permission set, and any user with the profile or permission set becomes a member of the site. This object is available in API version 26.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NetworkMemberGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_networkmembergroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssignmentStatus | Assignment Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Network Member Group ID | id |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NetworkId | Network ID | reference |  | 18 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
