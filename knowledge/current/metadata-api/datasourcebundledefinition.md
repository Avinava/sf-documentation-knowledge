---
title: "DataSourceBundleDefinition"
domain: metadata-api
topic: datasourcebundledefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.530Z
estimatedTokens: 584
keywords: [DataSourceBundleDefinition, Represents, bundle, streams, user, adds, data, kit., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative]
---

# DataSourceBundleDefinition

> Represents the bundle of streams that a user adds to a data
      kit.

# DataSourceBundleDefinition

Represents the bundle of streams that a user adds to a data kit.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataSourceBundleDefinition components have the suffix .dataSourceBundleDefinition and are stored in the dataSourceBundleDefinitions folder.

## Version

DataSourceBundleDefinition components are available in API version 52.0 and later.

## Special Access Rules

You need Data 360 permission to access this object.

## Fields

| Field Name | Description |
| --- | --- |
| dataPlatform | Field TypestringDescriptionRequired. Indicates the connector type that the streams in the bundle belong to. |
| description | Field TypestringDescriptionA description of the associated data source bundle. This field is available in API version 53.0 and later. |
| icon | Field TypestringDescriptionThe icon used in the deployment flow. This field is available in API version 53.0 and later. |
| isMultiDeploymentSupported | Field TypebooleanDescriptionIndicates if the bundle can be deployed multiple times or not. Default value is false. |
| masterLabel | Field TypestringDescriptionRequired. Indicates the name of the bundle. |
| bundleVersion | Field TypeintDescriptionIndicates the version of the bundle. This field is available in API version 63.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a DataSourceBundleDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DataSourceBundleDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <dataPlatform>Salesforce_Sales_and_Service_Cloud</dataPlatform>
    <isMultiDeploymentSupported>true</isMultiDeploymentSupported>
    <bundleVersion>1</bundleVersion> 
    <masterLabel>b2</masterLabel>
</DataSourceBundleDefinition>
```

```
<types>
      <members>b2</members>
      <name>DataSourceBundleDefinition</name>
</types>
```
