---
title: "Send Functions"
domain: mc-programmatic-content
topic: send-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.883Z
estimatedTokens: 154
keywords: [Load, Initialization, Send, Functions, allow, control, how, emails, sent, via, Marketing, Cloud, account]
---

> These functions allow you to access and control how emails are sent via your Marketing Cloud account.

# Send Functions

These functions allow you to access and control how emails are sent via your Marketing Cloud account.

## Load

In your server-side JavaScript code, first load the core library using the syntax below:

```
Platform.Load("core","1");
```

Use this sample code as a model for your own server-side JavaScript code.

## Initialization

To interact with an existing send via server-side JavaScript, you must first initialize the object. This code initializes a send with a send ID of 12345:

```
var s = Send.Init(12345);
```

Once you initialize the send, you can use the other applicable functions.
