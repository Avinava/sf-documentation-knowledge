---
title: "Dashboard Results"
domain: api-analytics
topic: dashboard-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.424Z
estimatedTokens: 5418
keywords: [Dashboard, Results, metadata, data, status, refresh, save, POST, PUT]
---

# Dashboard Results

> Can return metadata, data, and status for the specified dashboard. Can also refresh,
    save, or delete a dashboard.

# Dashboard Results

Can return metadata, data, and status for the specified dashboard. Can also refresh, save, or delete a dashboard.

## Syntax

URI

/services/data/vXX.X/analytics/dashboards/dashboardID

Or, with optional parameters:

/services/data/vXX.X/analytics/dashboards/dashboardID?runningUser=runningUserID&filter1=filter1ID&filter2=filter2ID&filter3=filter3ID

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Returns metadata, data, and status for the specified dashboard. See this example. |
| POST | Returns details about one or more dashboard components from a specified dashboard. See this example. |
| PUT | Triggers a dashboard refresh. See this example. |
| PATCH | Saves a dashboard. See this example. |
| DELETE | Deletes a dashboard. See this example. |

Authentication

Authorization: Bearer token

Parameters

The following optional parameters can be used with the GET and PUT methods:

| Parameter Name | Description |
| --- | --- |
| runningUser | Identifier of the running user. Gives an error if the user is not allowed to change the running user, or if the selected running user is invalid. |
| filter1 | Identifier of the selected filter option for the first filter. Gives an error if the filter option is invalid. |
| filter2 | Identifier of the selected filter option for the second filter. Gives an error if the filter option is invalid. |
| filter3 | Identifier of the selected filter option for the third filter. Gives an error if the filter option is invalid. |
| isStickyFilterSave | Append to a PATCH request. When true, saves any dashboard filters set in the request so that they’re also set the next time you open the dashboard. You can only set dashboard filters for yourself, not for other users. |

## GET, POST, and PUT Response body

| Property | Type | Description |
| --- | --- | --- |
| componentData | Component data[] | Ordered array containing data and status for each component of the dashboard. |
| dashboardMetadata | Dashboard metadata | Metadata for the entire dashboard. |

Attributes

| Property | Type | Description |
| --- | --- | --- |
| dashboardId | String | Unique identifier of dashboard. |
| dashboardName | String | Dashboard name. |
| statusUrl | Url | The URL of the status resource for the dashboard. |
| type | String | This property is always set to Dashboard. |

Component data

| Property | Type | Description |
| --- | --- | --- |
| componentId | String | Unique identifier of the component. |
| reportResult | Report results | Report metadata and summary data for the dashboard component. Uses the same data format as the Report API. |
| status | Component status | Queue and data status of the component. |

Component status

| Property | Type | Description |
| --- | --- | --- |
| dataStatus | String | Status of the data set of the component. Value can be:NODATA: The data set was never generated or is invalid due to a change in the report.DATA: The data set is available and was last refreshed at the refreshDate.ERROR: A component error has occurred. Details can be found in errorCode, errorMessage, and errorSeverity. |
| errorCode | String | Unique identifier of error message. This property is only populated in case of error. |
| errorMessage | String | Localized error message. This property is only populated in case of error. |
| errorSeverity | String | Severity of error code and message. Value can be:ErrorWarningThis property is only populated in case of error. |
| refreshDate | Date and time string | Date and time of last refresh in ISO-8601 format. |
| refreshStatus | String | Refresh status of the component. Value can be:IDLE: The component is not currently being refreshed.RUNNING: The component is currently being refreshed. |

Dashboard metadata

| Property | Type | Description |
| --- | --- | --- |
| attributes | Attributes | Attributes for the dashboard resource, such as name, identifier, and references to other related resources. |
| canChangeRunningUser | Boolean | Indicates whether the user is allowed to select a specific running user. Always true for team dashboards. |
| canUseStickyFilter | Boolean | Indicates whether dashboard filters persist after closing the dashboard (true) or not (false). Filters that persist keep the dashboard filtered the next time you open it. Filters persist for users on a per-user basis, so if you apply a filter then it doesn’t persist for other people. |
| chartTheme | String | Specifies the dashboard theme. Possible values are:light—Default value. Dashboards have a light background that resembles a glass of milk.dark—Dashboards have a dark background that is reminiscent of the night sky. |
| colorPalette | String | Specifies a color palette for use in charts. Possible values are:wildflowers—Default value.auroranightfallsunrisebluegrassoceanheatduskpondwatermelonfirewaterlakemineral—Accessible. |
| components | Components[] | Ordered array of components in this dashboard. |
| description | String | Dashboard description. |
| dashboardType | String | Indicates whether a dashboard is a dynamic dashboard, a dashboard with running users, or a standard dashboard. Possible values are:SpecifiedUser — Dashboard readers view data as though they are the person specified by runningUserLoggedInUser — Dashboard readers view data as themselves. The dashboard is a dynamic dashboard.MyTeamUser — Dashboard readers view data as the person specified by runningUser by default. If they have the “View All Data” user permission then they can change the runningUser to anyone. If they have the “View My Team’s Dashboards” user permission then they can change the runningUser to people subordinate to them in the role hierarchy. |
| developerName | String | Unique API name of the dashboard. |
| filters | Filters[] | Ordered array of filters for this dashboard. The dashboard can have 0-3 filters. |
| folderId | String | ID of the folder that contains the dashboard. |
| id | String | Unique identifier of dashboard. |
| layout | Layout | Component layout for this dashboard. |
| maxFilterOptions | Integer | The maximum number of values allowed in a dashboard filter. |
| name | String | Dashboard name. |
| runningUser | Running user | The running user, which is either specified at dashboard design time, or is overridden by the runningUser parameter specified in the GET request. For dynamic dashboards, this is always the current user. |

