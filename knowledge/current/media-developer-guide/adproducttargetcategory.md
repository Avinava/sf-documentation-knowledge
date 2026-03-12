---
title: "AdProductTargetCategory"
domain: media-developer-guide
topic: adproducttargetcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.573Z
estimatedTokens: 775
keywords: [AdProductTargetCategory, junction, product, target, category, API, version, 55.0, later, Calls, Associated, Objects]
---

# AdProductTargetCategory

> Represents a junction between a product and a target category. This object is
      available in API version 55.0 and later.

# AdProductTargetCategory

Represents a junction between a product and a target category. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the Media Type to which a particular Target Category is mapped.Possible values are:DigitalTVRadioPrintOutdoorOther |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad product target category. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad product default target value.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the ad product target category.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| SegmentsDetails | TypetextareaPropertiesCreate, UpdateDescriptionRequired. The category and all the segments associated with it. Acts as the source of truth to represent a category across all products and media types. |
| TargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the target category associated with the ad product target category.This is a relationship field.Relationship NameTargetCategoryRelationship TypeLookupRefers ToAdTargetCategory |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdProductTargetCategoryFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdProductTargetCategoryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdProductTargetCategoryShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
