---
title: "LoyaltyPartnerProduct"
domain: loyalty
topic: loyaltypartnerproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.109Z
estimatedTokens: 896
keywords: [LoyaltyPartnerProduct, products, product, categories, offered, loyalty, partners, API, version, 51.0, later, Calls, Associated, Objects]
---

# LoyaltyPartnerProduct

> Represents products and product categories offered by loyalty partners.
    This object is available in API version 51.0 and later.

# LoyaltyPartnerProduct

Represents products and product categories offered by loyalty partners. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which a partner ends the offering of a product for accrual or redemption. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyPartnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the loyalty program partner.This is a relationship field.Relationship NameLoyaltyPartnerRelationship TypeMaster-detailRefers ToLoyaltyProgramPartner |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty partner product. |
| PartnerCategoryDerivedFieldId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA lookup field to show product category in Partner Product.This is a relationship field.Relationship NamePartnerCategoryDerivedFieldRelationship TypeLookupRefers ToProductCategory |
| PartnerProductCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost incurred by the partner when members redeem the product during the promotion. This field is available in API version 55.0 and later. |
| ProductDerivedFieldId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA lookup field to show product in Partner Product.This is a relationship field.Relationship NameProductDerivedFieldRelationship TypeLookupRefers ToProduct2 |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the partner product.This is a polymorphic relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2, ProductCategory |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date on which a partner starts the offering of a product for accrual or redemption. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPartnerProductChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 52.0)

Change events are available for the object.

[LoyaltyPartnerProductHistory (API version 52.0)](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

## Related Topics

- LoyaltyPartnerProductChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
