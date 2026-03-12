---
title: "DocumentCategory"
domain: psc-api
topic: documentcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.083Z
estimatedTokens: 323
keywords: [DocumentCategory, document, category, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Declarative, Metadata, Sample]
---

# DocumentCategory

> Represents a document category.

# DocumentCategory

Represents a document category.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

DocumentCategory components have the suffix .documentCategory and are stored in the documentCategory folder.

## Version

DocumentCategory components are available in API version 59.0 and later.

## Special Access Rules

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionA description of the DocumentCategory. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.The master label of the DocumentCategory. This internal label doesn’t get translated. |

## Declarative Metadata Sample Definition

The following is an example of a DocumentCategory component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DocumentCategory xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Address_Proof</masterLabel>
</DocumentCategory>
```

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>DocumentCategory</name>
    </types>
    <version>59.0</version>
</Package>
```
