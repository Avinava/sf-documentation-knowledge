---
title: "Headlessly Revoke an Access Token"
domain: headless-identity
topic: headlessly-revoke-an-access-token
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.975Z
estimatedTokens: 244
keywords: [Headlessly, Revoke, Access, Token, log, headless, app, walks, revoking, Postman]
---

# Headlessly Revoke an Access Token

> To log out of your headless app, you can revoke the access token. This example walks you
  through headlessly revoking a token with Postman.

# Headlessly Revoke an Access Token

To log out of your headless app, you can revoke the access token. This example walks you through headlessly revoking a token with Postman.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From the Headless Identity API Demo folder in Postman, select **Revoke Token**.

    Note the location of the POST request. It’s the /services/oauth2/revoke endpoint on your Experience Cloud site, which is the same endpoint that you used for the initial reset request.

2.  To see the request body, click **Body**. The revocation request includes only a token parameter.
3.  For the token parameter, replace <Token> with an access token that you obtained during headless registration or headless login.
4.  To send the request to the revocation endpoint, click **Send**.

    If the request is successful, you’re logged out.
