---
title: "Step 5: Test the PushTopic Channel"
domain: api-streaming
topic: step-5-test-the-pushtopic-channel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.246Z
estimatedTokens: 202
keywords: [Step, Test, PushTopic, Channel, debug, messages, contain, subscription, status, event, notification, data, invoice, statement, created]
---

# Step 5: Test the PushTopic Channel

> The debug messages contain information about the subscription status. The first event
            notification shows the notification data when an invoice statement is created. The
            second notification shows the notification data when an invoice statement is
            updated.

# Step 5: Test the PushTopic Channel

1.  To load the Visualforce page in a web browser, click **Preview** on the Visualforce page editor:
2.  In the text box, enter the channel name: /topic/InvoiceStatementUpdates.
3.  To subscribe to the channel, click **Subscribe**.
4.  Create or modify an invoice statement in a different browser tab. The page displays some debug messages and event notifications. The output resembles the following:

    ```

    ```

    The debug messages contain information about the subscription status. The first event notification shows the notification data when an invoice statement is created. The second notification shows the notification data when an invoice statement is updated.


Click **Unsubscribe** to unsubscribe from the channel and stop receiving notifications.

## Code Examples

```
DEBUG: Handshake Successful: {
  "ext":{"replay":true,"payload.format":true},
  "minimumVersion":"1.0",
  "clientId":"41kdiuvgig2tfxdh9weakuiwyh",
  "supportedConnectionTypes":["long-polling"],
  "channel":"/meta/handshake",
  "id":"1","version":"1.0","successful":true,"reestablish":false} 

DEBUG: Connection Successful : {
  "clientId":"41kdiuvgig2tfxdh9weakuiwyh",
  "advice":{
    "interval":2000,"multiple-clients":true,"reconnect":"retry",
    "timeout":110000},"channel":"/meta/connect","id":"2",
    "successful":true}

DEBUG: Subscribe Successful /topic/InvoiceStatementUpdates: 
{"clientId":"41kdiuvgig2tfxdh9weakuiwyh","channel":"/meta/subscribe",
 "id":"15","subscription":"/topic/InvoiceStatementUpdates","successful":true} 


{ 
  "event": {
    "createdDate": "2017-05-16T23:05:50.173Z", 
    "replayId": 1, 
    "type": "created" 
  }, 
  "sobject": { 
    "Description__c": "New invoice.", 
    "Id": "a00D0000009YbwQIAS", 
    "Status__c": "Open", 
    "Name": "INV-0001" 
  } 
}
_____________ 

{ 
  "event": { 
    "createdDate": "2017-05-16T23:06:11.529Z", 
    "replayId": 2, 
    "type": "updated" 
  }, 
  "sobject": { 
    "Description__c": "New invoice.", 
    "Id": "a00D0000009YbwQIAS", 
    "Status__c": "Negotiating", 
    "Name": "INV-0001" 
  } 
}
_____________
```
