---
title: "CspTrustedSite"
domain: tooling-api
topic: csptrustedsite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.970Z
estimatedTokens: 1519
keywords: [CspTrustedSite, Represents, trusted, URL., specify, Content, Security, Policy, CSP, directives, permissions, policy, directives., directive, allows, Lightning, components, third-party, APIs, WebSocket]
---

# CspTrustedSite

> Represents a trusted URL. For each CspTrustedSite, you can
        specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP
        directive allows Lightning components, third-party APIs, and WebSocket connections to access
        a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each
        permissions policy directive grants the trusted URL access to a browser feature. In API
        version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as
        CSP Trusted Sites in Salesforce Setup. Available in API version 39.0 and later.

# CspTrustedSite

Represents a trusted URL. For each CspTrustedSite, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as CSP Trusted Sites in Salesforce Setup. Available in API version 39.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| CanAccessCamera | boolean | Indicates whether this CspTrustedSite can access the user’s camera (true) or not (false). The default value is false.This field takes effect only when the enablePermissionsPolicy field equals true and the grantCameraAccess field equals TrustedUrls in the SecuritySettings metadata API type.This field is available in API version 59.0 and later. |
| CanAccessMicrophone | boolean | Indicates whether this CspTrustedSite can access the user’s microphone (true) or not (false). The default value is false.This field takes effect only when the enablePermissionsPolicy field equals true and the grantMicrophoneAccess field equals TrustedUrls in the SecuritySettings metadata API type.This field is available in API version 59.0 and later. |
| Context | CspTrustedSiteContext (enumeration of type string) | Declares the scope of the CSP directives for the trusted URL.All—Apply the CSP directives to all supported context types.Communities—Apply the CSP directives to Experience Builder sites only.FieldServiceMobileExtension—Apply the CSP directives to the Field Service Mobile Extensions only. Available in API version 47.0 and later.LEX—Apply the CSP directives to Lightning Experience only.LightningOut—Reserved for future use. Available in API version 64.0 and laterVisualForce—Apply the CSP directives to custom Visualforce pages only. Available in API version 55.0 and later.For custom Visualforce pages, content is restricted to trusted URLs only if the page’s cspHeader attribute is set to true.This field is available in API version 44.0 and later. |
| Description | string | The description of this trusted URL. |
| EndpointUrl | string | Required. The URL for this CspTrustedSite.This field must include a domain name and can include a port. For example, https://example.com or https://example.com:8080.To reduce repetition, you can use the wildcard character * (asterisk). For example, *.example.com. For a third-party API, the URL must begin with https://. For example, https://example.com. For a WebSocket connection, the URL must begin with wss://. For example, wss://example.com. |
| IsActive | boolean | Indicates whether this CspTrustedSite is active (true) or not (false). The default value is true. |
| IsApplicableToConnectSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load URLs using script interfaces from this trusted URL (true) or not (false). This field has a default value of false.This field is available in API version 48.0 and later. |
| IsApplicableToFontSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load fonts from this trusted URL (true) or not (false). This field is available in API version 48.0 and later. |
| IsApplicableToFrameSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load resources contained in <iframe> elements from this trusted URL (true) or not (false). This field has a default value of false.This field is available in API version 48.0 and later. |
| IsApplicableToImgSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load images from this trusted URL (true) or not (false). This field has a default value of false.This field is available in API version 48.0 and later. |
| IsApplicableToMediaSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load audio and video from this trusted URL (true) or not (false). This field has a default value of false.This field is available in API version 48.0 and later. |
| IsApplicableToStyleSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load style sheets from this trusted URL (true) or not (false). This field has a default value of false.This field is available in API version 48.0 and later. |
| MobileExtension | string | Reserved for future use. |

## Usage

For each CSPTrustedSite, at least one field starting with grantAccess or isApplicableTo must be set to true.

In API versions 50.0 to 58.0, if all isApplicable fields are false, the isApplicableToImgSrc field is set to true. In API version 49.0 and earlier, if all isApplicable fields are false, those fields all default to true.

To ensure smooth integration across Salesforce products, Salesforce includes URLs in each of the CSP directives that correspond to the isApplicable fields, even though those URLs aren’t defined as CspTrustedSite components. Salesforce regularly updates those URLs based on the latest requirements.

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
