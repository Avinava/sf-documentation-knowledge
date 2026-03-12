---
title: "LoyaltyTierBenefit"
domain: loyalty
topic: loyaltytierbenefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.328Z
estimatedTokens: 546
keywords: [LoyaltyTierBenefit, junction, associates, loyalty, benefits, program, tiers, API, version, 51.0, later, Calls, Associated, Objects]
---

# LoyaltyTierBenefit

> A junction object that associates the loyalty benefits with the loyalty program
      tiers. This object is available in API version 51.0 and later.

# LoyaltyTierBenefit

A junction object that associates the loyalty benefits with the loyalty program tiers. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Benefit associated with the loyalty tier benefit.This is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyTierId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionTier associated with the loyalty benefit.This is a relationship field.Relationship NameLoyaltyTierRelationship TypeMaster-detailRefers ToLoyaltyTier |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty tier benefit. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyTierBenefitChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

## Related Topics

- LoyaltyTierBenefitChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
