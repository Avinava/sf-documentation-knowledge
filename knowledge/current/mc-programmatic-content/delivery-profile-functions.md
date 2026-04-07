---
title: "Delivery Profile Functions"
domain: mc-programmatic-content
topic: delivery-profile-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.069Z
estimatedTokens: 175
keywords: [Load, Initialization, Delivery, Profile, Functions, allow, control, profiles, Marketing, Cloud, account, part, landing, application]
---

> These functions allow you to access and control delivery profiles within your Marketing Cloud account. Use these functions as part of a landing page or other application.

# Delivery Profile Functions

These functions allow you to access and control delivery profiles within your Marketing Cloud account. Use these functions as part of a landing page or other application.

## Load

In your server-side JavaScript code, first load the core library using the syntax below:

```
Platform.Load("core","1");
```

## Initialization

To interact with a delivery profile via server-side JavaScript, you must first initialize the object. The code below initializes a delivery profile with the external key of 'myDeliveryProfile'.

```
var myProfile = DeliveryProfile.Init('myDeliveryProfile');
```

Once you initialize the delivery profile, you can use the associated functions.
