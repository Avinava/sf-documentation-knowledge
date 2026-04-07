---
title: "Encode Custom Activities Using a JWT"
domain: mc-app-development
topic: encode-custom-activities-using-a-jwt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.028Z
estimatedTokens: 399
keywords: [Encode, Custom, Activities, JWT, Marketing, Cloud, uses, JSON, Web, Token, pronounced, JOT, validate, identity, API]
---

# Encode Custom Activities Using a JWT

> The Marketing Cloud uses a JSON Web Token (JWT - pronounced "JOT") to validate the identity of API calls to your custom activities. Use a JWT for activities that are retrieving sensitive data or performing sensitive actions. A JWT is encoded, but not encrypted. Encryption is handled at the transport

# Encode Custom Activities Using a JWT

The Marketing Cloud uses a JSON Web Token (JWT - pronounced "JOT") to validate the identity of API calls to your custom activities. Use a JWT for activities that are retrieving sensitive data or performing sensitive actions. A JWT is encoded, but not encrypted. Encryption is handled at the transport layer by SSL. To use a JWT, your application must have SSL enabled.

When your application is called, Marketing Cloud posts the encoded JWT to the activity's endpoint. The JWT lets your application know that the user calling the API is from Marketing Cloud.

Use one of two encoding mechanisms to get a JWT.

### Customer Key

Use an external key from Marketing Cloud as the signing key. Pass the external key into the customerKey field in the custom activity request body. The external key and customer key are synonyms.

### JWT Signing Secret

You may use your application's JWT Signing Secret from the package containing the activity as a fallback signing key when a customerKey is not included in the custom activity request body. For example, use the JWT Signing Secret to validate the origin of a the call for a custom activity that is hosted by a single integration partner but used by multiple Marketing Cloud customers.

## Related Items

-   [Encode with Customer Key](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt-customer-key.htm)
-   [Encode with JWT Signing Secret](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt-app-signature.htm)

## Related Topics

- Encode with Customer Key (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt-customer-key.htm)
- Encode with JWT Signing Secret (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt-app-signature.htm)
