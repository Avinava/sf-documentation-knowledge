---
title: "LightningExperienceTheme"
domain: metadata-api
topic: lightningexperiencetheme
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.351Z
estimatedTokens: 1038
keywords: [LightningExperienceTheme, custom, theme, including, BrandingSet, Themes, enable, admins, specify, configurable, attributes, three, colors, five, images]
---

# LightningExperienceTheme

> Represents the details of a
      custom theme, including the BrandingSet. Themes
      enable admins to specify configurable attributes, such as three colors and
      five images. The colors and some of the images override SLDS token values
      and influence the generation of
    app.css.

# LightningExperienceTheme

Represents the details of a custom theme, including the [BrandingSet](atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm#meta_brandingset "Represents the definition of a set of branding properties for an Experience Builder site or for your org's Lightning Experience theme."). Themes enable admins to specify configurable attributes, such as three colors and five images. The colors and some of the images override SLDS token values and influence the generation of app.css.

To activate a custom theme with Metadata API, set the activeThemeField on the [LightningExperienceSettings](atlas.en-us.api_meta.meta/api_meta/meta_lightningexperiencesettings.htm "Represents the settings that modify an org’s Lightning Experience configuration. This type extends the Metadata metadata type and inherits its fullName field.") component to the API name of the LightningExperienceTheme.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

LightningExperienceTheme components have the suffix .lightningExperienceTheme and are stored in the lightningExperienceThemes folder.

## Version

LightningExperienceTheme components are available in API version 42.0 and later.

## Special Access Rules

The LightningExperieceTheme type is available when the S1DesktopAllowed permission is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| defaultBrandingSet | string | Required. The ID of the BrandingSet properties associated with this LightningExperienceTheme. |
| description | string | The optional description text of this LightningExperienceTheme. Limited to 1000 characters. |
| designSystemVersion | LightningDesignSystemVersion (enumeration of type string) | Represents the version of Salesforce Lightning Design System (SLDS) on which the theme is built.Valid values are:SLDS_v1SLDS_v2If you don’t define a value, the default value is SLDS_v1.Available in API version 64.0 and later. |
| isDarkModeEnabled (beta) | boolean | Indicates whether individual users can enable dark mode (true) or not (false) for this LightningExperienceTheme. The default value is false. Available for custom SLDS 2 themes in select editions. See Salesforce Cosmos Theme and SLDS 2 Availability. Available in API version 65.0 and later.NoteDark mode is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| masterLabel | string | Required. The label for this LightningExperienceTheme, which displays in Setup. Limited to 70 characters. |
| shouldOverrideLoadingImage | boolean | If true, the LightningExperienceTheme overrides the splash screen image. |

## Declarative Metadata Sample Definition

The following is an example of a LightningExperienceTheme component. See [BrandingSet](atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm#meta_brandingset "Represents the definition of a set of branding properties for an Experience Builder site or for your org's Lightning Experience theme.") for an example of the BrandingSet component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningExperienceTheme xmlns="http://soap.sforce.com/2006/04/metadata">
    <defaultBrandingSet>SummerCelebrationBrand</defaultBrandingSet>
    <description>Theme for summer celebration week.</description>
    <masterLabel>Summer Celebration</masterLabel>
    <shouldOverrideLoadingImage>false</shouldOverrideLoadingImage>
</LightningExperienceTheme>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>LEXTHEMINGThemeName</members>
        <name>BrandingSet</name>
    </types>
    <types>
    	<members>Summer Celebration</members>
    	<name>LightningExperienceTheme</name>
    </types>
    <version>42.0</version>
</Package>
```

## Related Topics

- BrandingSet (atlas.en-us.api_meta.meta/api_meta/meta_brandingset.htm)
- LightningExperienceSettings (atlas.en-us.api_meta.meta/api_meta/meta_lightningexperiencesettings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
