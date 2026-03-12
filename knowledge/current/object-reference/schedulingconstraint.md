---
title: "SchedulingConstraint"
domain: object-reference
topic: schedulingconstraint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.607Z
estimatedTokens: 911
keywords: [SchedulingConstraint, scheduling, constraints, service, resource, API, version, 50.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# SchedulingConstraint

> Represents scheduling constraints on each service resource. This object
      is available in API version 50.0 and later.

# SchedulingConstraint

Represents scheduling constraints on each service resource. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

The org requires the Workforce Engagement license. To view records, the user requires the Workforce Engagement Agent permission set. To create, edit, or delete records, the user requires the Workforce Engagement Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the scheduling constraint was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the scheduling constraint was last viewed. |
| MaxNonstandardShiftsPerMonth | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of non-standard shifts assigned to an agent in a month.This field is available in API version 54.0 and later. |
| MaxShiftsPerDay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of shifts an agent can have in a day. |
| MaxShiftsPerMonth | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of shifts an agent can have in a month. |
| MaxShiftsPerWeek | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of shifts an agent can have in a week. |
| MaxWorkingHoursPerDay | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum number of hours an agent can have in a day. |
| MaxWorkingHoursPerMonth | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum number of hours an agent can have in a month. |
| MaxWorkingHoursPerWeek | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum number of hours an agent can have in a week. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe scheduling constraint record name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the scheduling constraint.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RestTimeMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum rest time, in minutes, between an agent’s consecutive shifts.This field is available in API versions 56.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SchedulingConstraintOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SchedulingConstraintShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SchedulingConstraintOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SchedulingConstraintShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
