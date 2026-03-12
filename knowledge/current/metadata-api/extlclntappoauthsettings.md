---
title: "ExtlClntAppOauthSettings"
domain: metadata-api
topic: extlclntappoauthsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:39.771Z
estimatedTokens: 2423
keywords: [ExtlClntAppOauthSettings, Represents, settings, configuration, external, client, app’s, OAuth, plugin., Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ExtlClntAppOauthSettingsAttribute]
---

# ExtlClntAppOauthSettings

> Represents the settings configuration for the external
			client app’s OAuth plugin.

# ExtlClntAppOauthSettings

Represents the settings configuration for the external client app’s OAuth plugin.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppOauthSettings components have the suffix .ecaOauth and are stored in the extlClntAppOauthSettings folder.

## Version

ExtlClntAppOauthSettings components are available in API version 59.0 and later.

## Special Access Rules

Access to the OAuth plugin requires orgs to enable the Allow Access to OAuth Consumer Secrets via Metadata API permission in Setup. The View External Client Apps Consumer Secrets in Metadata user permission is required for users with developer roles to configure OAuth settings.

## Fields

| Field Name | Description |
| --- | --- |
| areAttributesIncludedInAssetToken | Field TypebooleanDescriptionIndicates whether custom attributes associated with the external client app are included in the JSON Web Token (JWT) payload of an asset token issued as a result of the asset token flow. The default value is false.Available in API version 61.0 and later. |
| areCustomPermsIncludedInAssetToken | Field TypebooleanDescriptionIndicates whether custom permissions associated with the external client app are included in the JWT payload of an asset token issued as a result of the asset token flow. The default value is false.Available in API version 61.0 and later. |
| assetTokenAudiences | Field TypestringDescriptionRequired for the OAuth asset token flow. The audience (aud) claim in the JWT payload of an asset token issued by the external client app. This claim identifies who the asset token is intended for. The value must be an array of case-sensitive strings, each containing a StringOrURI value. Specify an audience for each intended consumer of the asset token.Available in API version 61.0 and later. |
| assetTokenSigningCertificate | Field TypestringDescriptionRequired for the asset token flow. The ID of the self-signed certificate used to sign asset tokens issued by the external client app. The certificate size is limited to 4 KB. If your certificate is too large, try using a DER-encoded file to reduce the size.Available in API version 61.0 and later. |
| assetTokenValidity | Field TypeintDescriptionRequired for the asset token flow. The period of time for which the asset token is valid after it’s issued, expressed as the number of seconds from 1970-01-01T0:0:0Z measured in UTC. The validity period must be within 3 minutes of the expiration time of the assertion.Available in API version 61.0 and later. |
| clientAssertionCertificate | Field TypestringDescriptionA certificate that's used to sign a client attestation JSON Web Token (JWT), which is required for requests to the OAuth 2.0 authorization challenge endpoint for headless identity flows for first-party apps. To confirm that the app that sent the request is your first-party app, Salesforce validates the client attestation JWT against this certificate. |
| commaSeparatedOauthScopes | Field TypestringDescriptionOAuth scopes for the external client app, written as a comma-separated list.Basic—Allows access to your identity URL service (the same behavior as deploying Address, Email, Phone, and Profile).Api—Allows access to the logged-in user's account over the APIs.Web—Allows use of the access_token on the web. This usage also includes visualforce, allowing access to Visualforce pages.Full—Allows access to all data accessible by the logged-in user.Chatter—Allows access to only the Connect REST API resources.CustomApplications—Provides access to custom applications, such as those using Visualforce.RefreshToken—Allows a refresh token to be returned if you’re eligible to receive one (the same behavior as deploying OfflineAccess).OpenID—Allows access to the logged-in user's unique identifier for OpenID Connect apps.Profile—Allows access to the logged-in user's profile (the same behavior as deploying Basic).Email—Allows access to the logged-in user's email address (the same behavior as deploying Basic).Address—Allows access to the logged-in user's street address (the same behavior as deploying Basic).Phone—Allows access to the logged-in user's phone number value (the same behavior as deploying Basic).OfflineAccess—Allows the app to interact with the user's data while the user is offline and get a refresh token (the same behavior as deploying RefreshToken).CustomPermissions—Allows access to the custom permissions in an organization associated with the external client app and shows whether the current user has each permission enabled.Wave—Allows access to the Analytics REST API resources.Eclair—Allows access to the Analytics REST API Charts Geodata resource.Pardot—Allows access to Pardot API services on behalf of the user. The full extent of accessible services is managed by the Pardot account.Lightning—Allows hybrid apps to directly obtain Lightning child sessions through the OAuth 2.0 hybrid app token flow and hybrid app refresh token flow.Content—Allows hybrid apps to directly obtain content child sessions through the OAuth 2.0 hybrid app token flow and hybrid app refresh token flow.CDPIngest—Allows access to Data Cloud ingest API services. Customers use these API services to upload and maintain external datasets in the Data 360.CDPProfile—Allows access to Data 360 profile.CDPQuery—Allows access to Data 360 metadata and query data.Chatbot—Allows access to Einstein Bot API services.CDPSegment—Allows access to Data 360 segments.CDPIdentityResolution—Allows access to Data 360 identity resolution.CDPCalculatedInsight—Allows access to Data 360 calculated insights.SFApiPlatform—Allows access to the Salesforce API Platform.Interaction—Allows access to Interaction Service API.EinsteinGPT—Allows access to Einstein Generative AI features in an org.PwdlessLogin—Allows access to Headless Passwordless Login API. Assign to an internal integration user to get an access token for authenticated requests to this API.ForgotPassword—Allows access to Headless Forgot Password API. Assign to an internal integration user to get an access token for authenticated requests to this API.UserRegistration—Allows access to Headless Registration API. Assign to an internal integration user to get an access token for authenticated requests to this API.MCP—Allows access to Model Context Protocol (MCP).SCRT—Allows access to Service Cloud Real-Time features. |
| customAttributes | Field TypeExtlClntAppOauthSettingsAttribute[]DescriptionUnique attributes to be included as developer defaults. The maximum number accepted is 128. Each custom attribute must have a unique key and use an available field. |
| externalClientApplication | Field TypestringDescriptionRequired.The external client app associated with this OAuth plugin. |
| isFirstPartyAppEnabled | Field TypebooleanDescriptionDetermines whether a first-party app can send requests to the OAuth 2.0 authorization challenge endpoint on this Experience Cloud site. This endpoint support headless identity flows using the OAuth 2.0 for First-Party Applications draft protocol. |
| label | Field TypestringDescriptionLabel for the external client app. |
| oauthLink | Field TypestringDescriptionAn auto-generated value that combines the org ID and the OAuth Consumer ID. |
| singleLogoutUrl | Field TypestringDescriptionURL where Salesforce sends a logout request when users log out of Salesforce. |
| trustedIpRanges | Field TypeExtlClntAppOauthIpRange[]DescriptionSpecifies the ranges of IP addresses that can access the app without requiring the user to authenticate with the external client app. The maximum number of IP ranges is 128. |

