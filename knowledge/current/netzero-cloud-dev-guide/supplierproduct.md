---
title: "SupplierProduct"
domain: netzero-cloud-dev-guide
topic: supplierproduct
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:00.171Z
estimatedTokens: 1062
keywords: [SupplierProduct, that's, track, products, purchased, supplier, API, version, 56.0, later, Calls, Associated, Objects]
---

# SupplierProduct

> Represents information that's used to track the products that are purchased
         from a supplier. This object is available in API version 56.0 and later.

# SupplierProduct

Represents information that's used to track the products that are purchased from a supplier. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the product attribute becomes inactive. |
| AttributeStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the product attribute becomes active. |
| DefaultProductEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default emissions factor associated with this product that's purchased from the supplier.This field is a relationship field.Relationship NameDefaultProductEmssnFctrRelationship TypeLookupRefers ToProductEmissionsFactor |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is currently active or inactive.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this supplier product data. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that the organization is purchasing from the associated supplier.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| SourcingAllocPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sourcing allocation percentage of a supplier towards the total quantity that's purchased by an organization. |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier that's associated with the sale of this product.This field is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| SupplierRank | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rank given to the supplier that helps an organization determine when to engage a supplier to make a purchase. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SupplierProductFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SupplierProductHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SupplierProductShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SupplierProductFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- SupplierProductHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- SupplierProductShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
