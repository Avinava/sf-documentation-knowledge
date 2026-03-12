---
title: "AdCreativeSizeType"
domain: media-developer-guide
topic: adcreativesizetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.393Z
estimatedTokens: 884
keywords: [AdCreativeSizeType, size, creative, pixels, API, version, 54.0, later, Calls, Associated, Objects]
---

# AdCreativeSizeType

> Represents the size of an ad creative such as 728 x 90 pixels.
      This object is available in API version 54.0 and later.

# AdCreativeSizeType

Represents the size of an ad creative such as 728 x 90 pixels. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdServerAdCreativeIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for the ad creative in an external ad server |
| CreativeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of ad creative.Possible values are:BillboardBookendPiggyBackStandard |
| Height | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe height of the creative asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the ad creative size type.Possible values are:Digital BannerDigital VideoOutdoorPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad creative size type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad creative size type.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RunTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe creative run time where applicable. |
| StartX | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe x-axis coordinate for the start of the ad on the page |
| StartY | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe y-axis coordinate for the start of the ad on the page |
| UnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for defining the size of the creative asset.Possible values are:InchesMinutesPixelsSecondsmm |
| Width | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe width of the creative asset. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdCreativeSizeTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdCreativeSizeTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdCreativeSizeTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
