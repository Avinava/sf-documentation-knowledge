---
title: "AdProductDefaultTargetValue"
domain: media-developer-guide
topic: adproductdefaulttargetvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.566Z
estimatedTokens: 1117
keywords: [AdProductDefaultTargetValue, junction, product, target, API, version, 63.0, later, Calls, Associated, Objects]
---

# AdProductDefaultTargetValue

> Represents a junction between a product and default target value. This
      object is available in API version 63.0 and later.

# AdProductDefaultTargetValue

Represents a junction between a product and default target value. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdTargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad target category associated with the ad product default target value.This field is a relationship field.Relationship NameAdTargetCategoryRefers ToAdTargetCategory |
| IsEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether an ad product default target value can be edited during runtime.The default value is false. |
| IsIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether a default target value is included (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MediaChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the media channel associated with the ad product default target value.This field is a relationship field.Relationship NameMediaChannelRefers ToMediaChannel |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the media type of the ad product default target value. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the ad product default target value. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad product default target value.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductClassificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product classification associated with the ad product default target value.This field is a relationship field.Relationship NameProductClassificationRefers ToProductClassification |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the ad product default target value.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| TargetCategorySegmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the target category segment associated with the ad product default target value.This field is a relationship field.Relationship NameTargetCategorySegmentRefers ToAdTargetCategorySegment |
| TargetCategorySegmentValueId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the target category segment value associated with the ad product default target value.This field is a relationship field.Relationship NameTargetCategorySegmentValueRefers ToAdTargetSegmentValue |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdProductDefaultTargetValueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdProductDefaultTargetValueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdProductDefaultTargetValueShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
