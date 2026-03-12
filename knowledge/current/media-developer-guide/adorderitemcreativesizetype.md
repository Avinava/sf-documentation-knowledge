---
title: "AdOrderItemCreativeSizeType"
domain: media-developer-guide
topic: adorderitemcreativesizetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.487Z
estimatedTokens: 813
keywords: [AdOrderItemCreativeSizeType, junction, order, line, creative, size, including, companion, sizes, number, times, parent, served, API, version]
---

# AdOrderItemCreativeSizeType

> Represents a junction between ad order line and an ad creative size, including
      information about companion creative sizes for each ad creative size and the number of times
      each parent creative must be served. This object is available in API version 59.0 and later.

# AdOrderItemCreativeSizeType

Represents a junction between ad order line and an ad creative size, including information about companion creative sizes for each ad creative size and the number of times each parent creative must be served. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Media Cloud license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdOrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of ad order item.This field is a relationship field.Relationship NameAdOrderItemRelationship TypeLookupRefers ToAdOrderItem |
| AdSpaceCreativeSizeTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the ad space creative size type.This field is a relationship field.Relationship NameAdSpaceCreativeSizeTypeRelationship TypeLookupRefers ToAdSpaceCreativeSizeType |
| CreativeTargetingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name that's assigned to a set of creative targeting selections for the ad order item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MediaOrientation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the expected orientation of the creative size.Possible values are:LandscapePortrait |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRequired. The name of the ad order item creative size type. |
| PrimaryCreativeSizeTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the primary ad creative size type of the ad order item.This field is a relationship field.Relationship NamePrimaryCreativeSizeTypeRefers ToAdCreativeSizeType |
| Total | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe expected count of each of the creative sizes specified for the ad quote line item. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdOrderItemCreativeSizeTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdOrderItemCreativeSizeTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
