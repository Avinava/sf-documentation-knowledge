---
title: "Feed Element"
domain: chatterapi
topic: feed-element
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.302Z
estimatedTokens: 771
keywords: [Feed, Element, Access, edit, items, edited]
---

# Feed Element

> Access, edit, or delete a feed element. Feed items are the only type
   of feed element that can be edited.

# Feed Element

Access, edit, or delete a feed element. Feed items are the only type of feed element that can be edited.

Resource

```

```

```

```

Available version

31.0

Requires Chatter

Yes

HTTP methods

GET, DELETE, PATCH

PATCH is supported in version 34.0 and later to edit a comment’s body. PATCH can’t be used to update a comment’s capabilities.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| commentSort | String | Order of comments. Values are:CreatedDateLatestAsc—Sorts by most recently created comments in ascending order.CreatedDateOldestAsc—Sorts by oldest comments in ascending order.Relevance—Sorts by most relevant content.The default value is CreatedDateLatestAsc.Sorting in descending order isn’t supported. | Optional | 41.0 |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3. | Optional | 31.0 |
| recentCommentCount | Integer | Maximum number of comments to return with each feed element. The default value is 3. | Optional | 31.0 |
| threadedComments​Collapsed | Boolean | Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you don’t specify, the default is false. | Optional | 44.0 |

Response body for GET

[Generic Feed Element](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_generic.htm#connect_responses_feed_element_generic "A generic feed element.") or [Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

Request body for PATCH

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

Response body for PATCH

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

Example for editing a feed post using the request body

```

```

Example for editing a question title and post

```

```

Example for moving a feed post from one public group to another

```

```

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

#### See Also

-   [Edit a Feed Post](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_feed_post.htm "Edit a feed post in Chatter.")

-   [Edit a Question Title and Post](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_question_title_and_post.htm "Edit a question title and post.")

-   [Move a Feed Post from one Public Group to Another](atlas.en-us.chatterapi.meta/chatterapi/quickreference_reparent_feed_post.htm "Move a Chatter feed post from one public group to another.")

## Code Examples

```
/chatter/feed-elements/feedElementId
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId
```

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

```
{
   "subjectId": "0F9xx00000000CM"
}
```

## Related Topics

- Generic Feed Element (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_generic.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Edit a Feed Post (atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_feed_post.htm)
- Edit a Question Title and Post (atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_question_title_and_post.htm)
- Move a Feed Post from one Public Group to Another (atlas.en-us.chatterapi.meta/chatterapi/quickreference_reparent_feed_post.htm)
