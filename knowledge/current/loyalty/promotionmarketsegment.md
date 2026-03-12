---
title: "PromotionMarketSegment"
domain: loyalty
topic: promotionmarketsegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.478Z
estimatedTokens: 863
keywords: [PromotionMarketSegment, relationship, promotion, Data, Cloud, segment, segments, targeted, particular, API, version, 51.0, later, Calls, Associated]
---

# PromotionMarketSegment

> Represents a relationship between a promotion and Data Cloud segment. It
      indicates the segments targeted for a particular promotion. This object is available in
    API version 51.0 and later.

# PromotionMarketSegment

Represents a relationship between a promotion and Data Cloud segment. It indicates the segments targeted for a particular promotion. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code of the promotion. This field is only available in orgs where multiple currencies are enabled.Possible values are:USD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MarketSegmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the market segment associated with the promotion market segment. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the promotion market segment. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the promotion associated with the promotion market segment.This is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| PromotionSegmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related promotion segment. This field is accessible in orgs with a Commerce Cloud license, where users have access to Promotions.The field associates a promotion with its segments. Promotion segments are different from Data Cloud segments.This field is a relationship field.Relationship NamePromotionSegmentRelationship TypeLookupRefers ToPromotionSegment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionMarketSegmentChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[PromotionMarketSegmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PromotionMarketSegmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- PromotionMarketSegmentChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
