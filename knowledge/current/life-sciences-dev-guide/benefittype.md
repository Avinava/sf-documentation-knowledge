---
title: "BenefitType"
domain: life-sciences-dev-guide
topic: benefittype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.017Z
estimatedTokens: 638
keywords: [BenefitType, benefits, Financial, Assistance, Program, care, enrollee, API, version, 51.0, later, Calls, Associated, Objects]
---

# BenefitType

> Represents information about the type of benefits, such as Financial Assistance
      Program, available to the care program enrollee. This object is available in API version
    51.0 and later.

# BenefitType

Represents information about the type of benefits, such as Financial Assistance Program, available to the care program enrollee. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Benefit Type Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the benefit type. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe category of the benefit type. Picklist values aren't provided for this field and must be added based on the requirements of the organization. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of benefit type. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| ProcessType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The process type associated with the benefit.The possible value is:Financial Assistance ProgramThis value is available in API version 61.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe process type associated with the benefit.Possible values are:MonetaryServiceGoods |
| UnitofMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the benefit.This is a polymorphic relationship field.Relationship TypeUnitofMeasureRefers ToUnitofMeasure |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitTypeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[BenefitTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
