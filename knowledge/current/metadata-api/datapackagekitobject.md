---
title: "DataPackageKitObject"
domain: metadata-api
topic: datapackagekitobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.718Z
keywords: [DataPackageKitObject, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DataPackageKitObject

# DataPackageKitObject

Represents the object in Data Kit Content Object. These objects are added inside the data kit.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataPackageKitObject components have the suffix .DataPackageKitObject and are stored in the DataPackageKitObjects folder.

## Version

DataPackageKitDefinition components are available in API version 53.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| masterLabel | Field TypestringDescriptionRequired. Label that identifies the AI application throughout the Salesforce user interface. |
| parentDataPackageKitDefinitionName | Field TypestringDescriptionRequired. Name of the data kit definition |
| referenceObjectName | Field TypestringDescriptionRequired. The name of the data kit content. |
| referenceObjectType | Field TypestringDescriptionRequired. The type of the content object in the data kit. |

## Declarative Metadata Sample Definition

The following is an example of a DataPackageKitDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").