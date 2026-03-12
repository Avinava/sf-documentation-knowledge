---
title: "CaseProceedingComplaint"
domain: psc-api
topic: caseproceedingcomplaint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.439Z
estimatedTokens: 310
keywords: [CaseProceedingComplaint, association, complaint, corresponding, case, proceeding, API, version, 58.0, later]
---

# CaseProceedingComplaint

> Represents the association between a complaint and its corresponding case
         proceeding. This object is available in API version 58.0 and later.

# CaseProceedingComplaint

Represents the association between a complaint and its corresponding case proceeding. This object is available in API version 58.0 and later.

## Fields

| Field | Details |
| --- | --- |
| CaseProceedingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case proceeding associated with the case proceeding complaint record.This field is a relationship field.Relationship NameCaseProceedingRelationship TypeLookupRefers ToCaseProceeding |
| ComplaintId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe complaint associated with the case proceeding record.This field is a relationship field.Relationship NameComplaintRelationship TypeLookupRefers ToPublicComplaint |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the case proceeding complaint record. |
