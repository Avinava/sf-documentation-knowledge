---
title: "Headless Registration and Headless Login Flows: Get User Info"
domain: headless-identity
topic: headless-registration-and-headless-login-flows-get-user-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.945Z
estimatedTokens: 383
keywords: [Headless, Registration, Login, Flows, User, Info, built, Authorization, Code, Credentials, Flow, exchange, access, token, app]
---

# Headless Registration and Headless Login Flows: Get User Info

> Both headless registration and headless login are built on the Authorization Code and
  Credentials Flow, where you exchange an authorization code for an access token. After your app
  receives the access the token, the next step is processing it and creating the user session. This
  example walks you through calling the User Info endpoint to confirm that the login was successful
  and to provide the user information required for your app to create a session. You can use this
  example for both headless registration and headless login.

# Headless Registration and Headless Login Flows: Get User Info

Both headless registration and headless login are built on the Authorization Code and Credentials Flow, where you exchange an authorization code for an access token. After your app receives the access the token, the next step is processing it and creating the user session. This example walks you through calling the User Info endpoint to confirm that the login was successful and to provide the user information required for your app to create a session. You can use this example for both headless registration and headless login.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


1.  From the Headless Identity API Demo folder in Postman, select **Get User Info**.

    Note the location of the POST request. It’s the /services/oauth2/userinfo endpoint on your Experience Cloud site.

2.  To see the headers, click **Headers**. The request for User Info includes these headers and values.
    -   An Authorization header with the value Bearer <Token>
    -   A Content-Type header set to application/json
3.  For the Authorization header, replace <token> with the access token that you received during headless registration or headless login, depending on which process you’re testing.
4.  To send the request to the User Info endpoint, click **Send**.

    If the login was successful, you get a response containing information about the user.
