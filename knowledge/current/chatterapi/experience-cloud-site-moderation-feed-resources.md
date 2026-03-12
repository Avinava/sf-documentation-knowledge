---
title: "Experience Cloud Site Moderation Feed Resources"
domain: chatterapi
topic: experience-cloud-site-moderation-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.102Z
estimatedTokens: 1213
keywords: [Experience, Cloud, Site, Moderation, Feed, Resources, containing, elements, comments, flagged, URL]
---

# Experience Cloud Site Moderation Feed Resources

> A feed containing feed elements and comments
         that have been flagged for moderation in an Experience Cloud site.

# Experience Cloud Site Moderation Feed Resources

A feed containing feed elements and comments that have been flagged for moderation in an Experience Cloud site.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/communities/communityId​/chatter/feeds/moderation | If the context user has the Moderate Experiences Feeds permission, this resource returns the URL to the Experience Cloud site moderation feed and a page of feed elements. |
| /connect/communities/communityId​/chatter/feeds/moderation/feed-elements | If the context user has the Moderate Experiences Feeds permission, this resource returns a list of all feed elements and comments in the Experience Cloud site that have been flagged by site members. |

## Experience Cloud Site Moderation Feed URL

If the context user has the Moderate Experiences Feeds permission, this resource returns the URL to the Experience Cloud site moderation feed and a page of feed elements.

Resource

```

```

Available since version

32.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| pageSize | Integer | Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in 0, feed elements aren’t returned with the feed. |
| recentCommentCount | Integer | Maximum number of comments to return with each feed element. The default value is 3. |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Response body

[Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

## Experience Cloud Site Moderation Feed Elements

If the context user has the Moderate Experiences Feeds permission, this resource returns a list of all feed elements and comments in the Experience Cloud site that have been flagged by site members.

Resource

```

```

Available since release

31.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

GET parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | A generated token that indicates the view of feed elements in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL, for example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 29.0 |
| pageSize | Integer | Specifies the number of elements per page. Valid values are between 1 and 100. If you don't specify a size, the default is 25. | Optional | 29.0 |
| q | String | One or more keywords to search for in the body and comments of feed elements in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 29.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 29.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

If a feed element has comments, the Comment Page response body contains a value in the total property to indicate the number of comments. However the comments property doesn’t contain a collection of comments. For example, this excerpt from a response shows a total of 2 comments, but no information about the comments:

```

```

#### See Also

-   [Feeds and Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm "A feed is a container of feed elements. Feed elements can be feed items, such as specific posts, or generic feed elements, such as bundled posts or recommendations in the feed.")

## Code Examples

```
/connect/communities/communityId/chatter/feeds/moderation
```

```
/connect/communities/communityId/chatter/feeds/moderation/feed-elements
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

```
"comments": {
         "comments": [],
         "currentPageUrl": "/services/data/v66.0/connect/communities/0DBD000000002etOAA
/chatter/feed-elements/0D5D0000000LYi9KAG/comments",
         "nextPageUrl": null,
         "total": 2
      },
```

## Related Topics

- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Element
                  Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- Feeds and Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm)
