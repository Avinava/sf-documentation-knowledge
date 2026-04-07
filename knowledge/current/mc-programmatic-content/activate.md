---
title: "Activate"
domain: mc-programmatic-content
topic: activate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.455Z
estimatedTokens: 76
keywords: [Activate, **Overview**, **Syntax**]
---

# Activate

# Activate

## **Overview**

Activates an account user

### **Syntax**

Activate()

## Example

This sample code initializes a specific account and activates that account:

```
var acctUser = AccountUser.Init('myAccountUser', 123456789);
var status = acctUser.Activate();
```

Last Updated: Jun 8, 2021