Components

| Property | Type | Description |
| --- | --- | --- |
| componentData | Integer | Index into the component data array in the response body. |
| footer | String | Footer of the component. |
| header | String | Header of the component. |
| id | String | Unique identifier of the component. |
| properties | Properties (for Report component type)Properties (for Visualforce page component type) | Component properties, including type-specific visualization properties. |
| reportId | String | Unique identifier of the underlying report. |
| title | String | Title of the component |
| type | String | Type of the component. Value can be:ReportVisualforcePageIf the component is an SControl, the value is not set. |

Filters

| Property | Type | Description |
| --- | --- | --- |
| errorMessage | String | If there is no error with a dashboard filter, then null. Otherwise, the error message is returned. |
| name | String | Localized display name of filter. |
| options | Filter option | Ordered array of possible filter options. |
| selectedOption | Integer | Index of the selected option from the options array. This matches the selection that was made based on the filter1, filter2, or filter3 parameter. Value is null if no option is selected. |

Filter option

| Property | Type | Description |
| --- | --- | --- |
| alias | String | Optional alias of the filter option. |
| id | String | Unique identifier of the filter option. Used as a value for the filter1, filter2, and filter3 parameters. |
| operation | String | Unique API name for the filter operation. Valid filter operations depend on the data type of the filter field. Value can be:equalsnotEquallessThangreaterThanlessOrEqualgreaterOrEqualcontainsnotContainstartsWithincludesexcludeswithinbetween |
| value | String | Value to filter on. Used for all operations except between. |
| startValue | String | Start value when using a between operation. Not set for all other operations. |
| endValue | String | End value when using a between operation. Not set for all other operations. |

Layout

| Property | Type | Description |
| --- | --- | --- |
| columns | Columns[] | Dashboard layout columns. Can have 2 or 3 columns, including empty columns. This property is available only if the dashboard was created using Salesforce Classic. |
| components | Components | Layout for dashboards. This property is available only if the dashboard was created using Lightning Experience. |

Columns

| Property | Type | Description |
| --- | --- | --- |
| components | Integer[] | Ordered list of components in a column (top to bottom). Components are represented by indices into the array of components in the dashboard metadata object. |

Components

| Property | Type | Description |
| --- | --- | --- |
| colspan | Integer | Width of component in columns. For example, if colspan=3, then the component spans 3 columns. |
| rowspan | Integer | Height of component in rows. For example, if rowspan=4, then the component spans 4 rows. |
| column | String | Column position on the grid. |
| row | String | Row position on the grid. |

Running user

| Property | Type | Description |
| --- | --- | --- |
| displayName | String | Display name of running user. |
| id | String | Returns the ID of the running user specified for the dashboard. If the dashboard is configured to run as the viewing user, returns the user ID of the dashboard creator. |

picklistColors

| Property | Type | Description |
| --- | --- | --- |
| color | String | The color in hexadecimal format used to represent a picklist value. |

Properties (for Report component type)

