---
title: "LoyaltyPgmCurrencySubtype"
domain: loyalty
topic: loyaltypgmcurrencysubtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.114Z
estimatedTokens: 538
keywords: [LoyaltyPgmCurrencySubtype, subtype, fixed-model, non-qualifying, loyalty, program, currency, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# LoyaltyPgmCurrencySubtype

> Represents a subtype of a fixed-model non-qualifying loyalty program
         currency. This object is available in API version 61.0 and later.

# LoyaltyPgmCurrencySubtype

Represents a subtype of a fixed-model non-qualifying loyalty program currency. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Loyalty Management - Advanced license is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| CostPerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMonetary value of each unit of the loyalty program currency subtype. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the loyalty program currency subtype. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the loyalty program currency subtype is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| LoyaltyProgramCurrencyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The fixed-model non-qualifying loyalty program currency associated with the loyalty program currency subtype.This field is a relationship field.Relationship NameLoyaltyProgramCurrencyRelationship TypeMaster-detailRefers ToLoyaltyProgramCurrency (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the loyalty program currency subtype. |
| UsagePriorityNumber | TypeintPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The usage priority number of the loyalty program currency subtype. The usage priority number decides the order in which the points are redeemed across currency subtypes when multiple currency subtypes expire on the same date. |
