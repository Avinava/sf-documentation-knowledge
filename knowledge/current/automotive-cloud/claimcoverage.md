---
title: "ClaimCoverage"
domain: automotive-cloud
topic: claimcoverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.113Z
estimatedTokens: 1455
keywords: [ClaimCoverage, causal, part, defective, asset, requires, repair, replacement, API, version, 58.0, later, Calls, Special, Access]
---

# ClaimCoverage

> Represents a causal part in a defective asset that requires repair or
         replacement. This object is available in API version 58.0 and later.

# ClaimCoverage

Represents a causal part in a defective asset that requires repair or replacement. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetWarrantyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset warranty ID of the defective asset in the associated claim item.This field is a relationship field.Relationship NameAssetWarrantyRelationship TypeLookupRefers ToAssetWarranty |
| CausalPartId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product part that causes the issues related to the claim.This field is a relationship field.Relationship NameCausalPartRelationship TypeLookupRefers ToProduct2 |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the claim record associated with this claim coverage.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| ClaimItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the claim item record associated with the claim coverage.This field is a relationship field.Relationship NameClaimItemRelationship TypeLookupRefers ToClaimItem |
| ClaimParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the claim participant record associated with this claim coverage.This field is a relationship field.Relationship NameClaimParticipantRelationship TypeLookupRefers ToClaimParticipant |
| CoverageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of claim coverage.Possible values are:Extended WarrantyNoneStandard Warranty |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the coverage for the claim. |
| ExtlWorkOrderReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier of the work order. |
| FaultCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code ID that uniquely identifies the fault caused by the part.This field is a relationship field.Relationship NameFaultCodeRelationship TypeLookupRefers ToCodeSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the claim coverage. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductRelatedMaterialId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Product Related Material record that defines the association between the causal part and the product associated with the claim.This field is a relationship field.Relationship NameProductRelatedMaterialRelationship TypeLookupRefers ToProductRelatedMaterial |
| RelatedClaimCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim coverage against which the supplier recovery claim is created.This field is a relationship field.Relationship NameRelatedClaimCoverageRelationship TypeLookupRefers ToClaimCoverage |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of a claim coverage.Possible values are:ApprovedClosedOpenRejected |
| TotalAdjustedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount that's adjusted in a claim.This field is a calculated field. |
| TotalClaimedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount being claimed.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimCoverageChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ClaimCoverageFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ClaimCoverageHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ClaimCoverageOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ClaimCoverageShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
