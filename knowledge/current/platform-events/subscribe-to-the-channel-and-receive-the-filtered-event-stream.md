---
title: "Subscribe to the Channel and Receive the Filtered Event Stream"
domain: platform-events
topic: subscribe-to-the-channel-and-receive-the-filtered-event-stream
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.825Z
estimatedTokens: 911
keywords: [Subscribe, Channel, Receive, Filtered, Event, Stream, configuring, filter, messages, match, expression, Pub, Sub, API, CometD]
---

# Subscribe to the Channel and Receive the Filtered Event Stream

> After configuring the filter, subscribe to the channel and receive the event messages
    that match the filter expression. Only Pub/Sub API and CometD clients support stream filtering.
    Because Apex triggers, flows, and processes don’t support custom channels, you can’t use them to
    subscribe to filtered event streams.

# Subscribe to the Channel and Receive the Filtered Event Stream

After configuring the filter, subscribe to the channel and receive the event messages that match the filter expression. Only Pub/Sub API and CometD clients support stream filtering. Because Apex triggers, flows, and processes don’t support custom channels, you can’t use them to subscribe to filtered event streams.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Before subscribing to the channel, follow the steps in the previous sections to create the MyChannel\_\_chn channel, and configure a filter expression for Order\_Event\_\_e with Tooling API or Metadata API.

In this example, we use a Pub/Sub API Java client sample. See [Java Quick Start for Publishing and Subscribing to Events](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-quick-start.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview). If you prefer to use a tool in the Salesforce UI, you can use the [empApi Lightning component](https://developer.salesforce.com/docs/component-library/bundle/lightning-emp-api/documentation) or the [Streaming Monitor app](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYEEWUA5) from AppExchange.

1.  Set up the Pub/Sub API Java client and subscribe to the channel.
    1.  Follow the steps in [Java Quick Start for Publishing and Subscribing to Events](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-quick-start.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).
    2.  In [Step 3: Configure Client Parameters](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-parameters.html), for the TOPIC argument, provide the custom channel that you created: /event/MyChannel\_\_chn. The channel name format is /event/ChannelName\_\_chn.
    3.  From the java folder, run: ./run.sh genericpubsub.Subscribe.
2.  Now that you’re subscribed to the custom channel, publish event messages.
    1.  Open another Terminal window.
    2.  Navigate to your local pub-sub-api folder.
    3.  In an IDE, such as Visual Studio Code, open java/src/main/java/utility/CommonContext.java.
    4.  Modify the createEventMessages method. Replace the code with this snippet. Replace the CreatedById value with your Salesforce user ID. See [Find the Salesforce ID for a User or Profile](https://help.salesforce.com/s/articleView?id=000381643&type=1&language=en_US).

        ```

        ```

    5.  For the configuration parameters in java/src/main/resources/arguments.yaml, supply these values.

        -   TOPIC: /event/Order\_Event\_\_e
        -   NUMBER\_OF\_EVENTS\_TO\_PUBLISH: 5
        -   SINGLE\_PUBLISH\_REQUEST: true

    6.  Build the client from the top-level java folder with this command: mvn clean install.
    7.  To run the PublishStream RPC example and publish five event messages from the java folder, enter ./run.sh genericpubsub.PublishStream.

        As a refresher, here’s the filter expression that we set in the previous section.

        ```

        ```

        From the event messages published, only the second and fourth event messages match the filter criteria given in the previous example and are delivered to the client. The other event messages only partially match the criteria, so they aren’t delivered to the client.

        This example shows the two event messages received after subscribing to the filtered channel, /event/MyChannel\_\_chn.

        ```

        ```

## Code Examples

```apex
public List<GenericRecord> createEventMessages(Schema schema, final int numEvents)
{

    String[] orderNumbers = {"99","100","101","102","103"};
    String[] cities = {"Los Angeles", "New York", "San Francisco", "San Jose", 
                       "Boston"};
    Double[] amounts = {35.0, 20.0, 2.0, 123.0, 180.0};

    // Update CreatedById with the appropriate User Id from your org.
    List<GenericRecord> events = new ArrayList<>();
    for (int i=0; i<numEvents; i++) {
        events.add(new GenericRecordBuilder(schema)
                .set("CreatedDate", System.currentTimeMillis())
                .set("CreatedById", "<User_Id>")
                .set("Order_Number__c", orderNumbers[i % 5])
                .set("City__c", cities[i % 5])
                .set("Amount__c", amounts[i % 5]).build());
    }

    return events;
}
```

```
(City__c LIKE 'S%' OR City__c='New York') AND Amount__c>10.50
```

```
2024-03-26 17:04:38,347 [pool-3-thread-1] 
java.lang.Class - Received event with payload: 
{
  "CreatedDate": 1711497876867,
  "CreatedById": "0055f000005mc66AAA",
  "Order_Number__c": "100",
  "City__c": "New York",
  "Amount__c": 20.0
}
with schema name: Order_Event__e

2024-03-26 17:04:38,347 [pool-3-thread-2] 
java.lang.Class - Received event with payload: 
{
  "CreatedDate": 1711497876867,
  "CreatedById": "0055f000005mc66AAA",
  "Order_Number__c": "102",
  "City__c": "San Jose",
  "Amount__c": 123.0
}
with schema name: Order_Event__e
```
