---
title: "Android Architecture and Flow"
domain: mobile-sdk
topic: android-architecture-and-flow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:29.778Z
estimatedTokens: 405
keywords: [Android, Architecture, Flow, kick, off, identity, provider, user, open, either, client, app, implementation, differs, depending]
---

# Android Architecture and Flow

> To kick off the identity provider flow, a user can open either an identity provider or
  an identity provider client app. In Android, the implementation differs depending on which side
  initiates it.

# Android Architecture and Flow

To kick off the identity provider flow, a user can open either an identity provider or an identity provider client app. In Android, the implementation differs depending on which side initiates it.

## Identity Provider Client

The following steps describe the identity provider flow when launched from an identity provider client.

1.  User launches the identity provider client and chooses “Log in with IDP”.
2.  Identity provider client swizzles to the identity provider for authentication.
3.  Identity provider completes authentication and swizzles back to the client app.

## Initiated by an Identity Provider

The following steps describe the identity provider flow when launched from an identity provider.

1.  User launches the identity provider app.
2.  User selects a client app.
3.  An authorization request for the current active user in the IDP app is sent to a Salesforce authorization endpoint.
4.  Identity provider app communicates with the selected client app in the background, passing the username (user\_hint). If the client app has the user, it tells the user that it’s ready to go, and the flow continues to step 6.
5.  If the client app doesn’t have the user:
    -   Client app responds back to identity provider app to request an authentication code.
    -   Identity provider app gets the authentication code and sends it to the client app.
    -   Client app performs the refresh token exchange for the authentication code and communicates to the IDP app that it’s ready to go.
6.  The identity provider app swizzles to the client app, which is now logged in.
