---
title: "Single Sign-On in Legacy Packages"
domain: mc-app-development
topic: single-sign-on-in-legacy-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.180Z
estimatedTokens: 399
keywords: [Sign-On, Legacy, Packages, August, Marketing, Cloud, removed, ability, new, enhanced, Client, Libraries]
---

# Single Sign-On in Legacy Packages

> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages.

# Single Sign-On in Legacy Packages

> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages.

The Marketing Cloud provides the authentication context of the logged-in user and account using a JSON Web Token (JWT - pronounced "JOT"). The single sign-on (SSO) flow uses a JWT-based version of the IDP-Initiated Form Post SAML 2.0 flow. JWT transfers claims between two parties using JavaScript Object Notation (JSON) that is Base64URL encoded and signed using the HMAC SHA-256 algorithm.

When your application is called, Marketing Cloud posts the encoded JWT to the login endpoint defined in the installed package. The JWT lets your application know which Marketing Cloud account and user is calling the API.

![](/docs/resources/img/en-us/noversion?doc_id=images%2Fsso.png&folder=mc-app-development)

## Client Libraries

The following libraries provide support for generating a JWT (JSON Web Token):

-   Ruby: [ruby-jwt](https://github.com/progrium/ruby-jwt) (by progrium)
-   Python: [pyjwt](https://github.com/progrium/pyjwt) (by progrium)
-   Java: [jsontoken](https://code.google.com/p/jsontoken/)
-   node.js: [node-jwt-simple](https://github.com/hokaccha/node-jwt-simple) (by hokacca)
-   PHP: [jwt](https://github.com/luciferous/jwt) (by luciferous)
-   .NET: [jwt](https://github.com/johnsheehan/jwt) (by johnsheehan)

If none of these libraries suits your needs, create your own. Details of the JWT format are in the [draft JWT specification](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html).
