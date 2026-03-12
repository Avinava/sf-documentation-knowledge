---
title: "CaseProceedingInfraction"
domain: psc-api
topic: caseproceedinginfraction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.446Z
estimatedTokens: 536
keywords: [CaseProceedingInfraction, association, infraction, corresponding, case, proceeding, API, version, 58.0, later]
---

# CaseProceedingInfraction

> Represents the association between an infraction and its corresponding case
         proceeding. This object is available in API version 58.0 and later.

# CaseProceedingInfraction

Represents the association between an infraction and its corresponding case proceeding. This object is available in API version 58.0 and later.

## Fields

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Field | Details |
| --- | --- |
| CaseProceedingId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe case proceeding associated with the case proceeding infraction record.This field is a relationship field.Relationship NameCaseProceedingRelationship TypeMaster-detailRefers ToCaseProceeding |
| InfractionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe infraction associated with the case proceeding record.This field is a relationship field.Relationship NameInfractionRelationship TypeLookupRefers ToRegulatoryCodeViolation |
| InfractionReportingReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe conditions that caused the case proceeding infraction record. |
| InfractionReportingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe proofs that led to the case proceeding infraction record.Possible values are:ExhibitPiece of EvidenceProofToken |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the case proceeding infraction record. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the case proceeding infraction record.Possible values are:DisqualifiedQualified |
