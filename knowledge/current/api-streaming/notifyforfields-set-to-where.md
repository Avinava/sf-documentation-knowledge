---
title: "NotifyForFields Set to Where"
domain: api-streaming
topic: notifyforfields-set-to-where
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.431Z
estimatedTokens: 404
keywords: [NotifyForFields, PushTopic.NotifyForFields, change, any, record, long, referenced, query, clause, causes, Streaming, API, matching, logic, evaluate]
---

# NotifyForFields Set to Where

> When you set the value of PushTopic.NotifyForFields to Where, a change to any field value in the record as
            long as that field is referenced in the query WHERE clause causes the Streaming API
            matching logic to evaluate the record to determine whether to generate  a
           

# NotifyForFields Set to Where

When you set the value of PushTopic.NotifyForFields to Where, a change to any field value in the record as long as that field is referenced in the query WHERE clause causes the Streaming API matching logic to evaluate the record to determine whether to generate a notification.

If the PushTopic.NotifyForFields value is Where, the PushTopic query must have a WHERE clause with at least one field other than Id.

| Event | A notification is generated when |
| --- | --- |
| Record is created | The record field values match the values specified in the WHERE clause. |
| Record is updated | The following conditions are met.A change occurs in one or more record fields specified in the PushTopic query WHERE clause.The record values of the fields specified in the WHERE clause all match the values in the PushTopic query WHERE clause. |

**Examples**

| PushTopic Query | Result |
| --- | --- |
| SELECT Id, f1, f2 FROM Invoice_Statement__c WHERE f3 = 'abc' AND f4 LIKE 'xyz' | Generates a notification if f3 or f4 have changed and the values match the values in the WHERE clause. |
| SELECT Id FROM Invoice_Statement__c WHERE f3 = 'abc' AND f4 LIKE 'xyz' | Generates a notification if f3 or f4 have changed and the values match the values in the WHERE clause. |
| SELECT Id, f1, f2 FROM Invoice_Statement__c WHERE f3 = 'abc' AND f4 LIKE 'xyz' AND Id IN ('a07B0000000KWZ7IAO', 'e10R0000000KEU9IAO', 'v32B0000000KWZ7YEP') | Generates a notification if f3 or f4 have changed, f3 and f4 match the values in the WHERE clause, and the record ID is contained in the WHERE clause IN list. |
