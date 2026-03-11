---
title: "TimeSheetTemplate"
domain: field-service
topic: timesheettemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:13.260Z
keywords: [TimeSheetTemplate, Supported, SOAP, Calls, REST, HTTP, Methods, Special, Access, Rules, Limitations, Fields]
---

# TimeSheetTemplate

# TimeSheetTemplate

Represents a template for creating time sheets in Field Service. Available in API version 46.0 and later.

## Supported SOAP Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, POST, PATCH, DELETE

## Special Access Rules

Field Service must be enabled to access TimeSheetTemplate. Users must have the Customize Application and Time Sheet Template permissions.

## Limitations

SOQL Limitations

## Fields

| Field | Details |
| --- | --- |
| Active | TypebooleanPropertiesDefaulted On Create, Filter, Group, SortDescriptionIndicates whether the time sheet template is active (true) or not (false). |
| Description | TypetextareaPropertiesNillableDescriptionThe time sheet template's description. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API name of the time sheet template. Can contain alphanumeric characters and underscores, and must begin with a letter.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Frequency | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionDefines the frequency of the time sheet creation period. One of the following values:DailyWeeklyEveryTwoWeeksTwiceAMonthMonthly |
| Fullname | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language associated with the time sheet template. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedAvailable in API version 48.0 and later. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe name of the time sheet template. |
| Metadata | Typemns:TimeSheetTemplatePropertiesCreate, Nillable, UpdateDescriptionThe TimeSheetTemplate metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace that identifies the package that manages the time sheet template. Available in API version 48.0 and later. |
| StartDate | TypedatePropertiesFilter, Group, SortDescriptionThe date when the time sheet takes effect. |
| TimeSheetTemplateAssignments | TypeQueryResultPropertiesNillableDescriptionA list of profiles that the template is assigned to. This field is only visible when the template has been assigned to at least one user profile. Available in API version 48.0 and later. |
| WorkWeekEndDay | TypepicklistPropertiesDefaulted On Create, Filter, Group, Restricted picklist, SortDescriptionThe end day of the template's work week. One of the following values:MondayTuesdayWednesdayThursdayFridaySaturdaySunday (default) |
| WorkWeekStartDay | TypepicklistPropertiesDefaulted On Create, Filter, Group, Restricted picklist, SortDescriptionThe start day of the template's work week. One of the following values:MondayTuesdayWednesdayThursdayFridaySaturdaySunday (default) |