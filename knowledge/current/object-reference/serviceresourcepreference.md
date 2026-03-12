---
title: "ServiceResourcePreference"
domain: object-reference
topic: serviceresourcepreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.923Z
estimatedTokens: 546
keywords: [ServiceResourcePreference, service, resource, scheduling, preferences, considered, business, objective, logic, engine, API, version, 52.0, later, Calls]
---

# ServiceResourcePreference

> Represents the service resource scheduling preferences that are considered as
         a business objective in the scheduling logic engine. This object is available in API
      version 52.0 and later.

# ServiceResourcePreference

Represents the service resource scheduling preferences that are considered as a business objective in the scheduling logic engine. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license. To view, create, edit, and delete records, the user must have the Workforce Engagement Agent or Workforce Engagement Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date period that this preference is effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service resource preference was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the service resource preference was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe service resource preference record name. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe operating hours associated with the service resource preference.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the service resource preference.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource associated with the service resource preference.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date period that this preference is effective. |
