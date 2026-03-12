---
title: "LoyaltyProgramCurrency"
domain: loyalty
topic: loyaltyprogramcurrency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.221Z
estimatedTokens: 1226
keywords: [LoyaltyProgramCurrency, qualifying, non-qualifying, currencies, associated, program, currency, engagement, member, it’s, tier, group, represent, points, earns]
---

# LoyaltyProgramCurrency

> Represents qualifying and non-qualifying currencies associated with the
      program. Qualifying currency represents the engagement of a member with the program and it’s
      associated with a tier group. Non-qualifying currency represent the points that the member
      earns for redemption. This object is available in API version 51.0 and later.

# LoyaltyProgramCurrency

Represents qualifying and non-qualifying currencies associated with the program. Qualifying currency represents the engagement of a member with the program and it’s associated with a tier group. Non-qualifying currency represent the points that the member earns for redemption. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CostperUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost for each currency associated with a loyalty program. |
| CurrencyType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. Type of the loyalty program currency.Possible values are:NonQualifyingQualifying |
| DoesAllowLedgerTracing | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether points credited by accrual transactions and debited by redemption transactions for a fixed-model non-qualifying currency is traced (true) or not (false). This field is available in API version 61.0 and later.The default value is false. |
| DoesAllowNegativeBalance | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a non-qualifying currency allows members to hold a negative point balance. This field is available in API version 61.0 and later.The default value is false. |
| ExpiryModel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe model evaluates the type of expiration of points based on the fixed date or customer’s activity.Possible values are:ActivityFixed |
| ExpiryPeriodFrequency | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency type to evaluate the expiration of currency. |
| ExpiryPeriodUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit of the period in which currency expiration is done.Possible values are:DaysMonthsYears |
| ExtendExpiration | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field decides if the expiration date is changed on the exact day or the last day of the month.Possible values are:NoneTillEndOfMonth |
| HasEscrow | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether points can be escrowed for the loyalty program currency. This field is available in API version 53.0 and later.The default value is false. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the loyalty program currency is active. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the loyalty program currency is primary. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the loyalty program.This is a relationship field.Relationship NameLoyaltyProgramRelationship TypeMaster-detailRefers ToLoyaltyProgram |
| LoyaltyTierGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the loyalty tier group.This is a relationship field.Relationship NameLoyaltyTierGroupRelationship TypeLookupRefers ToLoyaltyTierGroup |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the loyalty program currency. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramCurrencyChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

## Related Topics

- LoyaltyProgramCurrencyChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
