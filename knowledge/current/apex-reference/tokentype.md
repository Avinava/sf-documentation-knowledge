---
title: "tokenType"
domain: apex-reference
topic: tokentype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:33.384Z
keywords: [tokenType, type, token, external, identity, provider., access, refresh, SAML, 2.0, assertion, JSON, Web, Token, JWT, Signature, Property, Value]
---

# tokenType

> The type of token from the external identity provider. It can be an access token, refresh
    token, ID token, SAML 2.0 assertion, or a JSON Web Token (JWT).

### tokenType

The type of token from the external identity provider. It can be an access token, refresh token, ID token, SAML 2.0 assertion, or a JSON Web Token (JWT).

#### Signature

public Auth.OAuth2TokenExchangeType tokenType {get; set;}

#### Property Value

Type: [Auth.OAuth2TokenExchangeType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_OAuth2TokenExchangeType.htm)