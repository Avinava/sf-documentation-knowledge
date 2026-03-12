---
title: "AnalyticSnapshot"
domain: metadata-api
topic: analyticsnapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.826Z
estimatedTokens: 1023
keywords: [AnalyticSnapshot, Represents, reporting, snapshot., snapshot, lets, report, historical, data., Authorized, users, save, tabular, summary, results, fields, custom, then, map, those]
---

# AnalyticSnapshot

> Represents a reporting snapshot. A reporting
            snapshot lets you report on historical data. Authorized users can save tabular or
            summary report results to fields on a custom object, then map those fields to
            corresponding fields on a target object. They can then schedule when to run the report
            to load the custom object's fields with the report's data. Reporting snapshots enable
            you to work with report data similarly to how you work with other records in
            Salesforce.

# AnalyticSnapshot

Represents a reporting snapshot. A reporting snapshot lets you report on historical data. Authorized users can save tabular or summary report results to fields on a custom object, then map those fields to corresponding fields on a target object. They can then schedule when to run the report to load the custom object's fields with the report's data. Reporting snapshots enable you to work with report data similarly to how you work with other records in Salesforce.

## Declarative Metadata File Suffix and Directory Location

Lightning Platform AnalyticSnapshot components are stored in the analyticSnapshots directory of the corresponding package directory. The file name matches the unique name of the reporting snapshot, and the extension is .snapshot.

## Version

Lightning Platform AnalyticSnapshot components are available in API version 16.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | A description of the reporting snapshot. |
| groupColumn | string | A column that specifies which level to extract data from the source report. It’s only applicable for summary reports. |
| mappings | AnalyticSnapshotMapping[] | A list of reporting snapshot mappings. For valid values, see AnalyticSnapshotMapping. |
| name | string | Required. The display name of the reporting snapshot. |
| runningUser | string | The username of the user whose role and sharing settings are used to run the reporting snapshot. |
| sourceReport | string | Required. The report where data is extracted from. |
| targetObject | string | Required. The custom object where data is inserted. |

## AnalyticSnapshotMapping

AnalyticSnapshotMapping defines the mapping for the reporting snapshot. Valid values are:

| Field | Field Type | Description |
| --- | --- | --- |
| aggregateType | ReportSummaryType[] (enumeration of type string) | List that defines if and how each report field is summarized. For valid values, see ReportSummaryType. |
| sourceField | string | The sourceField can be one of the following:The field on the sourceReport that you want to map to the targetField in the targetObjectA summary of a filed on the sourceReport (for Summary reports only)A field on the reporting snapshot, such as JobName, RunningUser, or ExecutionTime (set through the user interface)Note: The sourceField must correspond to the sourceType you specify. |
| sourceType | ReportJobSourceTypes[] (enumeration of type string) | List that defines the report format for the reporting snapshot. For valid values, see ReportJobSourceTypes. |
| targetField | string | A field on the targetObject into which this particular sourceField is inserted. |

## ReportJobSourceTypes

An enumeration of type string that defines the report format for the reporting snapshot. Valid values are:

| Enumeration Value | Description |
| --- | --- |
| snapshot | Use this option if the sourceField contains snapshot-specific information such as JobName, RunningUser, or ExecutionTime. |
| summary | Use this option if referencing a summary (Sum, Average, Minimum, Maximum) of a field from the sourceReport. |
| tabular | Use this option if referencing an available column from the sourceReport. |

## Declarative Metadata Sample Definition

Here’s a sample XML definition of a reporting snapshot.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Report](atlas.en-us.api_meta.meta/api_meta/meta_report.htm "Represents a custom report. This metadata type only supports custom reports; standard reports aren’t supported.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AnalyticSnapshot xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>my description</description>
    <groupColumn>INDUSTRY</groupColumn>
    <mappings>
        <aggregateType>Average</aggregateType>
        <sourceField>SALES</sourceField>
        <sourceType>summary</sourceType>
        <targetField> myObject __c.Name</targetField>
    </mappings>
    <mappings>
        <sourceField>ExecutionTime</sourceField>
        <sourceType>snapshot</sourceType>
        <targetField> myObject __c.field3__c</targetField>
    </mappings>
    <mappings>
        <sourceField>INDUSTRY</sourceField>
        <sourceType>tabular</sourceType>
        <targetField>testObject__c.Name</targetField>
    </mappings>
    <name>my snapshot</name >
    <runningUser>user@salesforce.com</runningUser>
    <sourceReport>myFolder/mytSummaryReport</sourceReport>
    <targetObject>myObject__c</targetObject>
</AnalyticSnapshot>
```

## Related Topics

- ReportSummaryType (atlas.en-us.api_meta.meta/api_meta/meta_report.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Report (atlas.en-us.api_meta.meta/api_meta/meta_report.htm)
