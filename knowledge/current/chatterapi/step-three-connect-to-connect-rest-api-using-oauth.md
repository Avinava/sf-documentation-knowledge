---
title: "Step Three: Connect to Connect REST API Using OAuth"
domain: chatterapi
topic: step-three-connect-to-connect-rest-api-using-oauth
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:21.947Z
estimatedTokens: 500
keywords: [Step, Three, Connect, REST, API, OAuth, Salesforce, access, token, Pass, requests]
---

# Step Three: Connect to Connect REST API Using OAuth

> Use OAuth to connect to Salesforce and get an access token. Pass the access token in
          requests to Connect REST API.

# Step Three: Connect to Connect REST API Using OAuth

Use OAuth to connect to Salesforce and get an access token. Pass the access token in requests to Connect REST API.

Complete [Step Two: Set Up Authorization](atlas.en-us.chatterapi.meta/chatterapi/CR_quickstart_oauth.htm "Create an external client app in a Salesforce org, enable OAuth, and configure an OAuth flow. Use the external client app to connect to Salesforce.") to create an external client app and configure an OAuth flow before starting this task.

To make a request to Salesforce, substitute values from your org and external client app into these examples.

1.  Generate the access token.

    This cURL command generates an access token.

    ```

    ```

    The value of grant\_type depends on the OAuth authentication flow that you’re using. This example uses the [OAuth 2.0 Client Credentials Flow for Server-to-Server Integration](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_client_credentials_flow.htm&type=5&language=en_US), so the grant type is client\_credentials. The response includes the server instance and the access token.

    ```

    ```

2.  To request a Connect REST API resource, use the returned instance\_url as the server instance. Pass the returned access\_token as a Bearer token in the Authorization request header.

    ```

    ```


If you get an unsupported\_grant\_type error, check the syntax of your cURL command. If you’re using Windows Command Prompt, replace single quotes (') in the examples with double quotes ("). For additional information about OAuth errors, see [OAuth 2.0 Authorization Errors](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_flow_errors.htm&type=5&language=en_US "HTML (New Window)").

-   [← Previous](atlas.en-us.chatterapi.meta/chatterapi/CR_quickstart_oauth.htm "Step Two: Set Up Authorization")
-   [Next →](atlas.en-us.chatterapi.meta/chatterapi/quickstart_communities.htm "Connect to Experience Cloud Sites")

## Code Examples

```
curl -X POST https://instance_name.my.salesforce.com/services/oauth2/token -d 'grant_type=client_credentials' -d 'client_id=3MVG9VwZxxW3bBQjhE6m21CG2nSS4WC.GNbZCtKeQxFH7218ns6xOLCNnJVKnZFTZWKzt2qwSFqt2taMt5mcr' -d 'client_secret=8A4BE698BCA216718ECB0B1DCA294C69732EAD9472A1790F8FED38DD2E02B5FA'
```

```
{
"access_token": "<SALESFORCE_ACCESS_TOKEN>",
"signature": "nUFHwtfIGLKDTHcLWmDBG8frv0t+HQGl/iCZFIQUarE=",
"token_format": "opaque",
"instance_url": "https://instance_name.my.salesforce.com"
"id": "https://login.salesforce.com/id/00Dd000000XXXXXXX/005d000000XXXXX",
"token_type": "Bearer",
"issued_at": "1678833535086"
}
```

```
curl -X GET https://instance_name.my.salesforce.com/services/data/v66.0/chatter/users/me -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>'
```

## Related Topics

- Step Two: Set Up Authorization (atlas.en-us.chatterapi.meta/chatterapi/CR_quickstart_oauth.htm)
- ← Previous (atlas.en-us.chatterapi.meta/chatterapi/CR_quickstart_oauth.htm)
- Next → (atlas.en-us.chatterapi.meta/chatterapi/quickstart_communities.htm)
