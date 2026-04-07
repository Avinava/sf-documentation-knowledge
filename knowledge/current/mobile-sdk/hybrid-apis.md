---
title: "Hybrid APIs"
domain: mobile-sdk
topic: hybrid-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.350Z
estimatedTokens: 221
keywords: [Hybrid, APIs, apps, enable, multi-user, support, Mobile, SDK, JavaScript, reside, SFAccountManagerPlugin, Cordova-based, module]
---

# Hybrid APIs

> Hybrid apps can enable multi-user support through Mobile SDK JavaScript APIs. These APIs reside in the SFAccountManagerPlugin Cordova-based
module.

# Hybrid APIs

Hybrid apps can enable multi-user support through Mobile SDK JavaScript APIs. These APIs reside in the SFAccountManagerPlugin Cordova-based module.

## SFAccountManagerPlugin Methods

Before you call any of these methods, you need to load the sfaccountmanager plug-in. For example:

```

```

| Method Name | Description |
| --- | --- |
| getUsers | Returns the list of users already logged in. |
| getCurrentUser | Returns the current active user. |
| logout | Logs out the specified user if a user is passed in, or the current user if called with no arguments. |
| switchToUser | Switches the application context to the specified user, or launches the account switching screen if no user is specified. |

Hybrid apps don’t need to implement a receiver for the multi-user switching broadcast event. This handler is implemented by the SalesforceDroidGapActivity class.

## Code Examples

```
cordova.require("com.salesforce.plugin.sfaccountmanager").logout();
```
