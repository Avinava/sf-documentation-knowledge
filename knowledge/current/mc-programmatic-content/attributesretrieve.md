---
title: "Attributes.Retrieve"
domain: mc-programmatic-content
topic: attributesretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.523Z
estimatedTokens: 71
keywords: [Attributes.Retrieve, **Overview**, **Syntax**]
---

# Attributes.Retrieve

> Attributes.Retrieve()

# Attributes.Retrieve

## **Overview**

Returns an array of attributes belonging to the initialized subscriber

### **Syntax**

Attributes.Retrieve()

## Example

```
var subObj = Subscriber.Init("SubKey");
var attributes = subObj.Attributes.Retrieve();
```

Last Updated: Jun 8, 2021
