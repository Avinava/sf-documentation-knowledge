---
title: "GamificationForceAuthenticator"
domain: loyalty
topic: gamificationforceauthenticator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.815Z
estimatedTokens: 99
keywords: [GamificationForceAuthenticator, protocol, necessary, handling, access, tokens, Salesforce, API, getAccessToken, grantAccessToken]
---

# GamificationForceAuthenticator

> The GamificationForceAuthenticator protocol
    defines the necessary methods for handling access tokens in the Salesforce API.

# GamificationForceAuthenticator

The GamificationForceAuthenticator protocol defines the necessary methods for handling access tokens in the Salesforce API.

## Methods

## getAccessToken()

Returns a valid access token as a string if available, otherwise null.

func getAccessToken()

## grantAccessToken

Returns a refreshed or newly granted access token as a string.

func grantAccessToken()
