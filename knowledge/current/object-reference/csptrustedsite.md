---
title: "CspTrustedSite"
domain: object-reference
topic: csptrustedsite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.609Z
estimatedTokens: 1581
keywords: [CspTrustedSite, trusted, URL, specify, Content, Security, Policy, CSP, directives, permissions, directive, Lightning, components, third-party, APIs]
---

# CspTrustedSite

> Represents a trusted URL. For each CspTrustedSite, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive
		allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions
		policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as CSP Trusted Sites in
		Salesforce Setup. Available in API version 39.0 and later.

# CspTrustedSite

Represents a trusted URL. For each CspTrustedSite, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite included only CSP directives and was referred to as CSP Trusted Sites in Salesforce Setup. Available in API version 39.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CanAccessCamera | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this CspTrustedSite can access the user’s camera. The default value is false.This field takes effect only when the enablePermissionsPolicy field equals true and the grantCameraAccess field equals TrustedUrls in the SecuritySettings metadata API type.This field is available in API version 59.0 and later. |
| CanAccessMicrophone | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this CspTrustedSite can access the user’s microphone. The default value is false.This field takes effect only when the enablePermissionsPolicy field equals true and the grantMicrophoneAccess field is TrustedUrls in the SecuritySettings metadata API type.This field is available in API version 59.0 and later. |
| Context | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDeclares the scope of the CSP directives for this trusted URL.Possible values are:All—Apply the CSP directives to all supported context types.Communities—Apply the CSP directives to Experience Builder sites only.FieldServiceMobileExtension—Apply the CSP directives to the Field Service Mobile Extensions only.LEX—Apply the CSP directives to Lightning Experience only.LightningOut—Reserved for future use. Available in API version 64.0 and laterVisualForce—Apply the CSP directives to custom Visualforce pages only. This value is available in API version 55.0 and later.For custom Visualforce pages, content is restricted to trusted URLs only if the page’s cspHeader attribute is set to true.This field is available in API version 44.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the trusted URL. Limit: 255 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the trusted URL.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EndpointUrl | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe URL for this CspTrustedSite.This field must include a domain name and can include a port. For example, https://example.com or https://example.com:8080.To reduce repetition, you can use the wildcard character * (asterisk). For example, *.example.com. For a third-party API, the URL must begin with https://. For example, https://example.com. For a WebSocket connection, the URL must begin with wss://. For example, wss://example.com.Otherwise, the URL cannot be malformed. Examples of malformed URLs that fail a syntax check are malformed^url.example.com, and https://{subdomain}.example.com.To add a URL based on parameters, build the URL before you update the EndpointUrl field. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this CspTrustedSite is active. |
| IsApplicableToConnectSrc | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Lightning components, third-party APIs, and WebSocket connections can load URLs using script interfaces from this trusted URL. |
| IsApplicableToFontSrc | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Lightning components, third-party APIs, and WebSocket connections can load fonts from this trusted URL. |
| IsApplicableToFrameSrc | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Lightning components, third-party APIs, and WebSocket connections can load resources contained in <iframe> elements from this trusted URL. |
| IsApplicableToImgSrc | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Lightning components, third-party APIs, and WebSocket connections can load images from this trusted URL. |
| IsApplicableToMediaSrc | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Lightning components, third-party APIs, and WebSocket connections can load audio and video from this trusted URL. |
| IsApplicableToStyleSrc | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Lightning components can load style sheets from this trusted URL. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for the trusted URL. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMaster label for this trusted URL. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix for this trusted URL. |

## Usage

For each CSPTrustedSite, at least one field starting with grantAccess or isApplicableTo must be set to true.

In API versions 50.0 to 58.0, if all isApplicable fields are false, the isApplicableToImgSrc field is set to true. In API version 49.0 and earlier, if all isApplicable fields are false, those fields all default to true.

To ensure smooth integration across Salesforce products, Salesforce includes URLs in each of the CSP directives that correspond to the isApplicable fields, even though those URLs aren’t defined as CspTrustedSite components. Salesforce regularly updates those URLs based on the latest requirements.
