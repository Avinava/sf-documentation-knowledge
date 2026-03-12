---
title: "ExtlClntAppGlobalOauthSettings"
domain: metadata-api
topic: extlclntappglobaloauthsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:39.721Z
estimatedTokens: 1952
keywords: [ExtlClntAppGlobalOauthSettings, Represents, settings, OAuth, plugin, external, client, app., include, sensitive, consumer, information, can’t, packaged, must, added, source, control., Parent, File]
---

# ExtlClntAppGlobalOauthSettings

> Represents the global settings for the OAuth
			plugin in an external client app. These settings include private and sensitive OAuth
			consumer information that can’t be packaged and must not be added to source
			control.

# ExtlClntAppGlobalOauthSettings

Represents the global settings for the OAuth plugin in an external client app. These settings include private and sensitive OAuth consumer information that can’t be packaged and must not be added to source control.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppGlobalOauthSettings components have the suffix .ecaGlblOauth and are stored in the extlClntAppGlobalOauthSets folder.

## Version

ExtlClntAppGlobalOauthSettings components are available in API version 59.0 and later.

## Special Access Rules

Access to the OAuth plugin requires orgs to enable the Allow Access to OAuth Consumer Secrets via Metadata API permission in Setup. The View External Client Apps Consumer Secrets in Metadata user permission is required for users with developer roles to configure global OAuth settings.

## Fields

| Field Name | Description |
| --- | --- |
| callbackUrl | Field TypestringDescriptionThe endpoint that Salesforce calls back to your external client app during OAuth. It’s the OAuth redirect_uri. |
| certificate | Field TypestringDescriptionIf the app uses a certificate, the PEM-encoded certificate string. When provided, it enables the JWT Bearer flow. Available in API version 60.0 and later. |
| consumerKey | Field TypestringDescriptionA value used by the consumer for identification to Salesforce. Referred to as client_id in OAuth 2.0. |
| consumerSecret | Field TypestringDescriptionA value that is combined with the consumerKey and used by the consumer for identification to Salesforce. Referred to as client_secret in OAuth 2.0. |
| externalClientApplication | Field TypestringDescriptionRequired.Name of the external client application. |
| idTokenConfig | Field TypeExternalAppIdTokenConfigDescriptionThe settings for the ID token. |
| isClientCredentialsFlowEnabled | Field TypebooleanDescriptionIf set to true, the OAuth 2.0 client credentials flow is enabled. Available in API version 60.0 and later. |
| isCodeCredFlowEnabled | Field TypebooleanDescriptionIf set to true, the external client app can use the Authorization Code and Credentials Flow and its variations for headless login, passwordless login, and guest user identity services in an off-platform app. Headless registration isn’t currently supported for external client apps. The default value is false.To use this field, the Authorization Code and Credentials Flow must be enabled for your org in OAuth and OpenID Connect settings.Available in API version 61.0 and later. |
| isCodeCredPostOnly | Field TypebooleanDescriptionIf set to true, for the Authorization Code and Credentials Flow, the external client app is required to send the user’s credentials to the Salesforce services/oauth2/authorize endpoint in the body of a POST request. If set to false, the app can send a POST or GET request with the user’s credentials in the request body or in a Basic authorization header. The default value is false.To use this field, the Authorization Code and Credentials Flow must be enabled for your external client app. Headless registration, a variation of this flow, isn’t currently supported for external client apps.Available in API version 61.0 and later. |
| isConsumerSecretOptional | Field TypebooleanDescriptionIf set to false (default), the external app’s client secret is required in exchange for an access token in the OAuth 2.0 web server flow. If set to true, the external app’s client secret is optional. |
| isDeviceFlowEnabled | Field TypebooleanDescriptionIf set to true, the external client app can use the OAuth 2.0 device flow. Available in API version 60.0 and later. |
| isIntrospectAllTokens | Field TypebooleanDescriptionIf set to true, authorizes the external app to introspect all access and refresh all tokens. If set to false (default), the external client app can introspect its own tokens. |
| isNamedUserJwtEnabled | Field TypebooleanDescriptionIf set to true, the external client app issues JSON Web Token (JWT)-based access tokens. If set to false, it issues opaque access tokens. The default value is falseAvailable in API version 61.0 and later. |
| isPkceRequired | Field TypebooleanDescriptionIf set to true (default) Proof Key for Code for Exchange (PKCE) is required for OAuth integration. If set to false, PKCE is optional. |
| isRefreshTokenRotationEnabled | Field TypebooleanDescriptionIf set to true, the refresh token rotation is enabled. Available in API version 60.0 and later. |
| isSecretRequiredForRefreshToken | Field TypebooleanDescriptionIf set to true (default), the app’s client secret is required in the authorization request of a refresh token and hybrid refresh token flow. If set to false and an app sends the client secret in the authorization request, Salesforce still validates it. |
| isSecretRequiredForTokenExchange | Field TypebooleanDescriptionIf set to true, the app’s client secret is required for token exchange. Available in API version 60.0 and later. |
| isTokenExchangeEnabled | Field TypebooleanDescriptionIf set to true, token exchange is enabled. Available in API version 60.0 and later. |
| label | Field TypestringDescriptionExternal Client Application Global OAuth Settings name. |
| shouldRotateConsumerKey | Field TypebooleanDescriptionIf set to true, the OAuth external client app's consumer key is replaced with a newly generated key on metadata deploy.. To maintain security, if this field is set to true, you must include the ignore warnings attribute in the deploy command. Default is false. |
| shouldRotateConsumerSecret | Field TypebooleanDescriptionIf set to true, the OAuth external client app’s consumer secret is replaced with a newly generated secret on metadata deploy. To maintain security, if this field is set to true, you must include the ignore warnings attribute in the deploy command. Default is false. |

