---
title: "ProductServiceCampaignItem"
domain: mfg-api-devguide
topic: productservicecampaignitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.066Z
estimatedTokens: 818
keywords: [ProductServiceCampaignItem, item, asset, serialized, product, that’s, included, service, campaign, API, version, 61.0, later, Calls]
---

# ProductServiceCampaignItem

> Represents an item, such as an asset or a serialized product, that’s included
         in a product service campaign. This object is available in API version 61.0 and later.

# ProductServiceCampaignItem

Represents an item, such as an asset or a serialized product, that’s included in a product service campaign. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableListMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actionable list member that’s associated with an asset in a product service campaign.This field is a relationship field.Relationship NameActionableListMemberRelationship TypeLookupRefers ToActionableListMember |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset associated with the product service campaign item.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| GeneratedTargetRecordType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of the target records that are generated for the product service campaign item.Possible values are:NoneWorkOrder—Work OrderThe default value is None. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the product service campaign item.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductServiceCampaignId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product service campaign that includes the product service campaign item.This field is a relationship field.Relationship NameProductServiceCampaignRelationship TypeMaster-detailRefers ToProductServiceCampaign (the master object) |
| ProductServiceCampaignItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique identifier of the product service campaign item. |
| SerializedProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe serialized product associated with the product service campaign item.This field is a relationship field.Relationship NameSerializedProductRelationship TypeLookupRefers ToSerializedProduct |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status of the product service campaign item. |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category for a status value.Possible values are:CanceledCannotComplete—Cannot CompleteClosedCompletedInProgress—In ProgressNewNoneOnHold—On HoldThe default value is None. |
