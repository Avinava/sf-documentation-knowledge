---
title: "DataSrcDataModelFieldMap"
domain: metadata-api
topic: datasrcdatamodelfieldmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.742Z
keywords: [DataSrcDataModelFieldMap, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DataSrcDataModelFieldMap

# DataSrcDataModelFieldMap

Represents the entity that is used for storing the design time bundle level mappings for the data source fields and data model fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataSrcDataModelFieldMap components have the suffix .dataSrcDataModelFieldMap and are stored in the dataSrcDataModelFieldMaps folder.

## Version

DataSrcDataModelFieldMap components are available in API version 53.0 and later.

## Special Access Rules

You need Data 360 permission to access this object.

## Fields

| Field Name | Description |
| --- | --- |
| masterLabel | Field TypestringDescriptionRequired. Indicates the name of the entity. |
| sourceField | Field TypestringDescriptionRequired. Indicates the developer name of data source fields. |
| targetField | Field TypestringDescriptionRequired. Indicates the developer name of data mapping object fields. |
| versionNumber | Field TypedoubleDescriptionRequired. Indicates the version number of the entity. |

## Declarative Metadata Sample Definition

The following is an example of a DataSrcDataModelFieldMap component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).