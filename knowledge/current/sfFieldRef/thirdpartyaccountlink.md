---
title: "ThirdPartyAccountLink"
domain: sfFieldRef
topic: thirdpartyaccountlink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.304Z
estimatedTokens: 307
keywords: [ThirdPartyAccountLink, external, users, authenticated, authentication, provider, API, version, 32.0, later]
---

# ThirdPartyAccountLink

> Represents the list of external users who authenticated using an
			authentication provider. This object is available in API version 32.0 and
		later.

# ThirdPartyAccountLink

Represents the list of external users who authenticated using an authentication provider. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ThirdPartyAccountLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_thirdpartyaccountlink.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Handle | External User Handle | string |  | 375 |  |  |
| Id | Third Party Account Link ID | id |  | 18 |  |  |
| IsNotSsoUsable | Is Not SSO Usable | boolean |  |  |  |  |
| Provider | Provider | string |  | 128 |  |  |
| RemoteIdentifier | External User Id | string |  | 128 |  |  |
| SsoProviderId | Auth. Provider ID | reference |  | 18 |  |  |
| SsoProviderName | Single Sign-On Provider Name | string |  | 255 |  |  |
| ThirdPartyAccountLinkKey | Third Party Account Link Unique Key | string |  | 255 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
