---
title: "Get Started with Event Notification Service"
domain: mc-apis
topic: get-started-with-event-notification-service
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.818Z
estimatedTokens: 495
keywords: [Prerequisites, Started, Event, Notification, Service, Ensure, client, secret, stored, securely, Never, expose, side, via, JavaScript, store, mobile, application, API, Items]
---

> Ensure that your client ID and secret are stored securely. Never expose this information on the client side via JavaScript or store it in a mobile application.

# Get Started with Event Notification Service

## Prerequisites

-   [Set up your development environment](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/index.htm) to use Marketing Cloud APIs.
-   In Installed Packages, [create an API integration](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm) to get a client ID and client secret. Use the following permissions settings for the API integration.
    -   Event Notifications: Callbacks - Read, Create, Update, Delete
    -   Event Notifications: Subscriptions - Read, Create, Update, Delete

Ensure that your client ID and secret are stored securely. Never expose this information on the client side via JavaScript or store it in a mobile application.

## Set Up the Event Notification Service API

1.  Supply an HTTPS callback URL, also known as a webhook, for your application. HTTP is not supported for callback URLs. 2.[Register](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createCallback.htm) and [verify](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/verifyCallback.htm) your callback URL.
2.  [Create a subscription](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createSubscription.htm) that requests notification events. A subscription indicates which event types to receive notifications for and which callback, or webhook, to receive them on.
3.  Prepare your system for the possibility of receiving a notification event more than once because the ENS is an "at least once" delivery system.

To stop receiving notifications, you can pause a subscription any time. When you unpause the subscription, only new event notifications are delivered. Notification events that occurred during the pause are dropped.

## Related Items

-   [Use ENS in Marketing Cloud](https://help.salesforce.com/articleView?id=mc_overview_ens.htm&type=5)
