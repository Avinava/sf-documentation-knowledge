---
title: "Media Cloud Standard Objects"
domain: media-developer-guide
topic: media-cloud-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.982Z
estimatedTokens: 4396
keywords: [Media, Cloud, Standard, Objects, work, Salesforce]
---

# Media Cloud Standard Objects

> Use standard objects to work with the Salesforce Media Cloud.

# Media Cloud Standard Objects

Use standard objects to work with the Salesforce Media Cloud.

-   **[AdAvailabilityDimensions](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabilitydimensions.htm)**
    Represents references to specific records with common filterable fields between media types. This object is available in API version 59.0 and later.
-   **[AdAvailabilityJob](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabilityjob.htm)**
    Represents the batch job details that populate data in other aggregate tables. This object is available in API version 59.0 and later.
-   **[AdAvailabilityViewConfig](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabilityviewconfig.htm)**
    Represents a configuration that decides how and what type of information is displayed on Media Cloud-specific pages in the org. This object is available in API version 59.0 and later.
-   **[AdAvailableTargetSegment](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabletargetsegment.htm)**
    Represents the junction between ad product and ad target category based on the media type. This object is available in API version 63.0 and later.
-   **[AdAvailableTargetSegmentValue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabletargetsegmentvalue.htm)**
    Represents a junction between ad available target segment and ad target segment value. This object is available in API version 63.0 and later.
-   **[AdBuyServerAccount](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adbuyserveraccount.htm)**
    Represents a user account in the buy side platform. The user can send RFPs to the seller and can accept, reject, or review proposals. Every proposal in the ad server requires both buyer and seller account details. This object is available in API version 59.0 and later.
-   **[AdCreativeSizeType](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adcreativesizetype.htm)**
    Represents the size of an ad creative such as 728 x 90 pixels. This object is available in API version 54.0 and later.
-   **[AdDemographicCode](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_addemographiccode.htm)**
    Represents the demographic code details of an audience segment. This object is available in API version 60.0 and later.
-   **[AdDigitalAvailability](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_addigitalavailability.htm)**
    Represents the daily, weekly, or monthly view of offered, available, booked, and forecasted units for the Digital media type calendar view. This object is available in API version 59.0 and later.
-   **[AdLinearAvailability](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adlinearavailability.htm)**
    Represents the daily, weekly, or monthly view of offered, available, booked, and forecasted units for the Linear media type calendar view. This object is available in API version 59.0 and later.
-   **[AdOpportunity](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adopportunity.htm)**
    Represents ad slaes specific details of an advertisment campaign opportunity. This object is available in API version 59.0 and later.
-   **[AdOpportunityLineItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adopportunitylineitem.htm)**
    Represents a line item in an advertisement opportunity. This object is available in API version 63.0 and later.
-   **[AdOrderItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderitem.htm)**
    Represents the advertisement campaign specific details of an ad order item.. This object is available in API version 54.0 and later.
-   **[AdOrderItemAdSpaceSpec](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderitemadspacespec.htm)**
    Represents a junction between an ad order item and an ad space specification. This object is available in API version 62.0 and later.
-   **[AdOrderItemCreativeSizeType](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderitemcreativesizetype.htm)**
    Represents a junction between ad order line and an ad creative size, including information about companion creative sizes for each ad creative size and the number of times each parent creative must be served. This object is available in API version 59.0 and later.
-   **[AdOrderItemDeliveryFrequency](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderitemdeliveryfrequency.htm)**
    Represents information about the frequency at which an ad order item must be served. This object is available in API version 64.0 and later.
-   **[AdOrderItemDeliverySchedule](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderitemdeliveryschedule.htm)**
    Represents information about the time period and the days on which the ad order item must be served. This object is available in API version 64.0 and later.
-   **[AdOrderItemPrintIssue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderitemprintissue.htm)**
    Represents the media print issue for an ad order item. This object is available in API version 56.0 and later.
-   **[AdOrderItemUnitsSplit](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderitemunitssplit.htm)**
    Represents the split interval of the required units for an ad order line. This object is available in API version 56.0 and later.
