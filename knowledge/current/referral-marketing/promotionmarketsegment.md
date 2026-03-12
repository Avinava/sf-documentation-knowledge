---
title: "PromotionMarketSegment"
domain: referral-marketing
topic: promotionmarketsegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.251Z
estimatedTokens: 654
keywords: [PromotionMarketSegment, junction, promotion, Data, Cloud, segment, Associate, want, contacts, associated, join, advocates, referral, API, version]
---

# PromotionMarketSegment

> Represents a junction between a promotion and a Data Cloud segment.
         Associate a promotion with a segment when you want only the contacts associated with the
         segment to join as advocates of the referral promotion. This object is available in
      API version 59.0 and later. This object is available only for B2C referral
      programs.

# PromotionMarketSegment

Represents a junction between a promotion and a Data Cloud segment. Associate a promotion with a segment when you want only the contacts associated with the segment to join as advocates of the referral promotion. This object is available in API version 59.0 and later. This object is available only for B2C referral programs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To associate a promotion with a Data Cloud segment, your org needs Data Cloud’s Segmentation and Activation license.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MarketSegmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the Data Cloud segment associated with the referral promotions. Contacts associated with the segment are eligible to join as advocates of the associated referral promotion. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of the promotion marketing segment. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the referral promotion associated with the segment.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionMarketSegmentFeed](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PromotionMarketSegmentHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PromotionMarketSegmentFeed (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_feed.htm)
- PromotionMarketSegmentHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
