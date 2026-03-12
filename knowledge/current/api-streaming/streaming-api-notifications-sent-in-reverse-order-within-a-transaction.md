---
title: "Streaming API Notifications Sent in Reverse Order Within a Transaction"
domain: api-streaming
topic: streaming-api-notifications-sent-in-reverse-order-within-a-transaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.535Z
estimatedTokens: 193
keywords: [Streaming, API, Notifications, Sent, Reverse, Order, Transaction, general, event, delivered, record, changes, exception, triggers, multiple]
---

# Streaming API Notifications Sent in Reverse Order Within a Transaction

> In general, event notifications are delivered in the order of record changes. One
  exception is that when a record triggers multiple notifications within the same transaction, the
  last notifications are delivered first.

# Streaming API Notifications Sent in Reverse Order Within a Transaction

In general, event notifications are delivered in the order of record changes. One exception is that when a record triggers multiple notifications within the same transaction, the last notifications are delivered first.

For example, let’s say you have a PushTopic for insertions and updates of contact records, and the PushTopic query selects fieldA. If a contact is inserted and then an Apex trigger or workflow updates fieldA in the same transaction, the order of notifications sent is:

-   Notification for the update of fieldA
-   Notification for the insertion of the record

In this case, the order of notifications depends on the order in which the Lightning Platform commits transactions.
