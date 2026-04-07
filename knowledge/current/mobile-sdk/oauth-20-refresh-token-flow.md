---
title: "OAuth 2.0 Refresh Token Flow"
domain: mobile-sdk
topic: oauth-20-refresh-token-flow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.752Z
estimatedTokens: 268
keywords: [OAuth, 2.0, Refresh, Token, Flow, client—via, connected, app—receives, new, session, current, expires, app’s, timeout, determines, longer, apply]
---

> After a client—via a connected app—receives an access
    token, it can use a refresh token to get a new session when its current session expires.
   The connected app’s session timeout value determines when an access token is no longer valid and
   when to apply for a new one using a refresh token.

# OAuth 2.0 Refresh Token Flow

After a client—via a connected app—receives an access token, it can use a refresh token to get a new session when its current session expires. The connected app’s session timeout value determines when an access token is no longer valid and when to apply for a new one using a refresh token.

The refresh token flow involves these steps.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Mobile SDK apps can use the SmartStore feature to store data locally for offline use. SmartStore data is inherently volatile. Its lifespan is tied to the authenticated user as well as to OAuth token states. When the user logs out of the app, deletes all soup data associated with that user. Similarly, when the OAuth refresh token is revoked or expires, the user’s app state is reset, and all data in SmartStore is purged. Carefully consider the volatility of SmartStore data when designing your app. This warning is especially important if your org sets a short lifetime for the refresh token.