-   **[AdOrderLineAdTarget](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderlineadtarget.htm)**
    Represents the selections made by the user against a specific Ad Order Line item for a particular category. This object is available in API version 55.0 and later.
-   **[AdOrderLineHiatus](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderlinehiatus.htm)**
    Represents the hiatus details of the media placement in a order line. This object is available in API version 60.0 and later.
-   **[AdOrderLineTargetExpression](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderlinetargetexpression.htm)**
    Represents the expression that decides the targeting criteria for an ad order line. This object is available in API version 62.0 and later.
-   **[AdOrderLineTargetValue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adorderlinetargetvalue.htm)**
    Represents the target values that are part of the targeting criteria of the ad order line. This object is available in API version 63.0 and later.
-   **[AdPageLayoutType](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adpagelayouttype.htm)**
    Represents layouts for print, such as magazines and newspapers, or for screens, websites, applications. This object is available in API version 57.0 and later.
-   **[AdProductDefaultTargetCategory](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adproductdefaulttargetcategory.htm)**
    Represents the default ad target category values for an ad product. This object is available in API version 58.0 and later.
-   **[AdProductDefaultTargetValue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adproductdefaulttargetvalue.htm)**
    Represents a junction between a product and default target value. This object is available in API version 63.0 and later.
-   **[AdProductTargetCategory](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adproducttargetcategory.htm)**
    Represents a junction between a product and a target category. This object is available in API version 55.0 and later.
-   **[AdQuote](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquote.htm)**
    Represents the details of a quote for an advertisement campaign. This object is available in API version 51.0 and later.
-   **[AdQuoteLine](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquoteline.htm)**
    Represents the details of a line item in an advertisement campaign quote. This object is available in API version 51.0 and later.
-   **[AdQuoteLineAdSpaceSpec](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelineadspacespec.htm)**
    Represents a junction between an ad quote line and an applicable ad space specification. This object is available in API version 63.0 and later.
-   **[AdQuoteLineAdTarget](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelineadtarget.htm)**
    Represents the selections made by the user against a specific ad quote line item for a particular category. This object is available in API version 55.0 and later.
-   **[AdQuoteLineCreativeSizeType](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelinecreativesizetype.htm)**
    Represents a junction between ad quote line and an ad creative size, including information about companion creative sizes for each ad creative size and the number of times each parent creative must be served. This object is available in API version 59.0 and later.
-   **[AdQuoteLineDeliveryFrequency](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelinedeliveryfrequency.htm)**
    Represents information about the frequency at which an ad quote item must be served. This object is available in API version 64.0 and later.
-   **[AdQuoteLineDeliverySchedule](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelinedeliveryschedule.htm)**
    Represents information about the time period and the days on which the ad quote line must be served. This object is available in API version 64.0 and later.
-   **[AdQuoteLineHiatus](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelinehiatus.htm)**
    Represents the hiatus period details of a media placement. This object is available in API version 60.0 and later.
-   **[AdQuoteLinePrintIssue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelineprintissue.htm)**
    Represents the media print issue for an ad quote item. This object is available in API version 56.0 and later.
-   **[AdQuoteLineTargetExpression](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelinetargetexpression.htm)**
    Represents the expression that decides the targeting criteria for an ad quote line. This object is available in API version 62.0 and later.
-   **[AdQuoteLineTargetValue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelinetargetvalue.htm)**
    Represents the target values that are part of the targeting criteria of the ad order line. This object is available in API version 63.0 and later.
-   **[AdQuoteLineUnitsSplit](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adquotelineunitssplit.htm)**
    Represents the split interval of the required units for an ad quote line. This object is available in API version 56.0 and later.
-   **[AdServer](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adserver.htm)**
    Represents the details of an external ad server that serves advertising content on various platforms. This object is available in API version 54.0 and later.
-   **[AdServerAccount](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adserveraccount.htm)**
    Represents a junction between an account and an ad server. This object is available in API version 54.0 and later.
-   **[AdServerAccountContact](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adserveraccountcontact.htm)**
    Represents a junction between an ad server account and a contact. This object is available in API version 64.0 and later.
