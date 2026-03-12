---
title: "Only Last PushTopic Notification Sent for the Same Record"
domain: api-streaming
topic: only-last-pushtopic-notification-sent-for-the-same-record
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.532Z
estimatedTokens: 426
keywords: [PushTopic, Notification, Sent, Record, API, version, 36.0, earlier, multiple, notifications, generated, millisecond, transaction]
---

# Only Last PushTopic Notification Sent for the Same Record

> In API version 36.0 and earlier, when multiple PushTopic notifications are generated for
  the same record within about one millisecond and in the same transaction, only the last
  notification is sent.

# Only Last PushTopic Notification Sent for the Same Record

In API version 36.0 and earlier, when multiple PushTopic notifications are generated for the same record within about one millisecond and in the same transaction, only the last notification is sent.

The other notifications are suppressed because notifications are tracked at the millisecond level. When multiple notifications happen within a transaction at the same time—less than one millisecond—only the last notification can be delivered.

For example, let’s say you have a PushTopic for insertions and updates of contact records, and the PushTopic query selects fieldA. If a contact is inserted and then an Apex trigger or workflow updates fieldA within a short time, only the notification for the update is sent. A notification isn’t sent for the contact creation.

However, if the elapsed time between the notifications is over one millisecond, all notifications are sent for the same record, and no notification is suppressed.

To learn more about transactions, see [Apex Transactions](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_transaction.htm "HTML (New Window)") in the Apex Developer Guide and [Flows in Transactions](https://help.salesforce.com/articleView?id=flow_concepts_transaction.htm&language=en_US "HTML (New Window)") in the Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

In API version 37.0 and later, notifications are tracked by a unique ID and don’t depend on the time when they were generated. All notifications for the same record within one transaction are sent, and notifications aren’t suppressed.
