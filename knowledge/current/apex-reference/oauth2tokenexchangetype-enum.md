---
title: "OAuth2TokenExchangeType Enum"
domain: apex-reference
topic: oauth2tokenexchangetype-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.454Z
estimatedTokens: 344
keywords: [OAuth2TokenExchangeType, OAuth, 2.0, token, exchange, flow, specify, that’s, exchanged, Salesforce, Usage]
---

# OAuth2TokenExchangeType Enum

> Used during the OAuth 2.0 token exchange flow to
    specify the type of token that’s being exchanged for a Salesforce token.

# OAuth2TokenExchangeType Enum

Used during the OAuth 2.0 token exchange flow to specify the type of token that’s being exchanged for a Salesforce token.

## Usage

During the token exchange flow, your app requests a token from Salesforce by sending a POST request with a token from an external identity provider. The request includes a subject\_token\_type parameter to specify the type of token. The values specified in this enum must correspond to the subject\_token\_type in the token request.

## Enum Values

The following are the values of the Auth.OAuth2TokenExchangeType enum.

| Value | Description |
| --- | --- |
| ACCESS_TOKEN | An access token from the identity provider. The corresponding subject_token_type is urn:ietf:params:oauth:token-type:access_token. |
| ID_TOKEN | An ID token from the identity provider. The corresponding subject_token_type is urn:ietf:params:oauth:token-type:id_token. |
| JWT | A token from the identity provider that’s formatted as a JSON Web Token (JWT). The corresponding subject_token_type is urn:ietf:params:oauth:token-type:JWT. |
| REFRESH_TOKEN | A refresh token from the identity provider. The corresponding subject_token_type is urn:ietf:params:oauth:token-type:refresh_token. |
| SAML_2 | A SAML 2.0 assertion from the identity provider. The corresponding subject_token_type is urn:ietf:params:oauth:token-type:saml2. |
