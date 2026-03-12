---
title: "IndicatorResult"
domain: psc-api
topic: indicatorresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:32.460Z
estimatedTokens: 1065
keywords: [IndicatorResult, result, indicator, assignment, time, period, track, performance, API, version, 59.0, later, Calls, Special, Access]
---

# IndicatorResult

> Represents the result of an indicator assignment for the specified
         time period that can be used to track the performance of the indicator. This object is
      available in API version 59.0 and later.

# IndicatorResult

Represents the result of an indicator assignment for the specified time period that can be used to track the performance of the indicator. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   This object is available in products that include the Outcome Management license where Outcome Management is enabled and the Manage Outcomes system permission is assigned to users.
-   This object is available in Net Zero Cloud with a Growth license where the Manage Environmental, Social, and Governance Programs system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CalculationMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines whether the indicator result was added manually or calculated by automation. This field is available from API version 60.0 and later.Possible values are:AutomaticallyCalculatedManual |
| Denominator | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe denominator in automatically-calculated results that are an average or percent. This field is available from API version 60.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the indicator result. |
| FlowDefinitionApiName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe API name of the flow definition associated with this indicator result. This field is available from API version 60.0 and later. |
| FlowVersion | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe version of the flow that calculated this result. This field is available from API version 60.0 and later. |
| IndicatorPerformancePeriodId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe indicator performance period for which the result is defined.This field is a relationship field.Relationship NameIndicatorPerformancePeriodRelationship TypeMaster-DetailRefers ToIndicatorPerformancePeriod |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last referenced this indicator result. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last viewed this indicator result. |
| MeasurementDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the indicator result is measured. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the indicator result. |
| Numerator | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe numerator in automatically-calculated results that are an average or percent. This field is available from API version 60.0 and later. |
| ResultValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe result for the indicator performance period. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the result for the time period.Possible values are:FinalInterim |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndicatorResultFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[IndicatorResultHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
