---
title: "User Message"
domain: chatterapi
topic: user-message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.111Z
estimatedTokens: 209
keywords: [User, Message, input]
---

# User Message

> User message input.

# User Message

User message input.

Root XML tag

<message>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| body | String | Text of the message body | 23.0 |
| inReplyTo | String | ID of an existing message that identifies which conversation this message is part of. Specify either recipients or inReplyTo. Specify one or the other, not both. | 23.0 |
| recipients | User Recipient List Input | List of users who are the intended message recipients, up to 9. Comma-separated list of user IDs. Specify either recipients or inReplyTo. Specify one or the other, not both. | 23.0 |

Example XML format:

```

```

Example JSON format:

```

```

#### See Also

-   [Send a Private Message](atlas.en-us.chatterapi.meta/chatterapi/quickreference_send_private_message.htm "Send a private message.")

## Code Examples

```
<message>
   <body>Text of the message</body>
   <recipients>
      <recipient>userID</recipient>
      <recipient>userID</recipient>
   </recipients>
   <inReplyTo>messageID</inReplyTo>
</message>
```

```
{
   "body": "Text of the message",
   "recipients": ["userID","userID"],
   "inReplyTo": "messageID"
}
```

## Related Topics

- User
                                    Recipient List Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_msg_recp_list_input.htm)
- Send a Private Message (atlas.en-us.chatterapi.meta/chatterapi/quickreference_send_private_message.htm)
