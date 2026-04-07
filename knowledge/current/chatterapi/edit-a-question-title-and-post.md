---
title: "Edit a Question Title and Post"
domain: chatterapi
topic: edit-a-question-title-and-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.134Z
estimatedTokens: 521
keywords: [Edit, Question, Title, Post]
---

# Edit a Question Title and Post

> Edit a question title and post.

# Edit a Question Title and Post

Edit a question title and post.

Resource

[/chatter/feed-elements/feedElementId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm#connect_resources_feed_element_specific "Access, edit, or delete a feed element. Feed items are the only type of feed element that can be edited.")

HTTP method

PATCH

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body.

This Feed Item Input request body also includes a capabilities property that is a [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.") request body. In this example, the Feed Element Capabilities Input includes a questionAndAnswers property that is a [Question and Answers Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_question_and_answers_capability_input.htm "Create or edit a question feed element or set the best answer of the existing question feed element.") request body.

Request body example

```

```

Returns

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

## Code Examples

```apex
{
   "body":{
      "messageSegments":[
         {
            "type":"Text",
            "text":"The latest public versions are on developer.salesforce.com."
         }
      ]
   },
   "capabilities":{
      "questionAndAnswers" : {
          "questionTitle" : "Where can I find API documentation"
      }
   }
}
```

## Related Topics

- /chatter/feed-elements/feedElementId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_specific.htm)
- Feed Item
                     Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
- Question and Answers Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_question_and_answers_capability_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
