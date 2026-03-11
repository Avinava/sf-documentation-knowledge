---
title: "WaveAnalyticAssetCollection"
domain: metadata-api
topic: waveanalyticassetcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.298Z
keywords: [WaveAnalyticAssetCollection, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, WaveAnalyticAssestCollectionItem]
---

# WaveAnalyticAssetCollection

# WaveAnalyticAssetCollection

Represents a collection of Analytics assets. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

WaveAnalyticsAssetCollection components have the suffix .collection and are stored in the wave folder.

## Version

WaveAnalyticsAssetCollection components are available in API version 58.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| collectionType | string | The collection type. |
| color | string | The display color for the collection. |
| description | string | The description that appears in the user interface. |
| folder | string | The internal API name of the folder or application. |
| items | WaveAnalayticAssestCollectionItem | A list of Analytics asset items. |
| label | string | The label for the collection. |
| shares | FolderShare | The folder sharing rules. |

## Declarative Metadata Sample Definition

The following is an example of a WaveAnalyticsAssetCollection component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## WaveAnalyticAssestCollectionItem

WaveAnalyticAssestCollectionItem represents an Analytics asset item.

| Field | Field Type | Description |
| --- | --- | --- |
| asset | string | The asset name. |
| assetType | string | The asset type. |
| sortOrder | int | The sort order for the asset. |