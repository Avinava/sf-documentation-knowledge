---
title: "CarePlanTemplate"
domain: psc-api
topic: careplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.379Z
estimatedTokens: 352
keywords: [CarePlanTemplate, template, care, plan, offered, household, scenario, API, version, 55.0, later, Calls]
---

# CarePlanTemplate

> Represents the template for a type of care plan that can be offered for a
         household scenario.  This object is available in API version 55.0 and later.

# CarePlanTemplate

Represents the template for a type of care plan that can be offered for a household scenario. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the care plan template record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the care plan template record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the care plan template record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the care plan template.Possible values are:DraftInactivePublishedThe default value is 'Draft'. |
