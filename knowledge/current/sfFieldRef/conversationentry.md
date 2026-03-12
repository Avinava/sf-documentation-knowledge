---
title: "ConversationEntry"
domain: sfFieldRef
topic: conversationentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.587Z
estimatedTokens: 577
keywords: [ConversationEntry, message, event, voice, call, standard, enhanced, messaging, session, API, version, 43.0, later]
---

# ConversationEntry

> Represents a message or event in a voice call or a standard or
         enhanced messaging session. This object is available in API version 43.0 and
      later.

# ConversationEntry

Represents a message or event in a voice call or a standard or enhanced messaging session. This object is available in API version 43.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ConversationEntry](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversationentry.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActorId | Actor ID | reference |  | 18 |  |  |
| ActorName | Actor Name | string |  | 650 |  |  |
| ActorType | Actor Type | picklist |  | 40 |  |  |
| ClientDuration | ClientDuration | int | 9 |  |  |  |
| ClientTimestamp | ClientTimestamp | datetime |  |  |  |  |
| ConversationEntityId | Conversation ID | reference |  | 18 |  |  |
| ConversationId | Conversation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EntryEndTime | Entry End Time | datetime |  |  |  |  |
| EntryTime | Entry Start Time | datetime |  |  |  |  |
| EntryTimeMilliSecs | Entry Time Milli Seconds(last 3 digits) | int | 9 |  |  |  |
| EntryType | Entry Type | picklist |  | 40 |  |  |
| HasAttachments | Has Attachments | boolean |  |  |  |  |
| Id | Conversation Entry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Message | Message | textarea |  | 131072 |  |  |
| MessageDeliverTime | Message Deliver Time | datetime |  |  |  |  |
| MessageIdentifier | Message ID | string |  | 36 |  |  |
| MessageReadTime | Message Read Time | datetime |  |  |  |  |
| MessageSendTime | Message Send Time | datetime |  |  |  |  |
| MessageStatus | Message Status | picklist |  | 40 |  |  |
| MessageStatusCode | Message Status Code | string |  | 25 |  |  |
| Seq | Sequence | int | 9 |  |  |  |
| ServerReceivedTimestamp | ServerReceivedTimestamp | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
