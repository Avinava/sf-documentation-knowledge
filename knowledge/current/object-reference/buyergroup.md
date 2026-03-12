---
title: "BuyerGroup"
domain: object-reference
topic: buyergroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.808Z
estimatedTokens: 1437
keywords: [BuyerGroup, Associates, group, qualifiers, entitlements, price, books, promotions, shipping, buyer, members, account, localized, language, currency]
---

# BuyerGroup

> Associates group qualifiers (entitlements, price books, promotions, and
         shipping methods) with buyer members based
         on
         buyer account ID or on the localized language
         and currency of the market browsed in a
         webstore.
      This object is available in API version 57.0; amended to support Market in version 58.0 and
      later.

# BuyerGroup

Associates group qualifiers (entitlements, price books, promotions, and shipping methods) with buyer members based on buyer account ID or on the localized language and currency of the market browsed in a webstore. This object is available in API version 57.0; amended to support Market in version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBuyer group details. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the buyer group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type of the versionThis field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| Role | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines a fixed or dynamic relationship to the language and currency that products, promotions, and entitlements are displayed in.Possible values are:AccountBasedMarketDataCloudSegmentsThe default value is AccountBased. When set to Market, and when the org has multiple locales, the currency and language for qualifiers (price books, promotions, entitlements) dynamically change as the buyer views different locale-based markets. |

## Usage

BuyerGroup is related to objects that enable a localized buyer experience. Together, these objects provide buyers with dynamic access to the qualifiers (entitlements, price books, and promotions) associated with their buyer group when they browse and shop in webstores with localized languages and currencies. The related objects are as follows:

-   BuyerGroup - stores keys that link member entitlements, price books, promotions, and shipping methods to either a single currency and language or to multiple currencies and languages.
-   BuyerCriteria - represents locales (languages and currencies) that are enabled for BuyerGroup members when they shop in webstores with localized currencies and languages.
-   BuyerGroupBuyerCriteria - associates a buyer group that is enabled for webstores with multiple languages and currencies with BuyerCriteria that define those languages and currencies.
-   BuyerGroupRelatedObject - allows BuyerGroup qualifiers (entitlements, price books, and promotions) to be available in multiple languages and currencies without duplicating the qualifiers for each language and currency.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BuyerGroupChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BuyerGroupFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BuyerGroupHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BuyerGroupOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BuyerGroupShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BuyerGroupChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- BuyerGroupFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- BuyerGroupHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- BuyerGroupOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- BuyerGroupShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
