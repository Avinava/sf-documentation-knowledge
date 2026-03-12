---
title: "LearningItemAssignment"
domain: object-reference
topic: learningitemassignment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.693Z
estimatedTokens: 1135
keywords: [LearningItemAssignment, assignment, Learning, Paths, entry, users, groups, enrollment, Enablement, program, specific, user, API, version, 58.0]
---

# LearningItemAssignment

> Represents the assignment of a Learning Paths entry to users or
         groups or the enrollment of an Enablement program for a specific user. This object is
      available in API version 58.0 and later.

# LearningItemAssignment

Represents the assignment of a Learning Paths entry to users or groups or the enrollment of an Enablement program for a specific user. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.
-   For partner users who take Partner Enablement programs, the Take Partner Enablement Programs permission is required. This permission is enabled by default as part of the Use Partner Enablement Programs permission set, which comes with the Enablement add-on license. Partner Enablement also requires a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user or group assigned to the learning item. This field is a relationship field.Relationship NameAssigneeRelationship TypeLookupRefers ToUser |
| AssignmentStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of assigning an Enablement program to a user. Possible values are:FailedInProgressSucceeded |
| DueDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date that the assignment is due for the user or group. |
| EnrollmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of enrollment for a user in an Enablement program. Possible values are:AssignedSelfEnrolled |
| IsOverdue | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the assigned learning item is overdue (true) or not (false). The default value is false.This field is a calculated field. |
| LearningItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the learning item. This field is a relationship field.Relationship NameLearningItemRelationship TypeLookupRefers ToLearningItem |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionID of the user who assigned the learning item. This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of record that represents a user's progress towards completing an assigned learning item, such as a Learning Paths entry or sales program. This field is a relationship field.Relationship NameProgressRefers ToLearningItemProgress |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe date that the learning item was assigned to the user or group. |

## Usage

You can assign a learning item to a user programmatically by querying the program and user, and then inserting a record into LearningItemAssignment.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningItemAssignmentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 60.0)

Sharing rules are available for the object.

[LearningItemAssignmentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 60.0)

Sharing is available for the object.

## Related Topics

- LearningItemAssignmentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LearningItemAssignmentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
