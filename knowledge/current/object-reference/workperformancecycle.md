---
title: "WorkPerformanceCycle"
domain: object-reference
topic: workperformancecycle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.784Z
estimatedTokens: 1002
keywords: [WorkPerformanceCycle, feedback, gathered, assess, performance, specific, employees, Calls, Associated, Objects]
---

# WorkPerformanceCycle

> Represents feedback that is gathered to assess the performance of a
			specific set of employees.

# WorkPerformanceCycle

Represents feedback that is gathered to assess the performance of a specific set of employees.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActivityFrom | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date that you want to start filtering the WDC objects to help requesters create accurate summaries. The start of the evaluation period. |
| ActivityTo | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date that you want to stop filtering the WDC objects to help requesters create accurate summaries. The end of the evaluation period. |
| CurrentTask | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe current task that the performance summary cycle is engaged in, including deploying and sharing. |
| LastManagerRequestsSharedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when all manager requests are set to be shared. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this WorkPerformanceCycle. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this WorkPerformanceCycle. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the performance summary cycle that employees will participate in. This name is created by the administrator and is visible on all respective notifications and in the UI. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the WorkPerformanceCycle. |
| State | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe state that the performance summary cycle is in. Available pick list values:Setup: The summary is in draft.In Progress: The summary is deployed and people are answering the questions that were created.Finished: The summary is no longer in progress.Error: The summary encountered an error. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkPerformanceCycleFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkPerformanceCycleHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WorkPerformanceCycleOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkPerformanceCycleShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkPerformanceCycleFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkPerformanceCycleHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkPerformanceCycleOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkPerformanceCycleShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
