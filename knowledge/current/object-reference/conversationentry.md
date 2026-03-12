---
title: "ConversationEntry"
domain: object-reference
topic: conversationentry
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.420Z
estimatedTokens: 1861
keywords: [ConversationEntry, message, event, voice, call, messaging, session, schema, conversation, entries, legacy, chat, Refer, Off-Core, Model]
---

# ConversationEntry

> Represents a message or event in a voice call or messaging session.
         The schema on this page only applies to conversation entries for legacy chat. Refer to the
         ConversationEntry (Off-Core) schema in the Messaging Object Model guide to see the
         ConversationEntry schema for Enhanced Channels. This object is available in API
      version 43.0 and later.

# ConversationEntry

Represents a message or event in a voice call or messaging session. The schema on this page only applies to conversation entries for legacy chat. Refer to the ConversationEntry (Off-Core) schema in the [Messaging Object Model](https://developer.salesforce.com/docs/service/messaging-object-model/guide/overview.html) guide to see the ConversationEntry schema for Enhanced Channels. This object is available in API version 43.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To use the ConversationEntry object, enable the Access Conversation Entries user permission, which is available in API version 50.0 and later. Earlier versions do not require permissions.

## Fields

| Field | Details |
| --- | --- |
| ActorId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the author. The possible values can be null or any ID in the following domain set:BotDefinitionLiveChatVisitorMessagingEndUserUserThis is a polymorphic relationship field.Relationship NameActorRelationship TypeLookupRefers ToMessagingEndUser, User |
| ActorName | TypestringPropertiesCreate, Filter, Nillable, SortDescriptionThe name of the author sending the message or event. |
| ActorType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe author of this entry in the chat history. The valid values include:AgentBotEndUserSupervisorSystem |
| ClientDuration | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe length in milliseconds for the entry. This field is used with voice messages and other applicable use cases. This value may be 0 if not set by the client. This field is available in API version 51.0 and later. |
| ClientTimestamp | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe timestamp sent by the client when it generated the entry. This field is available in API version 51.0 and later. |
| ConversationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe MessagingSession ID this entry belongs to.This is a polymorphic relationship field.Relationship NameConversationRelationship TypeLookupRefers ToMessagingSession, VoiceCall |
| EntryEndTime | TypedatetimePropertiesCreate, Filter, Nillable, SortDescriptionThe timestamp that this entry ended in the chat history. This field is available in API version 48.0 and later. |
| EntryTime | TypedatetimePropertiesCreate, Filter, SortDescriptionThe timestamp of this entry in the chat history. |
| EntryTimeMilliSecs | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe milliseconds value for the time when an entry was received by the server. Note that the related EntryTime field does not provide millisecond accuracy. This field is available in API version 51.0 and later. |
| EntryType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of entry in the chat history. Can be a message (text) or an event. The possible values include:TextAdminOptedInAdminOptedOutBotEscalatedChatbotClosedIdleSessionChatbotEndedChatByAction—Conversation ended by automated actionChatbotEndedTransferNotConfigured—Conversation ended because transfer fail is not configuredChatbotEstablishedChatbotNotEstablishedEndUserOptedInEndUserOptedOut |
| HasAttachments | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether a message has attachments associated with it (true) or not (false). |
| Message | TypetextareaPropertiesCreate, NillableDescriptionThe message or event sent by the author. In ConversationEntry records for enhanced Messaging channels or Messaging for In-App and Web, the Message field is blank due to data storage differences from standard channels. |
| MessageDeliverTime | TypedatetimePropertiesCreate, Filter, Nillable, SortDescriptionUnused field reserved for future use. |
| MessageIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique ID for the message. Maximum size is 36 characters. |
| MessageReadTime | TypedatetimePropertiesCreate, Filter, Nillable, SortDescriptionUnused field reserved for future use. |
| MessageSendTime | TypedatetimePropertiesCreate, Filter, Nillable, SortDescriptionUnused field reserved for future use. |
| MessageStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the message sent by the author. The valid values include:DeliveredErrorPendingReadSent |
| MessageStatusCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code associated with a message status. MessageStatusCode is only populated when a message is undeliverable |
| Seq | TypeintPropertiesCreate, Filter, Group, SortDescriptionThe sequence position of this entry in the chat history. |
| ServerReceivedTimestamp | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe timestamp recorded when the server received the entry. This is a unique value and is used for ordering. This value can also be referred to as the “transcripted timestamp.” This field is available in API version 51.0 and later. |

## Usage

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

The schema on this page only applies to conversation entries for legacy chat. The legacy chat product is in maintenance-only mode, and we won't continue to build new features. Refer to the ConversationEntry (Off-Core) schema in the [Messaging Object Model](https://developer.salesforce.com/docs/service/messaging-object-model/guide/overview.html) guide to see the ConversationEntry schema for Enhanced Channels.

In standard SMS, WhatsApp, and Facebook Messenger channels, a ConversationEntry record is created for each message sent by a messaging end user or an agent, bot, or automation. Each ConversationEntry record is associated with a MessagingSession record, which represents the interaction between the messaging end user and the business. Access and work with ConversationEntry records like any standard object. You can report on messaging activity and track the conversation workflow end to end. You can also download or delete transcripts, redact sensitive text, and customize your workflows with solutions built on the ConversationEntry object.

In enhanced Messaging channels, Messaging for In-App and Web, and Service Cloud Voice ("enhanced channels"), inbound and outbound messages are processed in one of two ways depending on your location.

-   A ConversationEntry record is created but the Message field is blank, or
-   No ConversationEntry record is created.

To get the fullest picture of conversations in enhanced channels, use Data Cloud, the Connect REST API, or the Conversation Transcript Export tool to access transcripts. See [Accessing Messaging and Voice Conversation Data](https://help.salesforce.com/s/articleView?id=service.conversation_transcript_access.htm&type=5&language=en_US "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

ConversationEntry records aren’t created until the messaging session ends and the agent closes the session tab. One exception is for the first message in any standard messaging session, whose ConversationEntry record is created immediately.
