---
title: "AdQuote"
domain: media-developer-guide
topic: adquote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.586Z
estimatedTokens: 1331
keywords: [AdQuote, quote, advertisement, campaign, API, version, 51.0, later, Calls, Associated, Objects]
---

# AdQuote

> Represents the details of a quote for an advertisement campaign. This object is
      available in API version 51.0 and later.

# AdQuote

Represents the details of a quote for an advertisement campaign. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Budget | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe budget of the ad quote. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the ad quote. |
| ImpliedTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the implied total of all media plan placements that are associated with the ad quote..This is a calculated field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LinearTvCalendarType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of linear TV calendar. |
| LinearTvDealType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of linear TV deal. |
| LinearTvSellType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of linear TV sell. |
| MediaType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the media type of the ad quote.Possible values are:Digital |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad quote. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the woner of the ad quote.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentAdQuoteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of partner ad quote that the ad quote is a part of.This field is a relationship field.Relationship NameParentAdQuoteRefers ToAdQuote |
| PrintPlanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of print plan. |
| PriorAdQuoteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad quote that is sequenced prior to the ad quote in the parent ad quote's hierarchy.This field is a relationship field.Relationship NamePriorAdQuoteRefers ToAdQuote |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies a quote, which is a record showing proposed prices for products and services.This is a relationship field.Relationship NameQuoteRelationship TypeLookupRefers ToQuote |
| RadioCalendarType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of radio calendar. |
| RadioPlanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of radio plan. |
| RequestedSplitsInterval | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe interval at which the requested splits for units are displayed, whether weekly or daily. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the ad quote. |
| TotalAdTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total ad time for the media placement.This is a calculated field. |
| TotalBonusAdTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total bonus ad time for the media placement.This is a calculated field. |
| TotalCostPerRatingPoint | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total cost rer rating point for the media placement.This is a calculated field. |
| TotalGrossRatingPoint | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total gross rating point for the media placement.This is a calculated field. |
| TotalPaidAdTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total paid ad time for the media placement.This is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdQuoteFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdQuoteHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdQuoteShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
