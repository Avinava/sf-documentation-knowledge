---
title: "CaseProceedingResult"
domain: psc-api
topic: caseproceedingresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.462Z
estimatedTokens: 310
keywords: [CaseProceedingResult, outcome, legal, case, participant, API, version, 58.0, later]
---

# CaseProceedingResult

> Represents the outcome of a legal case for a participant.  This object
      is available in API version 58.0 and later.

# CaseProceedingResult

Represents the outcome of a legal case for a participant. This object is available in API version 58.0 and later.

## Fields

| Field | Details |
| --- | --- |
| CaseProceedingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case proceeding associated with the case proceeding result record.This field is a relationship field.Relationship NameCaseProceedingRelationship TypeLookupRefers ToCaseProceeding |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the case proceeding result record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescription |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:ConfirmedTemporary |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:Care PlanEnforcement ActionEpisode |
