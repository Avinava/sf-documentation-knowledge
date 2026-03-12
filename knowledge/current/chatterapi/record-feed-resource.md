---
title: "Record Feed Resource"
domain: chatterapi
topic: record-feed-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.373Z
estimatedTokens: 2341
keywords: [Record, Feed, Resource, group, person, file, post, items, another, user’s, URL, Elements]
---

# Record Feed Resource

> The feed of the specified record, which could be a group,
      person, object, file and so on. You can post feed items to the record feed. You can get
      another user’s record feed.

# Record Feed Resource

The feed of the specified record, which could be a group, person, object, file and so on. You can post feed items to the record feed. You can get another user’s record feed.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/record/recordId | Returns a URL to the feed elements for all the records the context user is following, or a URL to all the feed elements of the specified recordId. Use this resource to get a group feed. |
| /chatter/feeds/record/recordId/feed-elements | Returns the feed elements for all the records the context user is following, or all the feed elements of the specified recordId. Use this resource to search a feed or to get the feed elements for a specific feed, including another user’s feed. To use this resource to get the feed elements for a group, specify the group ID as the recordId. |
| /chatter/feeds/record/recordId/​pinned-feed-elements | Get pinned feed elements from a group feed. Pin or unpin a feed element to a group feed. |

## Record Feed URL

Returns a URL to the feed elements for all the records the context user is following, or a URL to all the feed elements of the specified recordId. Use this resource to get a group feed.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If recordId is a user ID, it must be the same as the context user or the alias me.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Response body

[Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

## Record Feed Elements

Returns the feed elements for all the records the context user is following, or all the feed elements of the specified recordId. Use this resource to search a feed or to get the feed elements for a specific feed, including another user’s feed. To use this resource to get the feed elements for a group, specify the group ID as the recordId.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If recordId is a user ID, it must be the same as the context user or the alias me.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFilter | String | Custom filter that applies only to the case feed. See customFeedFilter in the Metadata API Developer Guide for supported values.You can specify customFilter or filter. You can’t specify both. | Optional | 40.0 |
| density | String | The density of the feed. One of these values:AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.The default value is AllUpdates. | Optional | 31.0 |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.NoteBundled posts contain feed-tracked changes and are in record feeds only. | Optional | 31.0 |
| filter | String | Specifies a filter value for a feed.AllQuestions—Feed elements that are questions.AuthoredBy—Feed elements authored by the user profile owner. This value is valid only for the UserProfile feed.CommunityScoped—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the UserProfile feed.QuestionsWithCandidateAnswers—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.QuestionsWithCandidateAnswers​ReviewedPublished—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.Read—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the Record feed of a group.SolvedQuestions—Feed elements that are questions and that have a best answer.UnansweredQuestions—Feed elements that are questions and that don’t have any answers.UnansweredQuestionsWithCandidate​Answers—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.Unread—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the Record feed of a group.UnsolvedQuestions—Feed elements that are questions and that don’t have a best answer.NoteThe filter parameter doesn’t work for group feeds.You can specify customFilter or filter. You can’t specify both. | Optional | 32.0 |
| page | String | A generated token that indicates the view of feed elements in the feed.Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL, for example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 31.0 |
| pageSize | Integer | Specifies the number of elements per page. Valid values are between 1 and 100. If you don't specify a size, the default is 25. | Optional | 31.0 |
| q | String | One or more keywords to search for in the body and comments of feed elements in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 31.0 |
| recentComment​​Count | Integer | Maximum number of comments to include per feed element. The default value is 3. The maximum value is 25. | Optional | 31.0 |
| showInternal​​Only | Boolean | Specifies whether to show only feed elements from internal (non-site) users (true), or not (false). The default value is false. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 31.0 |
| threaded​Comments​Collapsed | Boolean | Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you don’t specify a value, the default is false. | Optional | 44.0 |
| updatedSince | String | An opaque token defining the modification time stamp of the feed and the sort order.Do not construct this token. Retrieve this token from the updatesToken property of the Feed Element Page response body.The updatedSince parameter doesn’t return feed elements that are created in the same second as the request. | Optional | 31.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

-   **[Record Pinned Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record_pin.htm)**
    Get pinned feed elements from a group feed. Pin or unpin a feed element to a group feed.

#### See Also

-   [Feeds and Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm "A feed is a container of feed elements. Feed elements can be feed items, such as specific posts, or generic feed elements, such as bundled posts or recommendations in the feed.")

-   [Get a Record Feed](atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_feed_items_posted_to_record.htm "Get a record feed.")

-   [Get Another User’s Feed](atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_user_profile_feed.htm "Get another user’s Chatter feed.")

## Code Examples

```
/connect/communities/communityId/chatter/feeds/record/recordId
```

```
/connect/communities/communityId/chatter/feeds/record/recordId/feed-elements
```

```
"nextPageUrl": 
"/services/data/v66.0/
chatter/feeds/news/
005D0000001GLowIAN
/feed-elements
?page=2011-03-30T17:34:50Z,
0D5D0000000DSv4KAG"
```

## Related Topics

- /chatter/feeds/record/recordId/​pinned-feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record_pin.htm)
- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- Record Pinned Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record_pin.htm)
- Feeds and Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm)
- Get a Record Feed (atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_feed_items_posted_to_record.htm)
- Get Another User’s Feed (atlas.en-us.chatterapi.meta/chatterapi/quickreference_get_user_profile_feed.htm)