## ExternalAppIdTokenConfig

Represents configurations that determine the ID token attributes.

| Field Name | Description |
| --- | --- |
| idTokenAudience | Field TypestringDescriptionThe audience that this ID token is intended for. The value is an array of case-sensitive strings. If no audiences are specified, the client_id of the relying party is returned as the default audience. Otherwise, the other audiences are returned with the client_id in the aud value. |
| idTokenIncludeAttributes | Field TypebooleanDescriptionIndicates whether attributes are included in the ID token (true) or not (false). |
| idTokenIncludeStandardClaims | Field TypebooleanDescriptionIndicates whether standard claims about the authentication event are included in the ID token (true) or not (false). |
| idTokenValidityInMinutes | Field TypeintDescriptionThe length of time that the ID token is valid for after it’s issued. The value can be 1–720 minutes. The default value is 2 minutes. |

## Declarative Metadata Sample Definition

This example shows an ExtlClntAppGlobalOauthSettings component.

```

```

This example package.xml references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExtlClntAppGlobalOauthSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <callbackUrl>https://www.example.com</callbackUrl>
    <externalClientApplication>myeca</externalClientApplication>
    <idTokenConfig>
        <idTokenAudience>SalesforceAudience</idTokenAudience>
        <idTokenIncludeStandardClaims>true</idTokenIncludeStandardClaims>
        <idTokenValidityInMinutes>0</idTokenValidityInMinutes>
    </idTokenConfig>
    <isConsumerSecretOptional>false</isConsumerSecretOptional>
    <isIntrospectAllTokens>false</isIntrospectAllTokens>
    <isPkceRequired>true</isPkceRequired>
    <isSecretRequiredForRefreshToken>false</isSecretRequiredForRefreshToken>
    <label>myecaglobalset</label>
    <shouldRotateConsumerKey>false</shouldRotateConsumerKey>
    <shouldRotateConsumerSecret>false</shouldRotateConsumerSecret>
</ExtlClntAppGlobalOauthSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ExternalClientApplication</name>
    </types>
    <types>
        <members>*</members>
        <name>ExtlClntAppOauthSettings</name>
    </types>
    <types>
        <members>*</members>
        <name>ExtlClntAppGlobalOauthSettings</name>
    </types>
    <types>
        <members>*</members>
        <name>ExtlClntAppOauthConfigurablePolicies</name>
    </types>
    <types>
        <members>*</members>
        <name>ExtlClntAppConfigurablePolicies</name>
    </types>
    <version>60.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
