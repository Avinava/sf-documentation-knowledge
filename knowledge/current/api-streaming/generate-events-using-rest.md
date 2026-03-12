---
title: "Generate Events Using REST"
domain: api-streaming
topic: generate-events-using-rest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.356Z
estimatedTokens: 524
keywords: [Generate, Events, REST, Streaming, Channel, Push, API, resource, event, notifications, subscribers]
---

# Generate Events Using REST

> Use the Streaming Channel Push REST API resource to generate event notifications to
        channel subscribers.

# Generate Events Using REST

Use the Streaming Channel Push REST API resource to generate event notifications to channel subscribers.

Prerequisites:

You use Postman to perform these steps. Before you begin, set up Postman by completing [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce) in Trailhead.

1.  After setting up Postman and authenticating, get the streaming channel ID by performing a SOQL query using Tooling API.
    1.  In Postman, expand **REST**, and click **Query**.
    2.  Click **Params**, then for the q value, enter this query.

        ```

        ```

    3.  Click **Send**.
    4.  The response contains the StreamingChannel ID for /u/notifications/ExampleUserChannel. Note this ID for the next step.
2.  Publish an event message using the push REST API resource.
    1.  In Postman, expand **REST** | **SObject**, and click **SObject Create**.
    2.  Select **POST**, and append this path to the request URL after replacing <Streaming Channel ID> with the ID you copied earlier: /<Streaming Channel ID>/push.

        The full URL becomes:

        ```

        ```

    3.  Click **Params**, then under Path Variables, enter StreamingChannel for SOBJECT\_API\_NAME.
    4.  Click **Body**, and enter this body value.

        ```

        ```

    5.  Click **Send**.

        The request sends the event to all subscribers on the channel. You receive the notification with the payload text in your Java client. The REST method response indicates the number of subscribers the event was sent to (in this case, –1, because the event was set to broadcast to all subscribers).


This example shows the notification message received.

```

```

You’ve successfully sent a notification to a subscriber using generic streaming. You can specify the list of subscribed users to send notifications to instead of broadcasting to all subscribers. Also, you can use the GET method of the Streaming Channel Push REST API resource to get a list of active subscribers to the channel.

## Code Examples

```
SELECT Name, ID FROM StreamingChannel
```

```
{{_endpoint}}/services/data/v{{version}}/sobjects/:SOBJECT_API_NAME/<Streaming Channel ID>/push
```

```
{ 
  "pushEvents": [
  {
    "payload": "Broadcast message to all subscribers", 
    "userIds": [] 
  }
  ]
}
```

```
{
  "clientId":"a1ps4wpe52qytvcvbsko09tapc",
  "data":{
    "event":{
      "createdDate":"2016-03-29T19:05:28.334Z",
      "replayId":55
    },
    "payload":"Broadcast message to all subscribers"
  },
  "channel":"/u/notifications/ExampleUserChannel"
}
```
