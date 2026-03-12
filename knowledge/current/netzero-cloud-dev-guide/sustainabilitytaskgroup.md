---
title: "SustainabilityTaskGroup"
domain: netzero-cloud-dev-guide
topic: sustainabilitytaskgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.242Z
estimatedTokens: 866
keywords: [SustainabilityTaskGroup, group, sustainability, tasks, API, version, 64.0, later, Calls, Associated, Objects]
---

# SustainabilityTaskGroup

> Represents the group of sustainability tasks. This object is available
      in API version 64.0 and later.

# SustainabilityTaskGroup

Represents the group of sustainability tasks. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the sustainability task group. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Location | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location of the sustainability tasks in the sustainability task group. The location can include a city, county, state, province, country, or region. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the sustainability task group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PeriodEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the data collection, report review, or other sustainability activities being tracked. |
| PeriodStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the data collection, report review, or other sustainability activities being tracked. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the sustainability task group.Possible values are:Complete—CompletedInProgress—In ProgressThe default value is Complete. |
| TaskDueDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the stakeholder must complete the sustainability tasks. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of sustainability activity being tracked in the sustainability task group. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SustainabilityTaskGroupHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SustainabilityTaskGroupShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SustainabilityTaskGroupHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- SustainabilityTaskGroupShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
