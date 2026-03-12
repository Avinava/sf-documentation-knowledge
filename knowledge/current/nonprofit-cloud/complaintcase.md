---
title: "ComplaintCase"
domain: nonprofit-cloud
topic: complaintcase
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.272Z
estimatedTokens: 458
keywords: [ComplaintCase, association, complaint, corresponding, case, API, version, 52.0, later, Calls]
---

# ComplaintCase

> Represents the association between a public complaint and its corresponding case. This object is available in API version 52.0 and later.

# ComplaintCase

Represents the association between a public complaint and its corresponding case. This object is available in API version 52.0 and later.

When a public complaint is raised on the portal, multiple department could be involved and each department can create a case record to track how the complaint is handled. For example, a hazardous chemical complaint can be handled by both the environmental agency and the fire department.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the case that is associated with the complaint.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the complaint being raised. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the complaint case record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PublicComplaintId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the public complaint that is associated to the complaint being raised.This is a relationship field.Relationship NamePublicComplaintRelationship TypeLookupRefers ToPublicComplaint |
