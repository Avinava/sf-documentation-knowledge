---
title: "LoyaltyTierEligibilitySrc"
domain: loyalty
topic: loyaltytiereligibilitysrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.106Z
estimatedTokens: 362
keywords: [LoyaltyTierEligibilitySrc, customer, groups, eligible, club, membership, API, version, 64.0, later, Calls]
---

# LoyaltyTierEligibilitySrc

> Represents the customer groups that are eligible for club membership. 
      This object is available in API version 64.0 and later.

# LoyaltyTierEligibilitySrc

Represents the customer groups that are eligible for club membership. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyTierId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent loyalty tier for which eligibility source is associated with.This field is a relationship field.Relationship NameLoyaltyTierRelationship TypeMaster-detailRefers ToLoyaltyTier (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the loyalty tier. |
| SourceReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the source for determining club enrollment eligibility. For example, if a customer is part of a specific campaign, they are eligible for club membership.This field is a polymorphic relationship field.Relationship NameSourceReferenceRefers ToActionableList, LoyaltyTier |
