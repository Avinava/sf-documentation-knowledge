---
title: "LoyaltyMemberCurrency"
domain: loyalty
topic: loyaltymembercurrency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.081Z
estimatedTokens: 1588
keywords: [LoyaltyMemberCurrency, point, balance, member, particular, currency, API, version, 51.0, later, Calls, Associated, Objects]
---

# LoyaltyMemberCurrency

> Represents the information about point balance for a member and a particular
      currency. This object is available in API version 51.0 and later.

# LoyaltyMemberCurrency

Represents the information about point balance for a member and a particular currency. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BalanceBeforeReset | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last balance of points before resetting the qualifying points of the member. |
| EscrowPointsBalance | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of escrow points to be credited to the loyalty member's points balance. This field is available in API version 53.0 and later.This is a calculated field. |
| ExpirablePoints | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCalculates the points to be expired for unredeemed points. |
| LastAccrualProcessedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the last accrual was processed. This field indicates the date and time at which the Point Balance calculation process updated the total accrued points for a member and its currency the last time. |
| LastEscrowProcessedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date and time when the Roll Over Escrow Points to Members Data Processing Engine definition was run to calculate rollover of escrow points. This field is available in API version 53.0 and later. |
| LastExpirationProcessRunDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent date when the expired points for a member were calculated. |
| LastExpiredPtTraceabilityRunDt | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe latest date on which a process was run to trace points that have expired. This field is available in API version 65.0 and later. |
| LastPointsAggregationDate | TypePropertiesDescriptionThe latest date on which a process was run to trace points that have expired. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastResetDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent date when the qualifying points for members were reset. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the loyalty program member.This is a relationship field.Relationship NameLoyaltyMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| LoyaltyProgramCurrencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loyalty program currency.This is a relationship field.Relationship NameLoyaltyProgramCurrencyRelationship TypeLookupRefers ToLoyaltyProgramCurrency |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty member currency. |
| NextResetDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe next date when the qualifying points for members are reset. |
| PointsBalBeforeSecondLastReset | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe points balance before the second to last points reset of the member's associated qualifying currency. This field is available in API version 55.0 and later. |
| PointsBalance | TypedoublePropertiesFilter, Nillable, SortDescriptionRepresents information about Point balance for a member and a particular currency. |
| RedemStlPendFromDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time from when the member's redemption settlement is pending for the currency. This field is available in API version 61.0 and later. |
| TotalEscrowPointsAccrued | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of escrow points that the associated member has accrued. This field is available in API version 53.0 and later. |
| TotalEscrowRolloverPoints | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of escrow points that are credited to the points balance until the current date. This field is available in API version 53.0 and later. |
| TotalPointsAccrued | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total points accrued by the member until today. |
| TotalPointsExpired | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total points expired for a member until today. |
| TotalPointsRedeemed | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total points redeemed by the member until today. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyMemberCurrencyChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyMemberCurrencyFeed (API version 52.0)](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Sharing rules are available for the object.

[LoyaltyMemberCurrencyHistory (API version 52.0)](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

Sharing is available for the object.

## Related Topics

- LoyaltyMemberCurrencyChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
