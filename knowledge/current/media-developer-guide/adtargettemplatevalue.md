---
title: "AdTargetTemplateValue"
domain: media-developer-guide
topic: adtargettemplatevalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.864Z
estimatedTokens: 756
keywords: [AdTargetTemplateValue, targeting, that's, included, target, template, API, version, 63.0, later, Calls, Associated, Objects]
---

# AdTargetTemplateValue

> Represents a targeting value that's included in an ad target template.
      This object is available in API version 63.0 and later.

# AdTargetTemplateValue

Represents a targeting value that's included in an ad target template. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdTargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad target category associated with the ad target template value.This field is a relationship field.Relationship NameAdTargetCategoryRefers ToAdTargetCategory |
| AdTargetSegmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad target category segment associated with the ad target template value.This field is a relationship field.Relationship NameAdTargetSegmentRefers ToAdTargetCategorySegment |
| AdTargetSegmentValueId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad target segment value associated with the ad target template value.This field is a relationship field.Relationship NameAdTargetSegmentValueRefers ToAdTargetSegmentValue |
| AdTargetTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ad target template that the targeting value is a part of.This field is a relationship field.Relationship NameAdTargetTemplateRelationship TypeMaster-detailRefers ToAdTargetTemplate (the master object) |
| IsIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a default target value is included (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the ad target template value. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdTargetTemplateValueFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdTargetTemplateValueHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
