---
title: "Message"
domain: chatterapi
topic: message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.705Z
estimatedTokens: 409
keywords: [Message]
---

# Message

> Message.

# Message

Message.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| body | Feed Item Body | Text of the message. | Small, 29.0 | 23.0 |
| conversationId | String | 18-character ID of the conversation the message is part of. | Big, 29.0 | 23.0 |
| conversationUrl | String | URL to the conversation the message is part of. | Small, 29.0 | 23.0 |
| id | String | 18-character ID of the message. | Small, 29.0 | 23.0 |
| recipients | User Summary[] | Collection of one or more message recipients.NoteThe collection of recipients is empty for the following resources because the conversation participants are already identified in the conversation’s members property in Conversation Detail and Conversation Summary./chatter/users/me/​​conversations/chatter/users/me/​​conversations/​conversationId | Small, 29.0 | 23.0 |
| sentDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | Small, 29.0 | 23.0 |
| sender | User Summary | Information about the user who sent the message. | Small, 29.0 | 23.0 |
| sendingCommunity | Reference | Information about the Experience Cloud site from which the message was sent.Returns null for the default site or if digital experiences isn’t enabled. | Medium, 32.0 | 32.0 |
| url | String | URL to this message. | Small, 29.0 | 23.0 |

#### See Also

-   [Conversation Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_summary.htm "Conversation summary.")

-   [Message Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message_collection.htm "Collection of messages.")

## Related Topics

- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Conversation Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_detail.htm)
- Conversation Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_summary.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Message Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message_collection.htm)
