---
title: "StageTransitionEntry"
domain: financial-services-cloud-object-reference
topic: stagetransitionentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.646Z
estimatedTokens: 621
keywords: [StageTransitionEntry, runtime, instance, stage, transition, API, version, 60.0, later, Calls]
---

# StageTransitionEntry

> Represents the information about the runtime instance of the object stage
         transition. This object is available in API version 60.0 and later.

# StageTransitionEntry

Represents the information about the runtime instance of the object stage transition. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FromStageValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the value of object state before the transition.This field is a relationship field.Relationship NameFromStageValueRefers ToStageValue |
| FulfillmentPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the plan for object stage transition.This field is a relationship field.Relationship NameFulfillmentPlanRefers ToFulfillmentPlan |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the stage transition entry record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceRecord | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe record ID of the associated stage transition. |
| StageTransitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe object state transition associated with the object state transition instance.This field is a relationship field.Relationship NameStageTransitionRefers ToStageTransition |
| StageTransitionPlanStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe transition plan status.Possible values are:CompletedInProgress—In ProgressNew |
| ToStageValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the value of object state after the transition.This field is a relationship field.Relationship NameToStageValueRefers ToStageValue |
