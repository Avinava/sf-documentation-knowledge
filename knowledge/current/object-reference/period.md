---
title: "Period"
domain: object-reference
topic: period
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.746Z
estimatedTokens: 590
keywords: [Period, fiscal, defined, FiscalYearSettings, Calls, Special, Access, Rules, Usage]
---

# Period

> Represents a fiscal period defined in FiscalYearSettings.

# Period

Represents a fiscal period defined in FiscalYearSettings.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only Chatter Free users and standard users can access this object.

## Fields

| Field | Details |
| --- | --- |
| EndDate | TypedatePropertiesFilter, Group, SortDescriptionThe last date of the fiscal period. |
| FiscalYearSettingsId | TypereferencePropertiesFilter, Nillable, Group, SortDescriptionThe parent record for this period.This is a relationship field.Relationship NameFiscalYearSettingsRelationship TypeLookupRefers ToFiscalYearSettings |
| FullyQualifiedLabel | TypestringPropertiesGroup, NillableDescriptionRepresents the period’s complete name in the UI. For example, “September FY 2016”. |
| IsForecastPeriod | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the period is associated with Salesforce Forecasting (true) or not (false). |
| Number | TypeintPropertiesFilter, Nillable, Group, SortDescriptionIf the labeling scheme of your fiscal year's quarters or months is numbered, this field indicates the relative number of the row. |
| PeriodLabel | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionIf the months in your fiscal year use custom names, then this field contains the appropriate name for rows of type Month. |
| QuarterLabel | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionIf the quarters in your fiscal year use custom names, then this field contains the appropriate name for rows of type Quarter. |
| StartDate | TypedatePropertiesFilter, Group, SortDescriptionThe first date of the fiscal period. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the period is of type Month, Quarter, Week, or Year. Label is the field value. |

## Usage

In API version 36.0 and earlier, querying the Period object yields no results. In API version 37.0 and later, a query returns period records.

#### See Also

-   [FiscalYearSettings](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fiscalyearsettings.htm "Settings to define a custom or standard fiscal year for your organization. This object has a parent-child relationship with the Period object.")

## Related Topics

- FiscalYearSettings (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fiscalyearsettings.htm)
