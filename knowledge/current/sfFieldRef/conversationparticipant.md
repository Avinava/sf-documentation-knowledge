---
title: "ConversationParticipant"
domain: sfFieldRef
topic: conversationparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.601Z
estimatedTokens: 500
keywords: [ConversationParticipant, active, participant, conversation, new, record, created, time, joins, API, version, 49.0, later]
---

# ConversationParticipant

> Represents an active participant in a conversation. A new
      ConversationParticipant record is created each time a participant joins a conversation.
    This object is available in API version 49.0 and later.

# ConversationParticipant

Represents an active participant in a conversation. A new ConversationParticipant record is created each time a participant joins a conversation. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ConversationParticipant](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversationparticipant.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppType | App Type | string |  | 255 |  |  |
| ConversationId | Conversation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Conversation Participant ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JoinedTime | Joined Time | datetime |  |  |  |  |
| JoinedTimeMilliSecs | Milliseconds portion of Joined Time | int | 9 |  |  |  |
| LastActiveTime | Last Active Time | datetime |  |  |  |  |
| LastActiveTimeMilliSecs | Milliseconds portion of Last Active Time | int | 9 |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LeftTime | Left Time | datetime |  |  |  |  |
| LeftTimeMilliSecs | Milliseconds portion of Left Time | int | 9 |  |  |  |
| Name | Conversation Participant Name | string |  | 30 |  |  |
| ParticipantContext | Participant Context | string |  | 255 |  |  |
| ParticipantDisplayName | Participant Display Name | string |  | 255 |  |  |
| ParticipantEntityId | ParticipantEntity ID | reference |  | 18 |  |  |
| ParticipantKey | Participant Key | string |  | 120 |  |  |
| ParticipantRole | Participant Role | string |  | 36 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
