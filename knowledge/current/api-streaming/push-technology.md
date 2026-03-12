---
title: "Push Technology"
domain: api-streaming
topic: push-technology
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.389Z
estimatedTokens: 297
keywords: [Push, Technology, publish, subscribe, model, transfers, initiated, server, client, communication, opposite, pull, made]
---

# Push Technology

> Push technology, also called the publish/subscribe model, transfers information that is
  initiated from a server to the client. This type of communication is the opposite of pull
  technology in which a request for information is made from a client to the server.

# Push Technology

Push technology, also called the publish/subscribe model, transfers information that is initiated from a server to the client. This type of communication is the opposite of pull technology in which a request for information is made from a client to the server.

The information sent by the server is typically specified in advance. When using a PushTopic event, you specify the information that the client receives by creating a PushTopic with specific criteria. The client then subscribes to the PushTopic channel and is notified of events that match the PushTopic criteria. When using a platform event, you first define a platform event and its fields in Salesforce. Then you publish the platform event. The client subscribes to the platform event channel and gets notified of the published event message.

In push technology, the server pushes out information to the client after the client has subscribed to a channel of information. For the client to receive the information, the client must maintain a connection to the server (Salesforce). Streaming API uses the Bayeux protocol and CometD, so the client-to-server connection is maintained through long polling.
