---
title: "Experience Cloud Site Moderation Feed Items"
domain: chatterapi
topic: experience-cloud-site-moderation-feed-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.108Z
estimatedTokens: 576
keywords: [Experience, Cloud, Site, Moderation, Feed, Items, flagged, members]
---

# Experience Cloud Site Moderation Feed Items

> Get feed items that have been flagged by Experience Cloud site
      members.

# Experience Cloud Site Moderation Feed Items

Get feed items that have been flagged by Experience Cloud site members.

Resource

/connect/communities/communityId/chatter/feeds/moderation/feed-items

Available version

29.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Experience Cloud Site Moderation Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_communities_moderation.htm#moderation_feed_elements_title).

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | A generated token that indicates the view of feed items in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL, for example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-items ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG" | Optional | 29.0–31.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 100. If you don't specify a size, the default is 25. | Optional | 29.0–31.0 |
| q | String | One or more keywords to search for in the body and comments of feed items in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 29.0–31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 29.0–31.0 |

Response body for GET

[Feed Item Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm "Chatter feed item page.")

## Code Examples

```
"nextPageUrl": 
"/services/data/v66.0/
chatter/feeds/news/
005D0000001GLowIAN
/feed-items
?page=2011-03-30T17:34:50Z,
0D5D0000000DSv4KAG"
```

## Related Topics

- Experience Cloud Site Moderation Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_communities_moderation.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Item Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_page.htm)
