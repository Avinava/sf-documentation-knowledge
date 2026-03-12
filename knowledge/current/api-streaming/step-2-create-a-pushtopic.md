---
title: "Step 2: Create a PushTopic"
domain: api-streaming
topic: step-2-create-a-pushtopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.233Z
estimatedTokens: 548
keywords: [Step, PushTopic, Developer, Console, record, SOQL, query, Event, notifications, generated, updates, match]
---

# Step 2: Create a PushTopic

> Use the Developer Console to create the PushTopic record that contains a SOQL query.
    Event notifications are generated for updates that match the query.

# Step 2: Create a PushTopic

Use the Developer Console to create the PushTopic record that contains a SOQL query. Event notifications are generated for updates that match the query.

1.  Open the Developer Console.
2.  Click **Debug** | **Open Execute Anonymous Window**.
3.  In the Enter Apex Code window, paste in the following Apex code, and click **Execute**.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

    #### Note

    If your organization has a namespace prefix defined, then you’ll need to preface the custom object and field names with that namespace when you define the PushTopic query. For example, SELECT Id, Name, namespace\_\_Status\_\_c, namespace\_\_Description\_\_c FROM namespace\_\_Invoice\_Statement\_\_c.

    Because NotifyForOperationCreate, NotifyForOperationUpdate, NotifyForOperationDelete and NotifyForOperationUndelete are set to true, Streaming API evaluates records that are created, updated, deleted, or undeleted and generates a notification if the record matches the PushTopic query. Because NotifyForFields is set to Referenced, Streaming API will use fields in both the SELECT clause and the WHERE clause to generate a notification. Whenever the fields Name, Status\_\_c, or Description\_\_c are updated, a notification will be generated on this channel. For more information about NotifyForOperationCreate, NotifyForOperationUpdate, NotifyForOperationDelete, NotifyForOperationUndelete, and NotifyForFields, see [Event Notification Rules](atlas.en-us.api_streaming.meta/api_streaming/event_notification_rules_intro.htm).

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

    #### Note

    In API version 28.0 and earlier, notifications are only generated when records are created or updated. The NotifyForOperationCreate, NotifyForOperationUpdate, NotifyForOperationDelete, and NotifyForOperationUndelete fields are unavailable and the NotifyForOperations enum field is used instead to set which record events generate a notification. For more information see [PushTopic](atlas.en-us.api_streaming.meta/api_streaming/pushtopic.htm).

## Code Examples

```
PushTopic pushTopic = new PushTopic();
pushTopic.Name = 'InvoiceStatementUpdates';
pushTopic.Query = 'SELECT Id, Name, Status__c, Description__c FROM Invoice_Statement__c';
pushTopic.ApiVersion = 66.0;
pushTopic.NotifyForOperationCreate = true;
pushTopic.NotifyForOperationUpdate = true;
pushTopic.NotifyForOperationUndelete = true;
pushTopic.NotifyForOperationDelete = true;
pushTopic.NotifyForFields = 'Referenced';
insert pushTopic;
```

## Related Topics

- Event Notification Rules (atlas.en-us.api_streaming.meta/api_streaming/event_notification_rules_intro.htm)
- PushTopic (atlas.en-us.api_streaming.meta/api_streaming/pushtopic.htm)
