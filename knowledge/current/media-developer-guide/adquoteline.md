---
title: "AdQuoteLine"
domain: media-developer-guide
topic: adquoteline
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.627Z
estimatedTokens: 4340
keywords: [AdQuoteLine, line, item, advertisement, campaign, quote, API, version, 51.0, later, Calls, Associated, Objects]
---

# AdQuoteLine

> Represents the details of a line item in an advertisement campaign quote. This object
      is available in API version 51.0 and later.

# AdQuoteLine

Represents the details of a line item in an advertisement campaign quote. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdBleedAmount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe distance from the edge of the page. |
| AdBleedAmountUom | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the ad bleed height and width measure.Possible values are:InchesPixelsmm |
| AdCreativeSizeTypes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionLists user selected, semicolon separated creative size types from the possible choices presented by each ad space. For example: 720 X 350; 400 X 350. |
| AdCreativeUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the ad creative. It may or may not be hosted in Salesforce. |
| AdPlacementPriorityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the priority type of an ad placement.Possible values are:SponsorshipStandard |
| AdQuoteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the quote that the ad quote line is a part of.This is a relationship field.Relationship NameQuoteId__rRelationship TypeMaster-detailRefers ToQuote (the master object) |
| AdRequestedEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe requested end date and time for the line item. |
| AdRequestedStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe requested start date and time for the placement. |
| AdServerFees | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ad server fees for the ad quote line. |
| AdServerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ad server associated with the ad quote line.This field is a relationship field.Relationship NameAdServerRefers ToAdServer |
| AdServerProposalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the ad quote line item proposal in the ad server. |
| AdServerProposalLineIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the ad quote line item proposal in the ad server. |
| AdServerProposalLineStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the ad quote line item proposal in the ad server.Possible values are:CompletedDeliveringDraftPausedReady |
| AdSpaceSpecificationAdServer | TypestringPropertiesFilter, Nillable, SortDescriptionThe ad server responsible to serve the ad creative.This is a calculated field. |
| AdSpaceSpecificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad space specification associated with the ad quote line.This is a relationship field.Relationship NameAdSpaceSpecificationId__rRelationship TypeLookupRefers ToAdSpaceSpecification |
| AdSpaceSpecificationMediaChannel | TypestringPropertiesFilter, Nillable, SortDescriptionThe media channel of the related ad space specification.This is a calculated field. |
| AdSpaceSpecificationType | TypepicklistPropertiesFilter, Nillable, SortDescriptionSpecifies the type of the related ad space specification.This is a calculated field. |
| AdTimePerEpisode | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ad time for each episode customer is paying for in seconds. |
| AvailabilityStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the availability status of the item in the ad server.Possible values are:AvailableFullHalfNot Available |
| AvailableAdServerUnits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of units of the item available in the ad server. |
| BillingCycle | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the billing cycle of an ad quote line.Possible values are:BroadcastCalendarEnd Of Flight |
| BillingMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the billing mode of an ad quote line.Possible values are:FractionalRetailThresholdUsage |
| BonusAdTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe bonus ad time in seconds provided to the customer. |
| Budget | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe budget provided for the ad quote line. |
| ConfigurationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the ad quite line is configured. |
| ContractedQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contracted quantity of the ad quote line. |
| CostPerRatingPoint | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost per rating point calculated on the basis of QuoteLineItem.Implied Rate / AdSpaceSpec.Audience Size rating. |
| CustomerDayPart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the ad space specification slot.Possible values are:Non Prime TimePrime Time |
| DeliveryFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency at which the item is delivered.Possible values are:As fast as possibleEvenlyFrontloaded |
| EstimatedQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe estimated quantity of the ad quote line. |
| GrossRatingPoint | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe gross rating of the ad quote line calculated on the basis of AdSpaceSpec.Audience Size Rating * Paid Commercial Time per TimeSlot. |
| ImpliedRate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed by publishers to organize the revenue structure within the deal. This value is often internal to the publisher organization and not customer facing. |
| ImpliedTotal | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCalculated from the implied rate and is used by publishers to organize the revenue structure within the deal. This value is often internal to the publisher organization and not customer facing. |
| ImpressionLimit | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe limit for the number of impressions that can be delivered for the item. |
| IsAdBleedEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the ad extends all the way to the edge of the page on at least one side.The default value is 'false'. |
| IsBudgetBasedQuantity | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the ad quote line budget is calculated based on the required quantity.The default value is false. |
| LastAvailabilityCheck | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the item availability was last checked on the ad server. |
| LastConfigured | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ad quote line was last updated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MaxDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum duration of the ad quote line. |
| MaximumFrequency | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the maximum number of times Ad is served for frequency capping. |
| MaximumFrequencyInterval | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the maximum frequency unit used for frequency capping.Possible values are:DayHourMinuteSecond |
| MaximumUserFrequency | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates maximum number of times a unique user sees the Ad over a given time period. |
| MaximumUserFrequencyInterval | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies maximum user frequency interval.Possible values are:DayHourMinuteSecond |
| MediaChannelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the media channel associated with the ad quote line.This field is a relationship field.Relationship NameMediaChannelRefers ToMediaChannel |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the media type of a placement.Possible values are:DigitalOtherOutdoorPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad quote line. |
| PaidAdTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal Ad Time slots customer is paying for in seconds. |
| ParentAdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent ad quote that the quote is a part of.This field is a relationship field.Relationship NameParentAdQuoteLineRefers ToAdQuoteLine |
| PercentageAdTime | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the commercial time slot the placement represents in the whole deal. |
| PricingModel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the pricing model of the ad quote line.Possible values are:CPCCPM |
| PrimaryCostPerMille | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescription |
| PrimaryDemographicCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the primary demographic code associated with the ad quote item.This field is a relationship field.Relationship NamePrimaryDemographicCodeRefers ToAdDemographicCode |
| PrimaryGrpPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe primary group percentage of the ad quote line. |
| PrimaryImpressions | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary impressions of the ad quote line. |
| PrimaryImpsPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe primary impression percentage of the ad quote line. |
| PrimaryRating | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe primary rating of the ad quote line. |
| PrimaryTotalImps | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary total impressions of the ad quote line. |
| PriorAdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prior quote line in case of existing or changed order item, for new it will be blank.This field is a relationship field.Relationship NamePriorAdQuoteLineRefers ToAdQuoteLine |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the product associated with the ad quote line.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The quote line item for which the extension record is created.This is a relationship field.Relationship NameQuoteLineItemId__rRelationship TypeLookupRefers ToQuoteLineItem |
| QuoteLineItemProductCode | TypestringPropertiesFilter, Nillable, SortDescriptionThe product code of the quote line item's related product.This is a calculated field. |
| QuoteLineItemQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity of the related quote line item.This is a calculated field. |
| RadioSpotType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of radio spot for the ad quote line. |
| RequestedIssues | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe issues selected for a placement or line item for which the selected or defined ad creatives are to be inserted. |
| RequestedSplits | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe break-up of the requested units for each placement or line item, based on the selected frequency, whether daily or weekly. |
| RevisedPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revised price of the ad quote line. |
| SecondaryCostPerMille | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary cost per mile of the ad quote line. |
| SecondaryCostPerRatingPoint | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary cost per rating point of the ad quote line. |
| SecondaryDemographicCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the secondary demographic code of the ad quote line.This field is a relationship field.Relationship NameSecondaryDemographicCodeRefers ToAdDemographicCode |
| SecondaryGrossRatingPoint | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary gross rating point of the ad quote line. |
| SecondaryGrpPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary group percentage of the ad quote line. |
| SecondaryImpressions | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe secondary impressions of the ad quote line. |
| SecondaryImpsPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary impression percentage of the ad quote line. |
| SecondaryRating | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe secondary rating of the ad quote line. |
| SecondaryTotalImps | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe secondary total impressions of the ad quote line. |
| Skippable | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the ad quote line can be skipped.Possible values are:AnyDisableEnable |
| SponsorshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of sponsorship.Possible values are:Co Presented ByPresented BySponsored By |
| TargetingParameters | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe ad creative targeting parameters in JSON format. |
| TaskStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the task executed for the ad quote line.Possible values are:FailedIn_Progress—In ProgressSuccessfulThe default value is Successful. |
| TaskType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of task executed for the ad quote line item. |
| TotalAdServerUnits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe requested number of units of the item. |
| TotalAdTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of bonus and paid ad time or ad time per episode multiplied by number of episodes on media content title of ad space specification. |
| UserEngagementGoalPct | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage goal of the ad quote line. |
| UserEngagementGoalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the user engagement goal defined in terms of clicks, impressions, and so on. |
| UserEngagementGoalUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number or percentage of impressions or clicks that are reserved for the ad creative. |
| UserEngagementGoalUnitType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of goal unit. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdQuoteLineFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdQuoteLineHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
