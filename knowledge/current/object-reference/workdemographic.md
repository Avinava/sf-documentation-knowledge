---
title: "WorkDemographic"
domain: object-reference
topic: workdemographic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.577Z
estimatedTokens: 475
keywords: [WorkDemographic, specify, slices, workload, forecasting, capacity, planning, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# WorkDemographic

> Represents the field values used to specify slices in the workload
         forecasting and capacity planning. This object is available in API version 49.0 and
      later.

# WorkDemographic

Represents the field values used to specify slices in the workload forecasting and capacity planning. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license. To view, create, edit, or delete records, the user must have the Workforce Engagement Analyst permission set.

## Fields

| Field | Details |
| --- | --- |
| Channel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe channel value. |
| CustomWorkType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCustom dimension value that the user can define other than the channel, region, and skill dimensions. |
| GroupIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe group or queue associated to a slice when creating an Omni-based workload. |
| JobProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe foreign key to the JobProfile object.This is a relationship field.Relationship NameJobProfileRelationship TypeLookupRefers ToJobProfile |
| Region | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe region value. |
| ServiceChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe foreign key to the ServiceChannel object.This is a relationship field.Relationship NameServiceChannelRelationship TypeLookupRefers ToServiceChannel |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe foreign key to the ServiceTerritory object.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| SkillSet | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe skill value. |
