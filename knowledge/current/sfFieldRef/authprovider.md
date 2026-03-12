---
title: "AuthProvider"
domain: sfFieldRef
topic: authprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.218Z
estimatedTokens: 843
keywords: [AuthProvider, authentication, provider, auth, lets, users, log, Salesforce, org, external, service, Facebook, Google, GitHub, API]
---

# AuthProvider

> Represents an authentication provider (auth provider). An auth provider
			lets users log in to your Salesforce org from an external service provider, such as
			Facebook, Google, or GitHub. This object is available in API version 27.0 and
		later.

# AuthProvider

Represents an authentication provider (auth provider). An auth provider lets users log in to your Salesforce org from an external service provider, such as Facebook, Google, or GitHub. This object is available in API version 27.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AuthProvider](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authprovider.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppleTeam | Apple Team | string |  | 12 |  |  |
| AuthorizeUrl | Authorize Endpoint URL | url |  | 1024 |  |  |
| ConsumerKey | Consumer Key | string |  | 256 |  |  |
| ConsumerSecret | Consumer Secret | string |  | 100 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomMetadataTypeRecord | Custom Metadata Type Record | string |  | 15 |  |  |
| DefaultScopes | Default Scopes | string |  | 256 |  |  |
| DeveloperName | URL Suffix | string |  | 32 |  |  |
| EcKey | Elliptic Curve Key | string |  | 30 |  |  |
| ErrorUrl | Custom Error URL | string |  | 500 |  |  |
| ExecutionUserId | User ID | reference |  | 18 |  |  |
| FlowDefaultAccountId | Account ID | reference |  | 18 |  |  |
| FlowDefaultProfileId | Profile ID | reference |  | 18 |  |  |
| FriendlyName | Name | string |  | 32 |  |  |
| IconUrl | Icon URL | url |  | 1024 |  |  |
| Id | Auth. Provider ID | id |  | 18 |  |  |
| IdTokenIssuer | Token Issuer | string |  | 1024 |  |  |
| LinkKickoffUrl | Existing User Linking URL | url |  | 255 |  |  |
| LogoutUrl | Custom Logout URL | url |  | 1500 |  |  |
| OauthKickoffUrl | OAuth-Only Initialization URL | url |  | 255 |  |  |
| OptionsIncludeOrgIdInId | Include identity organization's Organization ID for third-party account linkage | boolean |  |  |  |  |
| OptionsIsBitbucket | isBitbucket | boolean |  |  |  |  |
| OptionsIsEmi | IsEmi | boolean |  |  |  |  |
| OptionsIsEmiSnapchatAds | IsEmiSnapchatAds | boolean |  |  |  |  |
| OptionsIsEmiTikTokAds | IsEmiTikTokAds | boolean |  |  |  |  |
| OptionsIsLinkedInV2 | IsLinkedInV2 | boolean |  |  |  |  |
| OptionsIsMuleSoftEU | isMuleSoftEU | boolean |  |  |  |  |
| OptionsIsMuleSoftUS | isMuleSoftUS | boolean |  |  |  |  |
| OptionsIsPkceEnabled | isPkceEnabled | boolean |  |  |  |  |
| OptionsIsSegmentIntelligence | IsSegmentIntelligence | boolean |  |  |  |  |
| OptionsIsWebDataConnector | IsWebDataConnector | boolean |  |  |  |  |
| OptionsRequireMfa | requireMfa | boolean |  |  |  |  |
| OptionsSendAccessTokenInHeader | Send access token in header | boolean |  |  |  |  |
| OptionsSendClientCredentialsInHeader | Send client credentials in header | boolean |  |  |  |  |
| OptionsSendSecretInApis | Include Consumer Secret in SOAP API Responses | boolean |  |  |  |  |
| PluginId | Class ID | reference |  | 18 |  |  |
| ProviderType | Provider Type | picklist |  | 40 |  |  |
| RegistrationHandlerId | Class ID | reference |  | 18 |  |  |
| SsoKickoffUrl | Single Sign-On Initialization URL | url |  | 255 |  |  |
| TokenUrl | Token Endpoint URL | url |  | 1024 |  |  |
| UserInfoUrl | User Info Endpoint URL | url |  | 1024 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
