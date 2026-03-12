---
title: "PipelineInspMetricConfig"
domain: metadata-api
topic: pipelineinspmetricconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.744Z
estimatedTokens: 701
keywords: [PipelineInspMetricConfig, Represents, settings, Pipeline, Inspection, forecast, category, metrics., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative]
---

# PipelineInspMetricConfig

> Represents the settings of Pipeline Inspection forecast
			category metrics.

# PipelineInspMetricConfig

Represents the settings of Pipeline Inspection forecast category metrics.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PipelineInspMetricConfig components have the suffix .pipelineInspMetricConfig and are stored in the pipelineInspMetricConfigs folder.

## Version

PipelineInspMetricConfig components are available in API version 57.0 and later.

## Special Access Rules

Only users with the Customize Application or Modify All Data permission can access this type.

## Fields

| Field Name | Description |
| --- | --- |
| isCumulative | Field TypebooleanDescriptionRequired. Read only. Indicates whether the metric is cumulative (true) or not (false). The default value is true. |
| isProtected | Field TypebooleanDescriptionIndicates whether the component is protected (true) or not (false). The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. Customized label of the Pipeline Inspection metric. Limit: 50 characters. |
| metric | Field TypePipelineInspectionMetric (enumeration of type string)DescriptionRequired. The Pipeline Inspection metric. Possible values are:BestCase (available in API version 58.0 and later)ClosedLost (available in API version 58.0 and later)ClosedWon (available in API version 58.0 and later)Commit (available in API version 58.0 and later)MostLikely (available in API version 58.0 and later)OpenPipeline (available in API version 58.0 and later)TotalPipeline (available in API version 58.0 and later) |

## Declarative Metadata Sample Definition

The following is an example of a PipelineInspMetricConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PipelineInspMetricConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <isCumulative>true</isCumulative>
    <isProtected>false</isProtected>
    <masterLabel>Lost the opportunity</masterLabel>
    <metric>ClosedLost</metric>

</PipelineInspMetricConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PipelineInspMetricConfig</name>
    </types>
    <version>57.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
