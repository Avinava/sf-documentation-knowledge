---
title: "UsageImpactGroup"
domain: eu-developer-guide
topic: usageimpactgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.447Z
estimatedTokens: 653
keywords: [UsageImpactGroup, collection, Usage, Impact, Groups, across, jurisdictions, programs, API, version, 58.0, later, Calls, Special, Access]
---

# UsageImpactGroup

> Represents a collection of fields to set up the Usage Impact Groups
         used across jurisdictions and programs. This object is available in API version 58.0
      and later.

# UsageImpactGroup

Represents a collection of fields to set up the Usage Impact Groups used across jurisdictions and programs. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only with the EAndU Cloud Usage Impact Access permission set.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the Usage Impact Group. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Usage Impact Group is active.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Usage Impact Group. |
| ShortForm | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe acronym of the Usage Impact Group. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of Usage Impact Group.Possible values are:ForwardMarkets—Forward MarketsPlanningProduction |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageImpactGroupChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[UsageImpactGroupFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageImpactGroupHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[UsageImpactGroupOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[UsageImpactGroupShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
