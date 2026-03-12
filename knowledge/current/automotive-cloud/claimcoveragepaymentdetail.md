---
title: "ClaimCoveragePaymentDetail"
domain: automotive-cloud
topic: claimcoveragepaymentdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.124Z
estimatedTokens: 1368
keywords: [ClaimCoveragePaymentDetail, claim, coverage, amount, paid, claimant, part, replaced, labor, service, performed, rectify, causal, defective, asset]
---

# ClaimCoveragePaymentDetail

> Represents the claim coverage amount that must be paid to a claimant for a
         part replaced or replaced or a labor service performed to rectify a causal part in a
         defective asset. This object is available in API version 58.0 and later.

# ClaimCoveragePaymentDetail

Represents the claim coverage amount that must be paid to a claimant for a part replaced or replaced or a labor service performed to rectify a causal part in a defective asset. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActualExpense | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual expense of the part replacement or labor service. |
| AdjustedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the manufacturer intends to pay to the claimant for the repair, replacement, or labor service to rectify a causal part. |
| ChargeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of charge.Possible values are:LaborOtherReplaced PartThe default value is Replaced Part. |
| ChargeTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code that identifies the labor charge or expense.This field is a relationship field.Relationship NameChargeTypeCodeRelationship TypeLookupRefers ToCodeSet |
| ClaimCoverageId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the claim coverage record associated with the Claim Coverage Payment Detail.This field is a relationship field.Relationship NameClaimCoverageRelationship TypeLookupRefers ToClaimCoverage |
| ClaimedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount claimed by the claimant as a part of the claim coverage payment detail. |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comments made by the warranty claims adjudicator while adjudicating the claim coverage payment detail. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the claim coverage payment detail. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the claim coverage payment detail. |
| PriceBookEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe entry of the product related to the replacement part in the price book.This field is a relationship field.Relationship NamePriceBookEntryRelationship TypeLookupRefers ToPricebookEntry |
| ProductRelatedMaterialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product related material record that defines the association between the replacement part and the product associated with the claim.This field is a relationship field.Relationship NameProductRelatedMaterialRelationship TypeLookupRefers ToProductRelatedMaterial |
| Quantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quantity of parts replaced or the number of labor hours. |
| ReplacementPartId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product part that's a replacement for the defective part.This field is a relationship field.Relationship NameReplacementPartRelationship TypeLookupRefers ToProduct2 |
| ReturnOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the return order related to the claim coverage payment detail.This field is a relationship field.Relationship NameReturnOrderRelationship TypeLookupRefers ToReturnOrder |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the return order line item related to the claim coverage payment detail.This field is a relationship field.Relationship NameReturnOrderLineItemRelationship TypeLookupRefers ToReturnOrderLineItem |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of claim coverage payment detail.Possible values are:ApprovedNoneRejected |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimCoveragePaymentDetailChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ClaimCoveragePaymentDetailFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ClaimCoveragePaymentDetailHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
