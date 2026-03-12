---
title: "AdProductDefaultTargetCategory"
domain: media-developer-guide
topic: adproductdefaulttargetcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.556Z
estimatedTokens: 769
keywords: [AdProductDefaultTargetCategory, target, category, product, API, version, 58.0, later, Calls, Associated, Objects]
---

# AdProductDefaultTargetCategory

> Represents the default ad target category values for an ad product. This
      object is available in API version 58.0 and later.

# AdProductDefaultTargetCategory

Represents the default ad target category values for an ad product. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdProductTargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad product target cateogry associated with the ad product default target category.This field is a relationship field.Relationship NameAdProductTargetCategoryRefers ToAdProductTargetCategory |
| DefaultValues | TypetextareaPropertiesCreateDescriptionRequired. The list of default targeting values for the associated product. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the media type for which the default values are eligible.Possible values are:DigitalOtherOutdoorPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the ad product default target category. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad product default target category.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the ad product default target category.This field is a relationship field.Relationship NameProductRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdProductDefaultTargetCategoryFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdProductDefaultTargetCategoryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdProductDefaultTargetCategoryShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
