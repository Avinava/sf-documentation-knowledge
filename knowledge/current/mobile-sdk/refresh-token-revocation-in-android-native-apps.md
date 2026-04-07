---
title: "Refresh Token Revocation in Android Native Apps"
domain: mobile-sdk
topic: refresh-token-revocation-in-android-native-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.712Z
estimatedTokens: 139
keywords: [Refresh, Token, Revocation, Android, Native, Apps, revoked, administrator, behavior, automatically, log, current, user, result]
---

> When a refresh token is revoked by an administrator, the default behavior is to
         automatically log out the current user. As a result of this behavior:

# Refresh Token Revocation in Android Native Apps

When a refresh token is revoked by an administrator, the default behavior is to automatically log out the current user. As a result of this behavior:

-   Any subsequent REST API calls your app makes will fail.
-   The system discards your user’s account information and cached offline data.
-   The system forces the user to navigate away from your page.
-   The user must log into Salesforce again to continue using your app.

These side effects provide a secure response to the administrator’s action.
