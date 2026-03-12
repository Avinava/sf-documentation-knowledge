---
title: "Feed Elements, Post and Search"
domain: chatterapi
topic: feed-elements-post-and-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.104Z
estimatedTokens: 1386
keywords: [Feed, Elements, Post, Search, organization]
---

# Feed Elements, Post and Search

> Post feed elements and search all feed
elements in an organization.

# Feed Elements, Post and Search

Post feed elements and search all feed elements in an organization.

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

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 31.0 |
| pageSize | Integer | Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25. | Optional | 31.0 |
| q | String | One or more keywords to search for in the feed elements visible to the context user. The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Required | 31.0 |
| recentCommentCount | Integer | Maximum number of comments to return with each feed element. The default value is 3. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds. | Optional | 31.0 |
| threadedComments​Collapsed | Boolean | Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you don’t specify, the default is false. | Optional | 44.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

Request body for POST

Feed item and comment bodies have a 10,000 character limit. Because this limit can change, we recommend that clients make a describeSObjects() call on the FeedItem or FeedComment object. To determine the maximum number of allowed characters, look at the length of the Body or CommentBody field.

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| feedElementType | String | Feed elements are the top-level items that a feed contains. Feeds are feed element containers.The only possible value is FeedItem. | Required | 31.0 |
| originalFeed​ElementId | String | If this feed element is shared, the original feed element 18-character ID.ImportantIn version 39.0 and later, use the Feed Item Input with the nested Feed Entity Share Capability Input. | Optional | 31.0–38.0 |
| subjectId | String | The ID of the parent this feed element is being posted to. This value can be the ID of a user, group, or record, or the string me to indicate the context user. | Required | 31.0 |
| text | String | Text of the feed element. | Required | 31.0 |
| visibility | String | Specifies the type of users who can see a feed element.AllUsers—Visibility is not limited to internal users.InternalUsers—Visibility is limited to internal users. | Optional | 31.0 |

Response body for POST

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

Example for posting a feed item using the request body

```

```

Example for posting a feed item with a mention using the request body

```

```

Example for posting a feed item with multiple mentions using the request body

```

```

Example for posting a feed item with files using the request body

```

```

Example for posting a poll using the request body

```

```

Example for posting a rich-text feed item using the request body

```

```

Example for posting a feed item with a code block using the request body

```

```

Example for posting a feed item with an inline image using the request body

```

```

Example for sharing a feed item using the request body

```

```

Example for sending a direct message

```

```

#### See Also

-   [*Salesforce Help*: Action Link Templates](https://help.salesforce.com/s/articleView?id=platform.action_link_group_template.htm&type=5&language=en_US "Salesforce Help: Action Link Templates - HTML (New Window)")

-   [Define Action Links and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm "Define actions links and post with a feed element.")

-   [Define Action Links in a Template and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm "Define action links in a template and post with a feed element.")

-   [Post a Feed Element with a Code Block](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_code_snippet.htm "Post a feed element with a code block in Chatter.")

-   [Post a Feed Element with an Inline Image](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_inline_image.htm "Post a feed element with an inline image in Chatter.")

## Code Examples

```
/chatter/feed-elements
```

```
/connect/communities/communityId/chatter/feed-elements
```

```
{ 
   "body" : {
      "messageSegments" : [
         {
            "type" : "Text",
            "text" : "When should we meet for release planning? "
         }]
       },
   "feedElementType" : "FeedItem",
   "subjectId" : "005D00000016Qxp"
}
```

```
{ 
   "body" : {
      "messageSegments" : [
         {
            "type" : "Text",
            "text" : "When should we meet for release planning? "
         },
         {   
            "type" : "Mention",
            "id" : "005T0000000mzCy"
         }
      ]
   },
   "feedElementType" : "FeedItem",
   "subjectId" : "005D00000016Qxp"
}
```

```
{ 
   "body" : {
      "messageSegments" : [
         {
            "type" : "Text",
            "text" : "When should we meet for release planning? "
         },
         {   
            "type" : "Mention",
            "id" : "005T0000000mzCy"
         },
         {
            "type" : "Text",
            "text" : " "
         },
         {   
            "type" : "Mention",
            "id" : "005B0000000Ek1S"
         } 
      ]
   },
   "feedElementType" : "FeedItem",
   "subjectId" : "005D00000016Qxp"
}
```

## Related Topics

- Feed Element
                  Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Feed Entity Share Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_entity_share_capability_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
- Define Action Links and Post with a Feed Element (atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm)
- Define Action Links in a Template and Post with a Feed Element (atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm)
- Post a Feed Element with a Code Block (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_code_snippet.htm)
- Post a Feed Element with an Inline Image (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_feed_element_inline_image.htm)
