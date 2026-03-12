---
title: "User Messages, General"
domain: chatterapi
topic: user-messages-general
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.967Z
estimatedTokens: 905
keywords: [User, Messages, General, context, Search, across, post, message]
---

# User Messages, General

> Get private messages for the context user. Search across
         private messages and post a private message.

# User Messages, General

Get private messages for the context user. Search across private messages and post a private message.

To get all private conversations for the context user, see [User Conversations, General](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsGeneral.htm "Get private conversations for the context user and search across private conversations.").

Private messages and direct messages are different features. Direct messages are newer and offer a richer feature set for private communication in Experience Cloud sites. Direct messages are a capability within Chatter feeds. To work with direct messages, see [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.").

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, POST

Request parameters for GET

| Parameter Name | Type | Required or Optional | Description | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Optional | A page token that indicates where retrieval begins. Get this token from the NextPageUrl property in the response body. | 23.0 |
| pageSize | Integer | Optional | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | 23.0 |
| q | String | Optional | Specifies the string to search. The search string must contain at least two characters, not including any wildcards. For more information about wildcards, see Wildcards. This parameter is optional.NoteThe query parameter only searches message text bodies, not user names, titles, and so on. | 24.0 |

Response body for GET

[Message Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message_collection.htm "Collection of messages.")

Request body for POST

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

Request parameters for POST

| Parameter Name | Type | Required or Optional | Description | Available Version |
| --- | --- | --- | --- | --- |
| inReplyTo | String | Specify either recipients or inReplyTo. You cannot specify both. | ID of an existing message that identifies which conversation this message is part of | 23.0 |
| recipients | String | Specify either recipients or inReplyTo. You cannot specify both. | List of users who are the intended message recipients, up to 9. Comma-separated list of user IDs. | 23.0 |
| text | String | Required | The text of the message, up to 10,000 characters | 23.0 |

Response body for POST

[Message](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm "Message.")

#### See Also

-   [Send a Private Message](atlas.en-us.chatterapi.meta/chatterapi/quickreference_send_private_message.htm "Send a private message.")

## Code Examples

```
/chatter/users/userId/messages
```

```
/connect/communities/communityId/chatter/users/userId/messages
```

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

- User Conversations, General (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsGeneral.htm)
- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Message
                  Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message_collection.htm)
- User
                                    Recipient List Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_user_msg_recp_list_input.htm)
- Message (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm)
- Send a Private Message (atlas.en-us.chatterapi.meta/chatterapi/quickreference_send_private_message.htm)
