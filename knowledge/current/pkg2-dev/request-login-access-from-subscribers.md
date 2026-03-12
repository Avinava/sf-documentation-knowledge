---
title: "Request Login Access from Subscribers"
domain: pkg2-dev
topic: request-login-access-from-subscribers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.212Z
estimatedTokens: 249
keywords: [Login, Access, Subscribers, log, subscriber, org]
---

# Request Login Access from Subscribers

> To log in to a subscriber org, first request login access from the
  subscriber.

# Request Login Access from Subscribers

To log in to a subscriber org, first request login access from the subscriber.

Ask the subscriber to enable either **Grant Account Login Access** or **Grant Login Access**. If they don’t see your company listed, one of the following applies.

-   A system admin disabled the ability for non-admins to grant access.
-   The user doesn’t have a license for the package.
-   The package is licensed to the entire org. In this scenario, only an admin with the Manage Users permission can grant access.
-   The org setting **Administrators Can Log in as Any User** is enabled.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

When the org setting **Administrators Can Log in as Any User** is disabled, login access is granted for a limited amount of time, and the subscriber can revoke access at any time.

Any changes you make while logged in as a subscriber are logged in the subscriber org’s audit trail.
