---
title: "AdAvailabilityDimensions"
domain: media-developer-guide
topic: adavailabilitydimensions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.346Z
estimatedTokens: 1169
keywords: [AdAvailabilityDimensions, references, specific, records, common, filterable, media, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# AdAvailabilityDimensions

> Represents references to specific records with common filterable
         fields between media types. This object is available in API version 59.0 and later.

# AdAvailabilityDimensions

Represents references to specific records with common filterable fields between media types. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Media Cloud license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdOrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe advertising order item that's associated with the advertisement slot sale.This field is a relationship field.Relationship NameAdOrderItemRelationship TypeLookupRefers ToAdOrderItem |
| AdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe advertising quote line that's associated with the advertisement slot sale.This field is a relationship field.Relationship NameAdQuoteLineRelationship TypeLookupRefers ToAdQuoteLine |
| AdServer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the advertising server that's used to retrieve the dimension details. |
| AdSpaceSpecificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe advertising space specification that's associated with the advertising slot sale.This field is a relationship field.Relationship NameAdSpaceSpecificationRelationship TypeLookupRefers ToAdSpaceSpecification |
| DealType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of deal to sell advertising slot units.Possible values are:Direct-salesPreferred (Non-Guaranteed)Programmatic Guaranteed |
| DeliveredUnits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of slots that were delivered in a specified period. |
| JobId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Ad Availability Job that's associated with the dimension.This field is a relationship field.Relationship NameJobRelationship TypeLookupRefers ToAdAvailabilityJob |
|  |  |
|  |  |
| MediaChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe media channel that's associated with the advertising slot sale.This field is a relationship field.Relationship NameMediaChannelRelationship TypeLookupRefers ToMediaChannel |
| MediaContentTitleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe media content title that's associated with advertising slot sale.This field is a relationship field.Relationship NameMediaContentTitleRelationship TypeLookupRefers ToMediaContentTitle |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of media plan that's used to run the advertisements.Possible values are:DigitalOtherOutdoorPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of ad availability dimensions. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PricingModel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the pricing model for the media plan. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that's associated with the advertisement sale.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdAvailabilityDimensionsFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdAvailabilityDimensionsHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdAvailabilityDimensionsShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
