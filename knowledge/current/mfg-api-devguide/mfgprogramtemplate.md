---
title: "MfgProgramTemplate"
domain: mfg-api-devguide
topic: mfgprogramtemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.117Z
estimatedTokens: 886
keywords: [MfgProgramTemplate, definition, program, program-based, business, known, Manufacturing, manufacturers, drive, their, models, forecasting, tools, manage, end-to-end, templates, associated, manufacturing, API, version]
---

# MfgProgramTemplate

> Represents a definition of a program to create a
			program-based business. A program-based business, also known as a Manufacturing Program,
			enables manufacturers to drive their business models with forecasting tools and manage
			the end-to-end sales process efficiently.

# MfgProgramTemplate

Represents a definition of a program to create a program-based business. A program-based business, also known as a Manufacturing Program, enables manufacturers to drive their business models with forecasting tools and manage the end-to-end sales process efficiently.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

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

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<MfgProgramTemplate xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
     <description>Program Template</description>
     <programTemplateItems>
         <templateItemName>Template Item #1</templateItemName>
         <transformationDisplayOrder>1</transformationDisplayOrder>
         <transformationType>BusinessTransformation</transformationType>
         <description>Program Template Item</description>
     </programTemplateItems>
     <programTemplateName>Sample Program Template</programTemplateName>
     <status>Draft</status>
</MfgProgramTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
     <types>
         <members>*</members>
         <name>MfgProgramTemplate</name>
     </types>
     <version>54.0</version>
</Package>
```

## Related Topics

- MfgProgramTemplateFeed (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_feed.htm)
- MfgProgramTemplateHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
- MfgProgramTemplateOwnerSharingRule (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_ownersharingrule.htm)
- MfgProgramTemplateShare (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_share.htm)
