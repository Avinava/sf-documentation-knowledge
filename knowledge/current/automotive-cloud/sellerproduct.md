---
title: "SellerProduct"
domain: automotive-cloud
topic: sellerproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.489Z
estimatedTokens: 626
keywords: [SellerProduct, products, associated, seller, insight, product, availability, production, seller's, role, sales, service, API, version, 65.0]
---

# SellerProduct

> Represents information about the products associated with a seller. Provides
         insight into product availability, production details, and the seller's role for the
         product, such as for sales or for service. This object is available in API version
      65.0 and later.

# SellerProduct

Represents information about the products associated with a seller. Provides insight into product availability, production details, and the seller's role for the product, such as for sales or for service. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account associated with the product.This field is a relationship field.Relationship NameAccountRelationship TypeMaster-detailRefers ToAccount (the master object) |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the seller stopped selling or servicing this product. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is still associated with the seller (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the account.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| SellerRole | TypemultipicklistPropertiesCreate, Filter, UpdateDescriptionThe role of the seller related to the product, such as for sales or for service. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the seller started selling or servicing this product. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SellerProductHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
