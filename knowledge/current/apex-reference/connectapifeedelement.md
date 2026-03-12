---
title: "ConnectApi.FeedElement"
domain: apex-reference
topic: connectapifeedelement
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:27.404Z
estimatedTokens: 860
keywords: [ConnectApi.FeedElement, Feed, elements, top-level, items, Feeds, element, containers]
---

# ConnectApi.FeedElement

> Feed elements are the top-level items that a feed contains. Feeds are feed element
    containers.

# ConnectApi.FeedElement

Feed elements are the top-level items that a feed contains. Feeds are feed element containers.

This class is abstract.

Superclass of:

-   [ConnectApi.FeedItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm "Feed item.")
-   [ConnectApi.GenericFeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_generic_feed_element.htm#apex_connectapi_output_generic_feed_element "A concrete implementation of the abstract ConnectApi.FeedElement class.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| body | ConnectApi.​FeedBody | Information about the feed element.ImportantUse the header.text property as the default value for rendering text because the body.text property can be null. | 22.0 |
| capabilities | ConnectApi.​FeedElement​Capabilities | A container for all capabilities that can be included with a feed element. | 31.0 |
| createdDate | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | 31.0 |
| feedElementType | ConnectApi.​FeedElementType | Feed elements are the top-level objects that a feed contains. The feed element type describes the characteristics of that feed element. One of these values:Bundle—A container of feed elements. A bundle also has a body made up of message segments that can always be gracefully degraded to text-only values.FeedItem—A feed item has a single parent and is scoped to oneExperience Cloud site or across all Experience Cloud sites. A feed item can have capabilities such as bookmarks, canvas, content, comment, link, poll. Feed items have a body made up of message segments that can always be gracefully degraded to text-only values.Recommendation—A recommendation is a feed element with a recommendations capability. A recommendation suggests records to follow, groups to join, or applications that are helpful to the context user. | 31.0 |
| header | ConnectApi.​MessageBody | The header is the title of the post. This property contains renderable plain text for all the segments of the message. If a client doesn’t know how to render a feed element type, it should render this text. | 31.0 |
| id | String | 18-character ID of the feed element. | 22.0 |
| modifiedDate | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. | 31.0 |
| parent | ConnectApi.​ActorWithId | Feed element’s parent | 28.0 |
| relativeCreated​Date | String | The created date formatted as a relative, localized string, for example, “17m ago” or “Yesterday.” | 31.0 |
| url | String | Connect REST API URL to this feed element. | 22.0 |

#### See Also

-   [ConnectApi.Announcement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcement.htm "An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.")

-   [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

-   [ConnectApi.PinnedFeedElements](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_pinned_feed_element_collection.htm "List of pinned feed elements for a feed.")

-   [ConnectApi.QuestionAndAnswersSuggestions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_question_and_answer_suggestion_collection.htm "Question and answers suggestions.")

## Related Topics

- ConnectApi.FeedItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm)
- ConnectApi.GenericFeedElement (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_generic_feed_element.htm)
- ConnectApi.​FeedBody (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_body.htm)
- ConnectApi.​FeedElement​Capabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​FeedElementType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​MessageBody (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_body.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ActorWithId (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm)
- ConnectApi.Announcement (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcement.htm)
