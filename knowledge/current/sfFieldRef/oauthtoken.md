---
title: "OauthToken"
domain: sfFieldRef
topic: oauthtoken
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.918Z
estimatedTokens: 300
keywords: [OauthToken, OAuth, access, token, connected, app, authentication, user, management, API, version, 32.0, later]
---

# OauthToken

> Represents an OAuth access token for connected app authentication. Use
			this object to create a user interface for token management. This object is
		available in API version 32.0 and later.

# OauthToken

Represents an OAuth access token for connected app authentication. Use this object to create a user interface for token management. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OauthToken](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_oauthtoken.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccessToken | Access Token | string |  | 255 |  |  |
| AppMenuItemId | AppMenuItem ID | reference |  | 18 |  |  |
| AppName | Application Name | string |  | 255 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeleteToken | Delete Token | string |  | 255 |  |  |
| Id | Oauth Token ID | id |  | 18 |  |  |
| LastUsedDate | Last Used Date | datetime |  |  |  |  |
| RequestToken | Request Token | string |  | 255 |  |  |
| UseCount | Use Count | int | 9 |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
