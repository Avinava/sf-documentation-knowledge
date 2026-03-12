---
title: "LoyaltyPgmPartnerPromotion"
domain: loyalty
topic: loyaltypgmpartnerpromotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.182Z
estimatedTokens: 686
keywords: [LoyaltyPgmPartnerPromotion, junction, Promotion, Loyalty, Program, Partner, objects, API, version, 55.0, later, Calls, Associated]
---

# LoyaltyPgmPartnerPromotion

> Represents a junction between the Promotion and Loyalty Program Partner
         objects. This object is available in API version 55.0 and later.

# LoyaltyPgmPartnerPromotion

Represents a junction between the Promotion and Loyalty Program Partner objects. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContributionPercentage | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The percentage of contribution given by a partner to the promotion. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramPartnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe loyalty program partner associated with the loyalty program partner prepaid pack or postpaid balance amount.This is a relationship field.Relationship NameLoyaltyProgramPartnerRelationship TypeLookupRefers ToLoyaltyProgramPartner |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the loyalty program partner promotion. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe joint promotion in which the loyalty program partner is a part of.This is a relationship field.Relationship NamePromotionRelationship TypeMaster-detailRefers ToPromotion |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmPartnerPromotionChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyPgmPartnerPromotionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- LoyaltyPgmPartnerPromotionChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
