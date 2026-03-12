---
title: "PushTopic Considerations"
domain: api-streaming
topic: pushtopic-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:00.439Z
estimatedTokens: 239
keywords: [PushTopic, Considerations, Keep, mind, subscribing, events]
---

# PushTopic Considerations

> Keep in mind these considerations when subscribing to PushTopic events.

# PushTopic Considerations

Keep in mind these considerations when subscribing to PushTopic events.

-   **[PushTopic Event Publishing for PersonAccount](atlas.en-us.api_streaming.meta/api_streaming/pushtopic_event_publishing_for_personaccount.htm)**
    PushTopic only targets the Account record when publishing events for changes to a PersonAccount. Although a PersonAccount is internally composed of one Account record and one Contact record, changes to the Contact record are handled through the Account record with which it is associated in PushTopic event subscriptions. Therefore, PushTopic events are based solely on changes to the Account record.
-   **[PushTopic Notification Message Order](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_message_order.htm)**

-   **[Considerations for Multiple Notifications in the Same Transaction](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications.htm)**

## Related Topics

- PushTopic Event Publishing for PersonAccount (atlas.en-us.api_streaming.meta/api_streaming/pushtopic_event_publishing_for_personaccount.htm)
- PushTopic Notification Message Order (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_message_order.htm)
- Considerations for Multiple Notifications in the Same Transaction (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications.htm)
