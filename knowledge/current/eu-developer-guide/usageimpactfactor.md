---
title: "UsageImpactFactor"
domain: eu-developer-guide
topic: usageimpactfactor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.441Z
estimatedTokens: 739
keywords: [UsageImpactFactor, collection, Usage, Impact, Factors, across, jurisdictions, programs.This, API, version, 58.0, later, Calls, Special, Access]
---

# UsageImpactFactor

> Represents a collection of fields to set up the Usage Impact Factors used
         across jurisdictions and programs.This object is available in API version 58.0 and
      later.

# UsageImpactFactor

Represents a collection of fields to set up the Usage Impact Factors used across jurisdictions and programs.This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only with the EAndU Cloud Usage Impact Access permission set.

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Usage Impact Factor is active.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Usage Impact Factor. |
| ShortForm | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe acronym of the Usage Impact Factor. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of Usage Impact FactorPossible values are:AdjustedGrossAnnual—Adjusted Gross AnnualAdjustedGrossAnnualMMBTU—Adjusted Gross Annual MMBTUAdjustedGrossAnnualkW—Adjusted Gross Annual kWAdjustedGrossAnnualkWSummer—Adjusted Gross Annual kW SummerAdjustedGrossAnnualkWWinter—Adjusted Gross Annual kW WinterAdjustedGrossAnnualkWh—Adjusted Gross Annual kWhGrossAnnualMMBTU—Gross Annual MMBTUGrossAnnualkW—Gross Annual kWGrossAnnualkWh—Gross Annual kWhNetAnnual—Net AnnualNetLifetime—Net LifetimeNetToGross—Net To GrossNetToGrossFR—Net To Gross FRUsefulLife—Useful Life |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UsageImpactFactorChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[UsageImpactFactorFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[UsageImpactFactorHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[UsageImpactFactorOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[UsageImpactFactorShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
