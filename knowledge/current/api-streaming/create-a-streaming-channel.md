---
title: "Create a Streaming Channel"
domain: api-streaming
topic: create-a-streaming-channel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.294Z
estimatedTokens: 557
keywords: [Streaming, Channel, new, StreamingChannel, Salesforce]
---

# Create a Streaming Channel

> Create a new StreamingChannel object by using the Salesforce UI.

# Create a Streaming Channel

Create a new StreamingChannel object by using the Salesforce UI.

You must have the proper Streaming API permissions enabled in your organization.

1.  Log in to your Developer Edition organization.
2.  If you’re using Salesforce Classic, under All Tabs (+), select **Streaming Channels**. If you’re using Lightning Experience, from the App Launcher, select **All Items**, and then click **Streaming Channels**.
3.  On the Streaming Channels page, click **New** to create a streaming channel.
4.  Enter /u/notifications/ExampleUserChannel in **Streaming Channel Name**, and an optional description. Your new Streaming Channel page should look something like this:![Screenshot of a new streaming channel](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fnew_streaming_channel.png&folder=api_streaming)
5.  Select **Save**. You’ve just created a streaming channel that clients can subscribe to for notifications.

StreamingChannel is a regular, creatable Salesforce object, so you can also create one programmatically using Apex or any data API like SOAP API or REST API.

Also, if you need to restrict which users can receive or send event notifications, you can use user sharing on the StreamingChannel to control this. Channels shared with public read-only or read-write access send events only to clients subscribed to the channel that also are using a user session associated with the set of shared users or groups. Only users with read-write access to a shared channel can generate events on the channel, or modify the actual StreamingChannel record. To modify user sharing for a StreamingChannel, from Setup, enter Sharing Settings in the Quick Find box, then select **Sharing Settings** and create or modify a StreamingChannel sharing rule.

Generic streaming also supports dynamic streaming channel creation, which creates a StreamingChannel when a client first subscribes to the channel. To enable dynamic streaming channels in your org, from Setup, enter User Interface in the Quick Find box, then select **User Interface**. Enable **Enable Dynamic Streaming Channel Creation**. You can also enable dynamic channel creation in Metadata API using EventSettings.
