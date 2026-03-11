---
title: "DocumentCategoryDocumentType"
domain: metadata-api
topic: documentcategorydocumenttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.074Z
keywords: [DocumentCategoryDocumentType, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DocumentCategoryDocumentType

# DocumentCategoryDocumentType

Represents the junction between a DocumentCategory and a DocumentType. Puts a DocumentType in a DocumentCategory.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DocumentCategoryDocumentType components have the suffix .documentCategoryDocumentType and are stored in the documentCategoryDocumentTypes folder.

## Version

DocumentCategoryDocumentType components are available in API version 59.0 and later.

## Special Access Rules

## Fields

| Field Name | Description |
| --- | --- |
| documentCategory | Field TypestringDescriptionRequired.The master label of the related DocumentCategory. |
| documentType | Field TypestringDescriptionRequired.The master label of the related DocumentType. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.The master label of the DocumentCategoryDocumentType. This internal label doesn’t get translated. |

## Declarative Metadata Sample Definition

The following is an example of a DocumentCategoryDocumentType component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").