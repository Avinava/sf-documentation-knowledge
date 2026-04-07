---
title: "Send Definition"
domain: mc-programmatic-content
topic: send-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:28.408Z
estimatedTokens: 101
keywords: [Send, Definition, sub-object, add, retrieve, remove, email, definitions, well, emails, Initialize]
---

# Send Definition

> This sub-object allows you to add, update, retrieve, and remove email send definitions, as well as send emails using an email send definition.

# Send Definition

This sub-object allows you to add, update, retrieve, and remove email send definitions, as well as send emails using an email send definition.

## Initialize

To interact with a send definition via server-side JavaScript, you must first initialize the object. Thhis code initializes a send definition with the external key of myESD.

```
var esd = Send.Definition.Init('myESD');
```
