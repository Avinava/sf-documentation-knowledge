---
title: "FulfillmentAssetRelationship"
domain: revenue-cloud
topic: fulfillmentassetrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.393Z
estimatedTokens: 515
keywords: [FulfillmentAssetRelationship, relationship, two, fulfillment, assets, API, version, 61.0, later, Calls]
---

# FulfillmentAssetRelationship

> Represents a relationship between two fulfillment assets. This
      object is available in API version 61.0 and later.

# FulfillmentAssetRelationship

Represents a relationship between two fulfillment assets. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssociatedFulfillAssetRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role of the associated fulfillment asset.Valid values are:BundleComponentClassificationComponent—Product Classification Component |
| AssociatedFulfillmentAssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the associated fulfillment asset.This field is a relationship field.Relationship NameAssociatedFulfillmentAssetRefers ToFulfillmentAsset |
| MainFulfillmentAssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe name of the primary fulfillment asset.This field is a relationship field.Relationship NameMainFulfillmentAssetRelationship TypeMaster-detailRefers ToFulfillmentAsset (the master object) |
| MainFulfillmentAssetRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role of the primary fulfillment asset.Valid value is Bundle Parent. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the fulfillment asset relationship. |
| ProductRelationshipTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of relationship between two assets.This field is a relationship field.Relationship NameProductRelationshipTypeRefers ToProductRelationshipType |
