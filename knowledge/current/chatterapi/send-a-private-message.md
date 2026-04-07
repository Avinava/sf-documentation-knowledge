---
title: "Send a Private Message"
domain: chatterapi
topic: send-a-private-message
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.381Z
estimatedTokens: 162
keywords: [Send, Message]
---

> Send a private message.

# Send a Private Message

Send a private message.

Resource

[/chatter/users/me/messages/](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_messages_general.htm "Get private messages for the context user. Search across private messages and post a private message.")

HTTP method

POST

Request body

[User Message](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_messaging_input.htm "User message input.")

Request body example

```

```

Request parameter

recipients OR inReplyTo

text

Request parameter example

```

```

Returns

[Message](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm "Message.")

## Code Examples

```
{ "body" : "Are we ready for next week's customer meeting?",
  "recipients" : ["005D0000001GOYpIAO", "005D0000001GbdHIAS"]
}
```

```
/services/data/v66.0/chatter/users/me/messages?recipients=
005D0000001GOYpIAO,005D0000001GbdHIAS&text=Are+we+ready+for+next+week's+customer+meeting?
```

## Related Topics

- /chatter/users/me/messages/ (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_messages_general.htm)
- User Message (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_messaging_input.htm)
- Message (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm)
