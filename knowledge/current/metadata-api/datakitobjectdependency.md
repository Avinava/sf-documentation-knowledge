---
title: "DataKitObjectDependency"
domain: metadata-api
topic: datakitobjectdependency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.477Z
estimatedTokens: 539
keywords: [DataKitObjectDependency, Represents, dependency, between, two, data, kit, objects., templates, added, inside, kit., Important, Parent, File, Suffix, Directory, Location, Version, Special]
---

# DataKitObjectDependency

> Represents the dependency between two data kit
      objects. The object templates are added inside the data kit.

# DataKitObjectDependency

Represents the dependency between two data kit objects. The object templates are added inside the data kit.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataKitObjectDependency components have the suffix .DataKitObjectDependency and are stored in the DataKitObjectDependency folder.

## Version

DataKitObjectDependency components are available in API version 65.0 and later.

## Special Access Rules

You need the Salesforce CustomizeApplication permission to access this object.

## Fields

| Field Name | Description |
| --- | --- |
| dataPackageKitDef | Field TypestringDescriptionRequired. The ID of the linked DataPackageKitDefinition. |
| developerName | Field TypestringDescriptionRequired. The name of the DataKitObjectDependency. This name can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| masterLabel | Field TypestringDescriptionRequired. Label that identifies the data kit object dependency. |
| sourceObject | Field TypestringDescriptionThe source data kit object template that the target object depends on. |
| sourceObjectType | Field TypestringDescriptionRequired. The type of the source object referenced in the data kit. Valid values are:DataKitObjectTemplateDataSourceObjectDataStreamTemplateDataSourceBundleDefinitionMKtDataModelObject |
| targetObject | Field TypestringDescriptionRequired. The target data kit object template that depends on the source object. |

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
