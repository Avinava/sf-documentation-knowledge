---
title: "Troubleshooting External Routing for Omni-Channel"
domain: omni-channel-dev
topic: troubleshooting-external-routing-for-omni-channel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.978Z
estimatedTokens: 364
keywords: [Troubleshooting, External, Routing, Omni-Channel, encounter, issues, implementation, try, steps, Recover, Adaptor, Restart, Salesforce, Data, Recovery]
---

# Troubleshooting External Routing for Omni-Channel

> If you encounter issues with your implementation of External Routing for Omni-Channel,
  try the following troubleshooting steps.

# Troubleshooting External Routing for Omni-Channel

If you encounter issues with your implementation of External Routing for Omni-Channel, try the following troubleshooting steps.

## Recover from an External Routing Adaptor Restart

When the third-party adaptor recovers from restarting, it should leverage the durability feature of the Streaming API (since version 37.0) and replay from the last successful position of the PSR topic.

Reference the following code sample in Java.

```

```

For more information, see [Message Durability](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/using_streaming_api_durability.htm "HTML (New Window)") in the Streaming API Developer Guide.

## Recover from a Salesforce Data Recovery Instance

An org instance can be recovered from a Salesforce data center switch. The recovery process involves downtime, so all online agents must be logged out. All states maintained by the third-party adaptor, such as agent presence, aren’t applicable and must be reset. The third-party adaptor should reinitialize as when it first subscribed to the topic.

## Test the Client Solution

You can use the Streaming API to listen to CRUD events for UserServicePresence and PendingServiceRouting. For examples, see [Code Examples](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/api_streaming_code_examples.htm) in the Streaming API Developer Guide.

## Code Examples

```
// Register streaming extension
var replayExtension = new cometdReplayExtension();
replayExtension.setChannel(***<Streaming Channel to Subscribe to>***);
replayExtension.setReplay(<Event Replay Option>);
cometd.registerExtension('myReplayExtensionName', replayExtension);
```
