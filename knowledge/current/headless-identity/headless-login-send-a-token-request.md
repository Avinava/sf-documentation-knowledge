---
title: "Headless Login: Send a Token Request"
domain: headless-identity
topic: headless-login-send-a-token-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.928Z
estimatedTokens: 367
keywords: [Headless, Login, Send, Token, authorization, code, exchange, access]
---

# Headless Login: Send a Token Request

> After you send the authorization request and get a code, exchange the code for an access
  token.

# Headless Login: Send a Token Request

After you send the authorization request and get a code, exchange the code for an access token.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From the Headless Identity API Demo folder in Postman, select **Username Password Login - Token Exchange**.

    Note the location of the POST request. It’s the /services/oauth2/token endpoint on your Experience Cloud site.

2.  To see the request body, click **Body**. The token request for headless login includes these parameters.
    -   code—The authorization code from Salesforce.
    -   grant\_type—The OAuth 2.0 grant type. Because the OAuth 2.0 authorization code grant type is the foundation of this flow, this parameter is set to authorization\_code.
    -   client\_id—The external client app consumer key.
    -   redirect\_uri—The external client app callback URL, which points to the OAuth 2.0 echo endpoint.
3.  For the code, enter the authorization code that you received in your response from the previous step.
4.  To send the request to the token endpoint, click **Send**.

    Salesforce validates the token request and returns a response to your app. The response contains an access token that can be used to access Salesforce APIs and other identifying parameters. Here’s an example access token response in Postman.

    ```

    ```

## Code Examples

```
{
    "access_token": "00DR**********",
    "sfdc_community_url": "https://MyExperienceCloudSite.my.site.com",
    "sfdc_community_id": "0DBXXXXXXXXXXXXXXXX",
    "signature": "CPk2JprUcxOmRHND71gJFn+SxyKe7jWqA1rQnFz9zZg=",
    "token_format": "opaque",
    "scope": "openid api",
    "id_token": "eyJr**************",
    "instance_url": "https://yourInstance.salesforce.com",
    "id": "https://yourInstance.salesforce.com/id/00Dxxxxxxxxxxxx/005xxxxxxxxxxxx",
    "token_type": "Bearer",
    "issued_at": "1667600739962"
}
```
