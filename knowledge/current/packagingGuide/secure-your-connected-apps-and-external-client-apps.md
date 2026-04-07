---
title: "Secure Your Connected Apps and External Client Apps"
domain: packagingGuide
topic: secure-your-connected-apps-and-external-client-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:04:55.360Z
estimatedTokens: 1631
keywords: [Secure, Connected, Apps, External, Client, requirements, apply, any, App, ECA, included, connection, Partner, Application, provided]
---

# Secure Your Connected Apps and External Client Apps

> These requirements apply to any Connected App or External Client App (ECA) that is
    included or used in connection with a Partner Application, provided or created by the Partner,
    and in use by more than two customer production orgs.

# Secure Your Connected Apps and External Client Apps

These requirements apply to any Connected App or External Client App (ECA) that is included or used in connection with a Partner Application, provided or created by the Partner, and in use by more than two customer production orgs.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

These requirements include specific deadlines for compliance. Failure to comply may result in the Partner Application’s AppExchange de-listing and/or Salesforce’s temporary or permanent suspension of the Partner Application’s interoperation with Salesforce’s services.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Starting in the Spring ‘26 release, you can't create new Connected Apps. Use ECAs instead. For more information, see [New Connected Apps Can No Longer Be Created in Spring ‘26 for Salesforce](https://help.salesforce.com/s/articleView?id=005228017&type=1&language=en_US).

## Proof Key for Code Exchange

PKCE (Proof Key for Code Exchange) protects the OAuth authorization code flow against interception attacks on authorization code, especially for public clients, like mobile apps. Partners must enable PKCE in the OAuth settings of their Salesforce Connected Apps and ECAs, regardless of whether the client is public or confidential.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

After PKCE is enabled, partners won't be permitted to disable.

For Public Clients, the token exchange request must not include the client\_secret parameter. The presence of the correct code\_verifier parameter is the only mechanism for verifying the client's identity.

For Confidential Clients, the token exchange request must include both the code\_verifier parameter, for code binding, and the client\_secret parameter, for client authentication, in the /services/oauth2/token endpoint request.

Partners must also make sure that they implement the client changes referenced below. After PKCE is enabled, the Partner Application’s Connected Apps and ECAs won't work unless the client changes listed below are implemented.

Client changes:

-   Generate code\_verifier parameter: Create a high-entropy, random string (43-128 chars).
-   Create code\_challenge parameter: Hash the code\_verifier, using SHA256 and BASE64URL to encode it.
-   Authorization request: Include code\_challenge and code\_challenge\_method=S256 parameters in the request to the authorization server.
-   Token request: Send the original code\_verifier parameter, not the hash, when exchanging the authorization code for an access token.

For more information, see [Enabling PKCE for OAuth for Salesforce External Client and Connected Apps](https://help.salesforce.com/s/articleView?id=005316703&type=1&language=en_US) and [Proof Key for Code Exchange (PKCE) Extension](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_pkce.htm&language=en_US&type=5).

## Refresh Token Rotation

Refresh Token Rotation (RTR) enhances security by invalidating the old refresh token, and replacing it with a new refresh token, after a new access token is issued. Stolen tokens are invalidated upon the next refresh token flow, which limits the window of opportunity for an attacker if a refresh token is compromised. It's a critical defense against long-term session hijacking.

Partners must have RTR enabled in the OAuth settings of all of their Salesforce Connected Apps and ECAs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

After RTR is enabled, Partners won't be permitted to disable.

Partners must also make sure that they implement the client changes referenced below. After RTR is enabled, the Partner Application’s Connected Apps and ECAs won't work unless the client changes listed below are implemented.

Client changes:

-   Implement code changes to capture the new refresh token returned by the refresh token flow and store the new refresh token securely.
-   Implement robust error handling to detect when a refresh token is rejected. Sometimes a failed refresh token flow indicates that the token was compromised.
-   Applications that make parallel refresh token flow requests may encounter potential race conditions where multiple requests try to use the same, about-to-be-invalidated refresh token. Your client implementation should handle potential race conditions.

For more information, see [Force one-time-use Refresh Tokens - (RTR) Refresh Token Rotation](https://help.salesforce.com/s/articleView?id=005316711&type=1&language=en_US) and [OAuth 2.0 Refresh Token Flow for Renewed Sessions](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_refresh_token_flow.htm&type=5&language=en_US).

## Deadlines for Implementation

All Partners must implement the preceding requirements for Connected Apps and ECAs by the deadlines set forth below.

| Security Feature | Compliance Due Date |
| --- | --- |
| OAuth PKCE | May 11, 2026 |
| OAuth Refresh Token Rotation | May 11, 2026 |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

Failure to comply may result in the Partner Application’s AppExchange de-listing and/or Salesforce’s temporary or permanent suspension of the Partner Application’s interoperation with Salesforce’s services.

## Report Suspicious Activity

Any suspicious activity or security incidents that impact a Partner’s applications or solutions and/or the customer integrations with a Partner’s applications or solutions must be reported by the Partner immediately to the Salesforce security team by emailing [security@salesforce.com](mailto:security@salesforce.com) for further investigation.

#### See Also

-   [Connected App & External Client App Security Requirements for AppExchange](https://help.salesforce.com/s/articleView?id=005232552&type=1&language=en_US)

-   [Comparison of Connected Apps and External Client Apps Features](https://help.salesforce.com/s/articleView?id=xcloud.connected_apps_and_external_client_apps_features.htm&type=5&language=en_US)

-   [External Client Apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&type=5&language=en_US)

-   [Connected Apps](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_overview.htm&type=5&language=en_US)
