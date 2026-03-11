---
title: "DataStreamTemplate"
domain: metadata-api
topic: datastreamtemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:51.755Z
keywords: [DataStreamTemplate, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DataStreamTemplate

# DataStreamTemplate

Represents the data stream that a user adds to a data kit.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataStreamTemplate components have the suffix .dataStreamTemplate and are stored in the dataStreamTemplates folder.

## Version

DataStreamTemplate components are available in API version 53.0 and later.

## Special Access Rules

You need the Salesforce Customize Application permission to access this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| dataConnectionSourceParameters | Field TypeDataConnectionParamTmpl[]DescriptionInput representation for the data connection source parameters. |
| dataSourceBundleDefinition | Field TypestringDescriptionRequired. Reference to the bundle to which this template belongs. |
| dataSourceObject | Field TypestringDescriptionRequired. Reference to the Data Source Objects (DSOs). A DSO represents the object from where the data was sourced. |
| filterCriteria | Field TypestringDescriptionFilter applied to the data stream before the information is sent to Data Cloud. |
| masterLabel | Field TypestringDescriptionRequired. Name assigned to the data stream template. |
| objectCategory | Field TypestringDescriptionRequired. Category of the Data Model Object (DMO). |
| refreshDayOfMonth | Field TypeintDescriptionThe duration of the day of the month after which the data stream must be refreshed. |
| refreshDayOfWeek | Field TypeintDescriptionThe duration of the day of the week after which the data stream must be refreshed. |
| refreshFrequency | Field TypeDataImportRefreshFrequency (enumeration of type string)DescriptionThe frequency with which the datastream must be refreshed. Possible values are:BatchNONEMINUTES_15MINUTES_30MINUTES_5HOURLYDAILYWEEKLYMONTHLYNOT_APPLICABLESTREAMINGPossible values available in API version 64.0 and later are:EVERY_12_HOURSEVERY_4_HOURS |
| refreshHours | Field TypestringDescriptionThe duration after which the datastream must be refreshed. |
| refreshMode | Field TypeDataImportRefreshMode (enumeration of type string)DescriptionThe mode of refresh. Possible values are:FULL_REFRESHUPSERTINCREMENTALREPLACENEAR_REAL_TIME_INCREMENTALNOT_APPLICABLEPARTIAL_UPDATESTREAMING |
| refreshStartDate | Field TypedateDescriptionThe date to retrieve data based on the refresh frequency data. Available in API version 62.0 and later. |
| sourceObjectName | Field TypestringDescriptionThe name of the source object from which data is streamed. Available in API version 62.0 and later. |
| streamType | Field TypeStreamType (enumeration of type string)DescriptionThe type of data stream. Available in API version 62.0 and later. Possible values are:DIRECT_ACCESSDIRECT_ACCESS_ACCELERATEDINGEST |
| streamingAppDataConnectorType | Field TypestreamingAppDataConnectorType (enumeration of type string)DescriptionThe connector app for data streaming. Available in API version 63.0 and later. Possible values are:MobileAppWebApp |
| templateVersion | Field TypeintDescriptionThe version number of the template. Available in API version 62.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a DataStreamTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).