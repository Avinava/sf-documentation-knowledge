---
title: "Implementing Salesforce Integrations on Lightning
    Platform"
domain: api
topic: implementing-salesforce-integrations-on-lightning-platform
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.676Z
estimatedTokens: 547
keywords: [Implementing, Salesforce, Integrations, Lightning, Platform, implement, client, applications, creating, AppExchange, app, Accessing, Data, API, OAuth]
---

# Implementing Salesforce Integrations on Lightning
    Platform

> You can implement your Salesforce integrations or other client applications, on the Lightning
      Platform by creating a Salesforce AppExchange app.

# Implementing Salesforce Integrations on Lightning Platform

You can implement your Salesforce integrations or other client applications, on the Lightning Platform by creating a Salesforce AppExchange app.

1.  Create a [WebLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_weblink.htm "HTML (New Window)") that passes the user session ID and the API server URL to an external site:

    ```

    ```

    Use https to ensure that your session ID cannot be detected.

2.  The page pointed to in the preceding step takes the session ID and uses it to call back to the API. Use [getUserInfo()](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo.htm "Retrieves personal information for the user associated with the current session.") to return the [userID](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm#i1434422) associated with the session and related information. If needed, you can also use retrieve on the User object to retrieve any additional information you need about the user.
3.  Maintain a cross-reference between the UserId or username and the corresponding user ID in your system, which you can do using a [WebLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_weblink.htm "HTML (New Window)") that is executed when the user clicks a tab, or a WebLink on the page layout.
4.  Package and upload this app using the instructions in Salesforce Help topic “Prepare Your Apps for Distribution.”

## Accessing Salesforce Data Using the API and OAuth

Salesforce supports OAuth 1.0.A and 2.0 for SOAP API requests.

Using an already defined connected app and the OAuth protocol, a third party can implement an OAuth authentication flow to integrate with the Salesforce API.

For detailed steps about integrating with the Salesforce API using OAuth, see [Authenticating Apps with OAuth](https://help.salesforce.com/apex/HTViewHelpDoc?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)") in Salesforce Help.

Partners, who wish to get an OAuth consumer Id for authentication, can contact Salesforce

## Code Examples

```
https://www.your_tool.com/test.jsp?sessionid={!API_Session_ID}&url={!API_Partner_Server_URL_80}
```

## Related Topics

- getUserInfo() (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo.htm)
- userID (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm)
