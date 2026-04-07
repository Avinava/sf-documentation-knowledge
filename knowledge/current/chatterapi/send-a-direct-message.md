---
title: "Send a Direct Message"
domain: chatterapi
topic: send-a-direct-message
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.285Z
estimatedTokens: 514
keywords: [Send, Direct, Message]
---

# Send a Direct Message

> Send a direct message.

# Send a Direct Message

Send a direct message.

This example sends a direct message to two people.

Resource

[/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm#connect_resources_feed_element "Post feed elements and search all feed elements in an organization.")

HTTP method

POST

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm#connect_requests_feed_item_input "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body.

This Feed Item Input request body also includes a capabilities property that is a [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.") request body. In this example, the Feed Element Capabilities Input request body includes a directMessage property that is a [Direct Message Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_direct_message_capability_input.htm "Create or update the members of a direct message.") request body.

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
            "text":"Thanks for attending my presentation test run this morning. Send me any feedback."
         }
      ]
   },
   "capabilities":{
      "directMessage":{
         "membersToAdd": ["005R0000000I2X4","005R0000000I23Y"],
         "subject": "Thank you!"
      }
   },
   "subjectId":"me",
   "feedElementType":"FeedItem"
}
```

## Related Topics

- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
- Direct Message Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_direct_message_capability_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
