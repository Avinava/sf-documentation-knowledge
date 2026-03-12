---
title: "Record Feed Items"
domain: chatterapi
topic: record-feed-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.410Z
estimatedTokens: 4863
keywords: [Record, Feed, Items, records, context, user, Post, item, search, Flat]
---

# Record Feed Items

> Get the feed items for the records the context user is following, or
      get the feed items of a record. Post a feed item and search a record feed.

# Record Feed Items

Get the feed items for the records the context user is following, or get the feed items of a record. Post a feed item and search a record feed.

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If recordId is a user ID, it must be the same as the context user or the alias me. To use this resource to get the feed items for a group, specify the group ID as the recordId.

Available version

23.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Record Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm#cc_record_feed_elements).

Requires Chatter

Yes

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| density | String | The density of the feed. One of these values:AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.The default value is AllUpdates. | Optional | 29.0–31.0 |
| page | String | A generated token that indicates the view of feed items in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL, for example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-items ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 23.0–31.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | Optional | 23.0–31.0 |
| q | String | One or more keywords to search for in the body and comments of feed items in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 28.0–31.0 |
| recentComment​​Count | Integer | Maximum number of comments to include per feed item. The default value is 3. The maximum value is 25. | Optional | 29.0–31.0 |
| showInternal​​Only | Boolean | Specifies whether to show only feed items from internal (non-Experience Cloud site) users (true), or not (false). The default value is false. | Optional | 30.0–31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 23.0–31.0 |
| updatedSince | String | An opaque token defining the modification time stamp of the feed and the sort order.Do not construct this token. Retrieve this token from the updatesToken property of the Feed Item Page response body. | Optional | 30.0–31.0 |

Response body for GET

[Feed Item Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm "Chatter feed item page.")

Request body for POST

Root XML tag

<feedItem>

JSON

The following example attaches a poll to a feed item:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachment | Depends on type. | You can specify only one of these values in the attachment parameter. Values are:Attachment Input: Canvas App (v29.0–31.0)Attachment Input: Existing Content (v23.0–31.0)Attachment Input: Feed Poll (v26.0–31.0)Attachment Input: Link (v23.0–31.0)Attachment Input: New File Upload (v23.0–31.0)ImportantAs of API version 32.0, use the capabilities property. | Optional |  |
| body | Message Body Input | Description of message body. Feed item and comment bodies have a 10,000 character limit. Because this limit can change, we recommend that clients make a describeSObjects() call on the FeedItem or FeedComment object. To determine the maximum number of allowed characters, look at the length of the Body or CommentBody field. The body can contain up to 25 mentions.If you specify originalFeedElementId to share a feed item, use the body property to add the first comment to the feed item.To edit this property in a feed item, make a PATCH request to /chatter/feed-elements​/feedElementId. Editing feed posts is supported in version 34.0 and later. | Required unless the feed item has a content capability or a link capability | 23.0 |
| capabilities | Feed Element Capabilities Input | The capabilities that define the behavior of this feed element. | Optional | 31.0 |
| isBookmarked​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false.ImportantAs of API version 32.0, use the capabilities.bookmarks.​isBookmarkedByCurrentUser property. | Optional | 24.0–31.0 |
| feedElementType | String | The type of feed element this input represents.The only valid value is FeedItem. | Required when creating a feed item (POST)Optional when updating a feed item (PATCH) | 31.0 |
| originalFeed​ElementId | String | To share a feed element, specify its 18-character ID.NoteYou can’t share a post and upload a file in the same request body.ImportantIn API version 39.0 and later, use the capabilities.feedEntity​Share.feedEntityId property. | Optional | 31.0–38.0 |
| originalFeedItemId | String | To share a feed item, specify its 18-character ID.ImportantIn API version 32.0–38.0, use the originalFeedElementId property. In API version 39.0 and later, use the capabilities.feedEntity​Share.feedEntityId property. | Optional | 24.0–31.0 |
| subjectId | String | The ID of the parent this feed element is being posted to. This value can be the ID of a user, group, or record, or the string me to indicate the context user.In version 45.0 and later, you can move a feed element from one public group to another by setting this property to the ID of the new public group. You can’t include or change any other properties when moving a feed element. | Required | 31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 26.0 |

Request parameters for POST

Use one of the following sets of parameters. For example, you can’t post a link and attach a file in the same request.

**Parameters for attaching an existing file**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value ExistingContent. | Required | 27.0–31.0 |
| contentDocumentId | String | 18-character ID of an existing file. | Required | 23.0–31.0 |
| isBookmarked​​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false. | Optional | 26.0–31.0 |
| text | String | Text of the feed item. | Optional | 23.0–31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 26.0–31.0 |

**Parameters for attaching a new file**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value NewFile. | Required | 27.0–31.0 |
| desc | String | Description of file being posted.AttentionDon’t use this parameter as of version 27.0. Use description instead. | Optional | 23.0–26.0 |
| description | String | Description of file being posted. | Optional | 27.0–31.0 |
| fileName | String | File name of the file being posted.AttentionDon’t use this parameter as of version 24.0. Use title instead. | Required | 23.0–24.0 |
| isBookmarked​​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false. | Optional | 26.0–31.0 |
| text | String | Text of the feed item. | Optional | 23.0–31.0 |
| title | String | File name of a file to be uploaded and posted. | Required | 24.0–31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 26.0–31.0 |

