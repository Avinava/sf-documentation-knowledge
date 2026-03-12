---
title: "SustainabilityTask"
domain: netzero-cloud-dev-guide
topic: sustainabilitytask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.234Z
estimatedTokens: 715
keywords: [SustainabilityTask, tasks, sustainability, stakeholder, task, group, API, version, 64.0, later, Calls, Associated, Objects]
---

# SustainabilityTask

> Represents the tasks that the sustainability stakeholder does for a
         sustainability task group. This object is available in API version 64.0 and later.

# SustainabilityTask

Represents the tasks that the sustainability stakeholder does for a sustainability task group. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SustainabilityTaskGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sustainability task group that's related to the sustainability task.This field is a relationship field.Relationship NameSustainabilityTaskGroupRefers ToSustainabilityTaskGroup |
| TaskId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe task that's related to the sustainability task.This field is a relationship field.Relationship NameTaskRefers ToTask |
| TaskStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe status of the task related to the sustainability task.Possible values are:CompletedDeferredIn ProgressNot StartedWaiting on someone elseThe default value is Not Started. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SustainabilityTaskHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SustainabilityTaskShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SustainabilityTaskHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- SustainabilityTaskShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
