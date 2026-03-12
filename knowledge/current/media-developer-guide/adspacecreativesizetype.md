---
title: "AdSpaceCreativeSizeType"
domain: media-developer-guide
topic: adspacecreativesizetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.785Z
estimatedTokens: 980
keywords: [AdSpaceCreativeSizeType, space, creative, size, decides, compatibility, specification, API, version, 54.0, later, Calls, Associated, Objects]
---

# AdSpaceCreativeSizeType

> Represents an ad space creative size type the decides the
         compatibility of an ad space specification with an ad creative size type. This object
      is available in API version 54.0 and later.

# AdSpaceCreativeSizeType

Represents an ad space creative size type the decides the compatibility of an ad space specification with an ad creative size type. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdCreativeSizeTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad creative size type associated with the ad space creative size type.This is a relationship field.Relationship NameAdCreativeSizeTypeId__rRelationship TypeLookupRefers ToAdCreativeSizeType |
| AdSpaceSpecificationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ad space specification associated with the ad space creative size type.This is a relationship field.Relationship NameAdSpaceSpecificationId__rRelationship TypeMaster-detailRefers ToAdSpaceSpecification (the master object) |
| AppearanceOrder | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the apprearance order of the creative in the associated ad space specification. |
| AppearanceParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent ad creative size type associated with the ad space creative size type.This field is a relationship field.Relationship NameAppearanceParentRefers ToAdCreativeSizeType |
| IsAutoSelectCompanion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the creative size is the default size for companion creatives served on the ad spaceThe default value is false. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the creative size is the default one for the ad space.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad space creative size type. |
| PriceAdjustmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of price adjustment for the ad space creative size type.Possible values are:AmountPercentagePrice_Override—Price OverrideThe default value is Percentage. |
| PriceAdjustmentValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the value of the price adjustment for the ad space creative size type. |
| Rank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rank of the ad space creative size type. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdSpaceCreativeSizeTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdSpaceCreativeSizeTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
