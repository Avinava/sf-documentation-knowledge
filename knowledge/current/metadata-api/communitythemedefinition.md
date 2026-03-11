---
title: "CommunityThemeDefinition"
domain: metadata-api
topic: communitythemedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.200Z
keywords: [CommunityThemeDefinition, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, CommunityThemeBundleInfo, CommunityCustomThemeLayoutType, CommunityThemeRouteOverride, CommunityTheme, Setting, Declarative, Metadata, Sample, Definition]
---

# CommunityThemeDefinition

# CommunityThemeDefinition

Represents the definition of a theme for an Experience Builder site. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

CommunityThemeDefinition components have the suffix .communityThemeDefinition and are stored in the communityThemeDefinitions folder.

## Version

CommunityThemeDefinition components are available in API version 38.0 and later.

## Special Access Rules

This type is available only if Salesforce Digital Experiences is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| bundlesInfo | CommunityThemeBundleInfo[] | If specified, at least one preview image and one highlight are required. Up to 3 preview images and 4 highlights are supported. Available in API version 44.0 and later |
| customThemeLayoutType | CommunityCustomThemeLayoutType[] | The list of custom theme layout types available to the theme layout. |
| defaultBrandingSet | string | The set of branding properties associated with this CommunityThemeDefinition, as defined in the Theme panel in Experience Builder. Available in API version 44.0 and later. |
| description | string | The optional description text of this CommunityThemeDefinition. |
| enableExtendedCleanUp​OnDelete | boolean | False by default. Determines if deleting this CommunityThemeDefinition attempts to delete other directly or indirectly referenced objects automatically, for example, FlexiPage. Values are true or false. |
| masterLabel | string | Required. The label for this CommunityThemeDefinition, which displays in Setup. |
| publisher | string | Defines the name of the publisher as seen in the wizard for creating Experience Builder sites. If no name is provided, the name of the org from which the package was originally exported is used.This field is available in API version 45.0 and later. |
| themeRouteOverride | CommunityThemeRouteOverride[] | List of theme layout type overrides for flexipages (currently only for home). Available in API version 44.0 and later. |
| themeSetting | CommunityTheme Setting [] | Required. The list of settings for this CommunityThemeDefinition. |

## CommunityThemeBundleInfo

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The optional description text of its CommunityThemeBundleInfo. |
| image | string | Required only when the type is PreviewImage, otherwise this field is optional. A preview image for this CommunityThemeDefinition. |
| order | int | Required. An integer specifying the position of this CommunityThemeBundleInfo relative to others of the same type within its CommunityThemeDefinition. 1 is the first position, 3 is the maximum position for PreviewImage type, and 4 is the maximum position for the Highlight type. |
| title | string | Required. The title of this CommunityThemeBundleInfo to use in code. |
| type | CommunityTemplate​BundleInfoType (enumeration of type string) | Required. Stores descriptive information about the theme that is included in the export. Valid values are:Highlight—This CommunityThemeBundleInfo is used as a highlighted feature. Up to 4 are supported.PreviewImage—This CommunityThemeBundleInfo is used as a preview image. Up to 3 are supported. |

## CommunityCustomThemeLayoutType

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The description of the custom theme layout type. |
| label | string | Required. The name of the custom theme layout type. The values Inner, Home, and Login are reserved. |

## CommunityThemeRouteOverride

| Field Name | Field Type | Description |
| --- | --- | --- |
| customThemeLayoutType | string | Required when themeLayoutType isn’t specified. Provides the custom theme layout type associated with the theme layout. This field and themeLayoutType are mutually exclusive; you can’t specify both. |
| pageAttributes | string | Required. Specifies the attributes of the site page for which the default theme layout type is overridden. The only valid value is {"PageName":"Home"}. |
| pageType | string | Required. Specifies the type of the site page for which the default theme layout type is overridden. The only valid value is comm__standardPage. |
| themeLayoutType | CommunityTheme​LayoutType (enumeration of type string) | Required if customThemeLayoutType isn’t specified. Provides the default theme layout type associated with the theme layout. Valid values are Inner, Home, or Login. This field and customThemeLayoutType are mutually exclusive; you can’t specify both. |

## CommunityTheme Setting

| Field Name | Field Type | Description |
| --- | --- | --- |
| customThemeLayoutType | string | Required when themeLayoutType isn’t specified. The custom theme layout type associated with the theme layout. This field and themeLayoutType are mutually exclusive; you can’t specify both. |
| themeLayout | string | Required. The configuration and layout for this theme. |
| themeLayoutType | CommunityTheme​LayoutType (enumeration of type string) | Required when customThemeLayoutType isn’t specified. The default theme layout type associated with the theme layout. Valid values are Inner, Home, or Login. This field and customThemeLayoutType are mutually exclusive; you can’t specify both. |

## Declarative Metadata Sample Definition

The following is an example of a CommunityThemeDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").