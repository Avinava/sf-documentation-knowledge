---
title: "Perform a Triggered Send Definition"
domain: mc-programmatic-content
topic: perform-a-triggered-send-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.842Z
estimatedTokens: 70
keywords: [Perform, Triggered, Send, Definition]
---

# Perform a Triggered Send Definition

# Perform a Triggered Send Definition

```
var ts = TriggeredSend.Init('welcome');
var status = ts.Send(Request.GetQueryStringParameter('Email Address'));
```

OR

```
var status = TriggeredSend.Init('welcome').Send(Request.GetQueryStringParameter('Email Address'),{Attr:2});
```
