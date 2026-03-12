---
title: "GameAuthenticator"
domain: loyalty
topic: gameauthenticator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.792Z
estimatedTokens: 97
keywords: [GameAuthenticator, necessary, handling, access, tokens, Salesforce, API, getAccessToken, grantAccessToken]
---

# GameAuthenticator

> The GameAuthenticator interface defines the
    necessary methods for handling access tokens in the Salesforce API.

# GameAuthenticator

The GameAuthenticator interface defines the necessary methods for handling access tokens in the Salesforce API.

## Methods

## getAccessToken()

Returns a valid access token as a string if available, otherwise null.

final String getAccessToken()

## grantAccessToken

Returns a refreshed or newly granted access token as a string.

final String grantAccessToken()
