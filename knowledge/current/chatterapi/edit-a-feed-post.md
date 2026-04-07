---
title: "Edit a Feed Post"
domain: chatterapi
topic: edit-a-feed-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.177Z
estimatedTokens: 350
keywords: [Edit, Post, Chatter]
---

> Edit a feed post in Chatter.

# Edit a Feed Post

Edit a feed post in Chatter.

Resource

[/chatter/feed-elements/feedElementId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm#connect_resources_feed_element_specific "Access, edit, or delete a feed element. Feed items are the only type of feed element that can be edited.")

HTTP method

PATCH

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body.

Request body example

```

```

Returns

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

## Code Examples

```
{
   "body":{
      "messageSegments":[
         {
            "type":"Text",
            "text":"Check out the latest API documentation on developer.salesforce.com."
         }
      ]
   }
}
```

## Related Topics

- /chatter/feed-elements/feedElementId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm)
- Feed Item
                     Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
