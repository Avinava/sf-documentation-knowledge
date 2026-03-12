---
title: "WaveApplication"
domain: metadata-api
topic: waveapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:43.108Z
estimatedTokens: 523
keywords: [WaveApplication, Analytics, application, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Declarative, Sample, Definition]
---

# WaveApplication

> Represents the Analytics application. This type 
    extends the Metadata metadata type and inherits its fullName field.

# WaveApplication

Represents the Analytics application. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

WaveApplication components have the suffix .wapp and are stored in the wave folder.

## Version

WaveApplication components are available in API version 37.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| assetIcon | string | The icon that represents the Analytics application. |
| description | string | The description that appears in the user interface. |
| folder | string | The internal api name of the folder or application. |
| masterLabel | string | The user interface label name of the folder or application. |
| shares | FolderShare | The folder sharing rules. |
| templateOrigin | string | The internal (unique) name of the template used to create the application. This field is blank if the application wasn’t created from a template. |
| templateVersion | string | The version assigned to the application template by the template's creator. This field is blank if the application wasn’t created from a template. |

## Declarative Metadata Sample Definition

The following is an example of a WaveApplication component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>  
<WaveApplication xmlns="http://soap.sforce.com/2006/04/metadata">
  <assetIcon>/analytics/wave/web/proto/images/app/icons/11.png</assetIcon>
  <description>Application that shows my sales</description>
  <folder>edit</folder>
  <masterLabel>Sales Application</masterLabel>
  <shares>
   <accessLevel>EditAllContents</accessLevel>
   <sharedTo>shareswith@org.ee</sharedTo>
   <sharedToType>User</sharedToType>
  </shares>
</WaveApplication>
```

## Related Topics

- FolderShare (atlas.en-us.api_meta.meta/api_meta/meta_foldershare.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
