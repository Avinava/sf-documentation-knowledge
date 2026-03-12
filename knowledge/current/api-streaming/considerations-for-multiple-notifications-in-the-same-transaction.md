---
title: "Considerations for Multiple Notifications in the Same Transaction"
domain: api-streaming
topic: considerations-for-multiple-notifications-in-the-same-transaction
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:00.530Z
estimatedTokens: 384
keywords: [Considerations, Multiple, Notifications, Transaction, behavior, Streaming, API, delivered]
---

# Considerations for Multiple Notifications in the Same Transaction

> Learn about the behavior of Streaming API when multiple
      notifications are delivered within the same transaction.

# Considerations for Multiple Notifications in the Same Transaction

Learn about the behavior of Streaming API when multiple notifications are delivered within the same transaction.

-   **[Streaming API Notifications Sent in Reverse Order Within a Transaction](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_reverse_order.htm)**
    In general, event notifications are delivered in the order of record changes. One exception is that when a record triggers multiple notifications within the same transaction, the last notifications are delivered first.
-   **[Multiple Streaming API Notifications for the Same Record](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_same_record.htm)**
    In API version 37.0 and later, if a field change triggers other field changes on the same record, more notifications are sent for those fields even if they aren't tracked. Also, if a field changes multiple times in a record during a transaction, multiple notifications are sometimes sent. The notifications are sent regardless of whether the field values match the PushTopic query.
-   **[Only Last PushTopic Notification Sent for the Same Record](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_last_notification.htm)**
    In API version 36.0 and earlier, when multiple PushTopic notifications are generated for the same record within about one millisecond and in the same transaction, only the last notification is sent.

## Related Topics

- Streaming API Notifications Sent in Reverse Order Within a Transaction (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_reverse_order.htm)
- Multiple Streaming API Notifications for the Same Record (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_same_record.htm)
- Only Last PushTopic Notification Sent for the Same Record (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_last_notification.htm)
