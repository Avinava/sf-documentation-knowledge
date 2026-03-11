---
title: "OAuth for Salesforce Connect Custom Adapters"
domain: apex-guide
topic: oauth-for-salesforce-connect-custom-adapters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.859Z
keywords: [OAuth, Salesforce, Connect, Custom, Adapters, See]
---

# OAuth for Salesforce Connect Custom Adapters

# OAuth for Salesforce Connect Custom Adapters

If you use OAuth 2.0 to access external data, learn how to avoid access interruptions caused by expired access tokens.

Some external systems use OAuth access tokens that expire and need to be refreshed. We can automatically refresh access tokens as needed when:

-   The user or external data source has a valid refresh token from a previous OAuth flow.
-   The sync, query, or search method in your DataSource.Connection class throws a DataSource.OAuthTokenExpiredException.

We use the relevant OAuth credentials for the user or external data source to negotiate with the remote service and refresh the token. The DataSource.Connection class is reconstructed with the new OAuth token in the DataSource.ConnectionParams that we supply to the constructor. The search or query is then reinvoked.

If the authentication provider doesn’t provide a refresh token, access to the external system is lost when the current access token expires. If a warning message appears on the external data source detail page, consult your OAuth provider for information about requesting offline access or a refresh token.

For some authentication providers, requesting offline access is as simple as adding a scope. For example, to request offline access from a Salesforce authentication provider, add refresh\_token to the Default Scopes field on the authentication provider definition in your Salesforce organization.

For other authentication providers, you must request offline access in the authentication URL as a query parameter. For example, with Google, append ?access\_type=offline to the Authorize Endpoint URL field on the authentication provider definition in your Salesforce organization. To edit the authorization endpoint, select **Open ID Connect** in the Provider Type field of the authentication provider. For details, see “Configure an OpenID Connect Authentication Provider” in the Salesforce Help.

#### See Also

-   [Authentication for Salesforce Connect Custom Adapters](atlas.en-us.apexcode.meta/apexcode/apex_connector_authentication.htm "Your DataSource.Provider class declares what types of credentials can be used to authenticate to the external system.")