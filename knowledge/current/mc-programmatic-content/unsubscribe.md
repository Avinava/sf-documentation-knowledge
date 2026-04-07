---
title: "Unsubscribe"
domain: mc-programmatic-content
topic: unsubscribe
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.978Z
estimatedTokens: 60
keywords: [Unsubscribe, **Overview**, **Syntax**]
---

# Unsubscribe

## **Overview**

Sets a initialized subscriber's status to Unsubscribed

### **Syntax**

Unsubscribe()

## Example

```
var subObj = Subscriber.Init("SubKey");
var status = subObj.Unsubscribe();
```

Last Updated: Jun 8, 2021
