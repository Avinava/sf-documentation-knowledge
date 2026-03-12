---
title: "Headless Registration Flow: Send a Token Request"
domain: headless-identity
topic: headless-registration-flow-send-a-token-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.971Z
estimatedTokens: 348
keywords: [Headless, Registration, Flow, Send, Token, receive, authorization, code, Salesforce, exchange, access, walks, initializing, Postman]
---

# Headless Registration Flow: Send a Token Request

> After you receive the authorization code from Salesforce, exchange the code for an
  access token. This example walks you through initializing the code exchange with
  Postman.

# Headless Registration Flow: Send a Token Request

After you receive the authorization code from Salesforce, exchange the code for an access token. This example walks you through initializing the code exchange with Postman.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From the Headless Identity API Demo folder in Postman, select **Registration - Token Exchange**.

    Note the location of the POST request. It’s the /services/oauth2/token endpoint on your Experience Cloud site.

2.  To see the request body, click **Body**. The token request for registration includes these parameters.
    -   code—The authorization code from Salesforce
    -   grant\_type—The OAuth 2.0 grant type. Because the OAuth 2.0 authorization code grant type is the foundation of this flow, this parameter is set to authorization\_code.
    -   client\_id—The external client app consumer key
    -   redirect\_uri—The external client app callback URL, which points to the OAuth 2.0 echo endpoint on your Experience Cloud site
3.  For the code, enter the authorization code that you received after sending the authorization request.
4.  To send the request to the token endpoint, click **Send**.

    Salesforce validates the token request and returns an access token to your app.
