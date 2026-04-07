---
title: "CancelSend"
domain: mc-programmatic-content
topic: cancelsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.383Z
estimatedTokens: 75
keywords: [CancelSend, **Overview**, **Syntax**, Examples]
---

# CancelSend

# CancelSend

## **Overview**

Attempts to cancel a currently existing send

### **Syntax**

CancelSend()

## Examples

This sample code demonstrates how to perform this against an initialized send:

```
var mySend = Send.Init(12345);
var status = mySend.CancelSend();
```

Last Updated: Jun 8, 2021
