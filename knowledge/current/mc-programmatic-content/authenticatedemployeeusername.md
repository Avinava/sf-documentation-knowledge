---
title: "AuthenticatedEmployeeUserName"
domain: mc-programmatic-content
topic: authenticatedemployeeusername
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.899Z
estimatedTokens: 116
keywords: [AuthenticatedEmployeeUserName, **Overview**, **Syntax**]
---

> AuthenticatedEmployeeUserName()

# AuthenticatedEmployeeUserName

## **Overview**

Returns the username of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages.

### **Syntax**

AuthenticatedEmployeeUserName()

### Usage

```
set @username = AuthenticatedEmployeeUserName()
```

The system sets @username to the value of the username for the authenticated landing page user.

Last Updated: Jun 8, 2021
