---
title: "WaveLens"
domain: metadata-api
topic: wavelens
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.901Z
estimatedTokens: 655
keywords: [WaveLens, Represents, Analytics, application., Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# WaveLens

> Represents the WaveLens object in the Analytics
      application.

# WaveLens

Represents the WaveLens object in the Analytics application.

This type extends to [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") metadata type and inherits its content and fullName fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

WaveLens components have the suffix .wlens and are stored in the wave folder.

## Version

WaveLens components are available in API version 37.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | Required. The internal name of the application. |
| datasets | string | A reference to the dataset used to create this lens. |
| dateVersion | int | The date version used for this lens. |
| description | string | The dashboard description that appears in the user interface. |
| masterLabel | string | Required. The user interface label name of the dashboard. |
| templateAssetSourceName | string | Links the lens to the template used to create it. Null for assets not created from a template. |
| visualizationType | string | Required. The visualization type to be used for this lens. Valid values are:calheatmap—Calendar heat mapcomparisontable—Comparison tableheatmap—Heat maphbar—Horizontal barhbarhdot—Horizontal dot plotmatrix—Matrixparallelcoords—Parallel coordinatespie—Donutpivottable—Pivot tablescatter—Scatter plotstackhbar—Stacked horizontal barstackvbar—Stacked vertical bartime—Time linevaluestable—Values tablevbar—Vertical barvdot—Vertical dot plot |

## Declarative Metadata Sample Definition

The following is an example of a WaveLens component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<WaveLens xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <content xsi:nil="true"/>
  <application>dev__app</application>
  <datasets>dev__abc</datasets>
  <masterLabel>lens1</masterLabel>
  <description>lens in shared app</description>
  <visualizationType>hbar</visualizationType>
</WaveLens>
```

## Related Topics

- MetadataWithContent (atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
