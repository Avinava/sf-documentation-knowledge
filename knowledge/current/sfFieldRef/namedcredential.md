---
title: "NamedCredential"
domain: sfFieldRef
topic: namedcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:04.735Z
estimatedTokens: 578
namespace: NamespacePrefix
keywords: [NamedCredential, named, credential, URL, callout, endpoint, authentication, definition, simplify, setup, authenticated, callouts, API, version, 33.0]
---

# NamedCredential

> Represents a named credential, which specifies the URL of a callout
			endpoint and its required authentication parameters in one definition. A named
		credential can be specified as an endpoint to simplify the setup of authenticated callouts.
		This object is available in API version 33.0 and later.

**Namespace:** `NamespacePrefix`

# NamedCredential

Represents a named credential, which specifies the URL of a callout endpoint and its required authentication parameters in one definition. A named credential can be specified as an endpoint to simplify the setup of authenticated callouts. This object is available in API version 33.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NamedCredential](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_namedcredential.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthProviderId | Auth. Provider ID | reference |  | 18 |  |  |
| AuthTokenEndpointUrl | Auth Token Endpoint URL | textarea |  | 1000 |  |  |
| CalloutOptionsAllowMergeFieldsInBody | AllowMergeFieldsInBody | boolean |  |  |  |  |
| CalloutOptionsAllowMergeFieldsInHeader | AllowMergeFieldsInHeader | boolean |  |  |  |  |
| CalloutOptionsGenerateAuthorizationHeader | GenerateAuthorizationHeader | boolean |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Endpoint | URL | textarea |  | 1000 |  |  |
| Id | Named Credential ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JwtAudience | JWT Audience(s) | textarea |  | 1000 |  |  |
| JwtFormulaSubject | JWT Formula Subject | string |  | 255 |  |  |
| JwtIssuer | JWT Issuer | string |  | 255 |  |  |
| JwtTextSubject | JWT Text Subject | string |  | 255 |  |  |
| JwtValidityPeriodSeconds | JWT Validity Period in Seconds | int | 9 |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| PrincipalType | Identity Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
