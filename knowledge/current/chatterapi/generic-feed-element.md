---
title: "Generic Feed Element"
domain: chatterapi
topic: generic-feed-element
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:18.680Z
estimatedTokens: 609
keywords: [Generic, Feed, Element]
---

# Generic Feed Element

> A generic feed element.

# Generic Feed Element

A generic feed element.

| Property Name | Type | Description | Filter and Version | Available Version |
| --- | --- | --- | --- | --- |
| body | Feed Item Body | Information about the feed element. | Small, 22.0 | 22.0 |
| capabilities | Feed Element Capabilities | A container for all capabilities that can be included with a feed element. | Medium, 31.0 | 31.0 |
| createdDate | String | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | Small, 29.0 | 31.0 |
| feedElementType | String | Feed elements are the top-level objects that a feed contains. The feed element type describes the characteristics of that feed element. One of these values:Bundle—A container of feed elements. A bundle also has a body made up of message segments that can always be gracefully degraded to text-only values.FeedItem—A feed item has a single parent and is scoped to oneExperience Cloud site or across all Experience Cloud sites. A feed item can have capabilities such as bookmarks, canvas, content, comment, link, poll. Feed items have a body made up of message segments that can always be gracefully degraded to text-only values.Recommendation—A recommendation is a feed element with a recommendations capability. A recommendation suggests records to follow, groups to join, or applications that are helpful to the context user. | Small, 31.0 | 31.0 |
| header | Feed Item Body | The header is the title of the post. This property contains renderable plain text for all the segments of the message. If a client doesn’t know how to render a feed element type, it should render this text. | Medium, 31.0 | 31.0 |
| id | String | ID of the feed element. | Small, 22.0 | 22.0 |
| modifiedDate | String | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | Small, 29.0 | 31.0 |
| parent | One of these response bodies:File DetailFile SummaryGroupGroup DetailRecord SummaryRecord ViewUser DetailUser Summary | The parent of the feed element. | Medium, 29.0 | 28.0 |
| relative​CreatedDate | String | The created date formatted as a relative, localized string, for example, “17m ago” or “Yesterday.” | Small, 29.0 | 31.0 |
| url | String | Connect REST API URL to this feed element. | Small, 29.0 | 22.0 |

#### See Also

-   [Pinned Feed Element Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pinned_feed_element_collection.htm "Collection of pinned feed elements.")

## Related Topics

- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
- File Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_details.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
- Record View (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordView.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