## ExtlClntAppOauthSettingsAttribute

Represents developer-defined attributes that are used to include additional information in the external client apps. Developers use these attributes to customize the app for specific use cases.

| Field Name | Description |
| --- | --- |
| formula | Field TypestringDescriptionRequired.The existing field that includes the desired information. For example, Organization.Country. |
| key | Field TypestringDescriptionRequired.A unique name for the attribute. For example, country. |

## ExtlClntAppOauthIpRange

Represents the range of IP addresses that are trusted by the external client app.

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionIdentifies the purpose of the range, such as which part of a network corresponds to this range. |
| endIpAddress | Field TypestringDescriptionRequired.Last address in the IP range, inclusive. Required with start address. |
| startIpAddress | Field TypestringDescriptionRequired.First address in the IP range, inclusive. Required with end address. |

## Declarative Metadata Sample Definition

The following is an example of an ExtlClntAppOauthSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExtlClntAppOauthSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <externalClientApplication>myeca</externalClientApplication>
    <label>My Oauth Settings</label>
    <trustedIpRanges>
        <startIpAddress>10.55.2.0</startIpAddress>
        <endIpAddress>10.55.2.255</endIpAddress>
        <description>Building 6</description>
    </trustedIpRanges>
    <trustedIpRanges>
        <startIpAddress>10.55.12.0</startIpAddress>
        <endIpAddress>10.55.12.255</endIpAddress>
    </trustedIpRanges>
    <customAttributes>
        <key>userattribute</key>
        <formula>User.Country</formula>
    </customAttributes>
    <commaSeparatedOauthScopes>Basic, Web</commaSeparatedOauthScopes>
</ExtlClntAppOauthSettings>
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
    <version>59.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
