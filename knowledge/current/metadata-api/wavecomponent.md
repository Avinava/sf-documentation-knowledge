---
title: "WaveComponent"
domain: metadata-api
topic: wavecomponent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:43.113Z
estimatedTokens: 486
keywords: [WaveComponent, Analytics, application, extends, MetadataWithContent, metadata, inherits, content, fullName, File, Suffix, Directory, Location, Version, Declarative]
---

# WaveComponent

> Represents the WaveComponent object in the Analytics
  application. This type extends the MetadataWithContent metadata type and inherits its 
  content and fullName fields.

# WaveComponent

Represents the WaveComponent object in the Analytics application. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

When using Metadata API to work with Analytics components, consider that:

-   Modifications to the .wcomp component are unsupported.

## File Suffix and Directory Location

WaveComponent components have the suffix .wcomp and are stored in the wave folder.

## Version

WaveComponent components are available in API version 51.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | Required. The internal name of the application. |
| description | string | The component description that appears in the user interface. |
| masterLabel | string | Required. The component name that appears in the user interface. |
| templateAssetSourceName | string | Links the component to the template used to create it. Null for assets not created from a template. |

## Declarative Metadata Sample Definition

The following is an example of a WaveComponent component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<WaveComponent xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <content xsi:nil="true"/>
    <application>dev__app</application>
    <masterLabel>Component1</masterLabel>
    <description>Component description</description>
</WaveComponent>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
