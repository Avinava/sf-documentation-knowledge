---
title: "DataObjectBuildOrgTemplate"
domain: metadata-api
topic: dataobjectbuildorgtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.704Z
keywords: [DataObjectBuildOrgTemplate, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DataObjectBuildOrgTemplate

# DataObjectBuildOrgTemplate

Represents the derived object template used to define the structure and configuration of data objects in a build organization. The object templates are added inside the data kit to deploy metadata.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataObjectBuildOrgTemplate components have the suffix .DataObjectBuildOrgTemplate and are stored in the DataObjectBuildOrgTemplate folder.

## Version

DataObjectBuildOrgTemplate components are available in API version 63.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| developerName | Field TypestringDescriptionRequired. Name of the data object build org template. This name can contain only underscores and alphanumeric characters and must be unique in your org. |
| masterLabel | Field TypestringDescriptionRequired. The label of the data object build org template. |
| objectDevName | Field TypestringDescriptionRequired. The developer name of the object created from the objectPayload entity in the build org. |
| objectPayload | Field TypestringDescriptionRequired. The serialized metadata for the entity. The build organization deserializes this payload to create the underlying metadata components. |
| objectType | Field TypestringDescriptionRequired. The type of metadata entity associated with the template. Valid values are:DataGraphMktCalculatedInsightObjectMktDataModelObjectMktDataLakeObject |
| templateObject | Field TypestringDescriptionRequired. The name of the template associated with the data object build org template. |
| templateVersion | Field TypestringDescriptionThe version number of the data object build org template. |

## Declarative Metadata Sample Definition

The following is an example of a DataObjectBuildOrgTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").