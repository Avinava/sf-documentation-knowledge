---
title: "MedicalInsightAccount"
domain: life-sciences-dev-guide
topic: medicalinsightaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:00.875Z
estimatedTokens: 387
keywords: [MedicalInsightAccount, account, provided, medical, insight]
---

> Represents the account that provided the medical insight.

# MedicalInsightAccount

Represents the account that provided the medical insight.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the medical insight.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MedicalInsightId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe medical insight associated with the account.This field is a relationship field.Relationship NameMedicalInsightRelationship TypeMaster-detailRefers ToMedicalInsight (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the medical insight account record. |
| ReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for linking the account with the medical insight. |
