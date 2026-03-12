---
title: "Workload"
domain: object-reference
topic: workload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.673Z
estimatedTokens: 753
keywords: [Workload, time, series, work, item, volume, average, handle, aggregation, forecasting, processes, API, version, 49.0, later]
---

# Workload

> Represents the time series for work item volume and average handle time from
         aggregation and forecasting processes. This object is available in API version 49.0
      and later.

# Workload

Represents the time series for work item volume and average handle time from aggregation and forecasting processes. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license. To view, create, edit, or delete records, the user must have the Workforce Engagement Analyst permission set.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional information about the workload |
| EndDateTime | TypedateTimePropertiesCreate, Filter, SortDescriptionThe end date and time of the time series represented by the Workload object. |
| IsOmni | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates that the workload is Omni-based.The default value is 'false'. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe workload name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the workload.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StartDateTime | TypedateTimePropertiesCreate, Filter, SortDescriptionThe start date and time of the time series represented by the Workload object. |
| TimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe time zone associated with the workload. Possible values are the time zones supported by Workforce Engagement.This field is available in API version 56.0 and later. |
| WorkloadType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the workload.Possible values are:F—ForecastedH—HistoricalIH—Intraday History. This value is available in API version 55.0 and later.The default value is 'H'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkloadOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkloadShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkloadOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkloadShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
