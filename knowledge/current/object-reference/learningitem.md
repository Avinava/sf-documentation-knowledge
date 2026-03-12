---
title: "LearningItem"
domain: object-reference
topic: learningitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.684Z
estimatedTokens: 1189
keywords: [LearningItem, item, requires, users, take, action, including, Learning, Paths, entry, Enablement, program, exercise, linked, content]
---

# LearningItem

> Represents an item that requires users to take action, including a
         Learning Paths entry, an Enablement program, or an exercise with linked content in an
         Enablement program. For Learning Paths, users are assigned a learning item to complete. For
         Enablement programs and exercises, users are assigned a program or can self-enroll in
         shared programs. This object is available in API version 58.0 and later.

# LearningItem

Represents an item that requires users to take action, including a Learning Paths entry, an Enablement program, or an exercise with linked content in an Enablement program. For Learning Paths, users are assigned a learning item to complete. For Enablement programs and exercises, users are assigned a program or can self-enroll in shared programs. This object is available in API version 58.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.
-   For partner users who take Partner Enablement programs, the Take Partner Enablement Programs permission is required. This permission is enabled by default as part of the Use Partner Enablement Programs permission set, which comes with the Enablement add-on license. Partner Enablement also requires a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CustomLearningItemTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of a learning item type record if this learning item represents a custom exercise type in an Enablement program. This field is required when the Type field’s value is CustomContent.This field is a relationship field.Available in API version 62.0 and later.Relationship NameCustomLearningItemTypeRelationship TypeLookupRefers ToLearningItemType |
| EnablementProgramId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of an Enablement program that contains the outcome, milestone, or exercise.This field is a relationship field.Relationship NameEnablementProgramRelationship TypeLookupRefers ToEnablementProgram |
| LearningContentId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record that represents a Trailhead module or video in a sales program exercise. This field is a relationship field.Relationship NameLearniningContentRefers ToLearningContent |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the owner of the program. This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StandardCustomContentMetadata | TypetextareaPropertiesNillableDescriptionReserved for future use. |
| StandardCustomLearningItemType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionReserved for future use. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of learning item. Possible values are:CustomContent—Custom exercise content in an Enablement program, such as a screen flow, content from external repositories, or other custom content sources. Available in API version 62.0 and later.EnablementProgramLearningContent—Trailhead moduleLearningLesson—Lesson exercise in an Enablement programLearningLink—Audio Recording, Document, Scheduled Event, or Other exercise in an Enablement programLearningPractice—Feedback Request exercise in an Enablement programStandardCustomContent—Standard Custom exercise content in an Enablement program. Reserved for future use. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningItemOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 60.0)

Sharing rules are available for the object.

[LearningItemShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 60.0)

Sharing is available for the object.

## Related Topics

- LearningItemOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LearningItemShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
