---
title: "LearningItemProgress"
domain: object-reference
topic: learningitemprogress
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.700Z
estimatedTokens: 1114
keywords: [LearningItemProgress, progress, user, made, towards, completing, assigned, learning, item, Paths, entry, Enablement, program, API, version]
---

# LearningItemProgress

> Represents the progress that a user has made towards completing an
         assigned learning item, such as a Learning Paths entry or Enablement program. This
      object is available in API version 60.0 and later.

# LearningItemProgress

Represents the progress that a user has made towards completing an assigned learning item, such as a Learning Paths entry or Enablement program. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.
-   For partner users who take Partner Enablement programs, the Take Partner Enablement Programs permission is required. This permission is enabled by default as part of the Use Partner Enablement Programs permission set, which comes with the Enablement add-on license. Partner Enablement also requires a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CompletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the user completed the learning item. |
| CompletedOnDay | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of days that the user took to complete the learning item. |
| CompletedPercent | TypepercentPropertiesFilter, SortDescriptionPercentage of the learning item that’s complete. |
| DaysInProgress | TypeintPropertiesNillableDescriptionNumber of days that have elapsed since the learning item was assigned. |
| LearningItemId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the learning item. This field is a relationship field.Relationship NameLearningItemRelationship TypeLookupRefers ToLearningItem |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the owner of the learning item. This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ProgressStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionStatus of the learning item assignment. Possible values are:BehindCompletedCompletedLateCompletedOnTimeInProgressNoLongerTrackingNotStartedOnTrackOverdueFor details, see Completion Statuses in Enablement Analytics. |
| StartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when a user starts a Trailhead exercise in a sales program. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningItemProgressChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[LearningItemProgressOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LearningItemProgressShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LearningItemProgressChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- LearningItemProgressOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LearningItemProgressShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
