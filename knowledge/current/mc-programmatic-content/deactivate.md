---
title: "Deactivate"
domain: mc-programmatic-content
topic: deactivate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:27.464Z
estimatedTokens: 94
keywords: [Deactivate, **Overview**, **Syntax**]
---

# Deactivate

# Deactivate

## **Overview**

Deactivates an account user

### **Syntax**

Deactivate()

## Example

This sample code initializes a specific account and deactivates that account.

```
var acctUser = AccountUser.Init('myAccountUser', 123456789);
var status = acctUser.Deactivate();
```

You cannot delete an account user via server-side JavaScript.

Last Updated: Jun 8, 2021
