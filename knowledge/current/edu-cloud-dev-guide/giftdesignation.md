---
title: "GiftDesignation"
domain: edu-cloud-dev-guide
topic: giftdesignation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.519Z
estimatedTokens: 2140
keywords: [GiftDesignation, designation, assigned, gift, transaction, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GiftDesignation

> Represents a designation that can be assigned to a gift transaction.
      This object is available in API version 59.0 and later.

# GiftDesignation

Represents a designation that can be assigned to a gift transaction. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AverageTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe average value of all paid gift transactions related to the related gift designation. Data Processing Engine calculates this value by dividing the gift designation's total transaction amount by its total transaction count. You can schedule this calculation to run on a regular basis. |
| CurrentYearTransactionCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of the current year's paid transactions related to the related gift designation. Data Processing Engine calculates this value by counting the gift designation's paid gift transactions with a transaction date in this calendar year. You can schedule this calculation to run on a regular basis. |
| CurrentYearTrxnAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the current year's paid transactions related to the related gift designation. Data Processing Engine calculates this value by adding the amounts of the gift designation's paid gift transactions with a transaction date this calendar year. You can schedule this calculation to run on a regular basis. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the gift designation. |
| FirstPaidTransactionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the first paid gift transaction related to the related gift designation. Data Processing Engine calculates this value by finding the date of the first paid gift transaction related to the gift designation. You can schedule this calculation to run on a regular basis. |
| HighestTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe highest transaction value associated with the related gift designation. Data Processing Engine calculates this value by finding the amount of the largest paid gift transaction related to the gift designation. You can schedule this calculation to run on a regular basis. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the gift designation is active (true) or not (false).The default value is true. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the unrestricted gift amount is to be allocated to this designation as default (true) or not (false). There can only be a single designation with this set to true at a time.The default value is false. |
| LastPaidTransactionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the most recent paid gift transaction related to the related gift designation. Data Processing Engine calculates this value by finding the date of the most recent related paid gift transaction related to the gift designation. You can schedule this calculation to run on a regular basis. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastTwoYearTrxnAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the gift transactions completed two calendar years ago related to the related gift designation. Data Processing Engine calculates this value by adding the amounts of all paid gift transactions related to the gift designation with a transaction date from two calendar years ago. You can schedule this calculation to run on a regular basis. |
| LastTwoYearTrxnCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of gift transactions made two calendar years ago that are related to the related gift designation. Data Processing Engine calculates this value by counting all paid gift transactions related to the gift designation with a transaction date from two calendar years ago. You can schedule this calculation to run on a regular basis. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view. |
| LastYearTransactionCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of gift transactions related to the related gift designation and made last calendar year. Data Processing Engine calculates this value by counting all paid gift transactions related to the gift designation with a transaction date in the last calendar year. You can schedule this calculation to run on a regular basis. |
| LastYearTrxnAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of gift transactions related to the related gift designation and completed last calendar year. Data Processing Engine calculates this value by adding the amounts of all paid gift transactions related to the gift designation with a transaction date from the last calendar year. You can schedule this calculation to run on a regular basis. |
| LowestTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the smallest paid transaction related to the related gift transaction. Data Processing Engine calculates this value by finding the smallest paid gift transaction amount related to the related gift designation. You can schedule this calculation to run on a regular basis. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the gift designation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TotalTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of all gift transactions related to the related gift designation. Data Processing Engine calculates this value by adding the total amounts of all paid gift transactions related to the gift designation. You can schedule this calculation to run on a regular basis. |
| TotalTransactionCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of all paid transactions related to the related gift designation. Data Processing Engine calculates this value counting the paid gift transactions related to the gift designation. You can schedule this calculation to run on a regular basis. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftDesignationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm) (API Version 64.0)

Change events are available for the object.

[GiftDesignationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[GiftDesignationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[GiftDesignationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm) (API Version 64.0)

Sharing rules are available for the object.

[GiftDesignationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
