---
title: "FiscalYearSettings"
domain: object-reference
topic: fiscalyearsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.210Z
estimatedTokens: 760
keywords: [FiscalYearSettings, Settings, define, custom, standard, fiscal, year, organization, parent-child, relationship, Period, Calls, Special, Access, Rules]
---

# FiscalYearSettings

> Settings to define a custom or standard fiscal year for your
   organization. This object has a parent-child relationship with the Period
  object.

# FiscalYearSettings

Settings to define a custom or standard fiscal year for your organization. This object has a parent-child relationship with the Period object.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only partner users and standard users can access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the setting. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionEnd date of the fiscal year. |
| IsStandardYear | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the fiscal year is a standard calendar year (true) or a custom fiscal year (false). |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionA name for the fiscal year. Limit: 80 characters. |
| PeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the associated fiscal period. |
| PeriodLabelScheme | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe numbering scheme used for fiscal periods. |
| PeriodPrefix | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe prefix of fiscal periods. For example, if p is the prefix, then the first period is “P1.” |
| QuarterLabelScheme | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe numbering scheme used for fiscal quarters. |
| QuarterPrefix | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe prefix of fiscal quarters. For example, if “Q” is the prefix, then the fourth quarter would be “Q4.” |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionStart date of the fiscal year. |
| WeekLabelScheme | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe numbering scheme used for weeks. |
| WeekStartDay | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe name of the day that starts the week, for example Monday or Sunday |
| YearType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates one of two types of fiscal years, Standard or Custom. Standard denotes the standard Gregorian calendar, while Custom means a fiscal year with a custom structure. |

#### See Also

-   [Period](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_period.htm "Represents a fiscal period defined in FiscalYearSettings.")

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Period (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_period.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
