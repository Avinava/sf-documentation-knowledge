---
title: "BuyerCriteria"
domain: object-reference
topic: buyercriteria
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.800Z
estimatedTokens: 1264
keywords: [BuyerCriteria, buyer, context, qualifier, locale, any, groups, Market, API, version, 58.0, later, Calls, Usage, Associated]
---

# BuyerCriteria

> Represents the buyer context qualifier of locale for any buyer groups of type
         Market This object is available in API version 58.0 and later.

# BuyerCriteria

Represents the buyer context qualifier of locale for any buyer groups of type Market This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CriteriaKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The label displayed to list supported markets with associated languages and currencies.Possible values are:LocaleDataCloudSegment |
| CriteriaKeyType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Defines the type of key.Possible values are:SessionAttributes Session AttributesDataCloudObjects |
| CriteriaValue | TypestringPropertiesCreate, Filter, Group, Sort, Update, NillableDescriptionRequired. The value of a Locale. For example, fr-FR. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionOptional. Three letter ISO currency codes associated with the buyer account record or a locale. Auto populated if MultiCurrency is enabled in org. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supported criteria in this record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the buyer group the criteria apply to. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the member group or Admin/Merchandiser .This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Usage

BuyerCriteria is related to objects that enable a localized buyer experience. Together, these objects provide buyers with dynamic access to the qualifiers (entitlements, price books, and promotions) associated with their buyer group when they browse and shop in webstores with localized languages and currencies. The related objects are as follows:

-   BuyerGroup - stores keys that link member entitlements, price books, promotions, and shipping methods to either a single currency and language or to multiple currencies and languages.
-   BuyerCriteria - represents locales (languages and currencies) that are enabled for BuyerGroup members when they shop in webstores with localized currencies and languages.
-   BuyerGroupBuyerCriteria - associates a buyer group that is enabled for webstores with multiple languages and currencies with BuyerCriteria that define those languages and currencies.
-   BuyerGroupRelatedObject - allows BuyerGroup qualifiers (entitlements, price books, and promotions) to be available in multiple languages and currencies without duplicating the qualifiers for each language and currency.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BuyerCriteriaFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BuyerCriteriaHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BuyerCriteriaOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BuyerCriteriaShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BuyerCriteriaFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- BuyerCriteriaHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- BuyerCriteriaOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- BuyerCriteriaShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
