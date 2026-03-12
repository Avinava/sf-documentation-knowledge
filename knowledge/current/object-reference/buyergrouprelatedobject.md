---
title: "BuyerGroupRelatedObject"
domain: object-reference
topic: buyergrouprelatedobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.834Z
estimatedTokens: 1238
keywords: [BuyerGroupRelatedObject, associate, currencies, ship-to, countries, buyer, group, price, books, promotions, entitlements, Supports, experience, members, shop]
---

# BuyerGroupRelatedObject

> Used to
         associate
         currencies and supported ship-to countries with a buyer group and its
         price books, promotions, and entitlements.
         Supports buyer experience when buyer group members shop in stores enabled
         for multiple locales. This object is available in API version 58.0 and
      later.

# BuyerGroupRelatedObject

Used to associate currencies and supported ship-to countries with a buyer group and its price books, promotions, and entitlements. Supports buyer experience when buyer group members shop in stores enabled for multiple locales. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

BuyerGroupRelatedObject is availble only if the org is Market Enabled (Commerce.orgHasCommerceMarketEnabled).

## Fields

| Field | Details |
| --- | --- |
| BuyerGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the buyer group this record is associated with.This field is a relationship field.Relationship NameBuyerGroupRelationship TypeLookupRefers ToBuyerGroup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly.. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| ObjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The names displayed in the picklist showing the ObjectValues - currency and ship-to countries.Possible values are:DefaultCurrency - Default CurrencySupportedShipToCountries - Supported Ship-to Countries |
| ObjectValues | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionOptional. Values for ObjectType. The actual currency and supported ship-to countries. Possible values are:Three-letter ISO currency code associated with the buyer account or a supported locale. ISO country code for supported ship-to countries. |

## Usage

BuyerGroupRelatedObject is related to objects that enable a localized buyer experience. Together, these objects provide buyers with dynamic access to the qualifiers (entitlements, price books, and promotions) associated with their buyer group when they browse and shop in webstores with localized languages and currencies. The related objects are as follows:

-   BuyerGroup - stores keys that link member entitlements, price books, promotions, and shipping methods to either a single currency and language or to multiple currencies and languages.
-   BuyerCriteria - represents locales (languages and currencies) that are enabled for BuyerGroup members when they shop in webstores with localized currencies and languages.
-   BuyerGroupBuyerCriteria - associates a buyer group that is enabled for webstores with multiple languages and currencies with BuyerCriteria that define those languages and currencies.
-   BuyerGroupRelatedObject - allows BuyerGroup qualifiers (entitlements, price books, and promotions) to be available in multiple languages and currencies without duplicating the qualifiers for each language and currency.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BuyerGroupRelatedObjectChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BuyerGroupRelatedObjectFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BuyerGroupRelatedObjectHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BuyerGroupRelatedObjectChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- BuyerGroupRelatedObjectFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- BuyerGroupRelatedObjectHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
