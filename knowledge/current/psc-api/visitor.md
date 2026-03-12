---
title: "Visitor"
domain: psc-api
topic: visitor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.619Z
estimatedTokens: 401
keywords: [Visitor, inspectors, performing, inspection, visits, API, version, 56.0, later, Calls]
---

# Visitor

> Represents the inspectors performing inspection visits. This object is
      available in API version 56.0 and later.

# Visitor

Represents the inspectors performing inspection visits. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLookup to the person assigned as the visitor.This field is a polymorphic relationship field.Relationship NameAssigneeRelationship TypeLookupRefers ToContact, User |
| IsPrimaryResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the visitor is the primary visitor for a visit.The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user is a required visitor for the visit.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the visitor. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLookup to the Visit record this visitor is associated with.This field is a relationship field.Relationship NameVisitRelationship TypeLookupRefers ToVisit |
