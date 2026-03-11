---
title: "ConnectedApp"
domain: metadata-api
topic: connectedapp
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:51.245Z
keywords: [ConnectedApp, Important, File, Suffix, Directory, Location, Version, Fields, ConnectedAppAttribute, ConnectedAppCanvasConfig, ConnectedAppIpRange, ConnectedAppOauthConfig, ConnectedAppOauthAssetToken, ConnectedAppOauthIdToken, ConnectedAppOauthPolicy, ConnectedAppSamlConfig, ConnectedAppSessionPolicy, Declarative, Metadata, Sample]
---

# ConnectedApp

# ConnectedApp

Represents a connected app configuration. A connected app enables an external application to integrate with Salesforce using APIs and standard protocols, such as SAML, OAuth, and OpenID Connect. Connected apps use these protocols to authenticate, authorize, and provide single sign-on (SSO) for external apps. The external apps that are integrated with Salesforce can run on the customer success platform, other platforms, devices, or SaaS subscriptions.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Connected apps creation is restricted as of Spring ‘26. You can use existing connected apps during and after Spring ‘26. However, we recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) instead. If you must continue creating connected apps, contact Salesforce Support.

See [New connected apps can no longer be created in Spring ‘26](https://help.salesforce.com/s/articleView?id=005228017&type=1&language=en_US) for more details.

## File Suffix and Directory Location

ConnectedApp components have the suffix .connectedApp and are stored in the connectedApps folder.

## Version

ConnectedApp components are available in API version 29.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| attributes | canvasConfig | A custom attribute of the connected app. |
|  | AppCanvasConfig | The configuration options of the connected app if it's exposed as a canvas app. |
| contactEmail | string | Required. The email address that Salesforce uses to contact you or your support team. |
| contactPhone | string | The phone number for Salesforce to use to contact you. |
| description | string | An optional description for your app. |
| iconUrl | string | Reserved for future use. |
| infoUrl | string | An optional URL for a web page with more information about your app. |
| ipRanges | ConnectedAppIpRange[] | Specifies the ranges of IP addresses that can access the app without requiring the user to authenticate with the connected app. |
| label | string | Required. The name of the app. |
| logoUrl | string | An optional logo for the app. The logo appears with the app’s entry in the list of apps and on the consent page the user sees when authenticating. The URL must use HTTPS, and the logo can't be larger than 125 pixels high or 200 pixels wide. The default logo is a cloud. |
| mobileStartUrl | string | Users are directed to this URL after they've authenticated when the app is accessed from a mobile device. If you don't give a URL, the user is sent to the app’s default start page after authentication completes. If the connected app that you’re creating is a canvas app, then you can leave this field blank. The Canvas App URL field contains the URL that gets called for the connected app. |
| oauthConfig | connectedAppOauthConfig | Specifies how your app communicates with Salesforce. |
| oauthPolicy | ConnectedAppOauthPolicy | Specifies OAuth access policies associated with your connected app. Available in API version 49.0 and later. |
| permissionSetName | string | Specifies the permissions required to perform different functions with the connected app. Available in API version 46.0 and later.You can assign multiple permission sets to the connected app, but you must enter each permission set name on a separate line. You can’t enter the same permission set name more than one time for each connected app.You can also change a permission set by replacing the current permission set with a new permission set. Make sure that each permission set name assigned to the connected app is unique.You can delete individual permission sets or remove all permission sets from a connected app by entering an empty permissionSetName string on deployment of the connected app: (<permissionSetName></permissionSetName>).To use this field, the isAdminApproved field on the ConnectedAppOauthConfig subtype must be set to true. |
| plugin | string | The name of a custom Apex class that extends Auth.ConnectedAppPlugin to customize the behavior of the app. |
| pluginExecutionUser | string | Specifies the user to run the plugin as. If the user isn’t authorized to use the connected app, use the authorize method. See the ConnectedAppPlugin class in the Apex Developer Guide. Available in API version 46.0 and later.Enter a user that is part of your org. Otherwise, the user is removed from this field when you deploy the connected app. If you don’t want to specify a user, you can leave this field empty.To use this field in an org, the ConAppPluginExecuteAsUser setting must be enabled. |
| profileName | string[] | Specifies the profile (base-level user permissions) required to perform different functions with the connected app. Available in API version 46.0 and later.You can assign multiple profiles to the connected app, but you must enter each profile name on a separate line. You can’t enter the same profile name more than one time for each connected app.You can also change profiles by replacing the current profiles with new profiles. Make sure that each profile name assigned to the connected app is unique.You can also delete individual profiles or remove all profiles from a connected app by entering an empty profileName string on deployment of the connected app: (<profileName></profileName>).To use this field, the isAdminApproved field on the ConnectedAppOauthConfig subtype must be set to true. |
| samlConfig | ConnectedAppSamlConfig | Controls how the app uses single sign-on. |
| sessionPolicy | ConnectedAppSessionPolicy | Specifies a connected app’s session policies. Available in API version 49.0 and later. |
| startUrl | string | If the app isn’t accessed from a mobile device, users are directed to this URL after they've authenticated. If you don't give a URL, the user is sent to the app’s default start page after authentication completes. Whether you give a URL or not, the start URL can be updated later by managing the connected app. If the app is accessed from a mobile device, see mobileStartUrl. If the connected app that you’re creating is a canvas app, then you can leave this field empty. The Canvas App URL field contains the URL that gets called for the connected app. |

## ConnectedAppAttribute

Represents the field names that make up a custom attribute when using SAML with a ConnectedApp. Customize these values to a specific service provider.

| Field Name | Field Type | Description |
| --- | --- | --- |
| formula | string | Required. The value of the attribute. |
| key | string | Required. The attribute's identifier. |

## ConnectedAppCanvasConfig

Represents the configuration options of the connected app if it's exposed as a canvas app.

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessMethod | AccessMethod (enumeration of type string) | Required. Indicates how the canvas app initiates the OAuth authentication flow. The valid values are:Get—OAuth authentication is used, and the user is prompted to allow the third-party application to access their information. When you use this access method, the canvas app must initiate the OAuth authentication flow.Post—OAuth authentication is used, but when the administrator installs the canvas app, they implicitly allow access for users. Therefore, the user isn’t prompted to allow the third party to access their user information. When you use this access method, the authentication is posted directly to the canvas app URL. |
| canvasUrl | string | Required. The URL of the third-party app that's exposed as a canvas app. |
| lifecycleClass | string | The name of the Canvas.CanvasLifecycleHandler Apex class, if you've implemented this class for custom parameters.Available in API version 31.0 and later. |
| locations | CanvasLocationOptions (enumeration of type string)[] | Indicates where the canvas app can appear to the user. The valid values are:Aura—The canvas app can appear in a custom Lightning component.AppLauncher—Reserved for future use.Chatter—The canvas app can appear in the app navigation list on the Chatter tab in Salesforce Classic.ChatterFeed—The canvas app can appear as a Chatter feed item.MobileNav—The canvas app can appear in a mobile card in the Salesforce mobile app. Available in API version 31.0 and later.None—The canvas app can appear only in the Canvas App Previewer.OpenCTI—The canvas app can appear in the call control tool in Salesforce Classic.PageLayout—The canvas app can appear on a page layout. When viewed in the Salesforce mobile app, the canvas app appears in the record detail page. Available in API version 31.0 and later.Publisher—The canvas app can appear as a global action.ServiceDesk—The canvas app can appear in the footer or sidebars of a console in Salesforce Classic.UserProfile—Reserved for future use.Visualforce—The canvas app can appear on a Visualforce page. |
| options | CanvasOptions (enumeration of type string)[] | Indicates whether to hide the Share button and header in the publisher for your canvas app and whether the app is a canvas personal app. Valid values are:HideShare—The Share button is hidden in the publisher for the related canvas app. Available in API version 30.0 and later.HideHeader—The header is hidden in the publisher for the related canvas app. Available in API version 30.0 and later.PersonalEnabled—End users can install the app as a canvas personal app. Available in API version 32.0 and later. |
| samlInitiationMethod | SamlInitiationMethod (enumeration of type string) | If you're using SAML single sign-on (SSO), indicates which provider initiates the SSO flow.IdpInitiated—Identity provider initiated. Salesforce makes the initial request to start the SSO flow.SpInitiated—Service provider initiated. The canvas app starts the SSO flow after it's invoked.None—The canvas app isn't using SAML SSO. Available in API version 31.0 and later. |

## ConnectedAppIpRange

Represents the list of IP addresses that can access the app without requiring the user to authenticate.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | Identifies the purpose of the range, such as which part of a network corresponds to this range. Available in API version 31.0 and later. |
| end | string | Required. The last address in the IP range, inclusive. |
| start | string | Required. The first address in the IP range, inclusive. |

## ConnectedAppOauthConfig

Represents the field names that configure how your connected app communicates with Salesforce.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assetTokenConfig | connectedAppOauthAssetToken | The OAuth asset token configuration for the connected app OAuth settings. Available in API version 49.0 and later. |
| callbackUrl | string | Required. The endpoint that Salesforce calls back to your connected app during OAuth. It’s the OAuth redirect_uri. |
| certificate | string | The PEM-encoded certificate string, if the app uses a certificate. |
| consumerKey | string | A value used by the consumer for identification to Salesforce. Referred to as client_id in OAuth 2.0.In API version 32.0 and later, you can set this field’s value only during creation. After you define and save the value, it can’t be edited. The value must be alphanumeric, can’t contain special characters or spaces, and must be between 8–256 characters. Consumer keys must be globally unique. |
| consumerSecret | string | A value that is combined with the consumerKey and used by the consumer for identification to Salesforce. Referred to as client_secret in OAuth 2.0. Typically, Salesforce generates this value when you create the connected app. However, you can customize the shared secret value during creation. After you save the value, it can’t be edited. When set, the value isn’t returned in Metadata API requests.The value must be alphanumeric (no special characters and no spaces) and a minimum of 8 characters (maximum of 256 characters). If you specify a secret already in use for another connected app in the organization, an error occurs.Available in API version 32.0 and later. |
| idTokenConfig | ConnectedAppOauthIdToken | Specifies the ID token configuration for the connected app OAuth settings. Available in API version 43.0 and later. |
| isAdminApproved | boolean | If set to false (default), anyone in the org can authorize the app. Users must approve the app the first time they access it.If set to true, only users with the appropriate profile or permission set can access the app. These users don’t have to approve the app before they can access it. Manage profiles for the app by editing each profile’s Connected App Access list. Manage permission sets for the app by editing each permission set’s Assigned Connected App list. This setting isn’t available in Group Edition. Available in API version 46.0 and later.Connected app consumers can edit this setting when deploying a connected app in their org. |
| isClientCredentialEnabled | boolean | If set to true, the connected app can use the OAuth 2.0 client credentials flow. To use the client credentials flow, you must also specify a user for oauthClientCredentialUser.If set to false (default), the connected app can’t use the client credentials flow.Available in API version 56.0 and later. |
| isCodeCredentialEnabled | boolean | Determines whether the app can use the Authorization Code and Credentials Flow to provide identity services to headless, off-platform apps. The Authorization Code and Credentials Flow is the foundation of headless login, headless registration, headless passwordless login, and headless guest identity.If set to true, the connected app can use the Authorization Code and Credentials Flow and all associated Headless Identity features. The default value is false.This field is available in API version 57.0 and later. |
| isCodeCredentialPostOnly | boolean | For the Authorization Code and Credentials Flow, determines whether the user’s credentials must be sent in the body of the initial HTTPS POST request to the Salesforce authorization endpoint. Requiring the credentials in the POST body instead of in the header improves security.If set to true, the user’s credentials must be included in the POST body. The default value is false.This field is available in API version 57.0 and later. |
| isConsumerSecretOptional | boolean | If set to false (default), the connected app’s client secret is required in exchange for an access token in the OAuth 2.0 web server flow.If the client app can’t keep the client secret confidential and it must use the web server flow, set to true. A client secret is still generated for the connected app, but this setting instructs the web server flow not to require the client_secret parameter in the access token request. We recommend the user agent flow as a more secure option than web server flow without the secret. Available in API version 49.0 and later. |
| isIntrospectAllTokens | boolean | If set to true, authorizes the connected app to introspect all access and refresh tokens within the entire org.If set to false (default), the connected app can introspect its own tokens. In addition, an OAuth client that directly registers OAuth 2.0 connected apps through the dynamic client registration endpoint can check the tokens for itself and its registered apps. Available in API version 49.0 and later. |
| isNamedUserJwtEnabled | boolean | If set to true, the connected app is enabled to issue JSON Web Token (JWT)-based access tokens.This field is generally available in API version 59.0 and later. |
| isPkceRequired | boolean | Determines whether the Proof Key for Code Exchange (PKCE) extension is required for variations of the OAuth 2.0 authorization code flow configured for the connected app, including the web server flow and Authorization Code and Credentials Flow. For public client apps that can’t keep the consumer secret confidential, such as mobile apps, the PKCE extension helps ensure that the client that initiates an authorization flow is the same client that completes it. For this reason, we always recommend implementing PKCE for public clients. We also strongly recommend that you implement PKCE for private clients.If set to true, the PKCE extension is required and any authorization code flow variations that don’t implement it fail. If set to false, you can still implement PKCE but it isn’t required. The default value is false.This field is available in API version 59.0 and later. |
| isRefreshTokenRotationEnabled | boolean | If set to true, the connected app issues a new refresh token each time the OAuth refresh token flow is invoked. The old refresh token is automatically invalidated. If a user tries to use a previous refresh token that’s been invalidated, the current refresh token and its associated access tokens get deleted. If set to false, the refresh token can be used to obtain multiple access tokens.This field is available in API version 60.0 and later. |
| isSecretRequiredForRefreshToken | boolean | If set to true (default), the app’s client secret is required in the authorization request of a refresh token and hybrid refresh token flow. If set to false and an app sends the client secret in the authorization request, Salesforce still validates it.Select this option for web-server based apps that can protect client secrets. For apps that can’t protect client secrets, such as mobile apps or apps installed on a user’s computer, we recommend against selecting this option. Available in API version 51.0 and later. |
| isSecretRequiredForTokenExchange | boolean | If set to true, the connected app must include its consumer secret (client_secret) in the token request during the OAuth 2.0 token exchange flow. For security, set this field to true only if your app has a private client backend where it can keep the secret safe. For public client apps, such as single-page apps and mobile apps, set this field to false and don’t include the consumer secret.This field is available in API version 60.0 and later. |
| isTokenExchangeEnabled | boolean | If set to true, the connected app can use the OAuth 2.0 token exchange flow to exchange tokens from an external identity provider for Salesforce tokens.This field is available in API version 60.0 and later. |
| oauthClientCredentialUser | string | The execution user for the OAuth 2.0 client credentials flow. Salesforce returns access tokens on behalf of this user. This user must have the API Only permission.To use this field, set isClientCredentialEnabled to true and specify a consumerKey.Available in API version 56.0 and later. |
| scopes | ConnectedAppOauthAccessScope (enumeration of type string)[] | The permissions given by the user running the connected app. When deploying metadata, valid values are:Basic—Allows access to your identity URL service (the same behavior as deploying Address, Email, Phone, and Profile).Api—Allows access to the logged-in user's account over the APIs.Web—Allows use of the access_token on the web. This usage also includes visualforce, allowing access to Visualforce pages.Full—Allows access to all data accessible by the logged-in user.Chatter—Allows access to only the Connect REST API resources.CustomApplications—Provides access to custom applications, such as those using Visualforce.RefreshToken—Allows a refresh token to be returned if you’re eligible to receive one (the same behavior as deploying OfflineAccess).OpenID—Allows access to the logged-in user's unique identifier for OpenID Connect apps.Profile—Allows access to the logged-in user's profile (the same behavior as deploying Basic).Email—Allows access to the logged-in user's email address (the same behavior as deploying Basic).Address—Allows access to the logged-in user's street address (the same behavior as deploying Basic).Phone—Allows access to the logged-in user's phone number value (the same behavior as deploying Basic).OfflineAccess—Allows the app to interact with the user's data while the user is offline and get a refresh token (the same behavior as deploying RefreshToken).CustomPermissions—Allows access to the custom permissions in an organization associated with the connected app and shows whether the current user has each permission enabled.Wave—Allows access to the Analytics REST API resources. Available in API version 35.0 and later.Eclair—Allows access to the Analytics REST API Charts Geodata resource. Available in API version 35.0 and later.Pardot—Allows access to Pardot API services on behalf of the user. The full extent of accessible services is managed by the Pardot account. Available in API version 49.0 and later.Lightning—Allows hybrid apps to directly obtain Lightning child sessions through the OAuth 2.0 hybrid app token flow and hybrid app refresh token flow. Available in API version 51.0 and later.Content—Allows hybrid apps to directly obtain content child sessions through the OAuth 2.0 hybrid app token flow and hybrid app refresh token flow. Available in API version 51.0 and later.CDPIngest—Allows access to Data Cloud ingest API services. Customers use these API services to upload and maintain external datasets in the Data 360. Available in API version 52.0 and later.Chatbot—Allows access to Einstein Bot API services. Available in API version 54.0 and later.ForgotPassword—Allows access to Headless Forgot Password API. Assign to an internal integration user to get an access token for authenticated requests to this API. Available in API version 57.0 and later.UserRegistration—Allows access to Headless Registration API. Assign to an internal integration user to get an access token for authenticated requests to this API. Available in API version 58.0 and later.PwdlessLogin—Allows access to Headless Passwordless Login API. Assign to an internal integration user to get an access token for authenticated requests to this API. Available in API version 59.0 and later.When retrieving metadata, valid values are:Api—Allows access to the logged-in user’s account over the APIs.Basic—Allows access to the user’s identity URL service, and includes Address, Email, Phone, and Profile.Chatter—Allows access to only the Connect REST API resources.CustomApplications—Allows access to custom applications, such as those using Visualforce.Full—Allows access to all data accessible by the logged-in user.OpenID—Allows access to the logged-in user's unique identifier for OpenID Connect apps.CDPIngest—Allows access to Data Cloud ingest API services. Customers use these API services to upload and maintain external datasets in the Data 360. Available in API version 52.0 and later.Pardot—Allows access to Pardot API services on behalf of the user. The full extent of accessible services is managed by the Pardot account. Available in API version 49.0 and later.Lightning—Allows hybrid apps to directly obtain Lightning child sessions through the OAuth 2.0 hybrid app token flow and hybrid app refresh token flow. Available in API version 51.0 and later.Content—Allows hybrid apps to directly obtain content child sessions through the OAuth 2.0 hybrid app token flow and hybrid app refresh token flow. Available in API version 51.0 and later.RefreshToken—Allows a refresh token to be returned if you’re eligible to receive one and is synonymous with allowing OfflineAccess.Wave—Allows access to the Analytics REST API resources. Available in API version 35.0 and later.Eclair—Allows access to the Analytics REST API Charts Geodata resource. Available in API version 35.0 and later.Web—Allows usage of the access_token on the web. This usage also includes visualforce, allowing access to Visualforce pages.Chatbot—Allows access to Einstein Bot API services. Available in API version 54.0 and later.ForgotPassword—Allows access to Headless Forgot Password API. Assign to an internal integration user to get an access token for authenticated requests to this API. Available in API version 57.0 and later.UserRegistration—Allows access to Headless Registration API. Assign to an internal integration user to get an access token for authenticated requests to this API. Available in API version 58.0 and later.PwdlessLogin—Allows access to Headless Passwordless Login API. Assign to an internal integration user to get an access token for authenticated requests to this API. Available in API version 59.0 and later. |
| singleLogoutUrl | string | The single logout endpoint. This URL is the endpoint where Salesforce sends a logout request when users log out of Salesforce. |

## ConnectedAppOauthAssetToken

Specifies an OAuth asset token configuration for the connected app OAuth settings. Available in API version 49.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assetAudiences | string | Required. The audience claim associated with the asset token payload. This claim identifies who the JWT is intended for. Value is an array of case-sensitive strings, each containing a StringOrURI value. An audience is specified for each intended consumer of the asset token. |
| assetIncludeAttributes | boolean | Required. If set to true (default), custom attributes associated with the connected app are included in the asset token payload. If set to false, these attributes aren’t included. |
| assetIncludeCustomPerms | boolean | Required. If set to true (default), custom permissions associated with the connected app are included in the asset token payload. If set to false, these permissions aren’t included. |
| assetSigningCertId | string | Required. The ID of the JWT certificate’s signing secret. The certificate size can’t exceed 4 KB. If it does, try using a DER encoded file to reduce the size. |
| assetValidityPeriod | int | Required. The asset token’s validity period. The validity must be the expiration time of the assertion within 3 minutes, expressed as the number of seconds from 1970-01-01T0:0:0Z measured in UTC. |

## ConnectedAppOauthIdToken

Specifies the ID token configuration for the connected app OAuth settings. Available in API version 43.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| idTokenAudience | string | The audiences that this ID token is intended for. The value is an array of case-sensitive strings. If no audiences are specified, the OAuth 2.0 client_id of the relying party is returned as the default audience. Otherwise, the other audiences are returned with the client_id in the aud value. |
| idTokenIncludeAttributes | boolean | Indicates whether attributes are included in the ID token. |
| idTokenIncludeCustomPerms | boolean | Indicates whether custom permissions are included in the ID token. |
| idTokenIncludeStandardClaims | boolean | Indicates whether standard claims about the authentication event are included in the ID token. |
| idTokenValidity | int | The length of time that the ID token is valid for after it’s issued. The value can be from 1 to 720 minutes. The default is 2 minutes. |

## ConnectedAppOauthPolicy

Specifies OAuth access policies for the connected app. Available in API version 49.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| ipRelaxation | string | Required. Specifies whether a user’s access to the connected app is restricted by IP ranges. Valid options are:ENFORCE (default)—Enforces the IP restrictions configured for the org, such as the IP ranges assigned to a user profile.BYPASS_2FACTOR—Allows a user running the app to bypass the org’s IP restrictions when either of these conditions is true.The app has a list of allowed IP ranges and is using the web server OAuth authorization flow. Requests coming from only these IPs are allowed.The app doesn’t have a list of allowed IP ranges, but it uses the web server authentication flow. And the user successfully completes identity verification if accessing Salesforce from a new browser or device.BYPASS—Allows a user to run this app without org IP restrictions.ENFORCE_RELAXREFRESH—Enforces the IP restrictions configured for the org, such as the IP ranges assigned to a user profile. However, this option bypasses these restrictions when the connected app uses refresh tokens to get access tokens. |
| refreshTokenPolicy | string | Required. Specifies how long a refresh token is valid for.If refresh tokens are provided, users can continue to access the OAuth-enabled connected app without having to reauthorize when the access token expires, as defined by the session timeout value. The connected app exchanges the refresh token with an access token to start a new session. The Refresh Token policy is evaluated only during usage of the issued refresh token and doesn’t affect a user’s current session. Refresh tokens are required only when a user’s session has expired or isn’t available. For example, you set a refresh token policy to expire the token after 1 hour. If a user uses the app for 2 hours, the user isn’t forced to reauthenticate after 1 hour. However, the user is required to authenticate again when the session expires and the client attempts to exchange its refresh token for a new session.Valid options are:zero—The refresh token is invalid immediately. The user can use the current session (access token) already issued, but can’t obtain a new session when the access token expires.infinite—The refresh token is used indefinitely, unless revoked by the user or Salesforce admin. Default setting.specific_lifetime:number:HOURS, DAYS, MONTHS—The refresh token is valid for a fixed amount of time. For example, if the policy states specific_lifetime:1:DAYS, the user can obtain new sessions for only 24 hours.specific_inactivity:number:HOURS, DAYS, MONTHS—The refresh token is valid as long as it’s been used within the specified amount of time. For example, if set to specific_inactivity:7:DAYS, and the refresh token isn’t exchanged for a new session within seven days, the next attempt to use the token fails. The expired token can’t generate new sessions. If the refresh token is exchanged within seven days, the token is valid for another seven days. The monitoring period of inactivity also resets. |
| singleLogoutUrl | string | If single logout is enabled, specify the single logout URL. Salesforce sends logout requests to this URL when users log out of Salesforce. The single logout URL must be an absolute URL starting with https://. |

## ConnectedAppSamlConfig

Specifies how an app uses single sign-on.

| Field Name | Field Type | Description |
| --- | --- | --- |
| acsUrl | string | Required. The assertion consumer service URL from the service provider. |
| certificate | string | The PEM-encoded certificate string, if the app uses a certificate. |
| encryptionCertificate | string | The name of the certificate to use for encrypting SAML assertions to the service provider. This certificate is saved in the organization's Certificate and Key Management list. Available in API version 30.0 and later. |
| encryptionType | SamlEncryptionType(enumeration of type string) | When Salesforce is the identity provider, the SAML configuration can specify the encryption method used for encrypting SAML assertions to the service provider. The service provider detects the encryption method in the SAML assertion for decryption. Valid values are:AES_128—128–bit keyAES_256—256–bit keyAvailable in API version 30.0 and later. |
| entityUrl | string | Required. The entity ID from your service provider. |
| issuer | string | A URI that sends the SAML response. A service provider can use this URI to determine which identity provider sent the response. Available in API version 29.0 and later. |
| samlIdpSLOBindingEnum | SamlIdpSLOBinding (enumeration of type string) | The SAML HTTP binding type from the service provider used for single logout. Available in API version 40.0 and later. Valid values are:PostBindingRedirectBinding |
| samlNameIdFormat | SamlNameIdFormatType (enumeration of type string) | Indicates the format the service provider (SP) requires for the user's single sign-on identifier. Available in API version 29.0 and later. Valid values are:Unspecified (default)—No format given.EmailAddress—Used if the subject type is the user's name or a federation ID (an ID internal to the SP).Persistent—Used with the user ID and persistent ID subject types.Transient—Used when the subject type is a custom attribute and can change every time the user logs in. |
| samlSigningAlgoType | SamlSigningAlgoType (enumeration of type string) | Indicates the signing algorithm applied to SAML requests and responses when Salesforce is the identity provider. The selected signing algorithm is applied to both single sign-on and single logout responses from your org. Available in API version 50.0 and later. Valid values are:SHA1SHA256 |
| samlSloUrl | string | The SAML single-logout endpoint of the connected app service provider (SP). This endpoint is where SAML LogoutRequests and LogoutResponses are sent when users log out of Salesforce. The SP provides this endpoint. Available in API version 40.0 and later. |
| samlSubjectCustomAttr | string | If the samlSubjectType is CustomAttr, include that custom value here; otherwise, leave empty. Available in API version 29.0 and later. |
| samlSubjectType | SamlSubjectType (enumeration of type string) | Required. The single sign-on identifier for the user. Valid values are:Username—The user's Salesforce name.FederationId—The user's identifier at the service provider. Get this value from the service provider.UserId—The user's 15-character Salesforce identifier.PersistentID—A persistent opaque identifier that is specific to the identity provider and a service provider.CustomAttr—The identifier is taken from a custom field value in samlSubjectCustomAttr. |

## ConnectedAppSessionPolicy

Specifies the configuration options for a connected app’s session policies. Use these policies to define how long a user’s session can last before reauthenticating, to block user access to the connected app, or to require multi-factor authentication (MFA) to access the app. Available in API version 49.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| policyAction | string | If the High Assurance session security level is applied to the connected app, specify associated high assurance action. Valid values are:Block—Makes the connected app inaccessible to your org’s users. Blocking an app ends all current user sessions with the connected app and prevents all new sessions.RaiseSessionLevel—Requires users to verify their identity with multi-factor authentication when they log in to the connected app. This setting applies to authorization flows that include a user approval step for API logins. These flows are the OAuth 2.0 refresh token flow, web server flow, and user-agent flow. All other flows, such as the JSON Web Token (JWT) bearer token flow, don’t include a user approval step. For flows without a user approval step, API logins with the High Assurance session security level are blocked. |
| sessionLevel | string | Applies the High Assurance session security level to the connected app. This session level requires users to verify their identity with multi-factor authentication when they log in to the connected app. |
| sessionTimeout | int | The length of time the connected app’s session lasts. If you don’t set a value, Salesforce uses the timeout value in the connected app user’s profile. If the user’s profile doesn’t specify a timeout value, Salesforce uses the timeout value in the org’s Session Settings. |

## Declarative Metadata Sample Definition

The following is an example of a ConnectedApp component.

```

```

You can enter multiple callback URL values. At run time, Salesforce validates the callback URL specified by the app by matching it with one of the values. You must separate each callback URL with line breaks. To enter a new line programmatically, use the \\r line break character.

Here's an example of a ConnectedApp component with multiple callback URLs.

```

```

The following is an example package manifest used to deploy or retrieve the ConnectedApp metadata for an organization.

```

```

## Usage

If you're constructing a SAML-enabled connected app using Metadata API, and must set the IdP-Initiated Login URL for your service provider, you have two options:

You can use the service provider app ID with the app parameter in the following format. This value is displayed in the Salesforce user interface. From Setup, enter Connected Apps in the Quick Find box, then select **Connected Apps**, then click the name of the connected app to see its detail page.

```

```

Or, if you're configuring the connected app using Metadata API only, you can use the apiName parameter of the service provider app in the following format. The apiName parameter is the fullName inherited from the Metadata type.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").