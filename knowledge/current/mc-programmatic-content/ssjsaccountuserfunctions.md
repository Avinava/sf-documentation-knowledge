---
title: "ssjs_accountUserFunctions"
domain: mc-programmatic-content
topic: ssjsaccountuserfunctions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.467Z
estimatedTokens: 172
keywords: [ssjs_accountUserFunctions, AccountUser, Server-side, JavaScript, functions, access, modify, users, authorized, work, Marketing, Cloud, account, Load, Initialization]
---

# ssjs_accountUserFunctions

> Use AccountUser Server-side JavaScript functions to access and modify users authorized to work within your Marketing Cloud account.

Use AccountUser Server-side JavaScript functions to access and modify users authorized to work within your Marketing Cloud account.

## Load

In your server-side JavaScript code, first load the core library using the syntax below:

```
Platform.Load("core", "1");
```

## Initialization

To interact with an AccountUser via server-side JavaScript, you must first initialize the object. This code initializes an account user with the external key of myAccountUser and the client ID belonging to the AccountUser with the rights to manipulate other users:

```
var targetUserKey = 'myAccountUser';
var myClientID = 123456789;

var acctUser = AccountUser.Init(targetUserKey, myClientID);
```
