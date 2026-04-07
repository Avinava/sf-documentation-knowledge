---
title: "RetrieveLists"
domain: mc-programmatic-content
topic: retrievelists
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.896Z
estimatedTokens: 107
keywords: [RetrieveLists, **Overview**, **Syntax**]
---

# RetrieveLists

## **Overview**

Retrieves information regarding which list or lists targeted by a Send event

### **Syntax**

RetrieveLists()

## Example

This sample code demonstrates how to retrieve this information for an individual send event using the SendID:

```
var filter = { Property : "SendID", SimpleOperator : "equals", Value : 12345 };
var listsSentTo = Send.RetrieveLists(filter);
```

Last Updated: Jun 8, 2021
