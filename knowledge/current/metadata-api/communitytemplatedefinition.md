---
title: "CommunityTemplateDefinition"
domain: metadata-api
topic: communitytemplatedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.192Z
keywords: [CommunityTemplateDefinition, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, CommunityTemplateBundleInfo, CommunityTemplatePageSetting, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CommunityTemplateDefinition

# CommunityTemplateDefinition

Represents the definition of an Experience Builder site template. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

CommunityTemplateDefinition components have the suffix .communityTemplateDefinition and are stored in the communityTemplateDefinitions folder.

## Version

CommunityTemplateDefinition components are available in API version 38.0 and later.

## Special Access Rules

This type is available only if Salesforce Digital Experiences is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| baseTemplate | CommunityBase​Template (enumeration of type string) | Denotes that this CommunityTemplateDefinition was created in API version 41.0 or later. The only valid value is c. This field is available in API 41.0 and later. |
| bundlesInfo | CommunityTemplateBundleInfo[] | The list of preview images and feature highlights of this CommunityTemplateDefinition. |
| category | CommunityTemplate​Category (enumeration of type string) | Required. The optimized use case of this CommunityTemplateDefinition. Valid values are:CommerceITMarketingSalesService |
| defaultBrandingSet | string | The set of branding properties associated with this CommunityTemplateDefinition, as defined in the Theme panel in Experience Builder. Available in API version 40.0 and later.In API version 44.0 and later, this field is read-only and can be implemented in CommunityThemeDefinition. |
| defaultThemeDefinition | string | Required. The assigned theme definition for this CommunityTemplateDefinition. |
| description | string | The optional description text of this CommunityTemplateDefinition. |
| enableExtendedCleanUp​OnDelete | boolean | False by default. Determines if deleting this CommunityTemplateDefinition attempts to delete other directly or indirectly referenced objects automatically, for example, CommunityThemeDefinition, Flexipage, or StaticResource. Values are true or false. |
| masterLabel | string | Required. The label for this CommunityTemplateDefinition, which displays in Setup. |
| navigationLinkSet | NavigationLinkSet | The navigation menu associated with this CommunityTemplateDefinition. A navigation menu consists of items that users can click to go to other parts of the site. Available in API versions 37.0 to 46.0. In API versions 47.0 and later, use NavigationMenu. |
| pageSetting | CommunityTemplatePageSetting[] | The list of FlexiPage of this CommunityTemplateDefinition. |
| publisher | string | Defines the name of the publisher as seen in the Change Theme wizard. If no name is provided, the name of the org from which the package was originally exported is used.This field is available in API version 45.0 and later. |

## CommunityTemplateBundleInfo

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The optional description text of its CommunityTemplateBundleInfo. |
| image | string | Required only when the type is PreviewImage, otherwise this field is optional. A preview image for this CommunityTemplateDefinition. |
| order | int | Required. An integer specifying the position of this CommunityTemplateBundleInfo relative to others of the same type within its CommunityTemplateDefinition. 1 is the first position, 3 is the maximum position for PreviewImage type, and 4 is the maximum position for the Highlight type. |
| title | string | Required. The title of this CommunityTemplateBundleInfo to use in code. |
| type | CommunityTemplate​BundleInfoType (enumeration of type string) | Required. Stores descriptive information about the template that’s included in the export. The template powers the interface of the Experience Creation Wizard. Valid values are:Highlight—This CommunityTemplateBundleInfo is used as a highlighted feature. Up to 4 are supported.PreviewImage—This CommunityTemplateBundleInfo is used as a preview image. Up to 3 are supported. |

## CommunityTemplatePageSetting

| Field Name | Field Type | Description |
| --- | --- | --- |
| page | string | Required. The list of FlexiPage of this CommunityTemplateDefinition. |
| themeLayout | string | Required. The name of the FlexiPage for the theme layout.This field is available in API version 39.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a CommunityTemplateDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").