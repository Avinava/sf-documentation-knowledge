---
title: "Durable PushTopic Streaming Sample"
domain: api-streaming
topic: durable-pushtopic-streaming-sample
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.199Z
estimatedTokens: 909
keywords: [Durable, PushTopic, Streaming, Sample, Visualforce, how, replay, options, subscribe, receive, event, notifications, Generate, Events]
---

# Durable PushTopic Streaming Sample

> The Durable PushTopic Streaming Visualforce sample shows you how to use replay
  options to subscribe and receive durable PushTopic event notifications.

# Durable PushTopic Streaming Sample

The Durable PushTopic Streaming Visualforce sample shows you how to use replay options to subscribe and receive durable PushTopic event notifications.

## Use a Visualforce Page to Generate and Replay PushTopic Events

In this step, you use a Visualforce page to generate your own PushTopic streaming events and replay those events by using different options.

When the Visualforce page is loaded, it creates a PushTopic for the Account object. The page also subscribes to this topic to receive notifications for account creations, updates, and deletions, with an option to replay events. You can specify the name of the account to create, update, and delete on the Visualforce page. These operations generate event notifications, which are displayed in the Notifications section. You can control which events are received and displayed by subscribing with replay options. After generating events, you can replay events starting from:

-   All events after a particular event specified by a replay ID.
-   The first event broadcast right after subscribing (replay option -1).
-   The earliest retained event in your org that’s less than 24 hours old (replay option -2). The sample uses replay option -2 as the default option.

This Visualforce sample is part of the Durable Streaming Demo app.

1.  From App Launcher, open the **Durable Streaming Demo** app.
2.  Click the **Durable PushTopic Streaming Demo** tab.

    The Visualforce page loads and subscribes to the PushTopic it created for the Account object.

3.  On the Visualforce page, generate some events for an account. For example, Test account.
4.  Click **Create, Update, Delete New Account**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

    #### Note

    The page subscribes to all new and old events by default (-2). The page first displays debug information about the CometD connection in the Notifications section followed by the events received. The first time you generate events, there are no stored events, and you see only the new events.

5.  To change the point in time when events are read, enter the replay ID to read from in the **Replay From Id** field. For example, to read all events after the event with replay ID 2, enter 2. Then click **Update Subscription**.

    The Notifications section is updated and shows only the last event with replay ID 3.

    ![Visualforce sample that generates and replays past events](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_vfsample_replay_pushtopic_messages.png&folder=api_streaming)

6.  To receive only the events that are sent after you subscribe, enter \-1 in the **Replay From ID** field. Then click **Update Subscription**.

    The Notifications section is cleared, because only new events from this point on are shown.

7.  Generate some new events like you did previously using Lightning for the account name.

    The Notifications section is updated with the new events and doesn’t show the old events.

    ![Visualforce sample that generates and replays past events](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_vfsample_replay_pushtopic_messages_new.png&folder=api_streaming)

8.  Switch the replay option back to -2.

    The page displays all events, including events that were sent earlier.

    ![Visualforce sample that generates and replays past events](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_vfsample_replay_pushtopic_messages_all.png&folder=api_streaming)
