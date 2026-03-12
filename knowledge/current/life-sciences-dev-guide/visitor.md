---
title: "Visitor"
domain: life-sciences-dev-guide
topic: visitor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.603Z
estimatedTokens: 327
keywords: [Visitor, sales, reps, performing, visits, Calls]
---

# Visitor

> Represents the sales reps performing visits.

# Visitor

Represents the sales reps performing visits.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLookup to the person assigned as the visitor.Such as the employee attending the visit with the field user.This field is a polymorphic relationship field.Relationship NameAssigneeRelationship TypeMaster-detailRefers ToContactUser |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the visitor. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLookup to the Visit record this visitor is associated with.This field is a relationship field.Relationship NameVisitRefers ToVisit |
