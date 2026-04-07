---
title: "ssjs_accountFunctions"
domain: mc-programmatic-content
topic: ssjsaccountfunctions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.859Z
estimatedTokens: 136
keywords: [Load, Initialization, ssjs_accountFunctions, Account, Server-side, JavaScript, functions, modify, accounts, Marking, Cloud]
---

# ssjs_accountFunctions

> Use Account Server-side JavaScript functions to access and modify accounts within your Marking Cloud account.

Use Account Server-side JavaScript functions to access and modify accounts within your Marking Cloud account.

## Load

In your server-side JavaScript code, load the core library using the syntax below:

```
Platform.Load("core", "1");
```

## Initialization

To interact with an Account via server-side JavaScript, you must first initialize the object. This code initializes an account with the external key of 'myAccount'.

```
Account.Init("myAccount");
```

Once you initialize the Account object, you can use the other Account functions.
