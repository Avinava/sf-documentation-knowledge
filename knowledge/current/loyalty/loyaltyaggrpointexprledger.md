---
title: "LoyaltyAggrPointExprLedger"
domain: loyalty
topic: loyaltyaggrpointexprledger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.050Z
estimatedTokens: 568
keywords: [LoyaltyAggrPointExprLedger, non-qualifying, currency, points, expire, fixed, model, tier, group, API, version, 54.0, later, Calls, Associated]
---

# LoyaltyAggrPointExprLedger

> Represents information about non-qualifying currency points that expire based
         on a fixed model tier group. This object is available in API version 54.0 and
      later.

# LoyaltyAggrPointExprLedger

Represents information about non-qualifying currency points that expire based on a fixed model tier group. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

LoyaltyAggrPointExprLedger isn't available in the Object Manager and can't be customized.

## Fields

| Field | Details |
| --- | --- |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date on which the points are set to expire. |
| ExpirationPoints | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The number of points that are set to expire on the expiration date. |
| LoyaltyProgramCurrencyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The loyalty program currency for which points are set to expire.This is a relationship field.Relationship NameLoyaltyProgramCurrencyRelationship TypeLookupRefers ToLoyaltyProgramCurrency |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The loyalty program member whose points are set to expire.This is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| PointsStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the points that are set to expire.Possible values are:ActiveInactiveThe default value is 'Active'. |
| RedeemedPoints | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of points that have been redeemed by the associated loyalty program member out of the total points set to expire. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyAggrPointExprLedgerChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.
