---
title: "Post a Feed Element and Include Files from Salesforce"
domain: chatterapi
topic: post-a-feed-element-and-include-files-from-salesforce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.926Z
estimatedTokens: 721
keywords: [Post, Feed, Element, Include, Files, Salesforce, Chatter]
---

# Post a Feed Element and Include Files from Salesforce

> Post a feed element with Salesforce files in Chatter.

# Post a Feed Element and Include Files from Salesforce

Post a feed element with Salesforce files in Chatter.

This example posts a feed element with more than one file, all of which have been uploaded to Salesforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 36.0 and later, you can’t create a feed post and upload a binary file in the same request. [Upload files to Salesforce](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#fileDataExample) first, and then use the file IDs to attach one or more files to a feed post.

Resource

[/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm#connect_resources_feed_element "Post feed elements and search all feed elements in an organization.")

HTTP method

POST

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm#connect_requests_feed_item_input "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body.

This Feed Item Input request body also includes a capabilities property that is a [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.") request body. In this example, the Feed Element Capabilities Input includes a files property that is a [Files Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_content_capability_input.htm "Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.") request body. The Files Capability Input request body includes an items property that is a collection of [File ID Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_file_id_input.htm "Attach a file that has already been uploaded or remove a file from a feed element.") request bodies.

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
            "text":"Please take a look at these files."
         }
      ]
   },
   "capabilities":{
      "files":{
         "items": [
            {"id": "069D00000001IOh"},
            {"id": "069D00000002IOg"}
         ]
      }
   },
   "subjectId":"me",
   "feedElementType":"FeedItem"
}
```

## Related Topics

- Upload files to
            Salesforce (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
- Files Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_content_capability_input.htm)
- File ID Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_file_id_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
