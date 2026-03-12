---
title: "EventStagedInviteeEmail"
domain: sfFieldRef
topic: eventstagedinviteeemail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.542Z
estimatedTokens: 413
keywords: [EventStagedInviteeEmail, relationship, event, email, address, invited, doesn’t, match, user, contact, lead, record, Data, unmatched, represented]
---

# EventStagedInviteeEmail

> Represents the relationship between an event and an email address invited to
         the event that doesn’t match to a user, contact, or lead record. Data about the unmatched
         email address is represented in StagedInviteeEmail. This object represents event-related
         details, such as the invitee's attendance response to the event. This object is
      available in API version 66.0 and later.

# EventStagedInviteeEmail

Represents the relationship between an event and an email address invited to the event that doesn’t match to a user, contact, or lead record. Data about the unmatched email address is represented in StagedInviteeEmail. This object represents event-related details, such as the invitee's attendance response to the event. This object is available in API version 66.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EventStagedInviteeEmail](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventstagedinviteeemail.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventId | Event ID | reference |  | 18 |  |  |
| Id | Event Staged Invitee Email ID | id |  | 18 |  |  |
| IsArchived | Is Archived | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOrganizer | Is Organizer | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Event Staged Invitee Email Name | string |  | 255 |  |  |
| StagedInviteeEmailId | Staged Invitee Email ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
