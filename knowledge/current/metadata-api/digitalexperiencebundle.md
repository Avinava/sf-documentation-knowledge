---
title: "DigitalExperienceBundle"
domain: metadata-api
topic: digitalexperiencebundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.924Z
keywords: [DigitalExperienceBundle, Parent, Type, File, Suffix, Directory, Location, Note, Version, Special, Access, Rules, Fields, DigitalExperience, DigitalExperienceFolderShare, SharedWith, Declarative, Metadata, Sample, Definition]
---

# DigitalExperienceBundle

# DigitalExperienceBundle

Represents a text-based code structure of your organization’s workspaces, organized by workspace type, and each workspace’s content items.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DigitalExperienceBundle components have the suffix .digitalExperience and are stored in the digitalExperiences folder.

DigitalExperienceBundle uses workspaces and content types to organize your data in a content-focused structure.

-   Workspace: For enhanced Lightning Web Runtime (LWR) sites, a collection of related content items that form the site when combined with data from the [DigitalExperienceConfig](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperienceconfig.htm "Represents details for your organization’s workspaces, such as the site label, site URL path prefix, and workspace type.") metadata type.
    
    For Salesforce CMS, a collection of related content items contained in a general workspace.
    
    For Marketing Cloud, a collection of related content items contained in a marketing or general workspace.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)
    
    #### Note
    
    The maximum length for a workspace name is 80 characters.
    
-   Workspace type: A way to categorize different kinds of workspaces. For example, the workspace type for enhanced LWR sites is site, and the workspace type for marketing workspaces in Marketing Cloud is marketing. The workspace type determines which content types are available in the workspace. In the DigitalExperienceBundle folder structure, all workspaces of a given type are under that workspace type. site, marketing, and general are the supported workspace types.
-   Content types: A way to categorize different kinds of content in a workspace. For example, all routes in an enhanced LWR site are stored under a content type folder called sfdc\_cms\_\_route. Similarly, forms for a marketing workspace are stored under a content type folder called sfdc\_cms\_\_form.
-   Content items: For enhanced LWR sites, the individual settings and site components that make up an enhanced LWR site. For example, each of the routes in an enhanced LWR site is a single content item.
    
    For marketing workspaces, the content items used in marketing campaigns. For example, each form in a workspace is a single content item.
    

Here’s an example of the DigitalExperienceBundle structure.

![DigitalExperienceBundle folder structure](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2FDigitalExperienceBundle.png&folder=api_meta)

When retrieved, DigitalExperienceBundle contains workspace type folders (1) under the digitalExperiences folder.

The marketing folder contains one or more workspace folders (2), each representing a marketing workspace in Marketing Cloud. The site folder contains one or more workspace folders (3), each representing the workspace for an individual enhanced LWR site. Each workspace folder contains an XML file with information about the workspace, such as the label. For enhanced LWR sites, be sure to keep the label value in sync with the site’s network name.

Each workspace folder also contains several content type folders that represent each of the different content types (4) used in that workspace. For example, marketing workspaces support landing pages, forms, emails, and referenced images and branding.

Finally, each content type folder can contain one or more content subfolders. Each content subfolder can contain additional subfolders and several files that, when combined, represent an individual content item, such as a specific view (5).

-   A \_meta.json file that contains the metadata for the content item. Use the \_meta.json file to learn the location of a content item within the workspace, or to move the content item to another location, including creating a new location for the content item. You can also use the \_meta.json file to view a content item’s parent-child relationships, to move the content item from one parent to another, or to remove a parent-child relationship entirely.
-   A content.json file that contains the primary version of the content item. Each content.json file includes values for the content item’s type, title, and content body. Use this file to edit the content’s properties on your local machine or scratch org and then deploy.
-   If applicable, additional JSON files that represent variants of the content item, such as language translations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Before you deploy the DigitalExperienceBundle in a target org, make sure that any translated variants of content in the target org are also in the source org. If the target org contains a JSON file for a translated variant that isn’t in the source org, deploying the DigitalExperienceBundle fails.

The \_meta.json file contains several properties:

| Property | Description |
| --- | --- |
| apiName | Field TypestringDescriptionRequired.The name of the associated content item. The apiName allows only alphanumeric and underscore characters and must begin with a letter.You can use an apiName one time per content type in a given workspace. For example, a single workspace can contain both a view named “home” and a route named “home” but can’t contain two views named “home”. |
| parent | Field TypestringDescriptionThe developer name of the content item’s parent. If the content item doesn’t have a parent, then either the parent value is blank or the parent property isn’t displayed at all. |
| path | Field TypestringDescriptionThe location of the content item within the workspace’s folder structure. The value is blank for content types at the root level, such as appPage and site. |
| type | Field TypestringDescriptionRequired.The full name of the content type from which the content item was created.The type is prefixed with sfdc_cms__. For example, all views in a site workspace have the content type sfdc_cms__view. |

## Version

DigitalExperienceBundle components are available in API version 56.0 and later.

## Special Access Rules

In Experience Cloud, you can use DigitalExperienceBundle for enhanced LWR sites created in Winter ’23 or later. For Aura sites and other LWR sites, use the [ExperienceBundle](atlas.en-us.api_meta.meta/api_meta/meta_experiencebundle.htm "Represents a text-based code structure of the settings and site components, such as pages, branding sets, and themes that make up an Experience Builder site. Developers can quickly update and deploy Experience Builder sites programmatically using their preferred development tools. This type extends the Metadata metadata type and inherits its fullName field.") (recommended) or the [SiteDotCom](atlas.en-us.api_meta.meta/api_meta/meta_sitedotcom.htm "Represents a site for deployment.") metadata types. Packaging is unsupported for enhanced LWR sites.

In Salesforce CMS and in Marketing Cloud, you must have a contributor role in a workspace to retrieve it. For Marketing Cloud, you can package the content of general and marketing workspaces, including landing pages, forms, and emails (and their associated images and branding).

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionContains the description of the workspace.For site workspaces, this value is empty. |
| digitalExperienceFolderShares | Field TypeDigitalExperienceFolderShare[]DescriptionThe list of folders in the source marketing workspace that are shared with target marketing workspaces.Available in API version 61.0 and later. |
| label | Field TypestringDescriptionRequired.A user-friendly name for DigitalExperienceBundle, which is defined when the DigitalExperienceBundle is created. |
| spaceResources | Field TypeDigitalExperience[]DescriptionThe list of resources in this DigitalExperienceBundle. Each resource represents a content type, such as views, routes, themes, and languageSettings. |

## DigitalExperience

Represents content in the bundle. When retrieved as part of DigitalExperienceBundle, DigitalExperience represents all content for the requested workspace or workspaces. When retrieved on its own, DigitalExperience represents only the content types you specify.

This subtype extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

When you retrieve DigitalExperience, the folder structure matches that of DigitalExperienceBundle, with only the specified content returned.

| Field Name | Description |
| --- | --- |
| fileName | Field TypestringDescriptionRequired.Name of the resource file. |
| filePath | Field TypestringDescriptionPath to the file within the artifact folder. |
| format | Field TypestringDescriptionRequired.Only JSON is allowed. |

## DigitalExperienceFolderShare

Represents a folder in a source marketing workspace that’s shared with other target marketing workspaces. Available in API version 61.0 and later.

| Field Name | Description |
| --- | --- |
| folderPath | Field TypestringDescriptionThe root folder of the shared workspace. The allowed value is _root. |
| sharedWith | Field TypeSharedWith[]DescriptionThe list of target workspaces that the source workspace is shared with. |

## SharedWith

Represents a target marketing workspace that the source marketing workspace is shared with. Available in API version 61.0 and later.

| Field Name | Description |
| --- | --- |
| fullyQualifiedName | Field TypestringDescriptionThe target workspace that the source workspace is shared with. It uses the format workspace_type/target_workspace_name. For example, marketing/Workspace2. |

## Declarative Metadata Sample Definition

The following is an example of a DigitalExperienceBundle component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Usage

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_meta)

#### Tip

Before you update the JSON files of an Experience Builder site, we recommend making a copy of the site’s folder as a backup.

To retrieve and deploy DigitalExperienceBundle, use legacy sfdx commands.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   **[DigitalExperienceBundle: Marketing Workspace Bundle and Folders](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle_marketing.htm)**  
    DigitalExperienceBundle uses the marketing workspace type to organize content items used in marketing campaigns in a content-focused, text-based code structure.
-   **[DigitalExperienceBundle: Site Workspace Bundle and Folders](atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle_site.htm)**  
    DigitalExperienceBundle uses the site workspace type to organize data for enhanced LWR sites in a content-focused, text-based code structure.