**Parameters for posting a link**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value Link. | Required | 27.0–31.0 |
| isBookmarked​​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false. | Optional | 26.0–31.0 |
| text | String | Text of the feed item. | Optional | 23.0–31.0 |
| url | String | URL of the link. | Required | 23.0–31.0 |
| urlName | String | Name of the URL. | Optional | 23.0–31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 26.0–31.0 |

**Parameters for posting a poll**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value Poll. | Required | 27.0–31.0 |
| isBookmarked​​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false. | Optional | 26.0–31.0 |
| pollChoice1 through pollChoice10 | String | The choices used to create a feed item with a poll. Specify 2–10 poll choices for each poll. | Required | 26.0–31.0 |
| text | String | Text of the feed item. | Required | 23.0–31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 26.0–31.0 |

**Parameters for sharing a post**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isBookmarked​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false. | Optional | 26.0–31.0 |
| originalFeedItemId | String | The 18-character ID of the feed item you want to share.NoteSharing a post takes precedence over uploading a file. Do not share a post and upload a file in the same post. | Required | 24.0–31.0 |
| text | String | A comment on the shared feed item. | Optional | 28.0–31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 26.0–31.0 |

**Parameters for posting text only**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isBookmarked​​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false. | Optional | 26.0–31.0 |
| text | String | Text of the feed item. The maximum number of characters is 1000. | Required | 23.0–31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 26.0–31.0 |

**Parameters for posting a canvas app**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachmentType | String | The attachment type. Must contain the value Canvas. | Required | 29.0–31.0 |
| description | String | Description of the canvas app | Optional | 29.0–31.0 |
| developerName | String | The developer name (API name) of the canvas app | Required | 29.0–31.0 |
| height | String | The height of the canvas app in pixels. Default height is 200 pixels. | Optional | 29.0–31.0 |
| isBookmarked​​ByCurrentUser | Boolean | Specifies whether to bookmark the new feed item for the user (true) or not (false). The default value is false. | Optional | 29.0–31.0 |
| namespacePrefix | String | The namespace prefix of the Developer Edition organization in which the canvas app was created. | Optional | 29.0–31.0 |
| parameters | String | Parameters passed to the canvas app in JSON format. The JSON must be URL-encoded:parameters={'isUpdated'='true';}" | Optional | 29.0–31.0 |
| text | String | Text of the feed item | Optional | 29.0–31.0 |
| thumbnailUrl | String | The URL to a thumbnail image for the canvas app. Maximum dimensions are 120x120 pixels. | Optional | 29.0–31.0 |
| title | String | The title of the link to the canvas app | Optional | 29.0–31.0 |
| visibility | String | Who can see the post. Valid values are:InternalUsers—If digital experiences is enabled, only members of the default, internal site can see the feed item.AllUsers—If digital experiences is enabled, all members of the site can see the feed item.Default values:For external users, the default value is AllUsers. External users must use this value to see their posts.For internal users, the default value is InternalUsers. Internal users can accept this value or use the value AllUsers to allow external users to see their posts.If the parent of the feed item is a user, group, or direct message, the visibility of the feed item must be AllUsers. | Optional | 29.0–31.0 |

Response body for POST

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

## Record Feed Items Flat

This resource is deprecated as of version 26.0.

Returns a flat feed, that is, a feed where there is no hierarchy between feed items and comments: Feed items and comments are at the same level. All items are returned in chronological order.

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

25.0–26.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description |
| --- | --- | --- |
| numFeedItems | Integer | Specifies the number of feed items returned. Valid values are from 0 through 100. Default value is 25. Because feed items can include comments, specifying 25 flat feed items may actually return more. For example, if each feed item has one comment, and recentCommentCount is greater than 1, 50 flat feed items are returned. |
| page | String | A generated token that indicates the view of feed items in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL. |
| recentComment​Count | Integer | Specifies the number of recent comments returned. Valid values are from 0 through 25. Default value is 3. |
| sort | String. One of the following:CreatedDateDescLastModifiedDateDesc | Sorts the returned feed either by created date in ascending order, or by last modified date, also in ascending order. The default is LastModifiedDateDesc |

Response body for GET

[Flat Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flat_feed.htm "Flat feed.")

## Code Examples

```
/chatter/feeds/record/recordId/feed-items
```

```
"nextPageUrl": 
"/services/data/v66.0/
chatter/feeds/news/
005D0000001GLowIAN
/feed-items
?page=2011-03-30T17:34:50Z,
0D5D0000000DSv4KAG"
```

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

```
/chatter/feeds/record/userId/feed-items/flat
```

## Related Topics

- Record Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Item Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm)
- Attachment Input: Canvas App (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_canvas.htm)
- Attachment Input: Existing Content (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_existing_content.htm)
- Attachment Input: Feed Poll (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_poll.htm)
- Attachment Input: Link (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_link.htm)
- Attachment Input: New File Upload (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_new_file.htm)
- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Feed Element
                                    Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
