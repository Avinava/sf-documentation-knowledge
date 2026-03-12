---
title: "Headless Login: Send an Authorization Request"
domain: headless-identity
topic: headless-login-send-an-authorization-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.950Z
estimatedTokens: 575
keywords: [Headless, Login, Send, Authorization, configure, Code, Credentials, Flow, Postman, walks, single-page, app]
---

# Headless Login: Send an Authorization Request

> To configure headless login, set up the Authorization Code and Credentials Flow. This
  Postman example walks you through the Authorization Code and Credentials Flow with a single-page
  app.

# Headless Login: Send an Authorization Request

To configure headless login, set up the Authorization Code and Credentials Flow. This Postman example walks you through the Authorization Code and Credentials Flow with a single-page app.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From the Headless Identity API Demo folder in Postman, select **Username Password Login - Authorize**.

    Note the location of the POST request. It’s the /services/oauth2/authorize endpoint on your Experience Cloud site.

2.  To see the headers, click **Headers**. The authorization POST request includes these headers and values.
    -   An Auth-Request-Type header set to Named-User
    -   An Authorization header with the value Basic <username:password>, which contains the Base64-encoded username and password value
3.  Update the Authorization header.
    1.  In a text editor, paste the username that you registered during headless registration.
    2.  After the username, enter a colon, and then paste the password that you registered, such as username:password.
    3.  Base64-encode the resulting value. For example, if you Base64-encode the string username:password, you get dXNlcm5hbWU6cGFzc3dvcmQ=.
    4.  In Postman, paste this value into the Authorization header to replace <username:password>.
4.  To see the request body, click **Body**. The authorization request for registration includes these parameters.
    -   response\_type—The type of response you want to receive. For this example, it’s set to code\_credentials.
    -   client\_id—The external client app consumer key
    -   redirect\_uri—The external client app callback URL, which points to the OAuth 2.0 echo endpoint on your Experience Cloud site
5.  To send the request to Headless Login API, click **Send**.

    Salesforce validates the user credentials and returns a 302 redirect to a preconfigured URL containing the authorization code. Salesforce then automatically sends the redirect response to the redirect URL. The echo endpoint extracts the code and other parameters from the 302 redirect and returns them to your app in JSON format. Here’s an example response in Postman.

    ```

    ```

## Code Examples

```
{
    "code": "aPrxCdr***************",
    "sfdc_community_url": "https://MyExperienceCloudSite.my.site.com",
    "sfdc_community_id": "0DBXXXXXXXXXXXXXXXX"
}
```
