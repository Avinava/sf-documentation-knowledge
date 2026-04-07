---
title: "Transactional Messaging API Activities"
domain: mc-apis
topic: transactional-messaging-api-activities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.436Z
estimatedTokens: 185
keywords: [Transactional, Messaging, API, Activities, send, message, via, goes, steps]
---

# Transactional Messaging API Activities

> When you send a message via the Transactional Messaging API, it goes through these steps.

# Transactional Messaging API Activities

When you send a message via the Transactional Messaging API, it goes through these steps.

1.  Your system, outside of Marketing Cloud, sends a transactional message using the Marketing Cloud Transactional Messaging API.
2.  Information from the API request is applied to the transactional message definition. This step personalizes the message per recipient, assigns recipients to a contact list, and saves request parameters to a data extension, if used.
3.  The Event Notification Service sends the status of the message via a webhook to another system outside of Marketing Cloud.

![](/docs/resources/img/en-us/noversion?doc_id=images%2Ftransactional-messaging-activities.png&folder=mc-apis)
