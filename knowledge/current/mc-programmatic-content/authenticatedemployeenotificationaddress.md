---
title: "AuthenticatedEmployeeNotificationAddress"
domain: mc-programmatic-content
topic: authenticatedemployeenotificationaddress
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.894Z
estimatedTokens: 133
keywords: [AuthenticatedEmployeeNotificationAddress, **Overview**, **Syntax**]
---

> AuthenticatedEmployeeNotificationAddress()

# AuthenticatedEmployeeNotificationAddress

## **Overview**

Returns the notification email address of the authenticated landing page user. Use this function only with Microsites when using Sender Authenticated Redirection. Not for use with CloudPages.

### **Syntax**

AuthenticatedEmployeeNotificationAddress()

### Usage

```
set @address= AuthenticatedEmployeeNotificationAddress()
```

The system sets @address to the value of the notification email address for the authenticated landing page user.

Last Updated: Jun 8, 2021
