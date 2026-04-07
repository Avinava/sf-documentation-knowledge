---
title: "Pause"
domain: mc-programmatic-content
topic: pause
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.601Z
estimatedTokens: 72
keywords: [Pause, **Overview**, **Syntax**]
---

# Pause

# Pause

## **Overview**

Pauses the triggered send and returns a status

### **Syntax**

Pause()

## Example

This sample code initializes a triggered send object and pauses it:

```
var tsd = TriggeredSend.Init("triggeredSend");
var status = tsd.Pause();
```

Last Updated: Jun 8, 2021
