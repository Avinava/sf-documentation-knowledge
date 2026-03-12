---
title: "Multiple Streaming API Notifications for the Same Record"
domain: api-streaming
topic: multiple-streaming-api-notifications-for-the-same-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.537Z
estimatedTokens: 608
keywords: [Multiple, Streaming, API, Notifications, Record, version, 37.0, later, change, triggers, changes, sent, they, aren't, tracked]
---

# Multiple Streaming API Notifications for the Same Record

> In API version 37.0 and later, if a field change triggers other field changes on the
  same record, more notifications are sent for those fields even if they aren't tracked. Also, if a
  field changes multiple times in a record during a transaction, multiple notifications are
  sometimes sent. The notifications are sent regardless of whether the field values match the
  PushTopic query.

# Multiple Streaming API Notifications for the Same Record

In API version 37.0 and later, if a field change triggers other field changes on the same record, more notifications are sent for those fields even if they aren't tracked. Also, if a field changes multiple times in a record during a transaction, multiple notifications are sometimes sent. The notifications are sent regardless of whether the field values match the PushTopic query.

Multiple notifications are sent because the first change causes the record to be reevaluated for more changes.

For example, let’s say you have a PushTopic that tracks fields specified in the WHERE clause. This snippet inserts the PushTopic with a query on the Case object.

```

```

Suppose that the Case object has a custom field called MyField\_\_c, which the PushTopic query doesn’t track in the WHERE clause. A notification is generated for a record when the tracked Priority field value changes to High. When a trigger or workflow later updates another field, such as MyField\_\_c, a notification is generated even though this field isn’t tracked. The extra notification is sent because the record met the PushTopic criteria the first time. And because it’s still the same transaction, the record remains the source of the notifications.

Another scenario is when a field’s value changes in the same transaction. For example, a case record is created with Priority set to Medium, which doesn't match the PushTopic query. Next, a trigger or workflow changes the Priority to High in the same transaction, which matches the PushTopic query. As a result, two notifications are sent, one for each change, even though the first change doesn't match the criteria. Also, the Priority value in both notifications contains the latest value: High.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

In API version 36.0 and earlier, only a single notification is sent for the last record change, and there are no additional notifications. For more information, see [Only Last PushTopic Notification Sent for the Same Record](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_last_notification.htm "In API version 36.0 and earlier, when multiple PushTopic notifications are generated for the same record within about one millisecond and in the same transaction, only the last notification is sent.").

## Code Examples

```
PushTopic pushTopic = new PushTopic();
pushTopic.Name = 'MyPushTopicExample';
pushTopic.Query = 
  'SELECT Id, Status, CaseNumber, OwnerId, Priority FROM Case WHERE Priority = \'High\'';
pushTopic.ApiVersion = 37.0;
pushTopic.NotifyForFields = 'Where';
insert pushTopic;
```

## Related Topics

- Only Last PushTopic Notification Sent for the Same Record (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_last_notification.htm)
