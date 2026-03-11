---
title: "EnblProgramTaskSubCategory"
domain: metadata-api
topic: enblprogramtasksubcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.265Z
keywords: [EnblProgramTaskSubCategory, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# EnblProgramTaskSubCategory

# EnblProgramTaskSubCategory

Represents a custom exercise type that an Enablement admin adds to an Enablement program in Program Builder. A custom exercise type also requires a corresponding EnblProgramTaskDefinition record for Program Builder and corresponding LearningItem and LearningItemType records for when users take the exercise in the Guidance Center.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

EnblProgramTaskSubCategory components have the suffix .enblProgramTaskSubCategory and are stored in the enblProgramTaskSubCategories folder.

## Version

EnblProgramTaskSubCategory components are available in API version 62.0 and later.

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Custom exercises aren’t compatible with Partner Enablement programs.

## Fields

| Field Name | Description |
| --- | --- |
| developerName | Field TypestringDescriptionRequired. The unique programmatic name for the EnblProgramTaskSubCategory record. |
| icon | Field TypestringDescriptionRequired. The icon to use for the custom exercise type in Program Builder.Use the format iconType:iconName, where the values correspond to icon categories and names from the Salesforce Lightning Design System.iconType is the type of icon, such as standard or doctype.iconName is the icon name, such as flow or slide.For example, to use the Standard type Flow icon, this value is standard:flow. For details, see Implement Custom Exercise Types for Enablement Programs in the Sales Programs and Partner Tracks with Enablement Developer Guide. |
| learningItemType | Field TypestringDescriptionRequired. The programmatic name of the LearningItemType record that represents this custom exercise type in the Guidance Center when users take a program. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for the EnblProgramTaskSubCategory, which is defined when it’s created. |

## Declarative Metadata Sample Definition

The following is an example of an EnblProgramTaskSubCategory component for a custom exercise type that shows a screen flow.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").