---
title: "EclairGeoData"
domain: metadata-api
topic: eclairgeodata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.117Z
keywords: [EclairGeoData, Important, File, Suffix, Directory, Location, Version, Fields, EclairMap, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# EclairGeoData

# EclairGeoData

Represents an Analytics custom map chart. Custom maps are user-defined maps that are uploaded to Analytics and are used just as standard maps are. Custom maps are accessed in Analytics from the list of maps available with the map chart type.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

EclairGeoData components have the suffix geodata and are stored in the eclair folder.

## Version

EclairGeoData components are available in API version 39.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| maps | EclairMap[] | A list of EclairMap objects. Each EclairMap object specifies the bounding box (if any) and the map name that appears in the user interface. |
| masterLabel | string | Required. Label for this object. This display value is the internal label that is not translated. |

## EclairMap

| Field Name | Field Type | Description |
| --- | --- | --- |
| boundingBoxBottom | double | When bounding-box coordinates are used, this contains the bottom coordinate. |
| boundingBoxLeft | double | When bounding-box coordinates are used, this contains the left side coordinate. |
| boundingBoxRight | double | When bounding-box coordinates are used, this contains the right side coordinate. |
| boundingBoxTop | double | When bounding-box coordinates are used, this contains the top coordinate. |
| mapLabel | string | Required. The user-interface name of the map. This name appears in the maps list for the map chart in Analytics. |
| mapName | string | Required. Label for this object. This display value is the internal label that is not translated. |
| projection | string | Required. The type of map projection used to create the map. Valid values are:EquirectangularMercatorAlbersUSA |

## Declarative Metadata Sample Definition

The following is an example of an EclairGeoData component:

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").