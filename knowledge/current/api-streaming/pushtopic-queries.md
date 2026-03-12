---
title: "PushTopic Queries"
domain: api-streaming
topic: pushtopic-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.446Z
estimatedTokens: 391
keywords: [PushTopic, Queries, query, basis, channel, record, undelete, events, generate, notification, SOQL, ensure, notifications, sent, timely]
---

# PushTopic Queries

> The PushTopic query is the basis of the PushTopic channel and defines which record create,
      update, delete, or undelete events generate a notification. This query must be a valid SOQL
      query. To ensure that notifications are sent in a timely manner, the following requirements
      apply t

# PushTopic Queries

The PushTopic query is the basis of the PushTopic channel and defines which record create, update, delete, or undelete events generate a notification. This query must be a valid SOQL query. To ensure that notifications are sent in a timely manner, the following requirements apply to PushTopic queries.

-   The query SELECT clause must include Id. For example: SELECT Id, Name FROM....
-   Only one entity per query.
-   The object must be valid for the specified API version.

The fields that you specify in the PushTopic SELECT clause make up the body of the notification that is streamed on the PushTopic channel. For example, if your PushTopic query is SELECT Id, Name, Status\_\_c FROM Invoice\_Statement\_\_c, then the ID, Name and Status\_\_c fields are included in any notifications sent on that channel. Following is an example of a notification message that might appear in that channel:

```

```

If you change a PushTopic query, those changes take effect immediately on the server. A client receives events only if they match the new SOQL query. If you change a PushTopic Name, live subscriptions are not affected. New subscriptions must use the new channel name.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

In API version 37.0 and later, the time format of the createdDate field value has changed to make it consistent with the time format used in the Salesforce app. The time portion now ends with a Z suffix instead of +0000. Both suffixes denote a UTC time zone.

## Code Examples

```
{
  "channel": "/topic/InvoiceStatementUpdates",
  "data":
  {
    "event":
    {

      "createdDate":"2016-03-29T16:40:08.208Z",
      "replayId":13,
      "type":"created"

    },
    "sobject":
    {
      "Name": "INV-0001", 
      "Id": "a00D0000008o6y8IAA",
      "Status__c": "Open"
    }
  }
}
```
