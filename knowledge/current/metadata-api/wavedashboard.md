---
title: "WaveDashboard"
domain: metadata-api
topic: wavedashboard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.308Z
keywords: [WaveDashboard, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# WaveDashboard

# WaveDashboard

Represents the WaveDashboard object in the Analytics application. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

When using Metadata API to work with Analytics dashboards, consider that:

-   Modifications to the .wdash component are unsupported.
-   Modifying or removing conditional formatting from the source org or .wdash component doesn’t cause issues while deploying.
-   Removing steps from the .wdash component causes deployment to the destination org to fail because the source dashboard fails validation.

## File Suffix and Directory Location

WaveDashboard components have the suffix .wdash and are stored in the wave folder.

## Version

WaveDashboard components are available in API version 37.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | Required. The internal name of the application. |
| dateVersion | integer | The date version for the dashboard. Only available in v55.0 and above. |
| description | string | The dashboard description that appears in the user interface. |
| masterLabel | string | Required. The dashboard name that appears in the user interface. |
| templateAssetSourceName | string | Links the dashboard to the template used to create it. Null for assets not created from a template. |

## Declarative Metadata Sample Definition

The following is an example of a WaveDashboard component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").