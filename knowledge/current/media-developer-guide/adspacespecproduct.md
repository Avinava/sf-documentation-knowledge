---
title: "AdSpaceSpecProduct"
domain: media-developer-guide
topic: adspacespecproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.818Z
estimatedTokens: 875
keywords: [AdSpaceSpecProduct, junction, space, specification, product, API, version, 63.0, later, Calls, Associated, Objects]
---

# AdSpaceSpecProduct

> Represents a junction between an ad space specification and a product.
      This object is available in API version 63.0 and later.

# AdSpaceSpecProduct

Represents a junction between an ad space specification and a product. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdSpaceSpecificationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad space specification associated with the ad space specification product.This field is a relationship field.Relationship NameAdSpaceSpecificationRefers ToAdSpaceSpecification |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether an ad space specification is added by default when a product is added to the ad campaign.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad space specification product. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad space specification product.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PriceAdjustmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of price adjustment for the ad space spec product.Possible values are:AmountPercentagePrice_Override—Price OverrideThe default value is Percentage. |
| PriceAdjustmentValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the value of the price adjustment for the ad space spec product. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the product associated with the ad space specification product.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| Rank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rank of the ad space spec product. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdSpaceSpecProductFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdSpaceSpecProductHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdSpaceSpecProductShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
