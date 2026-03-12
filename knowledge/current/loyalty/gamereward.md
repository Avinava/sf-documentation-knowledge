---
title: "GameReward"
domain: loyalty
topic: gamereward
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.022Z
estimatedTokens: 1023
keywords: [GameReward, reward, that’s, offered, participants, game, API, version, 60.0, later, Calls, Associated, Objects]
---

# GameReward

> The reward that’s offered to participants of a game. This object
      is available in API version 60.0 and later.

# GameReward

The reward that’s offered to participants of a game. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Color | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe color of the segment in the Spin the Wheel board that the represents the game reward. |
| CurrentRewardCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the reward has been provided to game participants until the current date. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the reward. |
| GameDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe game that the reward belongs to.This field is a relationship field.Relationship NameGameDefinitionRelationship TypeLookupRefers ToGameDefinition |
| ImageUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe image URL of the segment in the Spin the Wheel board that the represents the game reward. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MaximumRewardCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of times the reward can be provided to game participants. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the reward. |
| RewardDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the voucher definition that’s used to issue vouchers or the loyalty program currency that’s used to credit points to participants as game reward.This field is a polymorphic relationship field.Relationship NameRewardDefinitionRelationship TypeLookupRefers ToLoyaltyProgramCurrency, VoucherDefinition |
| RewardType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values are:CustomRewardLoyaltyPointsNoRewardRaffle—Reseved for future use.Voucher |
| RewardValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the currency or voucher that's issued to participants as game reward. |
| WinProbability | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe probability of the reward being provided to a participant. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GameRewardChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[GameRewardFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[GameRewardHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- GameRewardChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
