---
title: "IntegratingAppType Enum"
domain: apex-reference
topic: integratingapptype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.392Z
estimatedTokens: 161
keywords: [IntegratingAppType, Specifies, whether, you’re, integrating, app, connected, external, client, used, customized, Apex, token, exchange, handler, which, extends, Auth.Oauth2TokenExchangeHandler, class., Usage]
---

# IntegratingAppType Enum

> Specifies whether you’re integrating your app as a connected app or as an external client
    app in methods used in your customized Apex token exchange handler, which extends the Auth.Oauth2TokenExchangeHandler class.

# IntegratingAppType Enum

Specifies whether you’re integrating your app as a connected app or as an external client app in methods used in your customized Apex token exchange handler, which extends the Auth.Oauth2TokenExchangeHandler class.

## Usage

See [Token Exchange Handler Validation and Subject Mapping](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/token_exchange_handler.htm).

## Enum Values

The following are the values of the Auth.IntegratingAppType enum.

| Value | Description |
| --- | --- |
| CA | Indicates a Salesforce connected app. |
| ECA | Indicates a Salesforce external client app. |
