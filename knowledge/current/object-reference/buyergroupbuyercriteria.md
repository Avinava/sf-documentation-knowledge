---
title: "BuyerGroupBuyerCriteria"
domain: object-reference
topic: buyergroupbuyercriteria
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.813Z
estimatedTokens: 630
keywords: [BuyerGroupBuyerCriteria, Associates, buyer, group, enabled, webstores, supporting, multiple, languages, currencies, BuyerCriteria, define, API, version, 58.0]
---

# BuyerGroupBuyerCriteria

> Associates a buyer group that is enabled for webstores supporting multiple
         languages and currencies with BuyerCriteria that define those languages and
         currencies. This object is available in API version 58.0 and later.

# BuyerGroupBuyerCriteria

Associates a buyer group that is enabled for webstores supporting multiple languages and currencies with BuyerCriteria that define those languages and currencies. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BuyerCriteriaId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the buyer criteria this record is associated with.This field is a relationship field.Relationship NameBuyerCriteriaRelationship TypeLookupRefers ToBuyerCriteria |
| BuyerGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the buyer group this record is associated with.This field is a relationship field.Relationship NameBuyerGroupRelationship TypeLookupRefers ToBuyerGroup |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionOptional. Three letter ISO currency codes associated with the buyer account record or a locale. Auto populated if MultiCurrency is enabled in org. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |

## Usage

BuyerGroupBuyerCriteria is related to objects that enable a localized buyer experience. Together, these objects provide buyers with dynamic access to the qualifiers (entitlements, price books, and promotions) associated with their buyer group when they browse and shop in webstores with localized languages and currencies. The related objects are as follows:

-   BuyerGroup - stores keys that link member entitlements, price books, promotions, and shipping methods to either a single currency and language or to multiple currencies and languages.
-   BuyerCriteria - represents locales (languages and currencies) that are enabled for BuyerGroup members when they shop in webstores with localized currencies and languages.
-   BuyerGroupBuyerCriteria - associates a buyer group that is enabled for webstores with multiple languages and currencies with BuyerCriteria that define those languages and currencies.
-   BuyerGroupRelatedObject - allows BuyerGroup qualifiers (entitlements, price books, and promotions) to be available in multiple languages and currencies without duplicating the qualifiers for each language and currency.
