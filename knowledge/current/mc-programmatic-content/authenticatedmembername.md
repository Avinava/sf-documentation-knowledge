---
title: "AuthenticatedMemberName"
domain: mc-programmatic-content
topic: authenticatedmembername
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.915Z
estimatedTokens: 114
keywords: [AuthenticatedMemberName, **Overview**, **Syntax**]
---

> AuthenticatedMemberName()

# AuthenticatedMemberName

## **Overview**

Returns the member name of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages.

### **Syntax**

AuthenticatedMemberName()

### Usage

```
set @membername = AuthenticatedMemberName()
```

The system sets @membername to the value of the member name for the authenticated landing page user.

Last Updated: Jun 8, 2021
