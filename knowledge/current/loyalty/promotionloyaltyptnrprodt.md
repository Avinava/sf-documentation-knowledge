---
title: "PromotionLoyaltyPtnrProdt"
domain: loyalty
topic: promotionloyaltyptnrprodt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.470Z
estimatedTokens: 896
keywords: [PromotionLoyaltyPtnrProdt, relationship, promotion, loyalty, partner, product, products, categories, applied, particular, API, version, 51.0, later, Calls]
---

# PromotionLoyaltyPtnrProdt

> Represents a relationship between a promotion and a loyalty partner product. It
      indicates the products or product categories that are applied to a particular promotion.
    This object is available in API version 51.0 and later.

# PromotionLoyaltyPtnrProdt

Represents a relationship between a promotion and a loyalty partner product. It indicates the products or product categories that are applied to a particular promotion. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyPartnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe loyalty partner associated with the promotion.This is a relationship field.Relationship NameLoyaltyPartnerRelationship TypeLookupRefers ToLoyaltyProgramPartner |
| LoyaltyPartnerProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The loyalty partner product associated with the promotion loyalty partner product.This is a relationship field.Relationship NameLoyaltyPartnerProductRelationship TypeLookupRefers ToLoyaltyPartnerProduct |
| LoyaltyProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe loyalty product associated with the promotion.This is a relationship field.Relationship NameLoyaltyProductRelationship TypeLookupRefers ToProduct2 |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the promotion loyalty partner product. |
| ProductCategoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product category associated with the promotion.This is a relationship field.Relationship NameProductCategoryRelationship TypeLookupRefers ToProductCategory |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe promotion associated with the promotion loyalty partner product.This is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionLoyaltyPtnrProdtChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[PromotionLoyaltyPtnrProdtFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PromotionLoyaltyPtnrProdtHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- PromotionLoyaltyPtnrProdtChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
