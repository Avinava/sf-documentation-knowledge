---
title: "Participant"
domain: sfFieldRef
topic: participant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.371Z
estimatedTokens: 314
keywords: [Participant, ConversationParticipant, new, referenced, time, created, API, version, 57.0, later]
---

# Participant

> Represents a participant in a ConversationParticipant. An existing or
         new Participant is referenced each time a new ConversationParticipant is created. This
      object is available in API version 57.0 and later.

# Participant

Represents a participant in a ConversationParticipant. An existing or new Participant is referenced each time a new ConversationParticipant is created. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Participant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_participant.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Participant ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParticipantAppType | App Type | string |  | 255 |  |  |
| ParticipantRole | Role | string |  | 36 |  |  |
| ParticipantSubject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
