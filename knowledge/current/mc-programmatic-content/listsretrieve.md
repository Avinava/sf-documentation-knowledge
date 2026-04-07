---
title: "Lists.Retrieve"
domain: mc-programmatic-content
topic: listsretrieve
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.961Z
estimatedTokens: 73
keywords: [Lists.Retrieve, **Overview**, **Syntax**]
---

# Lists.Retrieve

## **Overview**

Returns an array of information on the lists of which the initialized subscriber is a member

### **Syntax**

Lists.Retrieve()

## Example

```
var subObj = Subscriber.Init("SubKey");
var listArray = subObj.Lists.Retrieve();
```

Last Updated: Jun 8, 2021
