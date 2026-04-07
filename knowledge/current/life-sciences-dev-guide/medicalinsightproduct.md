---
title: "MedicalInsightProduct"
domain: life-sciences-dev-guide
topic: medicalinsightproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:11.099Z
estimatedTokens: 394
keywords: [MedicalInsightProduct, product, medical, insight, Calls]
---

# MedicalInsightProduct

> Represents the product related to the medical insight.

# MedicalInsightProduct

Represents the product related to the medical insight.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe brand name of the product. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MedicalInsightId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe medical insight associated with the product.This field is a relationship field.Relationship NameMedicalInsightRelationship TypeMaster-detailRefers ToMedicalInsight (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the medical insight product record. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product or life sciences marketable product associated with the medical insight.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
