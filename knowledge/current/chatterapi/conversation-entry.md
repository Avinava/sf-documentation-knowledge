---
title: "Conversation Entry"
domain: chatterapi
topic: conversation-entry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.056Z
estimatedTokens: 334
keywords: [Conversation, Entry]
---

# Conversation Entry

> Entry in the conversation.

# Conversation Entry

Entry in the conversation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| clientDuration | Long | Client duration for the conversation entry, in milliseconds. | Small, 51.0 | 51.0 |
| clientTimestamp | Long | Client timestamp for the conversation entry, in milliseconds. | Small, 51.0 | 51.0 |
| identifier | String | Identifier for the conversation entry. | Small, 51.0 | 51.0 |
| messageText | String | Message text for the conversation entry. This text is returned only for message entry types containing static content messages of text type. | Small, 51.0 | 51.0 |
| relatedRecords | String[] | List of IDs of records related to the conversation entry. Supported related records include the messaging session (MessagingSession.Id), voice call (VoiceCall.Id), and conversation entry (ConversationEntry.​MessageIdentifier). | Small, 52.0 | 52.0 |
| sender | Conversation Participant | Sender for the conversation entry. | Small, 51.0 | 51.0 |
| serverReceived​Timestamp | Long | Server received timestamp for the conversation entry, in milliseconds. | Small, 51.0 | 51.0 |

#### See Also

-   [Conversation Entries](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_entries.htm "List of entries in the conversation.")

## Related Topics

- Conversation Participant (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_participant.htm)
- Conversation Entries (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_entries.htm)
