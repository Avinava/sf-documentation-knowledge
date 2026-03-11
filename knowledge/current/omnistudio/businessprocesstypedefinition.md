---
title: "BusinessProcessTypeDefinition"
domain: omnistudio
topic: businessprocesstypedefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:10.734Z
keywords: [BusinessProcessTypeDefinition, Important, Parent, Type, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# BusinessProcessTypeDefinition

# BusinessProcessTypeDefinition

Represents the definition of the business process type within an application domain.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

BusinessProcessTypeDefinition components have the suffix .businessProcessTypeDefinition and are stored in the businessProcessTypeDefinition folder.

## Version

BusinessProcessTypeDefinition components are available in API version 57.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| applicationUsageType | Field TypeAppDomainUsageType (enumeration of type string)DescriptionRequired.The application's domain that defines the business process type definition.Possible value:ExplainabilityService |
| description | Field TypestringDescriptionThe description of the business process type definition. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for BusinessProcessTypeDefinition, which is defined when the BusinessProcessTypeDefinition is created. |

## Declarative Metadata Sample Definition

The following is an example of a BusinessProcessTypeDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.