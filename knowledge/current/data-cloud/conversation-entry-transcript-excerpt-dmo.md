---
title: "Conversation Entry Transcript Excerpt DMO"
domain: data-cloud
topic: conversation-entry-transcript-excerpt-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.437Z
estimatedTokens: 767
keywords: [Conversation, Entry, Transcript, Excerpt, DMO, Data, Cloud, data, model, portion, includes, transcript., API, Name, Category, Primary, Subject, Area, Key, Relationships]
---

# Conversation Entry Transcript Excerpt DMO

> The Conversation Entry Transcript Excerpt DMO is a Data Cloud data model
		object for a portion of a Conversation Entry that includes a portion of a transcript.

# Conversation Entry Transcript Excerpt DMO

The Conversation Entry Transcript Excerpt DMO is a Data Cloud data model object for a portion of a Conversation Entry that includes a portion of a transcript.

## Object API Name

ssot\_\_ConversationEntryTranscriptExcerpt\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Conversation Entry Transcript Excerpt Id (ssot\_\_Id\_\_c)

## Relationships

None.

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Conversation Entry Id | ssot__ConversationEntryId__c | A reference ID to the conversation entry that is the source of the conversation reason excerpt. An excerpt with a messaging session will also have the conversation entry. | text |
| Conversation Entry Transcript Excerpt Id | ssot__id__c | A unique ID used as the primary key for the conversation entry transcript excerpt DMO. | text |
| Conversation Intent Status | ssot__ConversationIntentStatus__c | The status of the conversation intent for transcript excerpt. | text |
| Conversation Reason | ssot__ConversationReasonId__c | A reference ID to the conversation reason for the transcript excerpt. | text |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by the external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Duration in Seconds | ssot__DurationInSeconds__c | The duration of the conversation entry transcript excerpt in seconds. | number |
| Email Message | ssot__EmailMessageId__c | A reference ID to the email message that is the source of the conversation reason excerpt. | text |
| Engagement Channel Type | ssot__EngagementChannelType__c | The engagement channel type for the conversation entry transcript excerpt. | text |
| Excerpt Sequence Number | ssot__ExcerptSequenceNumber__c | The sequence number for the conversation entry transcript excerpt. | text |
| Excerpt Text Index | ssot__ExcerptTextIndexText__c | The index text for the conversation entry transcript excerpt. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the conversation entry transcript excerpt. | text |
| Language | ssot__Language__c | The language of the conversation entry transcript excerpt. | text |
| Live Chat Transcript | ssot__ExternalRecordId__c | A reference ID to the live chat transcript that is the source of the conversation reason excerpt. | text |
| Messaging Session | ssot__MessagingSessionId__c | A reference ID to the messaging session that is the source of the conversation reason excerpt. | text |
| Moved | ssot__IsMoved__c | An indicator if the conversation entry transcript excerpt has moved. | text |
| Turn Count | ssot__TurnCount__c | The turn count for the transcript excerpt. | number |
