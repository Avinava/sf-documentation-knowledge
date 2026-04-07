---
title: "Sender Profile Functions"
domain: mc-programmatic-content
topic: sender-profile-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.928Z
estimatedTokens: 198
keywords: [Load, Initialization, Sender, Profile, Functions, allow, control, profiles, Marketing, Cloud, account, work, landing, pages, cannot, function, email, messages, send, time]
---

> These functions allow you to access and control sender profiles within your Marketing Cloud account. These functions work only with landing pages and cannot function in email messages at send time.

# Sender Profile Functions

These functions allow you to access and control sender profiles within your Marketing Cloud account. These functions work only with landing pages and cannot function in email messages at send time.

## Load

In your server-side JavaScript code, first load the core library using this syntax:

```
Platform.Load("core","1");
```

Use this sample code as a model to construct your own server-side JavaScript code.

## Initialization

To interact with a sender profile via server-side JavaScript, you must first initialize the object. The code below initializes a sender profile with the external key of 'mySenderProfile'.

```
var myProfile = SenderProfile.Init('mySenderProfile');
```

Once you initialize the sender profile, you can use the applicable functions.
