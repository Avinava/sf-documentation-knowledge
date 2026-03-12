---
title: "CareProgramSiteContract"
domain: life-sciences-dev-guide
topic: careprogramsitecontract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.457Z
estimatedTokens: 448
keywords: [CareProgramSiteContract, association, care, program, site, contract, API, version, 62.0, later, Calls]
---

# CareProgramSiteContract

> Represents the association of a care program site and a contract. This
      object is available in API version 62.0 and later.

# CareProgramSiteContract

Represents the association of a care program site and a contract. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramSiteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent care program site associated with the record that the sponsor intends to engage through a contract.This field is a relationship field.Relationship NameCareProgramSiteRelationship TypeMaster-detailRefers ToCareProgramSite |
| ContractId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contract associated with the record between the sponsor and the care program site.This field is a relationship field.Relationship NameContractRefers ToContract |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care program site contract. |
