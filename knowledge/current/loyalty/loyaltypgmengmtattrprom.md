---
title: "LoyaltyPgmEngmtAttrProm"
domain: loyalty
topic: loyaltypgmengmtattrprom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.129Z
estimatedTokens: 675
keywords: [LoyaltyPgmEngmtAttrProm, junction, Loyalty, Program, Engagement, Attribute, Promotion, Associate, want, track, period, API, version, 55.0, later]
---

# LoyaltyPgmEngmtAttrProm

> Represents a junction between Loyalty Program Engagement Attribute and
         Promotion. Associate an engagement attribute with a promotion if you want to track the
         engagement attribute during the promotion period. This object is available in API
      version 55.0 and later.

# LoyaltyPgmEngmtAttrProm

Represents a junction between Loyalty Program Engagement Attribute and Promotion. Associate an engagement attribute with a promotion if you want to track the engagement attribute during the promotion period. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramEngmtAttrId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program engagement attribute associated with the promotion.This is a relationship field.Relationship NameLoyaltyProgramEngmtAttrRelationship TypeMaster-detailRefers ToLoyaltyPgmEngmtAttribute |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the loyalty program engagement attribute promotion. The name is autopopulated. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe promotion associated with the loyalty program engagement attribute.This is a relationship field.Relationship NamePromotionRelationship TypeMaster-detailRefers ToPromotion |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmEngmtAttrPromChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyPgmEngmtAttrPromHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- LoyaltyPgmEngmtAttrPromChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
