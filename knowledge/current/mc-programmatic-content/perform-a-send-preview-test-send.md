---
title: "Perform a Send Preview Test Send"
domain: mc-programmatic-content
topic: perform-a-send-preview-test-send
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:27.845Z
estimatedTokens: 88
keywords: [Perform, Send, Preview, Test]
---

# Perform a Send Preview Test Send

# Perform a Send Preview Test Send

```
var SendDefObj = Platform.Function.CreateObject('EmailSendDefinition');
Platform.Function.SetObjectProperty(SendDefObj,'CustomerKey','My Test Send');
Platform.Function.SetObjectProperty(SendDefObj,'TestEmailAddr','acruz@example.com');

var send = Platform.Function.InvokePerform(SendDefObj,'Test',status);
```
