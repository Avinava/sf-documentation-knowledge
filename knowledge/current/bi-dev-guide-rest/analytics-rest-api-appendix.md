---
title: "Analytics REST API Appendix"
domain: bi-dev-guide-rest
topic: analytics-rest-api-appendix
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.111Z
estimatedTokens: 6021
keywords: [Analytics, REST, API, Appendix, references, shared, representations, enums, across, resources, representation, endpoints, their, own, describe]
---

# Analytics REST API Appendix

> This appendix contains the references for shared representations and enums that are used
  across the Analytics REST API resources. The following representation details are not REST API
  endpoints on their own, but describe object representations used in REST API request and response
  bodies.

# Analytics REST API Appendix

This appendix contains the references for shared representations and enums that are used across the Analytics REST API resources. The following representation details are not REST API endpoints on their own, but describe object representations used in REST API request and response bodies.

## AbstractFieldRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| default​Value | Object | An optional default value | Small, 37.0 | 37.0 |
| description | String | An optional description of the field | Small, 37.0 | 37.0 |
| field​Type | Connect​Wave​Field​Type​Enum | The type of the field. Valid values are:DateDateOnlyDateTimeNumericText | Small, 37.0 | 37.0 |
| format | String | For date field types, the format is used to parse the input value. For other field types, the format string is used for display. | Small, 37.0 | 37.0 |
| label | String | The label for the field. | Small, 37.0 | 37.0 |
| multi​Value | Boolean | Indicates if the field is a multivalue field (true) or not (false). The default is false. | Small, 37.0 | 37.0 |
| multi​Value​Separator | String | Required only for fields where multiValue is true. This is the value separator for multivalues. | Small, 37.0 | 37.0 |
| name | String | The field developer name. | Small, 37.0 | 37.0 |
| precision | Integer | The numeric precision or text length depending on the field type. | Small, 37.0 | 37.0 |
| scale | Integer | The numeric scale for numeric field types only. | Small, 37.0 | 37.0 |
| system​Field | Boolean | Indicates if the field is a system field (true) or not (false). The default is false. System fields are not queryable. | Small, 37.0 | 37.0 |
| unique​Id | Boolean | Indicates whether the field is a unique ID for the data set (true) or not (false). The default is false. There can only be one unique ID for any data set. | Small, 37.0 | 37.0 |

## AdvancedPropertyValueRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the advanced property. | Small, 44.0 | 44.0 |
| value | String | The value of the advanced property. | Small, 44.0 | 44.0 |

## Asset​Reference​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The 18 character ID of the asset. | Small, 36.0 | 36.0 |
| label | String | The asset label. | Small, 36.0 | 36.0 |
| name | String | The asset developer name. | Small, 36.0 | 36.0 |
| namespace | String | The namespace that qualifies the asset name. The default is the current organization's namespace, which is "empty namespace" for all organizations, except those developer edition orgs that have set a namespace. | Small, 37.0 | 37.0 |
| url | String | The asset URL. | Small, 36.0 | 36.0 |

## AssetReferenceInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The 18 character ID of the asset. | Optional (Id or Name must be provided) | 36.0 |
| name | String | The asset developer name. | Optional (Id or Name must be provided) | 36.0 |
| namespace | String | The namespace that qualifies the asset name. The default is the current organization's namespace, which is "empty namespace" for all organizations, except those developer edition orgs that have set a namespace. | Only required in orgs with namespace defined | 37.0 |

## AssetRevertHistoryInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| history​Id | String | The required source history id for this asset to revert to. | Required | 42.0 |
| history​Label | String | The history label to tag the revert change with. | Optional | 42.0 |

## BaseAssetInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Short description of the asset | Required for POST; Optional in PATCH | 36.0 |
| name | String | The asset developer name. | Required for POST; Not allowed to edit in PATCH | 36.0 |
| label | String | The asset label. | Optional in POST and PATCH | 37.0 |

## BaseWaveAssetRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset​Sharing​Url | String | The URL for opening this asset in the user interface. This is a form of deep linking. The server examines the link parameters, which can include urlType, assetId, orgId, and loginHost, as well as other optional parameters, and translates as necessary to produce the correct result on the target client. For example, it opens the asset on a desktop client, or mobile if you are on a mobile OS. | Small, 36.0 | 36.0 |
| created​By | Wave​User​Representation | The user who created the asset. | Small, 36.0 | 36.0 |
| created​Date | Date | The time at which the asset was created, in ISO8601 date format. | Small, 36.0 | 36.0 |
| description | String | Short description of the asset. | Small, 36.0 | 36.0 |
| id | String | The 18 character ID of the asset. | Small, 36.0 | 36.0 |
| label | String | The asset label. | Small, 36.0 | 36.0 |
| last​Accessed​Date | Date | The last time the asset was accessed, in ISO8601 date format. | Small, 36.0 | 36.0 |
| last​ModifiedBy | Wave​User​Representation | The user who last updated the asset. | Small, 36.0 | 36.0 |
| last​Modified​Date | Date | The last time the asset was modified, in ISO8601 date format. | Small, 36.0 | 36.0 |
| name | String | The asset developer name. | Small, 36.0 | 36.0 |
| namespace | String | The namespace that qualifies the asset name. The default is the current organization's namespace, which is "empty namespace" for all organizations, except those developer edition orgs that have set a namespace. | Small, 36.0 | 36.0 |
| permissions | Permissions​Representation | The permissions for the current user. | Small, 36.0 | 36.0 |
| type | Connect​Wave​Asset​Type​Enum | The asset type. The default type is Dashboard. Valid types are:CollectionComponentDashboardDashboard​Saved​ViewDashboard​SnapshotData​ConnectorDataflowDataflow​JobDataflow​Job​NodeDatasetDataset​ShardDataset​VersionExternal​DataFolderLensLightning​ComponentLightning​DashboardLightning​Dashboard​FolderRecipeRecipe​ConfigurationRecipe​ModelReplicated​DatasetReportReport​FolderStoryWidgetWorkflow | Optional, Small, 36.0 | 36.0 |
| url | String | The asset URL. | Small, 36.0 | 36.0 |

## Typed​Asset​Reference​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| type | Connect​Wave​Asset​Type​Enum | The type of the asset. | Small, 51.0 | 51.0 |

## Typed​Asset​Reference​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | Connect​Wave​Asset​Type​Enum | The type of the asset. | Required | 51.0 |

## Wave​User​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The 18-character user ID. | Small, 36.0 | 36.0 |
| name | String | The name of the user. | Small, 36.0 | 36.0 |
| profile​Photo​Url | String | The Chatter profile photo of the user. | Small, 36.0 | 36.0 |

## Permissions​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| create | Boolean | Indicates whether the user can create an asset (true) or not (false). | Small, 45.0 | 45.0 |
| manage | Boolean | Indicates whether the user can manage access on the asset (true) or not (false). | Small, 36.0 | 36.0 |
| modify | Boolean | Indicates whether the user can modify the asset (true) or not (false). | Small, 36.0 | 36.0 |
| view | Boolean | Indicates whether the user can view the asset (true) or not (false). | Small, 36.0 | 36.0 |

## ScheduleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset​Id | String | The asset ID that this schedule belongs to. | Small, 52.0 | 52.0 |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Small, 39.0 | 39.0 |
| next​Scheduled​Date | Date | Next scheduled time (in UTC) for this schedule | Small, 43.0 | 43.0 |
| notification​Level | Connect​Email​Notification​Level​Enum | Email notification level of dataflow associated with this schedule. Valid values are:AlwaysFailuresNeverWarnings | Small, 43.0 | 43.0 |
| time | Time​Representation | Hour,minute, and timezone in which this schedule is run | Small 39.0 | 39.0 |

## DailyScheduleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Small, 39.0 | 39.0 |
| time | Time​Representation | Hour, minute, and timezone in which this schedule is run. | Small, 39.0 | 39.0 |

## EventDrivenScheduleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| trigger​Rule | String | The event based trigger rule that causes the asset to run. | Small, 53.0 | 53.0 |

## HourlyScheduleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Small, 40.0 | 40.0 |
| hourly​Interval | Integer | Number of hours between each queuing of the task. | Small, 40.0 | 40.0 |
| last​Hour | Integer | Last hour at which this task stops queuing. | Small, 40.0 | 40.0 |

## MonthlyRelativeScheduleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Small, 39.0 | 39.0 |
| time | Time​Representation | Hour, minute, and timezone in which this schedule is run. | Small, 39.0 | 39.0 |
| day​In​Week | Connect​Wave​Day​Of​Week​Enum | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Small, 39.0 | 39.0 |
| week​In​Month | Connect​Wave​Relative​Week​Enum | Week within a month. Values values are:FirstSecondThirdFourthLast | Small, 39.0 | 39.0 |

## MonthlySpecificScheduleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Small, 39.0 | 39.0 |
| time | Time​Representation | Hour and timezone in which this schedule is run. | Small, 39.0 | 39.0 |
| days​Of​Month | Integer[] | Days of the month on which the schedule runs (-1, 1–31). Months lacking specific days will skip the job. Can specify a single value of -1 to indicate the last day of the month (-1 cannot be used with other days). | Small, 39.0 | 39.0 |

## WeeklyScheduleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Small, 39.0 | 39.0 |
| time | Time​Representation | Hour and timezone in which this schedule is run. | Small, 39.0 | 39.0 |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Small, 39.0 | 39.0 |

## TimeRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hour | Integer | Hour at which this schedule is run (0-23). | Small, 39.0 | 39.0 |
| minute | Integer | Minute at which this schedule is run (0-59). | Small, 39.0 | 39.0 |
| time​Zone | Time​Zone​Representation | Time zone of the hour at which the schedule is run. | Small, 39.0 | 39.0 |

## TimeZoneRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gmt​Offset | Double | The signed offset, in hours, from GMT. | Small, 39.0 | 39.0 |
| name | String | The display name of this time zone. | Small, 39.0 | 39.0 |
| zoneId | String | The id of this time zone. | Small, 39.0 | 39.0 |

## ScheduleInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Required | 39.0 |
| notification​Level | Connect​Email​Notification​Level​Enum | Level of email notification for the scheduled job. Valid values are:AlwaysWarningsFailuresNever | Optional | 42.0 |
| time | Time​Input​Representation | The time when the schedule runs. | Required | 39.0 |

## DailyScheduleInputRepresentation

