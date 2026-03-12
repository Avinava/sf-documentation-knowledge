---
title: "LoyaltyPgmPartnerCurrency"
domain: loyalty
topic: loyaltypgmpartnercurrency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.175Z
estimatedTokens: 648
keywords: [LoyaltyPgmPartnerCurrency, junction, loyalty, program, partner, currency, API, version, 55.0, later, Calls, Associated, Objects]
---

# LoyaltyPgmPartnerCurrency

> Represents a junction between a loyalty program partner and a loyalty program
         currency. This object is available in API version 55.0 and later.

# LoyaltyPgmPartnerCurrency

Represents a junction between a loyalty program partner and a loyalty program currency. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccrualConversionFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor by which points earned by a loyalty program member for an accrual-type transaction are converted to determine the number of points to be debited from the associated loyalty program partner's points balance or balance amount. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramCurrencyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The loyalty program currency associated with the loyalty program partner currency record.This is a relationship field.Relationship NameLoyaltyProgramCurrencyRelationship TypeLookupRefers ToLoyaltyProgramCurrency |
| LoyaltyProgramPartnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program partner associated with the loyalty program partner currency record.This is a relationship field.Relationship NameLoyaltyProgramPartnerRelationship TypeMaster-detailRefers ToLoyaltyProgramPartner |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the loyalty program partner currency. |
| RedemptionConversionFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor by which points redeemed by a loyalty program member for a redemption-type transaction are converted to determine the number of points or amount to be credited to the associated loyalty program partner's points balance or balance amount. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmPartnerCurrencyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
