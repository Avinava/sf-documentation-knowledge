---
title: "Subscriber Functions"
domain: mc-programmatic-content
topic: subscriber-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.957Z
estimatedTokens: 140
keywords: [Load, Initialization, Subscriber, Functions, Server-side, JavaScript, allow, unsubscribe, subscribers, well, retrieve]
---

> The Subscriber Server-side JavaScript functions allow you to create, update, and unsubscribe subscribers as well as retrieve information about those subscribers.

# Subscriber Functions

The Subscriber Server-side JavaScript functions allow you to create, update, and unsubscribe subscribers as well as retrieve information about those subscribers.

## Load

In your server-side JavaScript code, first load the core library using this syntax:

```
Platform.Load("core", "1");
```

## Initialization

To interact with a subscriber via server-side JavaScript, you must first initialize the object. This code initializes a subscriber with the subscriber key of mySubscriber.

```
var sub = Subscriber.Init('mySubscriber');
```
