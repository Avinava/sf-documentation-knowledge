---
title: "Token Revocation Events"
domain: mobile-sdk
topic: token-revocation-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:32.402Z
estimatedTokens: 147
keywords: [Token, Revocation, Events, event, occurs, ClientManager, Android-style, notification, intent, action, declared, constant]
---

# Token Revocation Events

> When a token revocation event occurs, the ClientManager
   object sends an Android-style notification. The intent action for this notification is declared
   in the ClientManager.ACCESS_TOKEN_REVOKE_INTENT constant.

# Token Revocation Events

When a token revocation event occurs, the ClientManager object sends an Android-style notification. The intent action for this notification is declared in the ClientManager.ACCESS\_TOKEN\_REVOKE\_INTENT constant.

SalesforceActivity.java, SalesforceListActivity.java, SalesforceExpandableListActivity.java, and SalesforceDroidGapActivity.java implement ACCESS\_TOKEN\_REVOKE\_INTENT event listeners. These listeners automatically take logged out users to the login page when the refresh token is revoked. A toast message notifies the user of this occurrence.
