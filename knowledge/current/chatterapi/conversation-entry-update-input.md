---
title: "Conversation Entry Update Input"
domain: chatterapi
topic: conversation-entry-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.424Z
estimatedTokens: 215
keywords: [Conversation, Entry, Input]
---

# Conversation Entry Update Input

> Conversation entry update.

# Conversation Entry Update Input

Conversation entry update.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| identifier | String | Identifier of the updated conversation entry. | Required | 51.0 |
| messageText | String | Message text of the updated conversation entry. | Required | 51.0 |
| relatedRecords | String[] | List of IDs of records to associate with the conversation entry. Supported related records include the messaging session (MessagingSession.Id), voice call (VoiceCall.Id), and conversation entry (ConversationEntry.​MessageIdentifier). | Optional | 52.0 |

#### See Also

-   [Conversation Entries Update Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_conversation_entries_update_input.htm "List of conversation entry updates.")

## Code Examples

```
{
  "identifier": "36b0f4d9-7c14-43dc-bb9e-7713a4930df0",
  "messageText": "The credit card I used was xxxx-xxxx-xxxx-4321."
}
```

## Related Topics

- Conversation Entries Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_conversation_entries_update_input.htm)
