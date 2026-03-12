---
title: "EmbeddedServiceBranding"
domain: metadata-api
topic: embeddedservicebranding
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.832Z
estimatedTokens: 890
keywords: [EmbeddedServiceBranding, branding, Embedded, Service, deployment, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Declarative]
---

# EmbeddedServiceBranding

> Represents the branding for each Embedded
      Service deployment.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# EmbeddedServiceBranding

Represents the branding for each Embedded Service deployment. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

This object works only with the legacy chat products. For Messaging for In-app and Web, use the [BrandingSet](atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm "Represents the definition of a set of branding properties for an Experience Builder site or for your org's Lightning Experience theme.") object.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

EmbeddedServiceBranding components are stored in the developer\_name.EmbeddedServiceBranding file in the EmbeddedServiceBranding folder.

## Version

EmbeddedServiceBranding is available in API version 39.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| contrastInvertedColor | string | Accent branding color used in the embedded component, displayed as a hexadecimal value. Changes made to this field in the API aren’t reflected in the embedded component. |
| contrastPrimaryColor | string | Accent branding color used in the embedded component, displayed as a hexadecimal value. |
| embeddedServiceConfig | string | Required. The Embedded Service configuration that this branding applies to. |
| font | string | Font used in the text of the embedded component. |
| height | int | Height of the embedded component. Available in API version 43.0 and later. |
| masterLabel | string | Required. The name of the Embedded Service configuration node. |
| navBarColor | string | Color used for the header in the embedded component, displayed as a hexadecimal value. |
| navBarTextColor | string | Color used for the text and icons in the header in the embedded component, displayed as a hexadecimal value. Available in API version 49.0 and later. |
| primaryColor | string | Primary branding color used in the embedded component, displayed as a hexadecimal value. |
| secondaryColor | string | Secondary branding color used in the embedded component, displayed as a hexadecimal value. |
| secondaryNavBarColor | string | Secondary branding color used for the header in the embedded component, displayed as a hexadecimal value. It applies to the header in the chat feature when it's trying to reconnect because of lost internet connection. Available in API version 49.0 and later. |
| width | int | Width of the embedded component. Available in API version 43.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of an EmbeddedServiceBranding file.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EmbeddedServiceBranding xmlns="http://soap.sforce.com/2006/04/metadata">
    <contrastInvertedColor>#ffffff</contrastInvertedColor>
    <contrastPrimaryColor>#333333</contrastPrimaryColor>
    <embeddedServiceConfig>EswConfig001</embeddedServiceConfig>
    <font>Salesforce Sans</font>
    <height>498</height>
    <masterLabel>EmbeddedServiceBranding_Parent04IRM000000002a_16033cd2c16</masterLabel>
    <navBarColor>#222222</navBarColor>
    <primaryColor>#222222</primaryColor>
    <secondaryColor>#005290</secondaryColor>
    <width>320</width>
</EmbeddedServiceBranding>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- BrandingSet (atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
