---
title: "Step 4:  Use the Connector with Username and Password Login"
domain: api-streaming
topic: step-4-use-the-connector-with-username-and-password-login
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.254Z
estimatedTokens: 795
keywords: [Step, Connector, Username, Password, Login, Now, you’ve, downloaded, built, EMP, connect, CometD, subscribe, PushTopic]
---

# Step 4:  Use the Connector with Username and Password Login

> Now that you’ve downloaded and built EMP Connector, use it to connect to CometD and
        subscribe to the PushTopic.

# Step 4: Use the Connector with Username and Password Login

Now that you’ve downloaded and built EMP Connector, use it to connect to CometD and subscribe to the PushTopic.

Let’s run an example that uses username and password login.

1.  In the /src/main/java/com/salesforce/emp/connector/example folder, open the [LoginExample.java](https://github.com/forcedotcom/EMP-Connector/blob/master/src/main/java/com/salesforce/emp/connector/example/LoginExample.java) source file.
2.  Run the LoginExample class and provide arguments.

    1.  In Package Explorer, navigate to the LoginExample.java file. Right-click the file, and select **Run As** | **Run Configurations**.
    2.  On the Arguments tab, add values for the following arguments, separated by a space.

        | Argument | Value |
        | --- | --- |
        | username | Username of the logged-in user |
        | password | Password for the username (or logged-in user) |
        | channel | The channel name for the PushTopic: /topic/InvoiceStatementUpdatesNoteThis quick start is based on a PushTopic event. Alternatively, you can use EMP Connector to listen to any event type. The following lists channel name formats for a sample of streaming events available in the Lightning Platform.Platform eventFor a custom platform event—/event/EventName__eFor a standard platform event—/event/EventNameFor a custom channel—/event/ChannelName__chnChange Data Capture eventFor all change events—/data/ChangeEventsFor a specific standard object—/data/ObjectNameChangeEventFor a specific custom object—/data/CustomObjectName__ChangeEventFor a custom channel—/data/ChannelName__chnPushTopic event/topic/PushTopicNameGeneric event/u/notifications/GenericStreamingChannel |

    3.  Click **Run**.

    The sample is now subscribed to the event channel and is listening to event notifications. As soon as an event notification is published and received, the tool prints it to the console.

    Optionally, to receive different events, you can include a replay ID as the last argument. Valid values are:

    -   –1 — Get all new events sent after subscription. This option is the default.
    -   –2 — Get all new events sent after subscription and all past events within the retention window. Use -2 sparingly. If a large volume of event messages is stored, retrieving all event messages can slow performance.
    -   Specific number — Get all events that occurred after the event with the specified replay ID.

3.  In a browser window, create or modify an invoice statement. After you create or change data that corresponds to the query in your PushTopic, the output looks similar to the following.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

    #### Note

    If you’re listening to another event type, the output would look a bit different. Some events require that you publish the notification instead of Salesforce, such as with platform events.


Generally, don’t handle usernames and passwords of others when running code in production. In a production environment, delegate the login to OAuth. The next step connects to Streaming API with OAuth.

## Code Examples

```
Subscribed: Subscription [/topic/InvoiceStatementUpdates:-1]
Received:
{event={createdDate=2016-12-12T22:31:48.035Z, replayId=1, type=created}, sobject={Status__c=Open, Id=a070P00000pn0hyQAA, Name=INV-0001, Description__c=blah}}
Received:
{event={createdDate=2016-12-12T22:32:06.440Z, replayId=2, type=updated}, sobject={Status__c=Negotiating, Id=a070P00000pn0hyQAA, Name=INV-0001, Description__c=blah}}
Received:
{event={createdDate=2016-12-12T22:32:57.404Z, replayId=3, type=created}, sobject={Status__c=Open, Id=a070P00000pn0lfQAA, Name=INV-0002, Description__c=Laptops and accessories.}}
```