| Property | Type | Description |
| --- | --- | --- |
| aggregates | Array of strings | Unique identities for summary or custom summary formula fields in the report. For example:a!Amount represents the average for the Amount column.s!Amount represents the sum of the Amount column.m!Amount represents the minimum value of the Amount column.x!Amount represents the maximum value of the Amount column.s!<customfieldID> represents the sum of a custom field column. For custom fields and custom report types, the identity is a combination of the summary type and the field ID.u!{column_name} represents a unique count of values for the specified {column_name}. For example, u!AccountName returns the number of unique account name values in the AccountName field. |
| autoSelectColumns | Boolean | Indicates whether groupings and aggregates are automatically selected. Valid values are true and false. |
| drillUrl | String | Specifies a custom link destination from a dashboard component. If drillURL begins with https:// or http:// or www., then the link directs to a website outside of Salesforce. Otherwise, the destination is a site inside Salesforce.Null if no link is set. |
| groupings | Groupings | Report groupings included in the dashboard. |
| maxRows | Number | Maximum number of rows to be rendered, based on the sort value. |
| reportFormat | String | The format of a dashboard’s source report. |
| sort | Sort | Used in previous releases. In this release (v46.0) and later assign the value null, except for the following instances:Tabular lightning table formatTop N source report for any chart typeIn these two cases, the value matches the following object:{  "sort" : {    "column" : "TYPE",    "sortOrder" : "asc",     "type" : "label" },  } |
| useReportChart | Boolean | Indicates whether the dashboard component uses the chart as defined in the report. Valid values are true and false. |
| useReportTableSetting | Boolean | Indicates whether the widget uses report settings when a Lightning table is added to a dashboard. Valid values are true and false. |
| visualizationProperties | Visualization properties (Chart)Visualization properties (Table)Visualization properties (FlexTable)Visualization properties (Metric)Visualization properties (Gauge) | Type-specific visualization properties. |
| visualizationType | String | Type of the component. Value can be:BarColumnDonutFunnelGaugeLineMetricPieScatterTableFlexTable (As of API Version 41.0) |

Groupings

| Property | Type | Description |
| --- | --- | --- |
| inheritedReportSort | String | For this release (v46.0) and later, keep the default value of null for this property and use sortOrder instead. |
| name | String | Developer name of the grouping. |
| sortAggregate | String | Name of the aggregate by which the dashboard component sorts. If null, the dashboard component sorts by label or matches/inverts the report's sort order. |
| sortOrder | String | Specifies whether the dashboard component sorts in ascending (Asc) or descending (Desc) order. |

Sort

| Property | Type | Description |
| --- | --- | --- |
| inheritedReportSort | String | For this release (v46.0) and later, keep the default value of null for this property and use sortOrder instead. |
| sortAggregate | String | Name of the aggregate by which the dashboard component sorts. If null, the dashboard component sorts by label or matches/inverts the report's sort order. |
| sortOrder | String | Specifies whether the dashboard component sorts in ascending (Asc) or descending (Desc) order. |

Visualization properties (Chart)

| Property | Type | Description |
| --- | --- | --- |
| axisRange | String | Range of values specified for the axis. |
| decimalPrecision | Integer | The number of decimal places included in a dashboard metric, chart, or table, 0–5. If -1 or null, Salesforce automatically sets the number of decimal places. |
| displayUnits | String | Specify how to display numbers. Possible values are:whole — Display the true value of the number without rounding it.auto — Display the number rounded to the nearest thousand, million, etc. and displayed as a shortened value. For example, 1,876 displays as 1.9k. In calculating summaries, the true value of the number (1,876) is used , even if 1.9k is displayed.hundreds — Display as multiples of 100.thousands — Display as multiples of 1,000.millions — Display as multiples of 1,000,000.billions — Display as multiples of 1,000,000,000.trillions — Display as multiples of 1,000,000,000,000.null — Customizing how numbers display isn’t applicable.. |
| drillURL | String | Specifies a custom link destination from a dashboard component. If drillURL begins with https:// or http:// or www., then the link directs to a website outside of Salesforce. Otherwise, the destination is a site inside Salesforce.Null if no link is set. |
| groupByType | String | Type of second-level grouping. |
| legendPosition | String | Position of legend on the grid. Valid values are bottom, right, and none. |
| showValues | Boolean | Indicates whether to include values in the chart. Valid values are true and false. |

Visualization properties (Table)

| Property | Type | Description |
| --- | --- | --- |
| breakPoints | Break point[] | Break points for the table component. |
| displayUnits | String | Specify how to display numbers. Possible values are:whole — Display the true value of the number without rounding it.auto — Display the number rounded to the nearest thousand, million, etc. and displayed as a shortened value. For example, 1,876 displays as 1.9k. In calculating summaries, the true value of the number (1,876) is used , even if 1.9k is displayed.hundreds — Display as multiples of 100.thousands — Display as multiples of 1,000.millions — Display as multiples of 1,000,000.billions — Display as multiples of 1,000,000,000.trillions — Display as multiples of 1,000,000,000,000.null — Customizing how numbers display isn’t applicable.. |
| drillURL | String | Specifies a custom link destination from a dashboard component. If drillURL begins with https:// or http:// or www., then the link directs to a website outside of Salesforce. Otherwise, the destination is a site inside Salesforce.Null if no link is set. |
| tableColumns | Table columns[] | Columns of the table component. |

Visualization properties (FlexTable)

FlexTable is the API name of the Lightning dashboard table.

