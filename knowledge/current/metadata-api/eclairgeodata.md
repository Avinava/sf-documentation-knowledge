---
title: "EclairGeoData"
domain: metadata-api
topic: eclairgeodata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.093Z
estimatedTokens: 696
keywords: [EclairGeoData, Represents, Analytics, custom, map, chart., Custom, maps, user-defined, uploaded, used, just, standard, are., accessed, list, chart, type., Important, File]
---

# EclairGeoData

> Represents an Analytics custom map chart. Custom maps
      are user-defined maps that are uploaded to Analytics and are used just as standard maps are.
      Custom maps are accessed in Analytics from the list of maps available with the map chart
      type.

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

## Code Examples

```
<EclairGeoData xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <content xsi:nil="true"/>            
            <maps>              
              <boundingBoxBottom>0.0</boundingBoxBottom>              
              <boundingBoxLeft>100.0</boundingBoxLeft>              
              <boundingBoxRight>100.0</boundingBoxRight>              
              <boundingBoxTop>0.0</boundingBoxTop>              
              <mapLabel>WorldMap0 Label</mapLabel>              
              <mapName>WorldMap0</mapName>              
              <projection>Equirectangular</projection>
            </maps>
            <maps>
              <boundingBoxBottom>1.0</boundingBoxBottom>
              <boundingBoxLeft>101.0</boundingBoxLeft>
              <boundingBoxRight>101.0</boundingBoxRight>
              <boundingBoxTop>1.0</boundingBoxTop>
              <mapLabel>WorldMap1 Label</mapLabel>
              <mapName>WorldMap1</mapName>
              <projection>Mercator</projection>
            </maps>
            <masterLabel>WorldMapGeoDataToCreate Label</masterLabel>
          </EclairGeoData>
```

```
<?xml version="1.0" encoding="UTF-8"?>
        <Package xmlns="http://soap.sforce.com/2006/04/metadata">
          <types>
            <members>*</members>
            <name>EclairGeoData</name>
          </types>
          <version>39.0</version>
        </Package>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
