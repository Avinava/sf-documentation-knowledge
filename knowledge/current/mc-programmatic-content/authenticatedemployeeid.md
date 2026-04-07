---
title: "AuthenticatedEmployeeID"
domain: mc-programmatic-content
topic: authenticatedemployeeid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.568Z
estimatedTokens: 110
keywords: [AuthenticatedEmployeeID, **Overview**, **Syntax**, Usage]
---

# AuthenticatedEmployeeID

> AuthenticatedEmployeeID()

# AuthenticatedEmployeeID

## **Overview**

Returns the employee ID of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages.

### **Syntax**

AuthenticatedEmployeeID()

### Usage

```
set @ID = AuthenticatedEmployeeID()
```

The system sets @ID to the value of the employee ID for the authenticated landing page user.

Last Updated: Jun 8, 2021
