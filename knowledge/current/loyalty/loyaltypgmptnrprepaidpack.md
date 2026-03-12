---
title: "LoyaltyPgmPtnrPrepaidPack"
domain: loyalty
topic: loyaltypgmptnrprepaidpack
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.195Z
estimatedTokens: 628
keywords: [LoyaltyPgmPtnrPrepaidPack, prepaid, points, purchased, loyalty, program, partner, API, version, 55.0, later, Calls, Associated, Objects]
---

# LoyaltyPgmPtnrPrepaidPack

> Represents information about a prepaid set of points purchased by a loyalty
         program partner. This object is available in API version 55.0 and later.

# LoyaltyPgmPtnrPrepaidPack

Represents information about a prepaid set of points purchased by a loyalty program partner. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the loyalty program partner prepaid pack is effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramPartnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program partner associated with the loyalty program partner prepaid pack.This is a relationship field.Relationship NameLoyaltyProgramPartnerRelationship TypeMaster-detailRefers ToLoyaltyProgramPartner |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the prepaid points pack. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the loyalty program partner prepaid pack.This is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| PurchaseDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionRequired. The date when the prepaid pack was purchased by the loyalty program partner. |
| PurchasedPoints | TypedoublePropertiesCreate, Filter, SortDescriptionRequired. The number of points credited to the associated loyalty program partner when a prepaid pack of points is purchased. |
| RemainingPoints | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of points remaining in the loyalty program partner's prepaid pack. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmPtnrPrepaidPackHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
