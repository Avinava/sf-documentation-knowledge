---
title: "MfgProgramTemplate"
domain: metadata-api
topic: mfgprogramtemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:53.555Z
keywords: [MfgProgramTemplate, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, MfgProgramTemplateItem, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# MfgProgramTemplate

# MfgProgramTemplate

Represents a definition of a program to create a program-based business. A program-based business, also known as a Manufacturing Program, enables manufacturers to drive their business models with forecasting tools and manage the end-to-end sales process efficiently.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MfgProgramTemplate components have the suffix .mfgProgramTemplate and are stored in the MfgProgramTemplate folder.

## Version

MfgProgramTemplate components are available in API version 54.0 and later.

## Special Access Rules

The program-based business feature setting for Manufacturing Cloud is required to create a program template.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the manufacturing program template. |
| programTemplateItems | Field TypeMfgProgramTemplateItem[]DescriptionThe list of templates associated with the manufacturing program template. |
| programTemplateName | Field TypestringDescriptionRequired.The unique identifier for the manufacturing program template. |
| status | Field TypeMfgProgramTemplateStatus (enumeration of type string)DescriptionRequired.The status of the manufacturing program template.Values are:ActiveDraftInactiveThe default value is Active. |

## MfgProgramTemplateItem

A program template item defines each of the templates associated with a manufacturing program. A template item includes program details, such as a data transformation type and a display order. Transformation type is the method to forecast business visibility to manufacturers.

| Field Name | Description |
| --- | --- |
| advAccountForecastSet | Field TypestringDescriptionThe forecast set associated with the transformation. |
| contextDefinition | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context definition that defines how data is mapped and transformed to the target, such as an opportunity or account. |
| description | Field TypestringDescriptionThe description of the manufacturing program template item. |
| sourceContextMappingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context mapping that defines how data is mapped from a list of facts(Input Data) to create structured information. |
| targetContextMappingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context mapping that defines how the structured data is saved to the target, such as an opportunity or sales agreement. |
| templateItemName | Field TypestringDescriptionRequired.The name of the manufacturing program template item. |
| transformationDisplayOrder | Field TypeintDescriptionRequired.The display order of the transformation in the manufacturing program template. |
| transformationType | Field TypeMfgProgramTransformationType (enumeration of type string)DescriptionRequired.Specifies the type of transformation.Values are:BusinessTransformationForecastSetRelation |

## Declarative Metadata Sample Definition

The following is an example of a MfgProgramTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").