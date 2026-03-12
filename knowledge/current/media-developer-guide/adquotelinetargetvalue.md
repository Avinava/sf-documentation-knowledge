---
title: "AdQuoteLineTargetValue"
domain: media-developer-guide
topic: adquotelinetargetvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.697Z
estimatedTokens: 1066
keywords: [AdQuoteLineTargetValue, target, part, targeting, criteria, order, line, API, version, 63.0, later, Calls, Associated, Objects]
---

# AdQuoteLineTargetValue

> Represents the target values that are part of the targeting criteria
         of the ad order line. This object is available in API version 63.0 and later.

# AdQuoteLineTargetValue

Represents the target values that are part of the targeting criteria of the ad order line. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdQuoteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad quote associated with the ad quote line target value.This field is a relationship field.Relationship NameAdQuoteRefers ToAdQuote |
| AdQuoteLineCreativeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad quote line creative associated with the ad quote line target value.This field is a relationship field.Relationship NameAdQuoteLineCreativeRefers ToAdQuoteLineCreativeSizeType |
| AdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad quote line associated with the ad quote line target value.This field is a relationship field.Relationship NameAdQuoteLineRefers ToAdQuoteLine |
| AdTargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad target category that contains the selected ad target category value.This field is a relationship field.Relationship NameAdTargetCategoryRefers ToAdTargetCategory |
| IsEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the ad quote line target value can be edited during run time. |
| IsIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether an ad quote line target value is included in ad order (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the ad quote line target value. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad quote line target value.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| TargetCategorySegmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad target category segment associated with the ad quote line target value.This field is a relationship field.Relationship NameTargetCategorySegmentRefers ToAdTargetCategorySegment |
| TargetCategorySegmentValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad target segment value associated with the ad quote line target value.This field is a relationship field.Relationship NameTargetCategorySegmentValueRefers ToAdTargetSegmentValue |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdQuoteLineTargetValueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdQuoteLineTargetValueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdQuoteLineTargetValueShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