-   **[AdServerUser](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adserveruser.htm)**
    Represents a junction between a user and an ad server. This object is available in API version 54.0 and later.
-   **[AdSpace](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adspace.htm)**
    Each row represents information about an ad inventory item, such as related product, media type, media channel, applicable ad space, eligible creative size, and eligible targeting value. This object is available in API version 65.0 and later.
-   **[AdSpaceCapacity](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adspacecapacity.htm)**
    Each row represents information about an ad inventory item's total capacity, and booked, reserved, and pitched allocation count for a specific time period. This object is available in API version 65.0 and later.
-   **[AdSpaceCapacityAllocation](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adspacecapacityallocation.htm)**
    Each row represents the junction between an ad space and the transaction that the ad space is allocated to. The ad space's transaction allocation period and quantity is also available in each row. This object is available in API version 65.0 and later.
-   **[AdSpaceCreativeSizeType](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adspacecreativesizetype.htm)**
    Represents an ad space creative size type the decides the compatibility of an ad space specification with an ad creative size type. This object is available in API version 54.0 and later.
-   **[AdSpaceGroupMember](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adspacegroupmember.htm)**
    Represents the junction between an ad space specification and an ad space group. This object is available in API version 54.0 and later.
-   **[AdSpaceSpecProduct](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adspacespecproduct.htm)**
    Represents a junction between an ad space specification and a product. This object is available in API version 63.0 and later.
-   **[AdSpaceSpecification](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adspacespecification.htm)**
    Represents a specific place or a group of places where an ad creative is served. This object is available in API version 54.0 and later.
-   **[AdSpecMediaPrintIssue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adspecmediaprintissue.htm)**
    Represents a junction between an ad space specification and a media print issue. This object is available in API version 57.0 and later.
-   **[AdTargetCategory](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adtargetcategory.htm)**
    Represents a targeting category that's used to group multiple targeting segments. This object is available in API version 55.0 and later.
-   **[AdTargetCategorySegment](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adtargetcategorysegment.htm)**
    Represents a segment in an ad target category. This object is available in API version 55.0 and later.
-   **[AdTargetSegmentValue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adtargetsegmentvalue.htm)**
    Represents a targeting value of an ad target category segment. This object is available in API version 62.0 and later.
-   **[AdTargetTemplate](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adtargettemplate.htm)**
    Represents the ad target template that's specific to a media type. This object is available in API version 63.0 and later.
-   **[AdTargetTemplateValue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adtargettemplatevalue.htm)**
    Represents a targeting value that's included in an ad target template. This object is available in API version 63.0 and later.
-   **[MediaChannel](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_mediachannel.htm)**
    Represents a media property where advertisements are served. This object is available in API version 54.0 and later.
-   **[MediaContentTitle](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_mediacontenttitle.htm)**
    Represents the details of an event or show that's broadcast on television or radio. This object is available in API version 54.0 and later.
-   **[MediaPrintIssue](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_mediaprintissue.htm)**
    Represents the details of a print media issue with details such as issue name, date, advertising deadline about the publication. This object is available in API version 57.0 and later.
-   **[OpportunityLineItemSchdActual](atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_opportunitylineitemschdactual.htm)**
    Represents the information about the different amounts that are recognized across the lifecycle of an opportunity line item. This object is available in API version 64.0 and later.

## Related Topics

- AdAvailabilityDimensions (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabilitydimensions.htm)
- AdAvailabilityJob (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabilityjob.htm)
- AdAvailabilityViewConfig (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabilityviewconfig.htm)
- AdAvailableTargetSegment (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabletargetsegment.htm)
- AdAvailableTargetSegmentValue (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adavailabletargetsegmentvalue.htm)
- AdBuyServerAccount (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adbuyserveraccount.htm)
- AdCreativeSizeType (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adcreativesizetype.htm)
- AdDemographicCode (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_addemographiccode.htm)
- AdDigitalAvailability (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_addigitalavailability.htm)
- AdLinearAvailability (atlas.en-us.media_developer_guide.meta/media_developer_guide/sforce_api_objects_adlinearavailability.htm)
