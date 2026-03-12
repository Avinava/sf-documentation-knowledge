---
title: "Post a Poll"
domain: chatterapi
topic: post-a-poll
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.932Z
estimatedTokens: 432
keywords: [Post, Poll, feed, element, Chatter]
---

# Post a Poll

> Post a poll feed element in Chatter.

# Post a Poll

Post a poll feed element in Chatter.

This example posts a poll feed element with two choices.

Resource

[/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm#connect_resources_feed_element "Post feed elements and search all feed elements in an organization.")

HTTP method

POST

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm#connect_requests_feed_item_input "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that includes the text of the poll.

This Feed Item Input request body also includes a capabilities property that is a [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.") request body. In this example, the Feed Element Capabilities Input includes a poll property that is a [Poll Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_poll_capability_input.htm "Create or vote on a poll feed element.") request body. The Poll Capability Input request body includes a choices property that indicates the poll choices.

Request body example

```

```

Returns

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm#connect_responses_feed_item "A feed is made up of feed elements. A feed item is a type of feed element.")

## Code Examples

```
{
   "body":{
      "messageSegments":[
         {
            "type":"Text",
            "text":"When should we meet for release planning?"
         }
      ]
   },
   "capabilities":{
      "poll":{
         "choices":[
            "Monday",
            "Tuesday"
         ]
      }
   },
   "feedElementType":"FeedItem",
   "subjectId":"me"
}
```

## Related Topics

- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
- Poll Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_poll_capability_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
