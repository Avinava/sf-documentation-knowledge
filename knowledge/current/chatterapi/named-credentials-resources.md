---
title: "Named Credentials Resources"
domain: chatterapi
topic: named-credentials-resources
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:15.880Z
estimatedTokens: 725
keywords: [Named, Credentials, Resources, refresh, replace, credential, URL, OAuth, token, flow, external, auth, identity, providers]
---

# Named Credentials Resources

> Get, create, refresh, replace, update, and delete a credential. Get the URL for the
      OAuth token flow for an external credential. Get, create, update, and delete external
      credentials. Get, create, update, and delete named credentials. Get, create, update, and
      delete external auth identity providers.

# Named Credentials Resources

Get, create, refresh, replace, update, and delete a credential. Get the URL for the OAuth token flow for an external credential. Get, create, update, and delete external credentials. Get, create, update, and delete named credentials. Get, create, update, and delete external auth identity providers.

Available resources are:

| Resource | Description |
| --- | --- |
| /named-credentials/credential | Get, create, refresh, update, replace, or delete a credential. |
| /named-credentials/external-auth-identity-provider-credentials/fullName | Get, create, and update external auth identity provider credentials. |
| /named-credentials/external-auth-identity-providers | Get a list of external auth identity providers in the org. Create an external auth identity provider. |
| /named-credentials/external-auth-identity-providers/fullName | Get, update, and delete an external auth identity provider. |
| /named-credentials/credential/auth-url/o-auth | Get the URL for the OAuth token flow for an external credential. |
| /named-credentials/external-credentials | Get external credentials that the user can authenticate to. Create an external credential. |
| /named-credentials/external-credentials​/developerName | Get an external credential, including the named credentials and principals associated with it and the type and status of each principal. Update or delete an external credential. |
| /named-credentials/named-credential-setup | Get a list of named credentials in the org. Create a named credential. |
| /named-credentials/named-credential-setup​/developerName | Get, update, and delete a named credential. |

#### See Also

-   [*Salesforce Help*: Named Credentials](https://help.salesforce.com/HTViewHelpDoc?id=named_credentials_about.htm&language=en_US "Salesforce Help: Named Credentials - HTML (New Window)")

-   [*Named Credentials Developer Guide*: Get Started with Named Credentials](https://developer.salesforce.com/docs/platform/named-credentials/guide/get-started.html "Named Credentials Developer Guide: Get Started with Named
    Credentials - HTML (New Window)")

-   [*Named Credentials Developer Guide*: Named Credential API Links](https://developer.salesforce.com/docs/platform/named-credentials/references/named-credentials-reference/nc-api-links.html "Named Credentials Developer Guide: Named Credential API Links - HTML (New Window)")

-   [*Apex Developer Guide*: Invoking Callouts Using Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts.htm "Apex Developer Guide: Invoking Callouts Using Apex - html (New Window)")

-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Apex Developer Guide: Named Credentials as Callout Endpoints - HTML (New Window)")

## Related Topics

- /named-credentials/credential (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credential.htm)
- /named-credentials/external-auth-identity-provider-credentials/fullName (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider_credentials.htm)
- /named-credentials/external-auth-identity-providers (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_providers.htm)
- /named-credentials/external-auth-identity-providers/fullName (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider.htm)
- /named-credentials/credential/auth-url/o-auth (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_credential_oauth.htm)
- /named-credentials/external-credentials (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_credentials.htm)
- /named-credentials/external-credentials​/developerName (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_credential.htm)
- /named-credentials/named-credential-setup (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_setup_named_credentials.htm)
- /named-credentials/named-credential-setup​/developerName (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_setup_named_credential.htm)
