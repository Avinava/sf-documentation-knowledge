---
title: "DocumentType"
domain: omnistudio
topic: documenttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:10.814Z
keywords: [DocumentType, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DocumentType

# DocumentType

Represents a document type.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

DocumentType components have the suffix .documentType and are stored in the documentTypes folder.

## Version

DocumentType components are available in API version 59.0 and later.

## Special Access Rules

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionA description of the DocumentType. |
| isActive | Field TypebooleanDescriptionRequired.Specifies whether the DocumentType is active. |
| masterLabel | Field TypestringDescriptionRequired.The master label of the DocumentType. This internal label doesn’t get translated. |

## Declarative Metadata Sample Definition

The following is an example of a DocumentType component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.