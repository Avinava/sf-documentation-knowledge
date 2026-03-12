---
title: "News Feed Resources"
domain: chatterapi
topic: news-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.292Z
estimatedTokens: 2855
keywords: [News, Feed, Resources, containing, elements, interest, context, user, post, items, URL, Is-Modified]
---

# News Feed Resources

> A feed containing feed elements of interest to the context
         user. You can post feed items to the news feed.

# News Feed Resources

A feed containing feed elements of interest to the context user. You can post feed items to the news feed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

To match the feed displayed in the Chatter UI, the composition of this feed may change between releases.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/news/me | Returns a URL to the feed elements for all feeds for the context user. |
| /chatter/feeds/news/me/is-modified | Returns information about whether the news feed has been updated or changed since the specified time and date. |
| /chatter/feeds/news/me/feed-elements | All feed elements from all groups the context user either owns or is a member of, as well as all files, records, and users the context user follows. Use this resource to get information about feed elements and to post feed elements. |

## News Feed URL

Returns a URL to the feed elements for all feeds for the context user.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Request parameter

| Parameter Name | Type | Description |
| --- | --- | --- |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Response body

[Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

Example response body

```

```

## News Feed Is-Modified

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This feature is available through a Feed Polling pilot program. This pilot program is closed and not accepting new participants.

Returns information about whether the news feed has been updated or changed since the specified time and date.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=chatterapi)

#### Tip

If you are working with remote organizations such as an ISV, use the [/connect/organization](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_connect.htm#org_resource) resource and the feedPolling property of the Feature response body to shape your polling strategy. If feedPolling isn’t enabled, be conservative in how often you poll for new content.

Use the Is-Modified resource to poll the news feed

1.  Use either of the following resources to get the latest elements from a news feed or to get information about the feed: [/chatter/feeds/news/me/feed-elements](#cc_news_feed_elements), [/chatter/feeds/news/me](#cc_news_feed_url).

    The response bodies for both resources contain the isModifiedUrl property. This property contains the URL to the Is-Modified resource, which includes a since request parameter that defines the last modified date of the feed. If the sort order of the request to the news feed changes, the news feed is modified.

2.  Issue a GET request to the URL in the isModifiedUrl property.

    The Feed Modified Info response contains the following properties.

    -   isModified—a boolean indicating whether the feed has been updated since the last time you checked. Conditions under which this property is true depend on the sort order of the original request to the news feed. For example, if the feed is sorted by posts (CreatedDateDesc) and a comment was added, isModified is false.
    -   nextPollUrl—a string containing the URL of the Is-Modified resource. This property contains a URL only if isModified is false. If isModified is true, nextPollUrl is null.
3.  If the isModified property is true, issue a GET request to the News Feed Elements resource to refresh the news feed.
4.  If the isModified property is false, issue a GET request to the URL in the nextPollUrl property. This request also returns a Feed Modified Info response body that contains the isModified and nextPollUrl properties.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

We don’t recommend exceeding one poll per minute.

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

26.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Request parameter

| Parameter Name | Type | Description | Required or Optional | Available Since |
| --- | --- | --- | --- | --- |
| since | String | An opaque token containing information about the modification time stamp of the feed and the sort order.Do not construct this token. Retrieve this token from the isModifiedToken property of the Feed Item Page or Feed Modified Info response body. | Required | 23.0 |

Response body

[Feed Modified Info](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_mod_info.htm "Feed modified information.")

## News Feed Elements

All feed elements from all groups the context user either owns or is a member of, as well as all files, records, and users the context user follows. Use this resource to get information about feed elements and to post feed elements.

For information about posting a feed element, see [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.").

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

31.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| density | String | The density of the feed. One of these values:AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.The default value is AllUpdates. | Optional | 31.0 |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3.NoteBundled posts contain feed-tracked changes and are in record feeds only. | Optional | 31.0 |
| filter | String | Filter value for a feed.AllQuestions—Feed elements that are questions.AuthoredBy—Feed elements authored by the user profile owner. This value is valid only for the UserProfile feed.CommunityScoped—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the UserProfile feed.QuestionsWithCandidateAnswers—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.QuestionsWithCandidateAnswers​ReviewedPublished—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.Read—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the Record feed of a group.SolvedQuestions—Feed elements that are questions and that have a best answer.UnansweredQuestions—Feed elements that are questions and that don’t have any answers.UnansweredQuestionsWithCandidate​Answers—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.Unread—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the Record feed of a group.UnsolvedQuestions—Feed elements that are questions and that don’t have a best answer. | Optional | 32.0 |
| page | String | A generated token that indicates the view of feed elements in the feed.Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 31.0 |
| pageSize | Integer | Specifies the number of elements per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | Optional | 31.0 |
| q | String | One or more keywords to search for in the body and comments of feed elements in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 31.0 |
| recentComment​Count | Integer | Maximum number of comments to include per feed element. The default value is 3. The maximum value is 25. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 31.0 |
| updatedSince | String | An opaque token defining the modification time stamp of the feed and the sort order.Do not construct this token. Retrieve this token from the updatesToken property of the Feed Element Page response body.The updatedSince parameter doesn’t return feed elements that are created in the same second as the request. | Optional | 31.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

#### See Also

-   [Feeds and Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm "A feed is a container of feed elements. Feed elements can be feed items, such as specific posts, or generic feed elements, such as bundled posts or recommendations in the feed.")

## Code Examples

```
/chatter/feeds/news/userId
```

```
/connect/communities/communityId/chatter/feeds/news/userId
```

```
{ 
   "feedElementPostUrl": "/services/data/v66.0/chatter/feed-elements",
   "feedElementsUrl": "/services/data/v66.0/chatter/feeds/news/005xx000001Sv1mAAB/feed-elements"
}
```

```
/chatter/feeds/news/userId/is-modified
```

```
/connect/communities/communityId/chatter/feeds/news/userId/is-modified
```

## Related Topics

- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
- /connect/organization (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_connect.htm)
- Feed Modified
                  Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_mod_info.htm)
- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Element
                  Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- Feeds and Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm)
