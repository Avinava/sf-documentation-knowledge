---
title: "CoverageBenefitItemLimit"
domain: health-cloud-object-reference
topic: coveragebenefititemlimit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.972Z
estimatedTokens: 1273
keywords: [CoverageBenefitItemLimit, track, associated, specific, benefit, relates, expenditures, limits, coverage, levels, eligibility, exclusion, API, version, 53.0]
---

# CoverageBenefitItemLimit

> Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and exclusion. This object is
		available in API version 53.0 and later.

# CoverageBenefitItemLimit

Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and exclusion. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AllowedLimit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMaximum amount that will be paid for the service. |
| AllowedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum quantity allowed of the coverage benefit item.This field is available in API Version 62.0 and later. |
| AllowedQuantityUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the allowed quantity of the coverage benefit item.This field is a relationship field.This field is available in API Version 62.0 and later.Relationship NameAllowedQuantityUnitRefers ToUnitOfMeasure |
| AppliedLimit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the benefit has been claimed. |
| AppliedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of the coverage benefit item already used by the member.This field is available in API Version 62.0 and later. |
| AppliedQuantityUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the applied quantity of the coverage benefit item.This field is a relationship field.This field is available in API Version 62.0 and later.Relationship NameAppliedQuantityUnitRefers ToUnitOfMeasure |
| CareLimitTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the limit is a required payment or excluded service.This is a relationship field.Relationship NameCareLimitTypeRelationship TypeLookupRefers ToCareLimitType |
| CoverageBenefitItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecific service covered by the insurance plan.This is a relationship field.Relationship NameCoverageBenefitItemRelationship TypeLookupRefers ToCoverageBenefitItem |
| CoverageLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the persons eligible for the benefit item.Possible values are:EmployeeSpouse—Employee & SpouseFamilyIndividual |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LimitNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionGeneral information about the limit. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the coverage benefit item limit. |
| NetworkType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the benefit refers to in-network providers or out-of-network providers.Possible values are:In—In-network providersNA—Not applicableOut—Out-of-network providersIf the related CoverageBenefitItem record has an IsInPlanNetwork value of true, NetworkType is typically In. If the related record has an IsInPlanNetwork value of false, NetworkType can be any value. |
| PriorityOrder | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis limit's position in the sequence for calculating limits. |
| TermType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of time period during which the benefit item is available.Possible values are:Calendar YearDayMonthYear to Date |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CoverageBenefitItemLimitChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

## Related Topics

- CoverageBenefitItemLimitChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
