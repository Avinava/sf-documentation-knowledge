---
title: "AdQuoteLineTargetExpression"
domain: media-developer-guide
topic: adquotelinetargetexpression
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.684Z
estimatedTokens: 789
keywords: [AdQuoteLineTargetExpression, expression, decides, targeting, criteria, quote, line, API, version, 62.0, later, Calls, Associated, Objects]
---

# AdQuoteLineTargetExpression

> Represents the expression that decides the targeting criteria for an
         ad quote line. This object is available in API version 62.0 and later.

# AdQuoteLineTargetExpression

Represents the expression that decides the targeting criteria for an ad quote line. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad quote line associated with the ad quote line target expression.This field is a relationship field.Relationship NameAdQuoteLineRefers ToAdQuoteLine |
| Expression | TypetextareaPropertiesCreate, UpdateDescriptionRequired. The logical expression used in the ad quote line target expression. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the ad quote line target expression. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad quote line target expression.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| TargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad target category associated with the ad quote line target expression.This field is a relationship field.Relationship NameTargetCategoryRefers ToAdTargetCategory |
| TargetCategorySegmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad target category segment associated with the ad quote line target expression.This field is a relationship field.Relationship NameTargetCategorySegmentRefers ToAdTargetCategorySegment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdQuoteLineTargetExpressionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdQuoteLineTargetExpressionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdQuoteLineTargetExpressionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
