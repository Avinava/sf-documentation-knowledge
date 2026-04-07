---
title: "Upgrade SSO Claim Version"
domain: mc-app-development
topic: upgrade-sso-claim-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:21.479Z
estimatedTokens: 247
keywords: [Upgrade, SSO, Claim, Marketing, Cloud, app, process, uses, JSON, Web, Token, JWT, acquire, tokens, behalf, logged-in, users, Decoded, Items]
---

> The Marketing Cloud app SSO process uses a JSON Web Token (JWT) to acquire access tokens on behalf of logged-in users.

# Upgrade SSO Claim Version

The Marketing Cloud app SSO process uses a JSON Web Token (JWT) to acquire access tokens on behalf of logged-in users.

SSO Claim version 2 provides greater security for your apps because it does not include the access token in the initial request. Apps that use the SSO Claim version 1 should consider upgrading to version 2. When you upgrade versions, update your app so that it no longer sends an access token in its initial request. Use the following example JSON as a guide to update your app to support SSO Claim version 2.

## Decoded JWT before and after Upgrade

![Upgrade SSO Claim Version to v2](/docs/resources/img/en-us/noversion?doc_id=images%2Fsso_upgrade_v2.png&folder=mc-app-development)

## Related Items

-   [Single Sign-On](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/single-sign-on.htm)
-   [Explanation of Decoded JWT](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/explanation-decoded-jwt.htm)

## Related Topics

- Single Sign-On (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/single-sign-on.htm)
- Explanation of Decoded JWT (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/explanation-decoded-jwt.htm)
