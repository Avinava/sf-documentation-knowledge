---
title: "OauthTokenExchangeHandler"
domain: sfFieldRef
topic: oauthtokenexchangehandler
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.931Z
estimatedTokens: 525
namespace: NamespacePrefix
keywords: [OauthTokenExchangeHandler, token, exchange, handler, consists, Apex, OAuth, 2.0, flow, validate, tokens, external, identity, provider, map]
---

# OauthTokenExchangeHandler

> Represents a token exchange handler. The token exchange handler also consists
         of an Apex class. During the OAuth 2.0 token exchange flow, the token exchange handler is
         used to validate tokens from an external identity provider and to map users to
         Salesforce. This object is available in API version 60.0 and later.

**Namespace:** `NamespacePrefix`

# OauthTokenExchangeHandler

Represents a token exchange handler. The token exchange handler also consists of an Apex class. During the OAuth 2.0 token exchange flow, the token exchange handler is used to validate tokens from an external identity provider and to map users to Salesforce. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OauthTokenExchangeHandler](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_oauthtokenexchangehandler.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Oauth Token Exchange Handler ID | id |  | 18 |  |  |
| IsContactCreationAllowed | Allow contact creation | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnabled | Enabled | boolean |  |  |  |  |
| IsUserCreationAllowed | Allow user creation | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SupportedTokenTypesAccessToken | Access Token | boolean |  |  |  |  |
| SupportedTokenTypesIdToken | ID Token | boolean |  |  |  |  |
| SupportedTokenTypesJwt | JWT | boolean |  |  |  |  |
| SupportedTokenTypesRefreshToken | Refresh Token | boolean |  |  |  |  |
| SupportedTokenTypesSaml2 | SAML 2 | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TokenHandlerApexId | Class ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
