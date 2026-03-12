---
title: "CollaborationInvitation"
domain: sfFieldRef
topic: collaborationinvitation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.506Z
estimatedTokens: 361
keywords: [CollaborationInvitation, invitation, join, Chatter, either, directly, group, API, version, 21.0, later]
---

# CollaborationInvitation

> Represents an invitation to join Chatter,
                either directly or through a group. This object is available in API
        version 21.0 and later.

# CollaborationInvitation

Represents an invitation to join Chatter, either directly or through a group. This object is available in API version 21.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CollaborationInvitation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_collaborationinvitation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Chatter Invitation Id | id |  | 18 |  |  |
| InvitedUserEmail | Invited Email | string |  | 240 |  |  |
| InvitedUserEmailNormalized | Invited Email (Normalized) | email |  | 80 |  |  |
| InviterId | Inviter User ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Modified Date | datetime |  |  |  |  |
| OptionalMessage | Optional Message | string |  | 255 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| SharedEntityId | Shared Entity ID | reference |  | 18 |  |  |
| Status | Invitation Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
