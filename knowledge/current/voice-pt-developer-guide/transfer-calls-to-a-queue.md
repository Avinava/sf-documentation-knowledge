---
title: "Transfer Calls to a Queue"
domain: voice-pt-developer-guide
topic: transfer-calls-to-a-queue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.196Z
estimatedTokens: 169
keywords: [Transfer, Calls, Queue, call, Salesforce, supervisor, transferred, waiting]
---

# Transfer Calls to a Queue

> Transfer a call to a Salesforce queue so that a supervisor can see the transferred call
    waiting in the queue.

# Transfer Calls to a Queue

Transfer a call to a Salesforce queue so that a supervisor can see the transferred call waiting in the queue.

To use this feature, when transferring a call with the [Create a Voice Call Record Telephony API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm), set initiationMethod to "Transfer" and set queue to either the Salesforce queue object ID or the vendor’s external queue ID. See [Create a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm).
