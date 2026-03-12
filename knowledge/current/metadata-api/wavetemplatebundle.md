---
title: "WaveTemplateBundle"
domain: metadata-api
topic: wavetemplatebundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:43.144Z
estimatedTokens: 686
keywords: [WaveTemplateBundle, Analytics, template, bundle, apps, definition, resources.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location]
---

# WaveTemplateBundle

> Represents an Analytics template bundle, which can be
      used to create Analytics apps. A bundle contains an Analytics template definition and all its
      related resources.This type extends the Metadata metadata type and inherits its
                        fullName field.

# WaveTemplateBundle

Represents an Analytics template bundle, which can be used to create Analytics apps. A bundle contains an Analytics template definition and all its related resources.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

An Analytics template bundle is a folder that contains definition files for a template. Unlike other metadata components, a WaveTemplateBundle component isn’t represented by a single component file, but instead by a collection of JSON and CSV definition files. Each definition file represents a resource in a template, such as lenses, dashboards, dataflows, and comma-separated values. For example, this directory structure shows the hierarchy of the folders and files for one Analytics Template definition, template1.

```

```

Analytics template bundles must be under a top-level folder that’s named waveTemplates. Each bundle must have its own subfolder under the waveTemplates folder and be named with the template's fully qualified API name. The bundle folder must contain a template-info.json file to specify the metadata about the template and the references to other definition files. An entire bundle doesn’t have a suffix and definition files can have one of the following suffixes.

| Suffix | Component Type |
| --- | --- |
| .json | JavaScript Object Notation |
| .csv | Comma-Separated Values |

## Version

WaveTemplateBundle components are available in API version 35.0 and later.

## Special Access Rules

Definitions can be created in both managed and unmanaged packages.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| assetIcon | string | The icon to use by default for new Analytics apps based on this template. Valid values are 1.png through 20.png. |
| description | string | The specification of the template. |
| label | string | Required. The label of the template. |
| templateType | string | Required. The type of the template. Valid values are:AppDashboardLens |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
waveTemplates
    template1
        template-info.json 
        variables.json 
        ui.json 
        extFiles
            PostalCodes.csv
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
