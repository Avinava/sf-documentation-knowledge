---
title: "RebateClaimAdjustment"
domain: channel-revenue-management-dev-guide
topic: rebateclaimadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.650Z
estimatedTokens: 506
keywords: [RebateClaimAdjustment, adjustments, made, rebate, claim, API, version, 58.0, later, Calls]
---

# RebateClaimAdjustment

> Represents information about the adjustments made to the rebate
         claim. This object is available in API version 58.0 and later.

# RebateClaimAdjustment

Represents information about the adjustments made to the rebate claim. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe adjustment amount for the rebate claim. |
| ApprovedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the rebate claim adjustment was approved. |
| Comments | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe details about the adjustment made to the rebate claim. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code associated with the record. This is available when multiple currencies are enabled.Possible values are:EUR—EuroUSD—U.S. DollarThe default value is EUR. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the rebate claim adjustment. |
| RebateClaimId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe rebate claim record to which the adjustment was made.This field is a relationship field.Relationship NameRebateClaimRelationship TypeLookupRefers ToRebateClaim |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the adjustment made to the rebate claim.Possible values are:ApprovedInReview—Under ReviewRejectedThe default value is InReview. |
