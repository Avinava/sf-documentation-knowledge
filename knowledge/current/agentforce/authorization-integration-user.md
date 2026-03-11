---
title: "Authorization: Integration User"
domain: agentforce
topic: authorization-integration-user
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.661Z
keywords: [Authorization, Integration, User, See]
---

# Authorization: Integration User

# Authorization: Integration User

To access the Agentforce IT Service Configuration Management Database (CMDB) GraphQL API, you must authenticate using an Integration User via a standard OAuth 2.0 flow.

You must have administrator access to your Salesforce org to create Integration Users and Connected Apps.

1.  Log in to your Salesforce org as an administrator.
2.  Create a dedicated User record with the Salesforce Integration **User License**.
3.  Assign the Integration User to a Permission Set that includes at least one of the following permissions. These permissions determine what data you can access via the API:
    
    -   ItsrvcCnfgItmTypMgr
    -   ItsrvcCnfgItmOwner
    -   ItsrvcCnfgItmRead
    
4.  Create a Connected App (also known as an External Client App) and retrieve your OAuth credentials (Client ID and Client Secret). For detailed instructions, see [Authorization Through Connected Apps and OAuth 2.0](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_oauth_and_connected_apps.htm "HTML (New Window)").
5.  Generate a Bearer Token by exchanging your client credentials for an access token.
    
    Send a POST request to the OAuth token endpoint:
    
    ```
    
    ```
    
    The response includes an access token:
    
    ```
    
    ```
    
    Use the access\_token value in the Authorization header of your CMDB GraphQL requests.
    

#### See Also

-   [GraphQL API Authorization](https://developer.salesforce.com/docs/platform/graphql/guide/authorization.html)