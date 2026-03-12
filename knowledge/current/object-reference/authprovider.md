---
title: "AuthProvider"
domain: object-reference
topic: authprovider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.397Z
estimatedTokens: 3085
keywords: [AuthProvider, authentication, provider, auth, lets, users, log, Salesforce, org, external, service, Facebook, Google, GitHub, API]
---

# AuthProvider

> Represents an authentication provider (auth provider). An auth provider
			lets users log in to your Salesforce org from an external service provider, such as
			Facebook, Google, or GitHub. This object is available in API version 27.0 and
		later.

# AuthProvider

Represents an authentication provider (auth provider). An auth provider lets users log in to your Salesforce org from an external service provider, such as Facebook, Google, or GitHub. This object is available in API version 27.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Only users with Customize Application and Manage AuthProviders permissions can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AppleTeam | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired when using Apple as a third-party authentication provider. A 10-character team ID, obtained from an Apple developer account. Available in API version 48.0 and later. |
| AuthorizeUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired when creating an OpenID Connect authentication provider. The OAuth authorization endpoint URL. Available in API version 29.0 and later. In API version 33.0 and later, for Salesforce-managed auth providers, leave the field blank to let Salesforce supply and manage the value. |
| ConsumerKey | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe app’s key that is registered at the third-party (external) authentication provider. In API version 33.0 and later, for Salesforce-managed auth providers, leave the field blank to let Salesforce supply and manage the value. |
| ConsumerSecret | TypestringPropertiesCreate, NillableDescriptionThe consumer secret of the authentication provider that is registered at the third-party SSO provider. It’s used by the consumer for identification to Salesforce. In API version 33.0 and later, for Salesforce-managed auth providers, leave the field blank to let Salesforce supply and manage the value. You can create your own consumer secret on create(). However, after you set it, you can’t change the value. |
| CustomMetadataTypeRecord | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired when creating a custom authentication provider plug-in. The API name of the custom authentication provider. Available in API version 36.0 and later. |
| DefaultScopes | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFor OpenID Connect authentication providers, the scopes to send with the authorization request, if not specified when a flow starts. Available in API version 29.0 and later. In API version 33.0 and later, for Salesforce-managed auth providers, leave the field blank to let Salesforce supply and manage the value. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Used when referring to the authentication provider from a program. |
| EcKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired when using Apple as a third-party authentication provider. Available in API version 48.0 and later. |
| ErrorUrl | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA custom error URL for the authentication provider to use to report errors. |
| ExecutionUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired to specify a registration handler. The username of the Salesforce admin or system user who runs the Apex handler or flow. The execution user provides the context in which the registration handler runs. For example, if the handler creates a contact, the creation can be easily traced back to the registration process. In production, use a system user. The user must have the Manage Users permission. Available in API version 27.0 and later. |
| FlowDefaultAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor authentication providers that use a flow registration handler, the default account that new external users are assigned to. If you include this field, Salesforce automatically uses it for the defaultAccountId variable in the Authentication Provider User Registration standard flow.A default account is required to use a flow registration handler for external users. You can specify a default account here or in the flow itself. If you use both, the default account that's configured in the flow takes precedent.Available in API version 64.0 and later. |
| FlowDefaultProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor authentication providers that use a flow registration handler, the default profile that new users are assigned to. If you include this field, Salesforce automatically uses it for the defaultProfileId variable in the Authentication Provider User Registration standard flow.A default profile is required to use a flow registration handler. You can specify a default profile here or in the flow itself. If you use both, the default profile that's configured in the flow takes precedent.Available in API version 64.0 and later. |
| FriendlyName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. A user-friendly name for the authentication provider. |
| IconUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe path to an icon to use as a button on the login page. Users click the button to log in with the associated authentication provider, such as Twitter or Facebook. Available in API version 32.0 and later. |
| IdTokenIssuer | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe source of the authentication token in https: URI format. This field is available when configuring an OpenID Connect or Microsoft authentication provider. If provided, Salesforce validates the returned id_token value. OpenID Connect requires returning an id_token value with the access_token value. Available in API version 30.0 and later. |
| LinkKickoffUrl | TypeurlPropertiesNillableDescriptionThe URL for linking existing Salesforce users to a third-party account. This field is read-only. Available in API version 43.0 and later. |
| LogoutUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe destination for users after they log out if they authenticated using single sign-on. The URL must be fully qualified with an http or https prefix, such as https://acme.my.salesforce.com. Available in API version 33.0 and later. |
| OauthKickoffUrl | TypeurlPropertiesNillableDescriptionThe URL for obtaining OAuth access tokens for a third party. This field is read-only. Available in API version 43.0 and later. |
| OptionsIncludeOrgIdInId | TypebooleanPropertiesCreate, Filter, UpdateDescriptionUsed to differentiate between users with the same user ID from two sources (such as two sandboxes). If enabled (true), Salesforce stores the org ID of the third-party identity in addition to the user ID. After you enable this setting, you can’t disable it. Applies only to a Salesforce-managed auth provider. Available in API version 32.0 and later. |
| OptionsIsPkceEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf set to true, the authentication provider uses the OAuth 2.0 Proof Key for Code Exchange (PKCE) extension, which improves the security of the provider’s authorization flow. This field applies only to these providerType values:CustomFacebookGoogleMicrosoftOpenIdConnectSalesforce.This field is available in API version 59.0 and later. |
| OptionsRequireMfa | TypebooleanPropertiesFilterDescriptionRequires multi-factor authentication (MFA) for single sign-on with this auth provider based on the MFA status of each user. For this setting to trigger MFA, you must apply MFA directly to users via one of two methods. 1) Assign the user permission Multi-Factor Authentication for User Interface Logins. 2) Enable the org setting Require multi-factor authentication (MFA) for all direct UI logins to your Salesforce org. |
| OptionsSendAccessTokenInHeader | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf enabled (true), the access token is sent to the UserInfoUrl in a header instead of a query string. Available in API version 30.0 and later. |
| OptionsSendClientCredentialsInHeader | TypebooleanPropertiesCreate, Filter, UpdateDescriptionRequired when creating an OpenID Connect authentication provider. If enabled (true), the client credentials are sent in a header to the tokenUrl instead of a query string. The credentials are in the standard OpenID Connect Basic Credentials header format, which is Basic <token>, where <token> is the base64-encoded string "clientkey:clientsecret". Available in API version 30.0 and later. |
| OptionsSendSecretInApis | TypebooleanPropertiesCreate, Filter, UpdateDescriptionDetermines whether the encrypted consumer secret appears in API responses. If enabled (default), the secret appears in the response. If disabled (false), responses don’t include the consumer secret. For security, you can disable the setting. However, keep in mind that:By disabling this setting, the consumer secret is excluded from API responses in all API versions.Change sets and other metadata deployments break because both the consumer key and secret are expected. To fix this problem, insert the consumer key manually during deployment.Available in API version 47.0 and later. |
| PluginId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn existing Apex class that extends the Auth.AuthProviderPluginClass abstract class. Available in API version 39.0 and later. |
| ProviderType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The third-party authentication provider to use. Valid values include:Apple. Available in API version 48.0 and later.Bitbucket—Provides authentication for a Bitbucket provider. Enables you to connect to Bitbucket from a Lightning Platform application. When logged in to Bitbucket, the app can makes calls to Bitbucket APIs. The Bitbucket provider isn’t available as an SSO provider, so users can’t log in to a Salesforce org using their Bitbucket login credentials. Available in API version 61.0 and higher.Custom—A provider configured with a custom authentication provider plug-in. Available in API version 36.0 and later.Facebook.GitHub—Provides authentication for a GitHub provider. Used to log in users of your Lightning Platform app to GitHub using OAuth. When logged in to GitHub, your app can make calls to GitHub APIs. The GitHub provider isn’t available as an SSO provider, so users can’t log in to your Salesforce org using their GitHub login credentials. Available in API version 35.0 and later.Google.Janrain.LinkedIn. Available in API version 32.0 and later.Microsoft. Provides authentication for all services that can be accessed via Microsoft Azure Active Directory. Available in API version 55.0 and later.MicrosoftACS—Microsoft Access Control Service provides authentication for a Microsoft Office 365 service, like SharePoint Online. The MicrosoftACS provider doesn't support SSO. Available in API version 31.0 and later.OpenIdConnect. Available in API version 29.0 and later.Salesforce.Slack. Available in API version 54.0 and later.Twitter. Available in API version 32.0 and later. |
| RegistrationHandlerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn existing Apex class that implements the Auth.RegistrationHandler interface. |
| SsoKickoffUrl | TypeurlPropertiesNillableDescriptionThe URL for performing SSO into Salesforce from a third party by using its third-party credentials. This field is read-only. Available in API version 43.0 and later. |
| TokenUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe OAuth token endpoint URL of an OpenID Connect authentication provider. Available in API version 29.0 and later. In API version 33.0 and later, for Salesforce-managed auth providers for sandbox use cases only, leave the field blank to let Salesforce supply and manage the value. |
| UserInfoUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe OpenID Connect endpoint URL of the OpenID Connect authentication provider. Available in API version 29.0 and later. In API version 33.0 and later, for Salesforce-managed auth providers, leave the field blank to let Salesforce supply and manage the value. |
