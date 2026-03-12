---
title: "WaveDataflow"
domain: metadata-api
topic: wavedataflow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.886Z
estimatedTokens: 478
keywords: [WaveDataflow, Represents, Analytics, application., extends, MetadataWithContent, metadata, inherits, its, content, fullName, fields., Important, File, Suffix, Directory, Location, Version, Fields, Declarative]
---

# WaveDataflow

> Represents the WaveDataflow object in the Analytics
        application. This type extends the MetadataWithContent metadata type and inherits its 
        content and fullName fields.

# WaveDataflow

Represents the WaveDataflow object in the Analytics application. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

WaveDataflow components have the suffix .wdf and are stored in the wave folder.

## Version

WaveDataflow components are available in API version 37.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | The name of the Analytics application the dataflow is connected to. This field is available in API version 48.0 and later. |
| dataflowType | string | The type of the dataflow. Supported types are User and Prepared. The default value is User This field is available in API version 41.0 and later. |
| description | string | The dataflow description that appears in the user interface. |
| masterLabel | string | Required. The dataflow name that appears in the user interface. |

## Declarative Metadata Sample Definition

The following is an example of a WaveDataflow component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<WaveDataflow xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">    <content xsi:nil="true"/>
    <description>flow1</description>
    <masterLabel>flow1</masterLabel>
</WaveDataflow>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
