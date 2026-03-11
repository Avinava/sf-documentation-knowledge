---
title: "Authorization: User Sign-In"
domain: agentforce
topic: authorization-user-sign-in
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.670Z
keywords: [Authorization, User, Sign-In]
---

# Authorization: User Sign-In

# Authorization: User Sign-In

To access the Agentforce IT Service Configuration Management Database (CMDB) GraphQL API, you must authenticate using an OAuth 2.0 Authorization Code flow with user sign-in, so that API calls run under the signed-in user's identity.

You must have administrator access to your Salesforce org to create Connected Apps.

1.  Log in to your Salesforce org as an administrator.
2.  Create a Connected App (also known as an External Client App) and retrieve your OAuth credentials (Client ID and Client Secret). For detailed instructions, see [Authorization Through Connected Apps and OAuth 2.0](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_oauth_and_connected_apps.htm "HTML (New Window)").
3.  Obtain the authorization code from the Salesforce authorization URL.
    
    Execute the following request to receive an authorization code at your callback URL:
    
    Authorization request:
    
    ```
    
    ```
    
    Use the redirect URI from your Connected App.
    
4.  Exchange your authorization code for an access token.
    
    Submit a POST request to the token endpoint using the code from the previous step:
    
    ```
    
    ```
    
    Use the access\_token you received in the Authorization header for your CMDB GraphQL requests.