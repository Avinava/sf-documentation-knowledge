---
title: "AdTargetCategorySegment"
domain: media-developer-guide
topic: adtargetcategorysegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.844Z
estimatedTokens: 1291
keywords: [AdTargetCategorySegment, segment, target, category, API, version, 55.0, later, Calls, Associated, Objects]
---

# AdTargetCategorySegment

> Represents a segment in an ad target category. This object is
      available in API version 55.0 and later.

# AdTargetCategorySegment

Represents a segment in an ad target category. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AvailableValues | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of values that are part of the ad target category segment. |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The code of the ad target category segment in the ad server. |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the type of ad target category segment.Possible values are:TextNumberBooleanPicklistMultiSelectPicklist |
| DependentCategorySegmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad target category segment that the current ad target category segment is dependent on.This is a relationship field.Relationship NameDependentCategorySegmentRelationship TypeLookupRefers ToAdTargetCategorySegment |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the ad target category segment. The data for this field can be imported and mapped from an ad server. |
| DisplaySequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence of the ad target catgory segment in the ad target category it is part of. The sequence number dicedies the sequence in which segments are displayed in a category. |
| DisplayType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the display type of the ad target category segment.Possible values are:ChecklistRadioButtonCheckboxPicklist |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this ad target category segment is active.The default value is 'false'. |
| IsAvailableForSelfService | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this segment record is available only at the Agent Console or at self care portal as well. By default, once activated all segments are available at Agent Console, but can be available on the Self Service Console only when this field's value is set to true. Some of the categories contain segments, which can be filled only by the agent and they mainly contain the configurations needed by ad server.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the media type of the ad target category segment.Possible values are:DigitalTVRadioPrintOutdoorOther |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad target category. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad target category segment.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the ad target category segment.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| TargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the ad target category that the ad target category segment is a part of.This is a relationship field.Relationship NameTargetCategoryRelationship TypeLookupRefers ToAdTargetCategory |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdTargetCategorySegmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdTargetCategorySegmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdTargetCategorySegmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
