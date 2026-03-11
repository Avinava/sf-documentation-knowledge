---
title: "CspTrustedSite"
domain: metadata-api
topic: csptrustedsite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:51.437Z
keywords: [CspTrustedSite, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, Sample, Definition, Usage, Wildcard, Support, Manifest]
---

# CspTrustedSite

# CspTrustedSite

Represents a trusted URL. For each CspTrustedSite component, you can specify Content Security Policy (CSP) directives and permissions policy directives. Each CSP directive allows Lightning components, third-party APIs, and WebSocket connections to access a resource type from the trusted URL. If the Permissions-Policy HTTP header is enabled, each permissions policy directive grants the trusted URL access to a browser feature. In API version 58.0 and earlier, CspTrustedSite components included only CSP directives and were referred to as CSP Trusted Sites.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Declarative Metadata File Suffix and Directory Location

CspTrustedSite components are stored in the cspTrustedSites directory of the corresponding package directory. The file name matches the unique name of the trusted site, and the extension is .cspTrustedSite.

## Version

CspTrustedSite components are available in API version 39.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| canAccessCamera | boolean | Indicates whether this CspTrustedSite can access the user’s camera (true) or not (false). The default value is false.This field takes effect only when the enablePermissionsPolicy field equals true and the grantCameraAccess field equals TrustedUrls in the SecuritySettings metadata API type.This field is available in API version 59.0 and later. |
| canAccessMicrophone | boolean | Indicates whether this CspTrustedSite can access the user’s microphone (true) or not (false). The default value is false.This field takes effect only when the enablePermissionsPolicy field equals true and the grantMicrophoneAccess field equals TrustedUrls in the SecuritySettings metadata API type.This field is available in API version 59.0 and later. |
| context | CspTrustedSiteContext (enumeration of type string) | Declares the scope of the CSP directives for this trusted URL.All—Apply the CSP directives to all supported context types.Communities—Apply the CSP directives to Experience Builder sites only.FieldServiceMobileExtension—Apply the CSP directives to the Field Service Mobile Extensions only. This value is available in API version 47.0 and later.LEX—Apply the CSP directives to Lightning Experience pages only.LightningOut—Reserved for future use. Available in API version 64.0 and laterVisualForce—Apply the CSP directives to custom Visualforce pages only. This value is available in API version 55.0 and later.For custom Visualforce pages, content is restricted to trusted URLs only if the page’s cspHeader attribute is set to true.This field is available in API version 44.0 and later. |
| description | string | The description of this trusted URL. |
| endpointUrl | string | Required. The URL for this CspTrustedSite.This field must include a domain name and can include a port. For example, https://example.com or https://example.com:8080.To reduce repetition, you can use the wildcard character * (asterisk). For example, *.example.com. For a third-party API, the URL must begin with https://. For example, https://example.com. For a WebSocket connection, the URL must begin with wss://. For example, wss://example.com.Otherwise, the URL cannot be malformed. Examples of malformed URLs that fail a syntax check are malformed^url.example.com, and https://{subdomain}.example.com.To add an EndpointUrl based on parameters, build the URL before you add it to this Metadata Type. |
| isActive | boolean | Required. Indicates whether this CspTrustedSite is active (true) or not (false). The default value is true. |
| isApplicableToConnectSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load URLs using script interfaces from this trusted URL (true) or not (false). This field has a default value of false.This field is available in API version 48.0 and later. |
| isApplicableToFontSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load fonts from this trusted URL (true) or not (false). This field has a default value of false.This field is available in API version 48.0 and later. |
| isApplicableToFrameSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load resources contained in <iframe> elements from this trusted URL (true) or not (false). This field has a default value of false.This field is available in API version 48.0 and later. |
| isApplicableToImgSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load images from this trusted URL (true) or not (false). This field has a default value of false. This field is available in API version 48.0 and later. |
| isApplicableToMediaSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load audio and video from this trusted URL (true) or not (false). This field has a default value of false.In API version 59.0 and later, for each trusted URL, at least one CSPTrustedSite starting with isApplicable or canAccess must be set to true.In API version 50.0 to 58.0, if all isApplicable fields are false, the isApplicableToImgSrc field is set to true. In API version 49.0 and earlier, if all isApplicable fields are false, these fields all default to true.This field is available in API version 48.0 and later. |
| isApplicableToStyleSrc | boolean | Indicates whether Lightning components, third-party APIs, and WebSocket connections can load style sheets from this trusted URL (true) or not (false). This field has a default value of false. This field is available in API version 48.0 and later. |
| mobileExtension | string | Reserved for future use. |

## Declarative Metadata Sample Definition

A sample XML definition of a trusted site is shown below.

```

```

## Usage

For each CSPTrustedSite component, at least one field starting with grantAccess or isApplicableTo must be set to true.

In API versions 50.0 to 58.0, if all isApplicable fields are false, the isApplicableToImgSrc field is set to true. In API version 49.0 and earlier, if all isApplicable fields are false, those fields all default to true.

To ensure smooth integration across Salesforce products, Salesforce includes URLs in each of the CSP directives that correspond to the isApplicable fields, even though those URLs aren’t defined as CspTrustedSite components. Salesforce regularly updates those URLs based on the latest requirements.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").