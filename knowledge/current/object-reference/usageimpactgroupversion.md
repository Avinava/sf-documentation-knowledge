---
title: "UsageImpactGroupVersion"
domain: object-reference
topic: usageimpactgroupversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.561Z
estimatedTokens: 871
keywords: [UsageImpactGroupVersion, collection, versions, Usage, Impact, Groups, API, version, 58.0, later, Calls, Special, Access, Rules, Associated]
---

# UsageImpactGroupVersion

> Represents a collection of fields to set up the versions of Usage Impact Groups. This object is available in API version 58.0 and later.

# UsageImpactGroupVersion

Represents a collection of fields to set up the versions of Usage Impact Groups. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only with EAndU Cloud Usage Impact Access permission set.

## Fields

| Field | Details |
| --- | --- |
| ApprovedMeasureExtlid | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe approved Measure Category ID assigned by a regulator. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the Usage Impact Group Version. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the validity of Usage Impact Group Version ends. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Usage Impact Group Version is active.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Usage Impact Group Version. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the validity of Usage Impact Group Version begins. |
| TechResourceManualCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code and version of the Technical Reference Manual which is the source for the values associated with this Usage Impact Group Version. This is necessary for regulatory reporting. |
| UsageImpactGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Usage Impact Group object associated with the Usage Impact Group Version.This field is a relationship field.Relationship NameUsageImpactGroupRelationship TypeLookupRefers ToUsageImpactGroup |
| Version | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version number of the Usage Impact Group Version. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageImpactGroupVersionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[UsageImpactGroupVersionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageImpactGroupVersionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[UsageImpactGroupVersionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[UsageImpactGroupVersionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
