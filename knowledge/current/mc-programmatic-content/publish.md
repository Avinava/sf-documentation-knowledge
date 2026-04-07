---
title: "Publish"
domain: mc-programmatic-content
topic: publish
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:24.036Z
estimatedTokens: 93
keywords: [Publish, **Overview**, **Syntax**]
---

# Publish

## **Overview**

Publishes changes and updates to a triggered send and returns a status

### **Syntax**

Publish()

## Example

This sample code initializes a triggered send object and causes it to publish any changes, refreshing the active content:

```
var tsd = TriggeredSend.Init("triggeredSend");
var status = tsd.Publish();
```

Last Updated: Jun 8, 2021
