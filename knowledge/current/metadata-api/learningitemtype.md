---
title: "LearningItemType"
domain: metadata-api
topic: learningitemtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.288Z
keywords: [LearningItemType, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# LearningItemType

# LearningItemType

Represents a custom exercise type that an Enablement user takes in an Enablement program in the Guidance Center. A custom exercise type also requires a corresponding LearningItem record for the Guidance Center and corresponding EnblProgramTaskDefinition and EnblProgramTaskSubCategory records for when admins create a program in Program Builder.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

LearningItemType components have the suffix .learningItemType and are stored in the learningItemTypes folder.

## Version

LearningItemType components are available in API version 62.0 and later.

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Custom exercises aren’t compatible with Partner Enablement programs.

## Fields

| Field Name | Description |
| --- | --- |
| apexEvaluationHandler | Field TypestringDescriptionThe ID of the Apex class that specifies how progress and completion of the custom exercise is assessed when users take the program in the Guidance Center. |
| apexSerializerDeserializer | Field TypestringDescriptionThe ID of the Apex class that specifies how data related to the custom exercise type is retrieved and deployed with change sets or managed packages. |
| customField | Field TypestringDescriptionRequired. The programmatic name of a custom lookup field on the LearningItem object that references the custom object used with this custom exercise.For example, if a custom exercise type shows a screen flow, maybe the custom object’s name is ScreenFlow_Object__c and the custom field on LearningItem is named ScreenFlow_Field__c. For details, see Implement Custom Exercise Types for Enablement Programs in the Sales Programs and Partner Tracks with Enablement Developer Guide.This field is unique within your organization. |
| customObject | Field TypestringDescriptionRequired. The programmatic name of the custom object used with this custom exercise.For example, if a custom exercise type shows a screen flow, maybe the custom object’s name is ScreenFlow_Field__c. For details, see Implement Custom Exercise Types for Enablement Programs in the Sales Programs and Partner Tracks with Enablement Developer Guide.This field is unique within your organization. |
| developerName | Field TypestringDescriptionRequired. The unique programmatic name for the LearningItemType record. |
| icon | Field TypestringDescriptionRequired. The icon to use for the custom exercise type in the Guidance Center.Use the format iconType:iconName, where the values correspond to icon categories and names from the Salesforce Lightning Design System.iconType is the type of icon, such as standard or doctype.iconName is the icon name, such as flow or slide.For example, to use the Standard type Flow icon, this value is standard:flow. |
| lightningComponentDefinition | Field TypestringDescriptionRequired. The ID of the Lightning Web Component used to show the custom exercise’s content when a user opens the exercise in the Guidance Center.This field sets the value of the LightningComponentName field on the LearningItemType object. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for the LearningItemType, which is defined when it’s created. |

## Declarative Metadata Sample Definition

The following is an example of a LearningItemType component for a custom exercise type that shows a screen flow.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").