---
title: "Working with PushTopics"
domain: api-streaming
topic: working-with-pushtopics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.545Z
estimatedTokens: 533
keywords: [Working, PushTopics, PushTopic, record, corresponds, channel, CometD, prefixed, topic, MyPushTopic, Bayeux, client, receive, streamed, events]
---

# Working with PushTopics

> Each PushTopic record that you create corresponds to a channel in CometD.
      The channel name is the name of the PushTopic prefixed with “/topic/”, for example, /topic/MyPushTopic. A Bayeux client can receive streamed events
      on this channel. The channel name is case-sensitive when you subsc

# Working with PushTopics

Each PushTopic record that you create corresponds to a channel in CometD. The channel name is the name of the PushTopic prefixed with “/topic/”, for example, /topic/MyPushTopic. A Bayeux client can receive streamed events on this channel. The channel name is case-sensitive when you subscribe.

As soon as a PushTopic record is created, the system starts evaluating record creates, updates, deletes, and undeletes for matches. Whenever there’s a match, a new notification is generated. The server polls for new notifications for currently subscribed channels every second. This frequency can fluctuate depending on the overall server load.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

-   Record changes that Bulk API performs don’t generate notifications because a large volume of changes can flood a channel. Also, changes made by tools that use Bulk API, such as the Mass Transfer tool or Data Loader, don’t generate notifications.
-   Cascade-deleted records don't trigger PushTopic notifications. To receive notifications for cascade-deleted records, use Change Data Capture instead. For more information, see [Change Data Capture Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_intro.htm).

The PushTopic defines when notifications are generated in the channel. Specify the conditions in these PushTopic fields:

-   [PushTopic Queries](atlas.en-us.api_streaming.meta/api_streaming/pushtopic_queries.htm)
-   [Events](atlas.en-us.api_streaming.meta/api_streaming/events.htm)
-   [Notifications](atlas.en-us.api_streaming.meta/api_streaming/notifications.htm)

To receive notifications, users must have read access on the object in the PushTopic query and the PushTopic itself.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

PushTopic isn’t available for users in Experience Cloud sites, including Partner Community and Customer Community users. Also, PushTopic isn’t available in legacy Customer Portals.

## Related Topics

- PushTopic Queries (atlas.en-us.api_streaming.meta/api_streaming/pushtopic_queries.htm)
- Events (atlas.en-us.api_streaming.meta/api_streaming/events.htm)
- Notifications (atlas.en-us.api_streaming.meta/api_streaming/notifications.htm)
