---
title: "Data Extension Functions"
domain: mc-programmatic-content
topic: data-extension-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.996Z
estimatedTokens: 211
keywords: [Load, Initialization, Extension, Functions, allow, rows, contained, via, server-side, JavaScript, Enterprise, 2.0, Account, Function, work, extensions, inside, Marketing, Cloud, account, add, edit, search, ZIP, code, pull, back, corresponding]
---

> These functions allow access to the fields and rows contained within a data extension via server-side JavaScript.

# Data Extension Functions

These functions allow access to the fields and rows contained within a data extension via server-side JavaScript.

## Load

In your server-side JavaScript code, load the core library using this syntax:

```
Platform.Load("core","1");
```

Use this sample code as a model to construct your own server-side JavaScript code.

## Enterprise and Enterprise 2.0 Account

These functions do not support the use of enterprise-level data extensions.

## Initialization

To interact with a data extension via server-side JavaScript, you must first initialize the object. This code initializes a data extension with the external key of birthdayDE.

```
var birthdayDE = DataExtension.Init("birthdayDE");
```

Once you initialize a data extension, you can use the Fields and Rows sub-objects in your server-side JavaScript code.
