---
title: "Subscribe to the Channel"
domain: platform-events
topic: subscribe-to-the-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.738Z
estimatedTokens: 810
keywords: [Subscribe, Channel, creating, custom, members, Pub, Sub, API, Java, client, receive, event, messages]
---

# Subscribe to the Channel

> After creating a custom channel and its members, subscribe to the channel using a
    Pub/Sub API Java client, and receive event messages.

# Subscribe to the Channel

After creating a custom channel and its members, subscribe to the channel using a Pub/Sub API Java client, and receive event messages.

In this example, you subscribe to the Order\_Channel\_\_chn channel you created for two custom platform events. Only Pub/Sub API and CometD clients support custom channels. Other subscribers, such as Apex triggers, flows, and processes, don’t support custom channels.

1.  To set up the Pub/Sub API Java client, follow the steps in [Java Quick Start for Publishing and Subscribing to Events](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-quick-start.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).
2.  In [Step 3: Configure Client Parameters](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-parameters.html), supply the configuration parameters in arguments.yaml. Also, make sure you supply this value:

    ```

    ```

3.  In a Terminal window, navigate to the top-level java folder.
4.  To run the Subscribe RPC example, enter:./run.sh genericpubsub.Subscribe.
5.  After subscribing to the filtered channel, publish an Order\_NorthAmer\_\_e event and an Order\_EMEA\_\_e event.

    1.  Open another Terminal window.
    2.  Navigate to your local pub-sub-api folder.
    3.  In an IDE, such as Visual Studio Code, open java/src/main/java/utility/CommonContext.java.
    4.  Modify the createEventMessage method that takes one parameter. Replace the method with this snippet. Replace the CreatedById value with your Salesforce user ID. See [Find the Salesforce ID for a User or Profile](https://help.salesforce.com/s/articleView?id=000381643&type=1&language=en_US).

        ```

        ```

    5.  For the configuration parameters in java/src/main/resources/arguments.yaml, supply this value.

        ```

        ```

    6.  Build the client from the top-level java folder with this command: mvn clean install.
    7.  To run the Publish RPC example from the java folder, enter ./run.sh genericpubsub.Publish.
    8.  Repeat the previous steps to publish an Order\_EMEA\_\_e event. Both events have the same fields, so modify the field values in the createEventMessage method in CommonContext.java.

        ```

        ```

    9.  For the configuration parameters in arguments.yaml, supply this value.

        ```

        ```

    10.  Build the client from the top-level java folder with this command: mvn clean install.
    11.  To run the Publish RPC example from the java folder, enter ./run.sh genericpubsub.Publish.

    Because Order\_Channel\_\_chn includes both the Order\_NorthAmer\_\_e and Order\_EMEA\_\_e event types, you receive the event messages of both events in the terminal where your subscriber client is running. This example shows the two received event messages after subscribing to the filtered channel, /event/Order\_Channel\_\_chn. The Pub/Sub API client output includes the event name, which is obtained from the schema on the received event.

    ```

    ```

    If you use a Streaming API (CometD) to subscribe to the channel, the event messages contain the EventApiName as seen in this example.

    ```

    ```

## Code Examples

```
TOPIC: /event/Order_Channel__chn
```

```apex
public GenericRecord createEventMessage(Schema schema) {
    // Update CreatedById with the appropriate User Id from your org.
    return new GenericRecordBuilder(schema)
            .set("CreatedDate", System.currentTimeMillis())
            .set("CreatedById", "<User_Id>")
            .set("Order_Number__c", "1")
            .set("City__c", "Los Angeles")
            .set("Amount__c", 35.0).build();
}
```

```
TOPIC: /event/Order_NorthAmer__e
```

```
.set("Order_Number__c", "2")
            .set("City__c", "London")
            .set("Amount__c", 20.0).build();
```

```
TOPIC: Order_EMEA__e
```
