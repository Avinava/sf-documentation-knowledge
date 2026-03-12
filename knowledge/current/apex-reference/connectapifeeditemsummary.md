---
title: "ConnectApi.FeedItemSummary"
domain: apex-reference
topic: connectapifeeditemsummary
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:27.453Z
estimatedTokens: 359
keywords: [ConnectApi.FeedItemSummary, feed, item, summary]
---

# ConnectApi.FeedItemSummary

> A feed item summary.

# ConnectApi.FeedItemSummary

A feed item summary.

Subclass of [ConnectApi.FeedEntitySummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_summary.htm "The summary of a feed entity that is shared with a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| capabilities | ConnectApi.​FeedElement​Capabilities | Container for all capabilities that can be included with a feed item. | 39.0 |
| header | ConnectApi.​MessageBody | Title of the post. This property contains renderable plain text for all the message segments. If a client doesn’t know how to render a feed element type, it should render this text. | 39.0 |
| modifiedDate | Datetime | When the feed item was modified in the form of an ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 39.0 |
| originalFeedItem | ConnectApi.​Reference | Reference to the original feed item if this feed item is a shared feed item; otherwise, null. | 39.0 |
| originalFeed​ItemActor | ConnectApi.Actor | If this feed item is a shared feed item, information about the original poster of the feed item; otherwise, null. | 39.0 |
| photoUrl | String | URL of the photo associated with the feed item. | 39.0 |
| visibility | ConnectApi.​FeedItemVisibility | Specifies who can see a feed item.AllUsers—Visibility is not limited to internal users.InternalUsers—Visibility is limited to internal users. | 39.0 |

## Related Topics

- ConnectApi.FeedEntitySummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_summary.htm)
- ConnectApi.​FeedElement​Capabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
- ConnectApi.​MessageBody (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_body.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- ConnectApi.Actor (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​FeedItemVisibility (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
