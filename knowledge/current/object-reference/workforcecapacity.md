---
title: "WorkforceCapacity"
domain: object-reference
topic: workforcecapacity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.615Z
estimatedTokens: 837
keywords: [WorkforceCapacity, time, series, actual, forecasted, workforce, allocation, API, version, 51.0, later, Calls, Special, Access, Rules]
---

# WorkforceCapacity

> Represents the time series for actual or forecasted workforce
         allocation. This object is available in API version 51.0 and later.

# WorkforceCapacity

Represents the time series for actual or forecasted workforce allocation. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license. To view, create, edit, and delete records, the user must have the Workforce Engagement Analyst permission set.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional information about the planning. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe end date and time of the planning. |
| IsOmni | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDerived from isOmni field on Workload object. Indicates that the workload is Omni-based. If workload is null, the field value defaults to false.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PlanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of capacity plan. Possible values are:Intraday—The plan shows intraday management.LongTerm—The plan predicts the required number of full-time employees (FTEs).ShortTerm—The plan predicts the required number of shifts.This field is available in API version 54.0 and later. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date and time of the planning. |
| TimeZone | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe time zone associated with the capacity plan. Possible values are the time zones supported by Workforce Engagement.This field is available in API version 56.0 and later. |
| WorkloadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe foreign key to the Workload object.This is a relationship field.Relationship NameWorkloadRelationship TypeLookupRefers ToWorkload |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkforceCapacityOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkforceCapacityShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkforceCapacityOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkforceCapacityShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
