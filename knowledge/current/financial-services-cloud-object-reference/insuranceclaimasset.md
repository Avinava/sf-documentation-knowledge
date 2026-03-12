---
title: "InsuranceClaimAsset"
domain: financial-services-cloud-object-reference
topic: insuranceclaimasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.632Z
estimatedTokens: 626
keywords: [InsuranceClaimAsset, junction, associates, Claim, InsurancePolicyAsset, enabled, Many-to-Many, Relationships, org, pref, Calls, Associated, Objects]
---

# InsuranceClaimAsset

> A junction object that associates the Claim object with the
			InsurancePolicyAsset object. You see this object only if you have enabled the Use
			Many-to-Many Relationships org pref.

# InsuranceClaimAsset

A junction object that associates the Claim object with the InsurancePolicyAsset object. You see this object only if you have enabled the Use Many-to-Many Relationships org pref.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the originating claim. |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the asset associated with this claim. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number assigned to this record. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[InsuranceClaimAssetFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsuranceClaimAssetHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsuranceClaimAssetFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InsuranceClaimAssetHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
