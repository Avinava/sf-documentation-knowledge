---
title: "Experience Cloud Site Home Feed Resources"
domain: chatterapi
topic: experience-cloud-site-home-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.092Z
estimatedTokens: 1480
keywords: [Experience, Cloud, Site, Home, Feed, Resources, containing, elements, comments, URL]
---

# Experience Cloud Site Home Feed Resources

> The feed containing feed elements and comments from the
         Experience Cloud site home.

# Experience Cloud Site Home Feed Resources

The feed containing feed elements and comments from the Experience Cloud site home.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/communities/communityId​/chatter/feeds/home | Get the URL to the Experience Cloud home feed and a page of feed elements. |
| /connect/communities/communityId​/chatter/feeds/home/feed-elements | Get all feed elements from the Experience Cloud site home feed. |

## Experience Cloud Site Home Feed URL

Get the URL to the Experience Cloud home feed and a page of feed elements.

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

## Experience Cloud Site Home Feed Elements

Get all feed elements from the Experience Cloud site home feed.

Resource

```

```

Available since release

32.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

GET parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | Filter value for a feed.AllQuestions—Feed elements that are questions.AuthoredBy—Feed elements authored by the user profile owner. This value is valid only for the UserProfile feed.CommunityScoped—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the UserProfile feed.QuestionsWithCandidateAnswers—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.QuestionsWithCandidateAnswers​ReviewedPublished—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.Read—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the Record feed of a group.SolvedQuestions—Feed elements that are questions and that have a best answer.UnansweredQuestions—Feed elements that are questions and that don’t have any answers.UnansweredQuestionsWithCandidate​Answers—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.Unread—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the Record feed of a group.UnsolvedQuestions—Feed elements that are questions and that don’t have a best answer. | Optional | 32.0 |
| page | String | A generated token that indicates the view of feed elements in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL, for example:"nextPageUrl":  "/services/data/v66.0/ chatter/feeds/news/ 005D0000001GLowIAN /feed-elements ?page=2011-03-30T17:34:50Z, 0D5D0000000DSv4KAG"When the sort parameter is MostViewed, the page parameter can’t be used. | Optional | 29.0 |
| pageSize | Integer | Specifies the number of elements per page. Valid values are between 1 and 100. If you don't specify a size, the default is 25.When the sort parameter is MostViewed, the pageSize must be a value from 1 to 25. | Optional | 29.0 |
| q | String | One or more keywords to search for in the body and comments of feed elements in this feed.The search string can contain wildcards and must contain at least two characters that aren’t wildcards. See Wildcards. | Optional | 29.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 29.0 |
| threaded​Comments​Collapsed | Boolean | Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you don’t specify a value, the default is false. | Optional | 44.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/connect/communities/communityId/chatter/feeds/home
```

```
/connect/communities/communityId/chatter/feeds/home/feed-elements
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

- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Feed Element
                  Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
