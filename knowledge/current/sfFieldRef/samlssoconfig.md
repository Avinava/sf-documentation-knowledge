---
title: "SamlSsoConfig"
domain: sfFieldRef
topic: samlssoconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:12.918Z
estimatedTokens: 653
namespace: NamespacePrefix
keywords: [SamlSsoConfig, SAML, Sign-On, configuration]
---

# SamlSsoConfig

> Represents a SAML Single Sign-On configuration.

**Namespace:** `NamespacePrefix`

# SamlSsoConfig

Represents a SAML Single Sign-On configuration.This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SamlSsoConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_samlssoconfig.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AttributeFormat | Name ID Format | string |  | 255 |  |  |
| AttributeName | Attribute Name | string |  | 255 |  |  |
| Audience | Entity ID | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ErrorUrl | Custom Error URL | string |  | 500 |  |  |
| ExecutionUserId | User ID | reference |  | 18 |  |  |
| Id | SAML Sso Setting ID | id |  | 18 |  |  |
| IdentityLocation | SAML Identity Location | picklist |  | 255 |  |  |
| IdentityMapping | SAML Identity Type | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Issuer | Issuer | string |  | 255 |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LoginUrl | Identity Provider Login URL | string |  | 1500 |  |  |
| LogoutUrl | Identity Provider Logout URL | string |  | 1500 |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| OptionsRequireMfaSaml | RequireMfaSaml | boolean |  |  |  |  |
| OptionsSpInitBinding | SpInitBinding | boolean |  |  |  |  |
| OptionsUseConfigRequestMethod | UseConfigRequestMethod | boolean |  |  |  |  |
| OptionsUseSameDigestAlgoForSigning | UseSameDigestAlgoForSigning | boolean |  |  |  |  |
| OptionsUserProvisioning | UserProvisioning | boolean |  |  |  |  |
| RequestSignatureMethod | Request Signature Method | picklist |  | 255 |  |  |
| SamlJitHandlerId | Class ID | reference |  | 18 |  |  |
| SingleLogoutBinding | Single Logout Request Binding | picklist |  | 255 |  |  |
| SingleLogoutUrl | Identity Provider Single Logout URL | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ValidationCert | Identity Provider Certificate | string |  | 4000 |  |  |
| Version | SAML Version | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
