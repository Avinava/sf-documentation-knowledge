---
title: "UsageRatableSumCmtAssetRt"
domain: revenue-cloud
topic: usageratablesumcmtassetrt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.767Z
estimatedTokens: 698
keywords: [UsageRatableSumCmtAssetRt, Represents, rate, that’s, calculated, applicable, usage, resource, associated, commitment, assets, related, anchor., API, version, 65.0, later., Important, Supported, Calls]
---

# UsageRatableSumCmtAssetRt

> Represents the rate that’s calculated and applicable for the usage resource
         associated with the commitment assets related to an anchor. This object is available
      in API version 65.0 and later.

# UsageRatableSumCmtAssetRt

Represents the rate that’s calculated and applicable for the usage resource associated with the commitment assets related to an anchor. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| CommitmentAssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe asset ID associated with the Usage Ratable Summary.This field is a relationship field.Relationship NameCommitmentAssetRefers ToAsset |
| ErrorCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unique code generated when an error occurs.Valid value is INTERNAL_ERROR. |
| ErrorDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the description of the error that occurred. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the Usage Commitment Summary record. |
| NetUnitRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated per-unit rate for usage after applying commitment-specific discounts during the rating process. |
| UsageRatableSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe usage ratable summary associated with the usage commitment summary record.This field is a relationship field.Relationship NameUsageRatableSummaryRelationship TypeMaster-detailRefers ToUsageRatableSummary (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageRatableSumCmtAssetRtHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
