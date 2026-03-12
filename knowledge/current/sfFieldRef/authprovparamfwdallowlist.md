---
title: "AuthProvParamFwdAllowlist"
domain: sfFieldRef
topic: authprovparamfwdallowlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.205Z
estimatedTokens: 389
keywords: [AuthProvParamFwdAllowlist, allowlisted, URL, forwarded, authentication, provider, client, configuration, URLs, authorization, add, custom, functionality, providers, allowlist]
---

# AuthProvParamFwdAllowlist

> Represents an allowlisted URL parameter that can be forwarded from
         authentication provider client configuration URLs to the authorization URL. Use this type
         to add custom functionality to authentication providers. For example, allowlist a ui_locales parameter and use it to send a user's language
         preference from Salesforce to the third-party provider's login page. This object is
      available in API version 62..0 and later.

# AuthProvParamFwdAllowlist

Represents an allowlisted URL parameter that can be forwarded from authentication provider client configuration URLs to the authorization URL. Use this type to add custom functionality to authentication providers. For example, allowlist a ui\_locales parameter and use it to send a user's language preference from Salesforce to the third-party provider's login page. This object is available in API version 62..0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AuthProvParamFwdAllowlist](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_authprovparamfwdallowlist.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthProviderId | Auth. Provider ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Auth Provider Param Forwarding Allowlist ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Param | Allowed Parameter Name | string |  | 128 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