| Property | Type | Description |
| --- | --- | --- |
| displayUnits | String | Specifies how to display numbers in dashboard components. Each value displays numbers as a multiple of a hundred (hundreds), thousand (thousands), million (millions), billion (billions), or trillion (trillions). |
| drillURL | String | Specifies a custom link destination from a dashboard component. If drillURL begins with https:// or http:// or www., then the link directs to a website outside of Salesforce. Otherwise, the destination is a site inside Salesforce.Null if no link is set. |
| flexTableType | String | Specifies whether the table shows detail columns or groups and measures. Possible values are:tabular — The table displays detail rows.summary — The table displays groups and measures. |
| showChatterPhotos | Boolean | Indicates whether Chatter photos are shown (true) or not (false). |
| tableColumns | Table columns[] | Columns of the table component. |

Visualization properties (Metric)

| Property | Type | Description |
| --- | --- | --- |
| breakPoints | Break point[] | Break points for the metric component. |
| displayUnits | String | Specify how to display numbers. Possible values are:whole — Display the true value of the number without rounding it.auto — Display the number rounded to the nearest thousand, million, etc. and displayed as a shortened value. For example, 1,876 displays as 1.9k. In calculating summaries, the true value of the number (1,876) is used , even if 1.9k is displayed.hundreds — Display as multiples of 100.thousands — Display as multiples of 1,000.millions — Display as multiples of 1,000,000.billions — Display as multiples of 1,000,000,000.trillions — Display as multiples of 1,000,000,000,000.null — Customizing how numbers display isn’t applicable.. |
| drillURL | String | Specifies a custom link destination from a dashboard component. If drillURL begins with https:// or http:// or www., then the link directs to a website outside of Salesforce. Otherwise, the destination is a site inside Salesforce.Null if no link is set. |
| metricLabel | String | Label for the metric component. |

Visualization properties (Gauge)

| Property | Type | Description |
| --- | --- | --- |
| breakPoints | Break point[] | Break points for the gauge component. |
| displayUnits | String | Specify how to display numbers. Possible values are:whole — Display the true value of the number without rounding it.auto — Display the number rounded to the nearest thousand, million, etc. and displayed as a shortened value. For example, 1,876 displays as 1.9k. In calculating summaries, the true value of the number (1,876) is used , even if 1.9k is displayed.hundreds — Display as multiples of 100.thousands — Display as multiples of 1,000.millions — Display as multiples of 1,000,000.billions — Display as multiples of 1,000,000,000.trillions — Display as multiples of 1,000,000,000,000.null — Customizing how numbers display isn’t applicable.. |
| drillURL | String | Specifies a custom link destination from a dashboard component. If drillURL begins with https:// or http:// or www., then the link directs to a website outside of Salesforce. Otherwise, the destination is a site inside Salesforce.Null if no link is set. |
| showPercentages | Boolean | Specify whether percentages are displayed (true) or not (false) |
| showTotal | Boolean | Indicates whether the total is displayed (true) or not (false). |

Break point

| Property | Type | Description |
| --- | --- | --- |
| aggregateName | String | Aggregate column developer name that the break points have been applied to. |
| breaks | Break[] | Break values for a break point. |

Break

| Property | Type | Description |
| --- | --- | --- |
| color | String | A hex value representing the color for the break point.NoteA color value of black displays only 1 character (0) instead of 6 characters (000000). |
| lowerBound | Number | Lower bound for the break point. |
| upperBound | Number | Upper bound for the break point. |

Table columns

| Property | Type | Description |
| --- | --- | --- |
| column | String | Developer name for the aggregate or grouping column. |
| isPercent | Boolean | Indicates whether the column value is shown as a percent (true) or not (false).Not supported for FlexTables. |
| scale | Number | The number of decimal places for the column value.Not supported for FlexTables. |
| showTotal | Boolean | Indicates whether the column shows the total (true) or not (false). |
| type | String | Type of the column. Valid values are:detailaggregategrouping |

Properties (for Visualforce page component type)

| Property | Type | Description |
| --- | --- | --- |
| pageName | String | Developer name of the Visualforce page. |
| height | String | Height of the Visualforce page, in pixels. |

tableChatterPhotoUrls

| Property | Type | Description |
| --- | --- | --- |
| chatterPhotoUrl | String | URL pointing to a user's Chatter photo. |

## PUT Response body

| Property | Type | Description |
| --- | --- | --- |
| statusUrl | String | URL of the status resource for the dashboard. |

## POST Request body

| Property | Type | Description |
| --- | --- | --- |
| componentIds | Array of Strings | Dashboard component ids. |

## Code Examples

```
{
 "sort" : {
   "column" : "TYPE",
   "sortOrder" : "asc", 
   "type" : "label" }, 
}
```

## Related Topics

- example (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_get_results.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_example_return_details_about_dashboard_components.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_refresh.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_save_dashboard.htm)
- example (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_dashboard_delete.htm)
- Report results (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getreportrundata.htm)
