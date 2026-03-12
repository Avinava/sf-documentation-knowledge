---
title: "AdOrderItem"
domain: media-developer-guide
topic: adorderitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.473Z
estimatedTokens: 3616
keywords: [AdOrderItem, advertisement, campaign, specific, order, item, API, version, 54.0, later, Calls, Associated, Objects]
---

# AdOrderItem

> Represents the advertisement campaign specific details of an ad order item.. This object is available in API version 54.0 and later.

# AdOrderItem

Represents the advertisement campaign specific details of an ad order item.. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdBleedAmount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe distance from the edge. |
| AdBleedAmountUom | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies bleed height and width measurement.Possible values are:InchesPixelsmm |
| AdCreativeSizeTypes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of semicolon separated creative size types. |
| AdCreativeUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the ad creative. |
| AdPlacementPriorityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the placement priority type chosen from the ad server's ad priority type.Possible values are:StandardSponsorship |
| AdRequestedEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe requested end date for the LineItem. |
| AdRequestedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe requested units of the ad order item. |
| AdRequestedStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe requested start date for the placement. |
| AdServerFees | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ad server fees for the ad order item. |
| AdServerOrderIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe order ID generated from the ad server. |
| AdServerOrderLineIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe order line item ID generated at the ad server. |
| AdServerProposalLineStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of an ad order line item proposal in the ad server.Possible values are:CompletedDeliveringDraftPausedReady |
| AdSpaceSpecificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad space specification related to the ad order item.This is a relationship field.Relationship NameAdSpaceSpecificationId__rRelationship TypeLookupRefers ToAdSpaceSpecification |
| AdTimePerEpisode | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ad time in seconds for each episode. |
| BillingCycle | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the billing cycle for an order line item.Possible values are:BroadcastCalendarEnd Of Flight |
| BillingMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the billing mode for an order line item.Possible values are:FractionalRetailThresholdUsage |
| BonusAdTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBonus commercial times in seconds provided to the customers. |
| Budget | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe budget of the ad order item. |
| ContractedQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contracted quantity of the ad order item. |
| CostPerRatingPoint | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost per rating point calculated on the basis of QuoteLineItem.ImpliedRate / AdSpaceSpecification.AudienceSizeRating. |
| CustomerDayPart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer prime time that depends on the combination of genre of the show, audience interest, demographics..Possible values are:Non Prime TimePrime Time |
| DeliveryFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency at which the ad order item is delivered.Possible values are:As fast as possibleEvenlyFrontloaded |
| EstimatedQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contracted quantity of the ad order item. |
| GrossRatingPoint | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gross rating point calculated on the basis of AdSpaceSpecification.AudienceSizeRating * Paid Commercial Time per 'Linear Commercial Time Slot Unit of the Org'. |
| ImpliedRate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe implied rate of the ad order item. |
| ImpliedTotal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated from the implied rate and is used by publishers to organize the revenue structure within the deal. |
| ImpressionLimit | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of impressions that must be delivered for the ad order item. |
| IsAdBleedEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the ad extends all the way to the edge of the page on at least one side.The default value is 'false'. |
| IsBudgetBasedQuantity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the budget is calcualted based on the quantity.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MaxDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum duration of the ad order item. |
| MaximumFrequency | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum number of times the ad is served for frequency capping. |
| MaximumFrequencyInterval | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe maximum frequency unit used for frequency capping.Possible values are:DayHourMinuteSecond |
| MaximumUserFrequency | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum number of times a unique user sees the ad over a given time period. |
| MaximumUserFrequencyInterval | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the maximum user frequency interval used for frequency capping.Possible values are:DayHourMinuteSecond |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the media type of the placement.Possible values are:DigitalOtherOutdoorPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad order item. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRefers to the Order record.This is a relationship field.Relationship NameOrderId__rRelationship TypeMaster-detailRefers ToOrder (the master object) |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the order item associated with the ad order item.This is a relationship field.Relationship NameOrderItemId__rRelationship TypeLookupRefers ToOrderItem |
| PaidAdTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates total commercial time slots customer are paying for in seconds. |
| PricingModel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the pricing model of the ad order item.Possible values are:CPCCPM |
| PrimaryCostPerMille | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost per mile of the ad order item. |
| PrimaryDemographicCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the primary demographic code associated with the ad order item.This field is a relationship field.Relationship NamePrimaryDemographicCodeRefers ToAdDemographicCode |
| PrimaryGrpPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe primary group percentage of the ad order item. |
| PrimaryImpressions | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary impressions of the ad order item. |
| PrimaryImpsPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe primary impression percentage of the ad order item. |
| PrimaryRating | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe primary rating of the ad order item. |
| PrimaryTotalImps | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary total impressions of the ad order item. |
| PriorOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prior order item in case of existing or changed order item, for new it will be blank.This field is a relationship field.Relationship NamePriorOrderLineItemRelationship TypeLookupRefers ToOrderItem |
| PriorUsedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount billed in prior orders in case of modified order, for new orders it will be zero. |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCaptures the Quote LineItem if the order is to be created for a Quote.This is a relationship field.Relationship NameQuoteLineItemId__rRelationship TypeLookupRefers ToQuoteLineItem |
| RadioSpotType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of radio spot. |
| RequestedIssues | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe issues selected for a placement or line item for which the selected or defined ad creatives are to be inserted. |
| RequestedSplits | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe break-up of the requested units for each placement or line item, based on the selected frequency, whether daily or weekly. |
| RevisedPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revised price of the ad order item. |
| SecondaryCostPerMille | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary cost per mile of the ad order item. |
| SecondaryCostPerRatingPoint | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary cost per rating point of the ad order item. |
| SecondaryDemographicCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the secondary demographic code of the ad order item.This field is a relationship field.Relationship NameSecondaryDemographicCodeRefers ToAdDemographicCode |
| SecondaryGrossRatingPoint | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary gross rating point of the ad order item. |
| SecondaryGrpPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary group percentage of the ad order item. |
| SecondaryImpressions | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe secondary impressions of the ad order item. |
| SecondaryImpsPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary impression percentage of the ad order item. |
| SecondaryRating | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary rating of the ad order item. |
| SecondaryTotalImps | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe secondary total impressions of the ad order item. |
| Skippable | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the ad order item can be skipped.Possible values are:AnyDisableEnable |
| SponsorshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCaptures advertiser's sponsorship interests for the Ad Space Specification.Possible values are:Co Presented ByPresented BySponsored By |
| TargetingParameters | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe ad creative targeting parameters stored in JSON format. |
| TotalAdTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of bonus and paid ad time or ad time per episode multiplied by number of episodes on media content title of ad space specification. |
| UserEngagementGoalPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of impressions or clicks for the ad order item. |
| UserEngagementGoalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the user engagement goal defined in terms of clicks, impressions, and so on. This is derived from ad space available goal type.Possible values are:LIFETIMEDAILY |
| UserEngagementGoalUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number or percentage of impressions or clicks for the ad creative. |
| UserEngagementGoalUnitType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of goal unit.Possible values are:IMPRESSIONSCLICKS |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdOrderItemConfigFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdOrderItemHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
