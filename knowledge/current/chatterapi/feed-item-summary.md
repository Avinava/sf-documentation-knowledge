---
title: "Feed Item Summary"
domain: chatterapi
topic: feed-item-summary
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:18.793Z
estimatedTokens: 762
keywords: [Feed, Item, Summary]
---

# Feed Item Summary

> A feed item summary.

# Feed Item Summary

A feed item summary.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actor | One of these response bodies:Record SummaryUser SummaryUnauthenticated User | Entity that created the feed entity. | Small, 39.0 | 39.0 |
| body | Feed Item Body | Information about the feed entity. | Small, 39.0 | 39.0 |
| capabilities | Feed Element Capabilities | Container for all capabilities that can be included with a feed item. | Medium, 39.0 | 39.0 |
| createdDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z, when the entity was created. | Small, 39.0 | 39.0 |
| feedElementType | String | Type of feed entity.Bundle—A container of feed elements. A bundle also has a body made up of message segments that can always be gracefully degraded to text-only values.FeedItem—A feed item has a single parent and is scoped to oneExperience Cloud site or across all Experience Cloud sites. A feed item can have capabilities such as bookmarks, canvas, content, comment, link, poll. Feed items have a body made up of message segments that can always be gracefully degraded to text-only values.Recommendation—A recommendation is a feed element with a recommendations capability. A recommendation suggests records to follow, groups to join, or applications that are helpful to the context user. | Small, 39.0 | 39.0 |
| header | Feed Item Body | Title of the post. This property contains renderable plain text for all the message segments. If a client doesn’t know how to render a feed element type, it should render this text. | Medium, 39.0 | 39.0 |
| id | String | 18-character ID of the feed entity. | Small, 39.0 | 39.0 |
| isEntity​Available | Boolean | Specifies whether the entity is available. If false, either the user doesn’t have access to the entity or the entity was deleted. | Small, 39.0 | 39.0 |
| modifiedDate | String | When the feed item was modified in the form of an ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | Small, 39.0 | 39.0 |
| originalFeedItem | Reference | Reference to the original feed item if this feed item is a shared feed item; otherwise, null. | Small, 39.0 | 39.0 |
| originalFeed​ItemActor | One of these response bodies:Record SummaryUser SummaryUnauthenticated User | If this feed item is a shared feed item, information about the original poster of the feed item; otherwise, null. | Medium, 39.0 | 39.0 |
| parent | One of these response bodies:File SummaryGroupRecord SummaryUser Summary | Parent of the feed entity. | Medium, 39.0 | 39.0 |
| photoUrl | String | URL of the photo associated with the feed item. | Medium, 39.0 | 39.0 |
| relativeCreated​Date | String | Relative created date, for example, “2h ago.” | Small, 39.0 | 39.0 |
| url | String | URL to the feed entity. | Small, 39.0 | 39.0 |
| visibility | String | Specifies who can see a feed item.AllUsers—Visibility is not limited to internal users.InternalUsers—Visibility is limited to internal users. | Small, 39.0 | 39.0 |

## Related Topics

- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Unauthenticated
                    User (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_unauthenticated_user.htm)
- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
