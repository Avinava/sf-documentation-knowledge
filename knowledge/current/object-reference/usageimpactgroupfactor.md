---
title: "UsageImpactGroupFactor"
domain: object-reference
topic: usageimpactgroupfactor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.548Z
estimatedTokens: 794
keywords: [UsageImpactGroupFactor, junction, Usage, Impact, Group, version, Factor, API, 58.0, later, Calls, Special, Access, Rules, Associated]
---

# UsageImpactGroupFactor

> Represents a junction between an Usage Impact Group version and Usage
         Impact Factor. This object is available in API version 58.0 and later.

# UsageImpactGroupFactor

Represents a junction between an Usage Impact Group version and Usage Impact Factor. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only with EAndU Cloud Usage Impact Access permission set.

## Fields

| Field | Details |
| --- | --- |
| FactorValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the value of the Usage Impact Group Factor. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Usage Impact Group Factor is active.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Usage Impact Group Factor. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe UnitOfMeasure object associated with the Usage Impact Group Factor.This field is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
| UsageImpactFactorId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Usage Impact Factor object associated with the Usage Impact Group Factor.This field is a relationship field.Relationship NameUsageImpactFactorRelationship TypeLookupRefers ToUsageImpactFactor |
| UsageImpactGroupVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Usage Impact Group Version object associated with the Usage Impact Group Factor.This field is a relationship field.Relationship NameUsageImpactGroupVersionRelationship TypeLookupRefers ToUsageImpactGroupVersion |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageImpactGroupFactorChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[UsageImpactGroupFactorFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageImpactGroupFactorHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[UsageImpactGroupFactorOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[UsageImpactGroupFactorShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
