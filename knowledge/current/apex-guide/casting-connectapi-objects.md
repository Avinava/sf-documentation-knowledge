---
title: "Casting ConnectApi Objects"
domain: apex-guide
topic: casting-connectapi-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.888Z
estimatedTokens: 519
keywords: [Casting, ConnectApi, Objects, may, useful, downcast, output, specific]
---

# Casting ConnectApi Objects

> It may be useful to downcast some ConnectApi output objects to a more
specific type.

# Casting ConnectApi Objects

It may be useful to downcast some ConnectApi output objects to a more specific type.

This technique is especially useful for message segments, feed item capabilities, and record fields. Message segments in a feed item are typed as ConnectApi.MessageSegment. Feed item capabilities are typed as ConnectApi.FeedItemCapability. Record fields are typed as ConnectApi.AbstractRecordField. These classes are all abstract and have several concrete subclasses. At runtime you can use instanceof to check the concrete types of these objects and then safely proceed with the corresponding downcast. When you downcast, you must have a default case that handles unknown subclasses.

The following example downcasts a ConnectApi.MessageSegment to a ConnectApi.MentionSegment:

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

The composition of a feed can change between releases. Write your code to handle instances of unknown subclasses.

#### See Also

-   [*Apex Reference Guide*: ChatterFeeds Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm "Apex Reference Guide: ChatterFeeds Class - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.FeedElementCapabilities](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "Apex Reference Guide:
    ConnectApi.FeedElementCapabilities - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.MessageSegment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Apex Reference Guide: ConnectApi.MessageSegment - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.AbstractRecordView](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_output_abstractRecordView.htm "Apex Reference Guide:
    ConnectApi.AbstractRecordView - HTML (New Window)")

## Code Examples

```
if(segment instanceof ConnectApi.MentionSegment) {
	ConnectApi.MentionSegment = (ConnectApi.MentionSegment)segment;
}
```
