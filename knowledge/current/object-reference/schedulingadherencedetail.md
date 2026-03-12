---
title: "SchedulingAdherenceDetail"
domain: object-reference
topic: schedulingadherencedetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.589Z
estimatedTokens: 464
keywords: [SchedulingAdherenceDetail, breakdown, daily, shift, adherence, data, agent, status, API, version, 54.0, later, Calls, Special, Access]
---

# SchedulingAdherenceDetail

> Represents the breakdown of daily shift adherence data by agent status.
      This object is available in API version 54.0 and later.

# SchedulingAdherenceDetail

Represents the breakdown of daily shift adherence data by agent status. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org requires a Workforce Engagement license, and both Workforce Engagement and Omni-Channel must be enabled. The user requires the Workforce Engagement Planner or Workforce Engagement Admin permission set.

## Fields

| Field | Details |
| --- | --- |
| IsShrinkage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the linked status is considered as shrinkage time (true) or not (false). Shrinkage time is time, such as breaks, when an agent doesn’t receive work.The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA number that identifies this detail record. |
| SchedulingAdherenceSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Scheduling Adherence Summary.This is a relationship field.Relationship NameSchedulingAdherenceSummaryRelationship TypeLookupRefers ToSchedulingAdherenceSummary |
| StatusId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the agent status represented by this detail record.This is a relationship field.Relationship NameStatusRelationship TypeLookupRefers ToServicePresenceStatus |
| StatusName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the agent status represented by this detail record. |
| TotalStatusMinutes | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTotal minutes that the agent was present with this status. |
