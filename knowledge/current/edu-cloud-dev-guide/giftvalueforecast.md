---
title: "GiftValueForecast"
domain: edu-cloud-dev-guide
topic: giftvalueforecast
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.271Z
estimatedTokens: 867
keywords: [GiftValueForecast, past, current, projected, monetary, gift, API, version, 64.0, later, Calls, Special, Access, Rules, Associated]
---

# GiftValueForecast

> The past, current, and projected monetary value of a gift. This object
      is available in API version 64.0 and later.

# GiftValueForecast

The past, current, and projected monetary value of a gift. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ActuarialFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA factor based on actuarial assumptions that’s used to calculate the gift’s future value. |
| CurrentValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gift's current value. |
| GiftId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe gift associated with the gift value forecast.This field is a polymorphic relationship field.Relationship NameGiftRefers ToGiftCommitment, PlannedGift |
| InitialValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gift's initial value. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastUpdatedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the gift’s value was last updated. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| MaturityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the gift’s expected to mature. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the gift value forecast record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProjectedValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gift’s projected value at maturity. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date for tracking the gift’s value. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftValueForecastChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)

Change events are available for the object.

[GiftValueForecastFeed](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftValueForecastHistory](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftValueForecastOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[GiftValueForecastShare](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
