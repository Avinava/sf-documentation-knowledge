---
title: "CspTrustedSite"
domain: sfFieldRef
topic: csptrustedsite
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:55.147Z
estimatedTokens: 614
namespace: NamespacePrefix
keywords: [CspTrustedSite, trusted, URL, specify, Content, Security, Policy, CSP, directives, permissions, directive, Lightning, components, third-party, APIs]
---

# CspTrustedSite

> Represents a trusted URL. For each CspTrustedSite, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive
		allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions
		policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as CSP Trusted Sites in
		Salesforce Setup. Available in API version 39.0 and later.

**Namespace:** `NamespacePrefix`

# CspTrustedSite

Represents a trusted URL. For each CspTrustedSite, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as CSP Trusted Sites in Salesforce Setup. Available in API version 39.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CspTrustedSite](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_csptrustedsite.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CanAccessCamera | camera | boolean |  |  |  |  |
| CanAccessMicrophone | microphone | boolean |  |  |  |  |
| Context | CSP Context | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| DeveloperName | API Name | string |  | 80 |  |  |
| EndpointUrl | URL | string |  | 255 |  |  |
| Id | Trusted URL ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsApplicableToConnectSrc | connect-src (scripts) | boolean |  |  |  |  |
| IsApplicableToFontSrc | font-src (fonts) | boolean |  |  |  |  |
| IsApplicableToFrameSrc | frame-src (iframe content) | boolean |  |  |  |  |
| IsApplicableToImgSrc | img-src (images) | boolean |  |  |  |  |
| IsApplicableToMediaSrc | media-src (audio and video) | boolean |  |  |  |  |
| IsApplicableToStyleSrc | style-src (stylesheets) | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
