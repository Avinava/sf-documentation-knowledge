---
title: "NotifyForFields Set to All"
domain: api-streaming
topic: notifyforfields-set-to-all
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.419Z
estimatedTokens: 707
keywords: [NotifyForFields, PushTopic.NotifyForFields, change, any, record, causes, Streaming, API, matching, logic, evaluate, determine, whether, generate, notification]
---

# NotifyForFields Set to All

> When you set the value of PushTopic.NotifyForFields to All, a change to any field value in the record causes
            the Streaming API matching logic to evaluate the record to determine whether to generate
            a notification. Changes to record field values cause this evaluation whether o

# NotifyForFields Set to All

When you set the value of PushTopic.NotifyForFields to All, a change to any field value in the record causes the Streaming API matching logic to evaluate the record to determine whether to generate a notification. Changes to record field values cause this evaluation whether or not those fields are referenced in the PushTopic query SELECT clause or WHERE clause.

| Event | A notification is generated when |
| --- | --- |
| Record is created | The record field values match the values specified in the WHERE clause. |
| Record is updated | The record field values match the values specified in the WHERE clause. |

**Examples**

| PushTopic Query | Result |
| --- | --- |
| SELECT Id, f1, f2, f3 FROM Invoice_Statement__c | Generates a notification if any field values in the record have changed. |
| SELECT Id, f1, f2 FROM Invoice_Statement__c WHERE f3 = 'abc' AND f4 LIKE 'xyz' | Generates a notification if any field values in the record have changed and f3 and f4 match the values in the WHERE clause. |
| SELECT Id FROM Invoice_Statement__c | When Id is the only field in the SELECT clause, a notification is generated if any field values have changed. |
| SELECT Id FROM Invoice_Statement__c WHERE f3 = 'abc' AND f4 LIKE 'xyz' | Generates a notification if any field values in the record have changed and f3 and f4 match the values in the WHERE clause. |
| SELECT Id FROM Invoice_Statement__c WHERE Id IN ('a07B0000000KWZ7IAO', 'e10R0000000KEU9IAO', 'v32B0000000KWZ7YEP') | Generates a notification if any field values in the record have changed and the record ID is contained in the WHERE clause IN list. |
| SELECT Id, f1, f2 FROM Invoice_Statement__c WHERE Id IN ('a07B0000000KWZ7IAO', 'e10R0000000KEU9IAO', 'v32B0000000KWZ7YEP') | Generates a notification if any field values in the record have changed and the record ID is contained in the WHERE clause IN list. |
| SELECT Id, f1, f2 FROM Invoice_Statement__c WHERE f3 = 'abc' AND f4 LIKE 'xyz' AND Id IN ('a07B0000000KWZ7IAO', 'e10R0000000KEU9IAO', 'v32B0000000KWZ7YEP') | Generates a notification if any field values in the record have changed, f3 and f4 match the WHERE clause, and the record ID is contained in the WHERE clause IN list. |

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api_streaming)

#### Warning

Use caution when setting NotifyForFields to All. When you use this value, then notifications are generated for all record field changes as long as the new field values match the values in the WHERE clause. Therefore, the number of generated notifications could potentially be large, and you may hit the daily quota of events allocation. In addition, because every record change is evaluated and many notifications may be generated, this causes a heavier load on the system.
