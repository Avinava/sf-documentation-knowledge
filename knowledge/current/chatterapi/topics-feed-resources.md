---
title: "Topics Feed Resources"
domain: chatterapi
topic: topics-feed-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.454Z
estimatedTokens: 1327
keywords: [Topics, Feed, Resources, topic, URL, Elements]
---

# Topics Feed Resources

> The feed of the specified
topic.

# Topics Feed Resources

The feed of the specified topic.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/feeds/topics/topicId | Returns a URL to the feed items for the specified topic. |
| /chatter/feeds/topics/topicId/feed-elements | Returns all feed elements for the specified topic. |
| /chatter/feeds/topics/topicId/pinned-feed-elements | Get pinned feed elements from a topic feed. Pin or unpin a feed element to a topic feed. |

## Topics Feed URL

Returns a URL to the feed items for the specified topic.

Resource

```

```

```

```

Available since version

28.0

Requires Chatter

Yes

HTTP methods

GET or HEAD

Request parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. |

Response body

[Feed](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm "Chatter feed.")

## Topics Feed Elements

Returns all feed elements for the specified topic.

Resource

```

```

```

```

Available since version

31.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | Filter value for a feed.AllQuestions—Feed elements that are questions.AuthoredBy—Feed elements authored by the user profile owner. This value is valid only for the UserProfile feed.CommunityScoped—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the UserProfile feed.QuestionsWithCandidateAnswers—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.QuestionsWithCandidateAnswers​ReviewedPublished—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.Read—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the Record feed of a group.SolvedQuestions—Feed elements that are questions and that have a best answer.UnansweredQuestions—Feed elements that are questions and that don’t have any answers.UnansweredQuestionsWithCandidate​Answers—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.Unread—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the Record feed of a group.UnsolvedQuestions—Feed elements that are questions and that don’t have a best answer. | Optional | 32.0 |
| page | String | A generated token that indicates the view of feed elements in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL. | Optional | 31.0 |
| pageSize | Integer | Specifies the number of feed elements per page. Valid values are between 1 and 100. The default value is 25. | Optional | 31.0 |
| sort | String | Order of feed items in the feed.CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.CreatedDateDesc—Sorts by most recent creation date.LastModifiedDateDesc—Sorts by most recent activity.MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.The default value is CreatedDateDesc. | Optional | 31.0 |

Response body

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

-   **[Topics Pinned Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_topics_pin.htm)**
    Get pinned feed elements from a topic feed. Pin or unpin a feed element to a topic feed.

#### See Also

-   [Feeds and Feed Elements](atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm "A feed is a container of feed elements. Feed elements can be feed items, such as specific posts, or generic feed elements, such as bundled posts or recommendations in the feed.")

## Code Examples

```
/connect/communities/communityId/chatter/feeds/topics/topicId
```

```
/connect/communities/communityId/chatter/feeds/topics/topicId/feed-elements
```

## Related Topics

- /chatter/feeds/topics/topicId/pinned-feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_topics_pin.htm)
- Feed (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed.htm)
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- Topics Pinned Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_topics_pin.htm)
- Feeds and Feed Elements (atlas.en-us.chatterapi.meta/chatterapi/features_feeds_feed_elements.htm)
