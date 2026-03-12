---
title: "RebatePartnerSpecialPrcTrm"
domain: channel-revenue-management-dev-guide
topic: rebatepartnerspecialprctrm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.686Z
estimatedTokens: 938
keywords: [RebatePartnerSpecialPrcTrm, special, pricing, term, ship, debit, program, API, version, 58.0, later, Calls]
---

# RebatePartnerSpecialPrcTrm

> Represents information about the special pricing term for a ship and
         debit program. This object is available in API version 58.0 and later.

# RebatePartnerSpecialPrcTrm

Represents information about the special pricing term for a ship and debit program. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code associated with the record. This is available when multiple currencies are enabled.Possible values are:EUR—EuroUSD—U.S. DollarThe default value is EUR. |
| Discount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe agreed discount for a product unit between the manufacturer and the distributor as part of the special pricing terms for a ship and debit program. Between ReferencePricePerUnit and Discount, only one field can be added or used. |
| IsDiscountByPercent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the discount is given by percentage (true) or amount (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user-defined name of the rebate partner special pricing term. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the rebate partner special pricing term.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the rebate partner special pricing term.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProductQtyUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure associated with the product quantity.This field is a relationship field.Relationship NameProductQtyUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
| ProductQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe threshold quantity for a product agreed between the manufacturer and the distributor as part of the special pricing terms for a ship and debit program. |
| RebateProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe rebate program member associated with the rebate partner special pricing term.This field is a relationship field.Relationship NameRebateProgramMemberRelationship TypeLookupRefers ToRebateProgramMember |
| ReferencePricePerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of a product unit that’s agreed upon between the manufacturer and the distributor as part of the special pricing term. Between ReferencePricePerUnit and Discount, only one field can be added or used. |
| SalePricePerUnit | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe actual price of each unit of the product that's sold to the partner by the manufacturer. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the rebate partner special pricing term.Possible values are:ActiveDraftInactiveThe default value is Draft. |
