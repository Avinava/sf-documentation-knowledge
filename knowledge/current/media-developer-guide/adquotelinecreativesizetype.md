---
title: "AdQuoteLineCreativeSizeType"
domain: media-developer-guide
topic: adquotelinecreativesizetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.648Z
estimatedTokens: 849
keywords: [AdQuoteLineCreativeSizeType, junction, quote, line, creative, size, including, companion, sizes, number, times, parent, served, API, version]
---

# AdQuoteLineCreativeSizeType

> Represents a junction between ad quote line and an ad creative size, including
      information about companion creative sizes for each ad creative size and the number of times
      each parent creative must be served. This object is available in API version 59.0 and later.

# AdQuoteLineCreativeSizeType

Represents a junction between ad quote line and an ad creative size, including information about companion creative sizes for each ad creative size and the number of times each parent creative must be served. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of ad quote line associated with the ad quote line creative size type.This field is a relationship field.Relationship NameAdQuoteLineRelationship TypeLookupRefers ToAdQuoteLine |
| AdSpaceCreativeSizeTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of ad space creative size type associated with the ad quote line creative size type.This field is a relationship field.Relationship NameAdSpaceCreativeSizeTypeRelationship TypeLookupRefers ToAdSpaceCreativeSizeType |
| CreativeTargetingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name that's assigned to a set of creative targeting selections in the ad quote line item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MediaOrientation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the expected orientation of the creative size.Possible values are:LandscapePortrait |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRequired. The name of the ad quote line creative size type. |
| PrimaryCreativeSizeTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the primary creative size type associated with the ad quote line creative size type.This field is a relationship field.Relationship NamePrimaryCreativeSizeTypeRefers ToAdCreativeSizeType |
| Total | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected count of each of the parent creative sizes specified for the placement. The default count for each parent creative size in the placement is 1, but users can modify it. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdQuoteLineCreativeSizeTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdQuoteLineCreativeSizeTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