Inherits frequency, notification, and time from [ScheduleInputRepresentation](#ScheduleInputRepresentation)

## EventBasedScheduleInputRepresentation

Inherits frequency, notification, and time from [ScheduleInputRepresentation](#ScheduleInputRepresentation)

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| trigger​Rule | String | The expression defining the events that trigger the schedule of the target asset. Currently accepts scheduling of Dataflows and Recipes as the target. | Required | 53.0 |

## HourlyScheduleInputRepresentation

Inherits frequency, notification, and time from [ScheduleInputRepresentation](#ScheduleInputRepresentation)

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Required | 39.0 |
| hourly​Interval | Integer | Number of hours in between queuing or scheduling of an asset. | Required | 39.0 |
| last​Hour | Integer | Hour of day at which the schedule stops queuing the asset for processing. | Required | 39.0 |

## MonthlyRelativeScheduleInputRepresentation

Inherits frequency, notification, and time from [ScheduleInputRepresentation](#ScheduleInputRepresentation)

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| day​In​Week | Connect​Wave​Day​Of​Week​Enum | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Small, 39.0 | 39.0 |
| week​In​Month | Connect​Wave​Relative​Week​Enum | Week within a month. Values values are:FirstSecondThirdFourthLast | Small, 39.0 | 39.0 |

## MonthlySpecificScheduleInputRepresentation

Inherits frequency, notification, and time from [ScheduleInputRepresentation](#ScheduleInputRepresentation)

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Month | Integer[] | Days of the month on which the schedule runs (1-31). Months lacking specific days will skip the job. | Required | 39.0 |

## WeeklyScheduleInputRepresentation

Inherits frequency, notification, and time from [ScheduleInputRepresentation](#ScheduleInputRepresentation)

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| days​Of​Week | Connect​Wave​Day​Of​Week​Enum[] | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Required | 39.0 |

## TimeInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| hour | Integer | First hour in the day on which the schedule is run. | Required | 39.0 |
| minute | Integer | Minute offset from hour on which the schedule is first run. | Required | 39.0 |
| timeZone | String | The time zone the schedule is stored in, which by default, is the user's time zone. | Required | 39.0 |

## Common Enums

Connect​Analytics​License​Type​Enum

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| licenseType | Connect​Analytics​License​Type​Enum | The Analytics license types. Valid values are:EinsteinAnalytics (Analytics)Sonic (Salesforce Data Pipeline) | Optional | 51.0 |

Connect​Analytics​Limit​Type​Enum

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| types | Connect​Analytics​Limit​Type​Enum | The types of limits used in Analytics. Valid values are:Batch​Transformation​Hours (Maximum dataflow runtime per month)Dataset​Queries (Maximum queries on datasets for all users)Dataset​Row​Count (Maximum row of all datasets combined)Max​Daily​Rows​High​Output​Con (Maximum rows for all high volume tier output connectors per rolling 24-hour period)Max​Daily​Rows​Low​Output​Con (Maximum rows for all low volume tier output connectors per rolling 24-hour period)Max​Daily​Rows​Med​Output​Con (Maximum rows for all medium volume tier output connectors per rolling 24-hour period)Max​Daily​Size​High​Output​Con (Maximum data size for all high volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Low​Output​Con (Maximum data size for all low volume tier output connectors per rolling 24-hour period)Max​Daily​Size​Med​Output​Con (Maximum data size for all medium volume tier output connectors per rolling 24-hour period)Output​Local​Connector​Volume (Maximum cumulative bytes of data files written to Salesforce in a rolling 24-hour period) | Optional | 51.0 |

Connect​Wave​Asset​Type​Enum

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| type | Connect​Wave​Asset​Type​Enum | The asset type. The default type is Dashboard. Valid types are:CollectionComponentDashboardDashboard​Saved​ViewDashboard​SnapshotData​ConnectorDataflowDataflow​JobDataflow​Job​NodeDatasetDataset​ShardDataset​VersionExternal​DataFolderLensLightning​ComponentLightning​DashboardLightning​Dashboard​FolderRecipeRecipe​ConfigurationRecipe​ModelReplicated​DatasetReportReport​FolderStoryWidgetWorkflow | Optional, Small, 36.0 | 36.0 |

Connect​Wave​Asset​Visibility​Type

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| visibility | Connect​Wave​Asset​Visibility​Type | Indicates whether the asset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Small, 51.0 | 51.0 |

Connect​Wave​Scope​Type​Enum

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| scope | Connect​Wave​Scope​Type​Enum | The type of scope to be applied to the returned collection. Valid values are:Created​By​MeMru (Most Recently Used)Shared​With​Me | Optional | 38.0 |

Connect​Wave​Dataset​Sort​Order​Type​Enum

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sort | Connect​Wave​Dataset​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:Created​ByCreated​DateLast​ModifiedLast​QueriedLast​RefreshedMru (Most Recently Used, last viewed date)NameTotal​Rows | Optional | 38.0 |

Connect​Wave​Sort​Order​Type​Enum

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sort | Connect​Wave​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:AppCreated​ByCreated​DateLast​ModifiedLast​Modified​ByMru (Most Recently Used, last viewed date)NameType | Optional | 38.0 |

Connect​Wave​Schedule​Frequency​Type​Enum

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| frequency | Connect​Wave​Schedule​Frequency​Type​Enum | Frequency on which this schedule is run. Valid values are:Daily (Run once per day)Event​Driven (Create Event Driven schedule)Hourly (Run on one or more hours each day)Minutely (Run subhourly each day)Monthly (Run on one or more specific numeric days per month)Monthly​Relative (Run on one or more relative days for month)None (Not scheduled to run)Weekly (Run on one or more days each week) | Required | 39.0 |

Connect​Wave​Relative​Week​Enum

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| week​In​Month | Connect​Wave​Relative​Week​Enum | Week within a month. Values values are:FirstSecondThirdFourthLast | Small, 39.0 | 39.0 |

Connect​Wave​Day​Of​Week​Enum

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| day​In​Week | Connect​Wave​Day​Of​Week​Enum | Days of the week on which the schedule runs. Valid values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday | Small, 39.0 | 39.0 |

Connect​Email​Notification​Level​Enum

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| email​Notification​Level | Connect​Email​Notification​Level​Enum | Valid types of email notification levels you can set. Valid values are:AlwaysFailuresNeverWarnings | Small, 42.0 | 42.0 |
