---
title: "GiftActuarialEntry"
domain: nonprofit-cloud
topic: giftactuarialentry
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:01.162Z
estimatedTokens: 1801
keywords: [GiftActuarialEntry, foundational, data, calculating, future, planned, gift, including, life, expectancy, discount, rates, API, version, 65.0]
---

# GiftActuarialEntry

> Represents the foundational data for calculating the future value of a
         planned gift, including life expectancy and discount rates. This object is available
      in API version 65.0 and later.

# GiftActuarialEntry

Represents the foundational data for calculating the future value of a planned gift, including life expectancy and discount rates. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| ActuarialMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the actuarial method of the actuarial entry.Possible values are:Commutation FactorsDiscounted RatesExpectancyNot ApplicablePresent Value |
| AdjustmentFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor used to adjust annuities based on the payment frequency of the actuarial entry. |
| AgeInYears | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe age in years of the person related to the actuarial entry. |
| AnnuityFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor used to calculate the annuities of the actuarial entry. |
| CommutationFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe commutation factor used to calculate the annuities and current values of the actuarial entry. |
| DiscountFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor used to calculate the applicable discount for the actuarial entry. |
| DurationInYears | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time in years for which the actuarial entry applies. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date after which the actuarial entry isn't in effect. |
| Expectancy | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe life expectancy based on the actuarial model of the actuarial entry. |
| IncomeInterest | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe interest gained on the income of the person related to the actuarial entry. |
| InterestRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe interest rate percentage of the actuarial entry. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the actuarial entry is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| MonthsToAnnualPayout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of months before the annual payout of the actuarial entry. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the actuarial entry. |
| OlderAgeInYears | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe older age in years among two individuals. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PaymentFrequency | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment frequency of the actuarial entry. |
| PayoutRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe payout rate of the actuarial entry. |
| RemainderFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor used to calculate the remainder of the actuarial entry. |
| Source | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of the actuarial entry. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the actuarial entry takes effect. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the actuarial entry. |
| ValuationFactor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the valuation factor for the actuarial entry. |
| Version | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of the actuarial entry. |
| YoungerAgeInYears | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe younger age in years among two individuals. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftActuarialEntryChangeEvent](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[GiftActuarialEntryFeed](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GiftActuarialEntryHistory](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GiftActuarialEntryOwnerSharingRule](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[GiftActuarialEntryShare](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GiftActuarialEntryChangeEvent (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)
- GiftActuarialEntryFeed (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)
- GiftActuarialEntryHistory (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)
- GiftActuarialEntryOwnerSharingRule (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)
- GiftActuarialEntryShare (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)
