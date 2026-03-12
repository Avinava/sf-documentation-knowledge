---
title: "Claim"
domain: automotive-cloud
topic: claim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.100Z
estimatedTokens: 1364
keywords: [Claim, warranty, submitted, partner, manufacturer, supplier, recovery, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# Claim

> Represents a warranty Claim submitted by a partner to a manufacturer,
         or a supplier recovery claim submitted by the manufacturer to a supplier. This object
      is available in API version 58.0 and later.

# Claim

Represents a warranty Claim submitted by a partner to a manufacturer, or a supplier recovery claim submitted by the manufacturer to a supplier. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the claim.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ClaimReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for initiating the claim. |
| ClaimReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category to which the claim reason belongs.Possible values are:AccidentNatural Disaster |
| ClaimType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the claim.Possible values are:Pre Warranty AuthorizationWarranty ClaimThe default value is Warranty Claim. |
| ClaimTypeCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type code of the claim.Possible values are:PreWarrantyAuthorizationSupplierRecoveryClaimWarrantyClaimThe default value is Warranty Claim. |
| FinalizedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the claim was marked resolved, with claim status as approved or rejected. |
| FnolChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel through which the loss was reported.Possible values are:ChatbotMobilePhoneWeb |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the claim has been closed (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe claim number in the claims management system. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedClaimId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the claim related to this claim.This field is a relationship field.Relationship NameRelatedClaimRelationship TypeLookupRefers ToClaim |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe severity of the claim.Possible values are:HighLowMedium |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the claim.Possible values are:ApprovedDraftManual Review NeededRejectedRequested InformationSubmittedUnder ReviewThe default value is Draft. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the claim. |
| TotalAdjustedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe claim amount that was approved.This field is a calculated field. |
| TotalClaimedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount being claimed.This field is a calculated field. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe usage type of the Claims record.Possible values are:Automotive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ClaimFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ClaimHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ClaimOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ClaimShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
