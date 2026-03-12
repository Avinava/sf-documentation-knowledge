---
title: "WaveDataset"
domain: metadata-api
topic: wavedataset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.895Z
estimatedTokens: 508
keywords: [WaveDataset, Represents, Analytics, application., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Sample]
---

# WaveDataset

> Represents the WaveDataset object in the Analytics
   application.
  This type extends the Metadata metadata type and inherits its
                        fullName field.

# WaveDataset

Represents the WaveDataset object in the Analytics application. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

WaveDataset components have the suffix .wds and are stored in the wave folder.

## Version

WaveDataset components are available in API version 37.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | Required. The internal name of the application. |
| description | string | The dataset description that appears in the user interface. |
| masterLabel | string | Required. The user interface label name of the dataset. |
| templateAssetSourceName | string | Links the dataset to the template used to create it. Null for assets not created from a template. |
| type | string | The type of the dataset. Dataset types include Default, Live,StagedData, and Trended. |

## Declarative Metadata Sample Definition

The following is an example of a WaveDataset component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<WaveDataset>
    <application>SharedApp</application>
    <description>description</description>
    <masterLabel>datasetLabel</masterLabel>
    <type>Default</type>
</WaveDataset>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
