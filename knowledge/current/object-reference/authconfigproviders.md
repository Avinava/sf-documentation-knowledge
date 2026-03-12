---
title: "AuthConfigProviders"
domain: object-reference
topic: authconfigproviders
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.308Z
estimatedTokens: 500
keywords: [AuthConfigProviders, authentication, provider, that’s, configured, organization, child, AuthConfig, API, version, 32.0, later, Calls, Special, Access]
---

# AuthConfigProviders

> Represents an authentication provider that’s configured in an organization. AuthConfigProviders is a child of the AuthConfig object. This object is available in API
		version 32.0 and later.

# AuthConfigProviders

Represents an authentication provider that’s configured in an organization. AuthConfigProviders is a child of the AuthConfig object. This object is available in API version 32.0 and later.

This object links the authentication configuration for an organization to the Auth Provider through the AuthOptionsAuthProvider field of the [AuthConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authconfig.htm "HTML (New Window)") object. The login page of a My Domain or Experience Cloud site can allow multiple SAML configurations and multiple authentication providers. These configurations can be set to show up as buttons on the login page. Each configuration has an AuthConfigProvider object. For more information about how to display these configurations on the login page, see these resources in Salesforce Help.

-   My Domain: [Add Identity Providers to the My Domain Login Page](https://help.salesforce.com/s/articleView?id=products.domain_name_login_id_prov.htm&type=5&language=en_US "HTML (New Window)")
-   Experience Cloud: [Configure Your Login Page](https://help.salesforce.com/s/articleView?id=xcloud.external_identity_login_pages_configure.htm&type=5&language=en_US "HTML (New Window)")

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

You must have “View Setup and Configuration” permission to view the settings.

## Fields

| Field Name | Details |
| --- | --- |
| AuthConfigId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID for this configuration.This is a relationship field.Relationship NameAuthConfigRelationship TypeLookupRefers ToAuthConfig |
| AuthProviderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Auth. Provider or SAML configuration.This is a polymorphic relationship field.Relationship NameAuthProviderRelationship TypeLookupRefers ToAuthProvider, SamlSsoConfig |
