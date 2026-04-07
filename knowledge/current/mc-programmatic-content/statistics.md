---
title: "Statistics"
domain: mc-programmatic-content
topic: statistics
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.544Z
estimatedTokens: 70
keywords: [Statistics, **Overview**, **Syntax**]
---

# Statistics

# Statistics

## **Overview**

Retrieves an object containing send, click, and open statistics for an initialized subscriber

### **Syntax**

Statistics()

## Example

```
var subObj = Subscriber.Init("SubKey");
var subStats = subObj.Statistics();
```

Last Updated: Jun 8, 2021
