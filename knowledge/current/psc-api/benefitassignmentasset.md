---
title: "BenefitAssignmentAsset"
domain: psc-api
topic: benefitassignmentasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.143Z
estimatedTokens: 767
keywords: [BenefitAssignmentAsset, junction, asset, benefit, assignment, API, version, 65.0, later, Calls, Associated, Objects]
---

# BenefitAssignmentAsset

> Represents a junction between an asset and a benefit assignment. This
      object is available in API version 65.0 and later.

# BenefitAssignmentAsset

Represents a junction between an asset and a benefit assignment. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe asset related to the benefit assignment asset.This field is a relationship field.Relationship NameAssetRefers ToAsset |
| BenefitAssignmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe benefit assignment related to the benefit assignment asset.This field is a relationship field.Relationship NameBenefitAssignmentRelationship TypeMaster-detailRefers ToBenefitAssignment (the master object) |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until which the asset is assigned to the benefit. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the asset is assigned to the benefit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the benefit assignment asset. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitAssignmentAssetChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BenefitAssignmentAssetHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BenefitAssignmentAssetChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- BenefitAssignmentAssetHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
