---
title: "IndicatorPerformancePeriod"
domain: omnistudio
topic: indicatorperformanceperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.419Z
estimatedTokens: 1048
keywords: [IndicatorPerformancePeriod, time, period, including, frequency, indicator, results, calculated, baseline, API, version, 59.0, later, Calls, Special]
---

# IndicatorPerformancePeriod

> Represents information about a specified time period including the
         frequency at which indicator results should be calculated and the baseline value of the
         indicator. This object is available in API version 59.0 and later.

# IndicatorPerformancePeriod

Represents information about a specified time period including the frequency at which indicator results should be calculated and the baseline value of the indicator. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

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
| BaselineDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the baseline value. |
| BaselineValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the indicator assignment at the beginning of the indicator performance period. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the indicator performance period. |
| IndicatorAssignmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe indicator assignment that’s associated with the indicator performance period.This field is a relationship field.Relationship NameIndicatorAssignmentRelationship TypeMaster-DetailRefers ToIndicatorAssignment |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastResultMeasurementDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the last result value was measured.This field is a calculated field. |
| LastResultValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe result value from the most recently measured indicator result.This field is a calculated field. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the indicator performance period. |
| TargetProgress | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the progress of the target within the time period.Possible values are:At RiskCompleteNot MetNot StartedOn Track |
| TargetValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe target value of the indicator assignment within the time period. |
| TimePeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe time period that is associated with the indicator performance period.This field is a relationship field.Relationship NameTimePeriodRelationship TypeLookupRefers ToTimePeriod |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndicatorPerformancePeriodFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[IndicatorPerformancePeriodHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
