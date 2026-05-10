---
title: "DataSrcDataModelFieldMap"
domain: metadata-api
topic: datasrcdatamodelfieldmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:40:03.752Z
estimatedTokens: 688
keywords: [DataSrcDataModelFieldMap, mappings, source, lake, DLO, target, model, DMO, Parent, File, Suffix, Directory, Location, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

> Represents the mappings between source data lake object
      (DLO) fields and target data model object (DMO) fields.

# DataSrcDataModelFieldMap

Represents the mappings between source data lake object (DLO) fields and target data model object (DMO) fields.

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

You need Data 360 permissions to access this object.

## Fields

| Field Name | Description |
| --- | --- |
| filterApplied | Field TypebooleanDescriptionIndicates whether a filter is applied to a DLO-to-DMO field mapping (true) or not (false). Available in API version 60.0 and later. |
| filterOperationType | Field TypestringDescriptionRequired when filterApplied is true. The comparison operator used when filtering the DLO-to-DMO field mapping. Available in API version 60.0 and later. |
| filterValue | Field TypestringDescriptionRequired when filterApplied is true. The value used for filtering the DLO-to-DMO field mapping. Available in API version 60.0 and later. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for DataSrcDataModelFieldMap, which is defined when the DataSrcDataModelFieldMap is created. |
| sourceField | Field TypestringDescriptionRequired. The developer name of the DLO field. |
| targetField | Field TypestringDescriptionRequired. The developer name of the DMO field. |
| templateVersion | Field TypeintDescriptionThe version number of the field mapping template. Available in API version 61.0 and later. |
| versionNumber | Field TypedoubleDescriptionRequired. The version number of the DataSrcDataModelFieldMap. |

## Declarative Metadata Sample Definition

The following is an example of a DataSrcDataModelFieldMap component.

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
<DataSrcDataModelFieldMap xmlns="http://soap.sforce.com/2006/04/metadata">
    <filterApplied>true</filterApplied>
    <filterOperationType>equals</filterOperationType>
    <filterValue>Active</filtervalue>
    <masterLabel>DataSrcDataModel26</masterLabel>
    <sourceField>Account1.LastModifiedDate__c</sourceField>
    <targetField>ssot__Account__dlm.ssot__LastModifiedDate__c</targetField>
    <tepmlateVersion>2</templateVersion>
    <versionNumber>1.0</versionNumber>
</DataSrcDataModelFieldMap>
```

```
<types>
        <members>DataSrcDataModel26</members>
        <name>DataSrcDataModelFieldMap</name>
</types>
```
