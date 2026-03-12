---
title: "Security and the PushTopic Query"
domain: api-streaming
topic: security-and-the-pushtopic-query
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.463Z
estimatedTokens: 436
keywords: [Security, PushTopic, Query, subscriber, doesn’t, access, referenced, SELECT, clause, aren’t, included, notification, they, don’t, receive]
---

# Security and the PushTopic Query

> If the subscriber doesn’t have access to fields referenced in the query SELECT clause, then those
      fields aren’t included in the notification. If the subscriber doesn’t have access to all
      fields referenced in the query WHERE clause, then they don’t receive the notification. In
      addit

# Security and the PushTopic Query

Subscribers receive notifications about records that were created, updated, deleted, or undeleted if they have:

-   Field-level security access to the fields specified in the WHERE clause
-   Read access on the object in the query
-   Read access on the PushTopic
-   Visibility of the new or modified record based on sharing rules

If the subscriber doesn’t have access to fields referenced in the query SELECT clause, then those fields aren’t included in the notification. If the subscriber doesn’t have access to all fields referenced in the query WHERE clause, then they don’t receive the notification. In addition to the field permissions that the subscriber must have, the user who creates or manipulates the record, which causes the notification to be generated, must have sufficient permissions to the fields in the SELECT clause. Otherwise, the notification that the subscriber receives doesn't include the fields the user doesn't have access to even if the subscriber has access to them.

For example, assume a user tries to subscribe to a PushTopic with this Query value.

```

```

If the subscriber doesn't have access to Bonus\_Received\_\_c or Bonus\_Amount\_\_c, the subscription fails. If the subscriber doesn’t have access to SSN\_\_c, then it isn’t returned in the notification. If the subscriber has access to the SSN\_\_c field but the user who created or manipulated the record doesn't, the subscriber doesn't receive this field in the notification.

If the subscriber already successfully subscribed to the PushTopic, but the field-level security changes and the user no longer has access to one of the fields referenced in the WHERE clause, then no streamed notifications are sent.

## Code Examples

```
SELECT Id, Name, SSN__c
FROM Employee__c 
WHERE Bonus_Received__c = true AND Bonus_Amount__c > 20000
```
