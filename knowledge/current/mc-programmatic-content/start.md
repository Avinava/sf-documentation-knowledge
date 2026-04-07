---
title: "Start"
domain: mc-programmatic-content
topic: start
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.050Z
estimatedTokens: 72
keywords: [Start, **Overview**, **Syntax**]
---

# Start

## **Overview**

Starts the triggered send and returns a status

### **Syntax**

Start()

## Example

This sample code initializes a triggered send object and starts it:

```
var tsd = TriggeredSend.Init("triggeredSend");
var status = tsd.Start();
```

Last Updated: Jun 8, 2021
