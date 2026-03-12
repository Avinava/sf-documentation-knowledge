---
title: "AdTargetCategory"
domain: media-developer-guide
topic: adtargetcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.832Z
estimatedTokens: 963
keywords: [AdTargetCategory, targeting, category, that's, group, multiple, segments, API, version, 55.0, later, Calls, Associated, Objects]
---

# AdTargetCategory

> Represents a targeting category that's used to group multiple
         targeting segments. This object is available in API version 55.0 and later.

# AdTargetCategory

Represents a targeting category that's used to group multiple targeting segments. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The code of the ad target category in the ad server. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe descriptions for the ad target category. |
| DisplaySequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display sequence of ad target category. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the ad target cateogory is active.The default value is 'false'. |
| IsAvailableForSelfService | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a category is available in the Agent Console and the Self Service Console. By default, all categories are available in the Agent Console.If the value of this field is set to true, then the category is available in the Self Service Console.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the media type of the ad target category.Possible values are:DigitalTVRadioPrintOutdoorOther |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad target category. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad target category.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentAdTargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent ad category that the ad target category is part of.This is a relationship field.Relationship NameParentAdTargetCategoryRelationship TypeLookupRefers ToAdTargetCategory |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the ad target category.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdTargetCategoryFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdTargetCategoryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdTargetCategoryShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
