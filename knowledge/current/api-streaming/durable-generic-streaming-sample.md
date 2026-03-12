---
title: "Durable Generic Streaming Sample"
domain: api-streaming
topic: durable-generic-streaming-sample
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.194Z
estimatedTokens: 1167
keywords: [Durable, Generic, Streaming, Sample, Visualforce, how, replay, options, subscribe, receive, event, notifications, Channel, Generate, Events]
---

# Durable Generic Streaming Sample

> The Durable Generic Streaming Visualforce sample shows you how to use replay
  options to subscribe and receive durable generic event notifications.

# Durable Generic Streaming Sample

The Durable Generic Streaming Visualforce sample shows you how to use replay options to subscribe and receive durable generic event notifications.

## Create a Streaming Channel

You must have the appropriate Streaming API permissions enabled in your org.

Create a StreamingChannel object by using the Salesforce UI.

1.  Log in to your Developer Edition org.
2.  If you’re using Salesforce Classic, under All Tabs (+), select **Streaming Channels**. If you’re using Lightning Experience, from the App Launcher, select **All Items**, and then click **Streaming Channels**.
3.  On the Streaming Channels page, click **New** to create a streaming channel.
4.  Enter /u/TestStreaming in **Streaming Channel Name** and add an optional description. Your new Streaming Channel page looks something like this:![Screenshot of a new streaming channel](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_test_channel.png&folder=api_streaming)
5.  Click **Save**. You now have a streaming channel that clients can subscribe to for notifications.

StreamingChannel is a regular, creatable Salesforce object, so you can also create one programmatically using Apex or a data API like the SOAP API or REST API, or using a tool such as the Developer Console. For more information, see [Reference: StreamingChannel](atlas.en-us.api_streaming.meta/api_streaming/streamingChannel.htm).

## Use a Visualforce Page to Generate and Replay Generic Events

In this step, you use a Visualforce page to generate your own streaming events and replay those events by using different options.

The Visualforce page simulates a streaming client that subscribes to events with options to replay events. The Visualforce page allows you to supply the event’s message and specify the number of messages to create. The page listens to events and displays the received events in the Notifications section. After generating events, you can replay events starting from:

-   All events after a particular event specified by a replay ID.
-   The first event broadcast right after subscribing (replay option -1).
-   The earliest retained event in your org that’s less than 24 hours old (replay option -2). The sample uses replay option -2 as the default option.

This Visualforce sample is part of the Durable Streaming Demo app.

1.  From App Launcher, open the **Durable Streaming Demo** app.
2.  Click the **Durable Generic Streaming Demo** tab.

    The Visualforce page loads and subscribes to the test channel you created earlier.

3.  In the Visualforce page, generate some events. Enter any text for the message text, for example, Test message. For Number of Events, enter 10.
4.  Click **Generate**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

    #### Note

    The page subscribes to all events by default (-2). The page first displays debug information about the CometD connection in the Notifications section followed by the events received. The first time you generate events, there are no stored events, and you see only the new events.

5.  To change the point in time when events are read, enter the replay ID to read from in the **Replay From Id** field. For example, to read all events after the event with replay ID 5, enter 5. Then click **Update Subscription**.

    The Notifications section is updated and shows only the last five events starting from replay ID 6.

    ![Visualforce sample that generates and replays past events](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_vfsample_replay_messages_from_6.png&folder=api_streaming)

6.  To receive only the events that are sent after you subscribe, enter \-1 in the **Replay From Id** field. Then click **Update Subscription**.

    The Notifications section is cleared, because only new events from this point on are shown.

7.  Generate some new events like you did in step 3 with New events for the message.

    The Notifications section is updated with the new events and doesn’t show the old events.

    ![Visualforce sample that generates and replays past events](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_vfsample_replay_messages_new_events.png&folder=api_streaming)

8.  Switch the replay option back to -2.

    The page displays all events, including events that were sent earlier.

    ![Visualforce sample that generates and replays past events](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_vfsample_replay_messages_all.png&folder=api_streaming)

## Related Topics

- Reference: StreamingChannel (atlas.en-us.api_streaming.meta/api_streaming/streamingChannel.htm)
