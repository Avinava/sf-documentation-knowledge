---
title: "Conversation Entries Update Input"
domain: chatterapi
topic: conversation-entries-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.420Z
estimatedTokens: 85
keywords: [Conversation, Entries, Input, entry, updates]
---

# Conversation Entries Update Input

> List of conversation entry updates.

# Conversation Entries Update Input

List of conversation entry updates.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conversation​Entries​Updates | Conversation Entry Update Input[] | List of conversation entry updates. | Required | 51.0 |

## Code Examples

```
{
  "conversationEntriesUpdates": [
    {
      "identifier": "36b0f4d9-7c14-43dc-bb9e-7713a4930df0",
      "messageText": "The credit card I used was xxxx-xxxx-xxxx-4321."
    },
    {
      "identifier": "46b0f5d9-7c14-43dc-bb9e-b713a4930df1",
      "messageText": "My ssn is: XXXXX."
    }
  ]
}
```

## Related Topics

- Conversation Entry Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_conversation_entry_update_input.htm)
