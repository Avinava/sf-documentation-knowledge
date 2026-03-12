---
title: "PushTopic Notification Message Order"
domain: api-streaming
topic: pushtopic-notification-message-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.520Z
estimatedTokens: 484
keywords: [PushTopic, Notification, Message, Order, API, version, 37.0, later, Salesforce, stores, messages, temporarily, event, bus, stored]
---

# PushTopic Notification Message Order

> In API version 37.0 and later, Salesforce stores PushTopic notification messages
        temporarily in the event bus. Before a PushTopic notification message is stored, Salesforce
        assigns it a replay ID value. Subscribers receive notification messages from the event bus
        in the order

# PushTopic Notification Message Order

## PushTopic Notification Message Order with API Version 37.0 and Later

In API version 37.0 and later, Salesforce stores PushTopic notification messages temporarily in the event bus. Before a PushTopic notification message is stored, Salesforce assigns it a replay ID value. Subscribers receive notification messages from the event bus in the order of the replay ID. In general, PushTopic message notification order is the same as the transactions corresponding to the record changes that are committed in Salesforce. One exception is when a record triggers multiple notifications within the same transaction, the last notification is delivered first. For more information, see [Streaming API Notifications Sent in Reverse Order Within a Transaction](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_reverse_order.htm "In general, event notifications are delivered in the order of record changes. One exception is that when a record triggers multiple notifications within the same transaction, the last notifications are delivered first.").

This example shows two PushTopic notification messages for two new invoice statements. INV-0001 is created before INV-0002 and its replayId value is lower.

```

```

## PushTopic Notification Message Order with API Version 36.0 and Earlier

In API version 36.0 and earlier, changes to data in your organization happen sequentially. But the order of the PushTopic event notification messages that you receive isn’t guaranteed. On the client side, you can use createdDate to order the notification messages returned in a channel. The value of createdDate is a UTC date/time value that indicates when the event occurred.

This example shows two PushTopic notification messages for two new invoice statements. INV-0001 is created before INV-0002 and its createdDate value is lower than the one for INV-0002.

```

```

## Code Examples

```
{
  "data": {
    "event": {
      "createdDate": "2021-08-05T17:49:08.990Z",
      "replayId": 2,
      "type": "created"
    },
    "sobject": {
      "Description__c": "New invoice statement #2",
      "Id": "a02RM00000013VrYAI",
      "Status__c": "Open",
      "Name": "INV-0002"
    }
  },
  "channel": "/topic/InvoiceStatementUpdates"
}

{
  "data": {
    "event": {
      "createdDate": "2021-08-05T17:33:48.324Z",
      "replayId": 1,
      "type": "created"
    },
    "sobject": {
      "Description__c": "New invoice statement",
      "Id": "a02RM00000013VmYAI",
      "Status__c": "Open",
      "Name": "INV-0001"
    }
  },
  "channel": "/topic/InvoiceStatementUpdates"
}
```

```
{
  "data": {
    "event": {
      "createdDate": "2013-05-10T18:16:19.000+0000",
      "type": "created"
    },
    "sobject": {
      "Description__c": "New invoice statement #2",
      "Id": "a00D0000008pvxcIAA",
      "Status__c": "Open",
      "Name": "INV-0002"
    }
  },
  "channel": "/topic/InvoiceStatementUpdates"
}

{
  "data": {
    "event": {
      "createdDate": "2013-05-10T18:15:11.000+0000",
      "type": "created"
    },
    "sobject": {
      "Description__c": "New invoice statement #1",
      "Id": "a00D0000008pvzdIAA",
      "Status__c": "Open",
      "Name": "INV-0001"
    }
  },
  "channel": "/topic/InvoiceStatementUpdates"
}
```

## Related Topics

- Streaming API Notifications Sent in Reverse Order Within a Transaction (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_multiple_notifications_reverse_order.htm)
