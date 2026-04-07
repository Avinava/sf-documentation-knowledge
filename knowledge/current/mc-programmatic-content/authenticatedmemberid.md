---
title: "AuthenticatedMemberID"
domain: mc-programmatic-content
topic: authenticatedmemberid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.584Z
estimatedTokens: 108
keywords: [AuthenticatedMemberID, **Overview**, **Syntax**, Usage]
---

# AuthenticatedMemberID

> AuthenticatedMemberID()

# AuthenticatedMemberID

## **Overview**

Returns the member ID of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages.

### **Syntax**

AuthenticatedMemberID()

### Usage

```
set @ID = AuthenticatedMemberID()
```

The system sets @ID to the value of the member ID for the authenticated landing page user.

Last Updated: Jun 8, 2021
