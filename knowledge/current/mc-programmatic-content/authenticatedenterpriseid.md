---
title: "AuthenticatedEnterpriseID"
domain: mc-programmatic-content
topic: authenticatedenterpriseid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.904Z
estimatedTokens: 113
keywords: [AuthenticatedEnterpriseID, **Overview**, **Syntax**]
---

> AuthenticatedEnterpriseID()

# AuthenticatedEnterpriseID

## **Overview**

Returns the enterprise ID of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages.

### **Syntax**

AuthenticatedEnterpriseID()

### Usage

```
set @ID = AuthenticatedEnterpriseID()
```

The system sets @ID to the value of the enterprise ID for the authenticated landing page user.

Last Updated: Jun 8, 2021
