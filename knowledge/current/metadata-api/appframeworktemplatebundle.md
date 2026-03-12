---
title: "AppFrameworkTemplateBundle"
domain: metadata-api
topic: appframeworktemplatebundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.948Z
estimatedTokens: 733
keywords: [AppFrameworkTemplateBundle, Represents, app, framework, template, bundle., templates, Data, 360, Tableau, Next, assets., Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# AppFrameworkTemplateBundle

> Represents the app framework template bundle. Use these
      templates for Data 360 and Tableau Next assets.

# AppFrameworkTemplateBundle

Represents the app framework template bundle. Use these templates for Data 360 and Tableau Next assets.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

An app framework template bundle is a folder that contains definition files for a template. Unlike other metadata components, a AppFrameworkTemplateBundle component isn’t represented with a single component file, but instead by a collection of JSON and other definition files. Each definition file represents a resource in a template, such as semantic models, workspaces, visualizations, and dashboards. For example, this directory structure shows the hierarchy of the folders and files for one app framework template definition, myTemplate.

```

```

App framework template bundles must be under a top-level folder that’s named appTemplates. Each bundle must have its own subfolder under the appTemplate folder and named with the template's fully qualified API name. The bundle folder must contain a template-info.json file to specify the metadata about the template and the references to other definition files. An entire bundle doesn’t have a suffix and definition files can have one of the these suffixes.

| Suffix | Component Type |
| --- | --- |
| .json | JSON file |
| .html | HTML file |

## Version

AppFrameworkTemplateBundle components are available in API version 64.0 and later.

## Special Access Rules

Create definitions in both managed and unmanaged packages.

## Fields

| Field Name | Description |
| --- | --- |
| assetVersion | Field TypedoubleDescriptionThe API version of the template bundle. |
| description | Field TypestringDescriptionThe description for the template. |
| label | Field TypestringDescriptionRequiredThe label for the template. |
| maxAppCount | Field TypeintDescriptionThe maximum number of apps that can be created from this template. |
| templateBadgeIcon | Field TypestringDescriptionThe badge icon for the template. This must be a .png file type. |
| templateStatus | Field TypestringDescriptionThe status of the template. |
| templateSubtype | Field TypestringDescriptionThe subtype of the template. |
| templateType | Field TypestringDescriptionThe type of the template. |

## Declarative Metadata Sample Definition

This is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
appTemplates
  myTemplate
    template-info.json
    create-chain.json
    rules.json
    variables.json 
    layout.json
    workspaces
      myWorkspace.json
    dashboards
      myDashboard.json
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
    <members>myTemplate</members>
    <name>AppFrameworkTemplateBundle</name>
</types>
<version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
