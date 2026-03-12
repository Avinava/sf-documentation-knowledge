---
title: "CommunityTemplateDefinition"
domain: metadata-api
topic: communitytemplatedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:37.813Z
estimatedTokens: 1340
keywords: [CommunityTemplateDefinition, Represents, definition, Experience, Builder, site, template., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location, Version]
---

# CommunityTemplateDefinition

> Represents the definition of an Experience
        Builder site template. This type extends the Metadata metadata type and inherits its 
        fullName field.

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

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<CommunityTemplateDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <baseTemplate>c</baseTemplate>
    <bundlesInfo>
        <description>Feature Description</description>
        <order>1</order>
        <title>Feature Heading</title>
        <type>Highlight</type>
    </bundlesInfo>
    <bundlesInfo>
        <image>siteAsset_2dbe594eb6794173af78da264cd6a4a7</image>
        <order>1</order>
        <title>Preview Image</title>
        <type>PreviewImage</type>
    </bundlesInfo>
    <category>Sales</category>
    <defaultThemeDefinition>communityTemplate</defaultThemeDefinition>
    <description>This is an Experience Builder template</description>
    <enableExtendedCleanUpOnDelete>true</enableExtendedCleanUpOnDelete>
    <masterLabel>communityTemplate</masterLabel>
    <navigationLinkSet>
        <navigationMenuItem>
            <label>Topics</label>
            <position>0</position>
            <publiclyAvailable>true</publiclyAvailable>
            <target>ShowMoreTopics</target>
            <type>NavigationalTopic</type>
        </navigationMenuItem>
    </navigationLinkSet>
    <pageSetting>
        <page>communityTemplate_Report_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Topic_Catalog</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Check_Password</page>
        <themeLayout>communityTemplate_themeLayout_Login</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Error</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_User_Settings</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Login</page>
        <themeLayout>communityTemplate_themeLayout_Login</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Stream_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Sfdc_Page</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Group_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Report_Related_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Register</page>
        <themeLayout>communityTemplate_themeLayout_Login</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_User_Profile</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Case_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Stream_Related_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Dashboard_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Group_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Canvasapp_Page</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Login_Error</page>
        <themeLayout>communityTemplate_themeLayout_Login</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Create_Record</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Group_Related_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Search</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_File_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Case_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_User_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_File_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Question_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Dashboard_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Related_Record_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_File_Related_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Record_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Forgot_Password</page>
        <themeLayout>communityTemplate_themeLayout_Login</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Home</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Dashboard_Related_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Account_Management</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Case_Related_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_User_Related_List</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Stream_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Topic_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Messages</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Report_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Record_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Feed_Detail</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
    <pageSetting>
        <page>communityTemplate_Contact_Support</page>
        <themeLayout>communityTemplate_themeLayout_Default</themeLayout>
    </pageSetting>
</CommunityTemplateDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyTemplate</members>
        <name>CommunityTemplateDefinition</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- CommunityThemeDefinition (atlas.en-us.api_meta.meta/api_meta/meta_communitythemedefinition.htm)
- Flexipage (atlas.en-us.api_meta.meta/api_meta/meta_flexipage.htm)
- StaticResource (atlas.en-us.api_meta.meta/api_meta/meta_staticresource.htm)
- NavigationLinkSet (atlas.en-us.api_meta.meta/api_meta/meta_network.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
