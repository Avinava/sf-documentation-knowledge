---
title: "Revoking OAuth Tokens"
domain: mobile-sdk
topic: revoking-oauth-tokens
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.760Z
estimatedTokens: 112
keywords: [Revoking, OAuth, Tokens, user, logs, app, times, ways, becomes, invalid, logged-in, users’, credentials, cleared, mobile, effectively, ends, connection, server]
---

> When a user logs out of an app, or the app times out or in other ways becomes invalid,
    the logged-in users’ credentials are cleared from the mobile app. This effectively ends the
    connection to the server.

# Revoking OAuth Tokens

When a user logs out of an app, or the app times out or in other ways becomes invalid, the logged-in users’ credentials are cleared from the mobile app. This effectively ends the connection to the server.

Also, Mobile SDK revokes the refresh token from the server as part of logout.

See [Revoke Opaque OAuth Tokens](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_revoke_token.htm&type=5&language=en_US)
