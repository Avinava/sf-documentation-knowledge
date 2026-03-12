---
title: "RebateMemberClaimAggregate"
domain: channel-revenue-management-dev-guide
topic: rebatememberclaimaggregate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.666Z
estimatedTokens: 628
keywords: [RebateMemberClaimAggregate, aggregated, claim, quantity, amount, rebate, member, per, product, API, version, 58.0, later, Calls]
---

# RebateMemberClaimAggregate

> Represents information about the aggregated claim quantity and amount
         for a rebate member per product. This object is available in API version 58.0 and
      later.

# RebateMemberClaimAggregate

Represents information about the aggregated claim quantity and amount for a rebate member per product. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code associated with the record. This is available when multiple currencies are enabled.Possible values are:EUR—EuroUSD—U.S. DollarThe default value is EUR. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name of the rebate member claim aggregate. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the rebate member claim aggregate record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PriceType | TypePicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update.DescriptionSpecifies the basis on which the product was sold in a rebate claim. Used to distinguish between standard and contract pricing strategies when calculating rebate eligibility. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product for which the rebate claim was made.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| RebateProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe rebate program member for whom the claim was made.This field is a relationship field.Relationship NameRebateProgramMemberRelationship TypeLookupRefers ToRebateProgramMember |
| TotalClaimedAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe total amount that's already claimed. |
| TotalClaimedQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe total product quantity that's already claimed. |
