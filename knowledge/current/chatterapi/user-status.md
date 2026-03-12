---
title: "User Status"
domain: chatterapi
topic: user-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.915Z
estimatedTokens: 244
keywords: [User, Status, recent, feed, item]
---

# User Status

> Get the most recent user status feed item. Update or delete
   user status.

# User Status

Get the most recent user status feed item. Update or delete user status.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This resource is no longer available as of version 25.0. Instead, use any feed resource, with the feed-item, such as /chatter/feeds/news/me/feed-items.

Resource

```

```

or

```

```

Available in versions

23.0–24.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, POST

Request body for POST

Root XML tag

<userStatus>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| body | Message Body Input | Description of message body. | 23.0–24.0 |

Request parameter for POST

| Name | Type | Description |
| --- | --- | --- |
| text | String Text to post | Text of the item to be posted to the user's status |

Response body for GET or POST

[User Status](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_status.htm "User status.")

## Code Examples

```
/chatter/users/me/status
```

```
/chatter/users/userId/status
```

## Related Topics

- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- User Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_status.htm)
- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
