---
title: "Event Notification Service Activities"
domain: mc-apis
topic: event-notification-service-activities
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.813Z
estimatedTokens: 603
keywords: [Event, Notification, Service, Activities, establish, active, subscription, receives, processes, events, involves, sequence, responsible, creating, callback, setup, providing, URL, endpoint, callbackURL, processing, posted, notifications]
---

> For the Event Notification Service to establish an active subscription that receives and processes notification events involves a sequence of activities. You are responsible for creating a callback (setup), for providing a callback URL endpoint (callbackURL), and for processing posted notifications 

# Event Notification Service Activities

For the Event Notification Service to establish an active subscription that receives and processes notification events involves a sequence of activities. You are responsible for creating a callback (setup), for providing a callback URL endpoint (callbackURL), and for processing posted notifications (customerSystem).

The diagram shows the sequence of events and the required components.

![](/docs/resources/img/en-us/noversion?doc_id=images%2Fens-activities.png&folder=mc-apis)

1.  To register your callback URL, your system calls the [Create Callback API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createCallback.htm).
2.  The ENS syntactically validates your callback URL and issues an HTTPS POST to that URL. The [response body](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createCallback.htm) contains a unique callback ID and verification key.
3.  To [complete callback creation](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/verifyCallback.htm), your callback captures the callback ID and verification key and returns an HTTP 200 status.
4.  Your system [verifies the callback](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/verifyCallback.htm). Ensure that your callback completes verification within four hours.
5.  The ENS compares the verification key supplied and confirms that it is the same as the verification key provided during callback validation. Your callback prepares to receive event notification payloads for the [events you subscribe to](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens-supported-events.htm).
6.  Your setup uses the [Create Subscription API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createSubscription.htm) to register interest in event notifications and provides the callback ID returned during callback validation.
7.  The ENS sends batches of event notifications to your callback via an HTTPS POST up to the maximum batch size you indicated when you created the callback.
8.  Your callback receives a batch of notification events and has a maximum of two seconds to [process them and return](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens-retries-suspensions.htm) an HTTP 200, 201, 202, 203, or 204, indicating successful processing.
