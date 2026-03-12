---
title: "TimeSheetTemplate"
domain: metadata-api
topic: timesheettemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:43.172Z
estimatedTokens: 777
keywords: [TimeSheetTemplate, Represents, template, creating, time, sheets, Field, Service., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location]
---

# TimeSheetTemplate

> Represents a template for creating time sheets in Field
    Service. This type extends the Metadata metadata type and inherits its 
    fullName field.

# TimeSheetTemplate

Represents a template for creating time sheets in Field Service. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

TimeSheetTemplate components have the suffix timeSheetTemplate and are stored in the timeSheetTemplates folder.

## Version

TimeSheetTemplate components are available in API version 46.0 and later.

## Special Access Rules

Field Service must be enabled. Users must have the Customize Application and Time Sheet Template permissions.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Indicates whether the time sheet template is active (true) or not (false). |
| description | string | The time sheet template's description. |
| frequency | TimeSheetFrequency (enumeration of type string) | Required. Defines the frequency of the time sheet creation period. One of the following values:DailyWeeklyEveryTwoWeeksTwiceAMonthMonthly |
| masterLabel | string | Required. The name of the time sheet template. |
| startDate | date | Required. The date when the time sheet takes effect. |
| timeSheetTemplateAssignments | TimeSheetTemplateAssignment | A list of profiles that the template is assigned to. |
| workWeekEndDay | DaysOfWeek (enumeration of type string) | Required. The end day of the template's work week. One of the following values:MondayTuesdayWednesdayThursdayFridaySaturdaySunday |
| workWeekStartDay | DaysOfWeek (enumeration of type string) | Required. The start day of the template's work week. One of the following values:MondayTuesdayWednesdayThursdayFridaySaturdaySunday |

## TimeSheetTemplateAssignment

Returns a quick action that’s associated with an EmbeddedServiceLiveAgent setup. The quick action includes the pre-chat form fields that the embedded chat window displays and shows the order in which the fields are displayed.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignedTo | string | The IDs of the user profiles that a time sheet template is assigned to. |

## Declarative Metadata Sample Definition

The following is an example of a TimeSheetTemplate file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version=“1.0” encoding=“UTF-8"?>
<TimeSheetTemplate xmlns=“http://soap.sforce.com/2006/04/metadata“>
   <active>true</active>
   <description>Time Sheet Template description</description>
   <frequency>Daily</frequency>
   <masterLabel>label</masterLabel>
   <startDate>2018-10-18</startDate>
   <timeSheetTemplateAssignments>
       <assignedTo>admin</assignedTo>
   </timeSheetTemplateAssignments>
   <timeSheetTemplateAssignments>
       <assignedTo>standard</assignedTo>
   </timeSheetTemplateAssignments>
   <workWeekEndDay>Tuesday</workWeekEndDay>
   <workWeekStartDay>Monday</workWeekStartDay>
</TimeSheetTemplate>
```

```
<?xml version=“1.0” encoding=“UTF-8"?>
<Package xmlns=“http://soap.sforce.com/2006/04/metadata“>
   <types>
       <members>*</members>
       <name>TimeSheetTemplate</name>
   </types>
   <version>46.0</version>
</Package>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
