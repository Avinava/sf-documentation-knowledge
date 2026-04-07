---
title: "Folder Functions"
domain: mc-programmatic-content
topic: folder-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.165Z
estimatedTokens: 196
keywords: [Load, Initialization, Folder, Functions, allow, control, folders, Marketing, Cloud, account]
---

> These functions allow you to access and control folders within your Marketing Cloud account.

# Folder Functions

These functions allow you to access and control folders within your Marketing Cloud account.

## Load

In your server-side JavaScript code, first load the core library using this syntax:

```
Platform.Load("core","1");
```

## Initialization

To interact with a folder via server-side JavaScript, you must first initialize the object. The code below initializes a folder with the external key of myFolder.

```
var myFolder = Folder.Init("myFolder");
```

Not all Folder objects ll include an external key. You can initialize a Folder by assigning it an ID number:

```
var myIDFolder = Folder.Init();
myIDFolder.SetID(12345);
```

Once you initialize the folder, use the ID number to identify the folder in place of the external key for all applicable functions.
