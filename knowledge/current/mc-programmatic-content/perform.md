---
title: "Perform"
domain: mc-programmatic-content
topic: perform
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.752Z
estimatedTokens: 76
keywords: [Perform, **Overview**, **Syntax**]
---

# Perform

## **Overview**

Performs a query definition from your account

### **Syntax**

Perform()

## Example

This sample code performs the query definition with the external key "myQueryDef":

```
var qd = QueryDefinition.Init("myQueryDef");
var status = qd.Perform();
```

Last Updated: Jun 8, 2021
