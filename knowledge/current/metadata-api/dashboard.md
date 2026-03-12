---
title: "Dashboard"
domain: metadata-api
topic: dashboard
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:38.111Z
estimatedTokens: 7034
keywords: [Dashboard, Dashboards, visual, representations, data, allow, key, metrics, performance, glance, Declarative, Metadata, File, Suffix, Directory]
---

# Dashboard

> Represents a dashboard. Dashboards are visual
            representations of data that allow you to see key metrics and performance at a
            glance.

# Dashboard

Represents a dashboard. Dashboards are visual representations of data that allow you to see key metrics and performance at a glance.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. For more information, see “Edit Dashboards in Accessibility Mode in Salesforce Classic” in the Salesforce online help.

## Declarative Metadata File Suffix and Directory Location

Dashboards are stored in the dashboards directory of the corresponding package directory. The file name matches the dashboard title and the extension is .dashboard.

## Retrieving Dashboards

You can’t use the wildcard (\*) symbol with dashboards in package.xml. To retrieve the list of dashboards for populating package.xml with explicit names, call listMetadata() and pass in DashboardFolder as the type. Note that DashboardFolder is not returned as a type in describeMetadata(). Dashboard is returned from describeMetadata() with an associated attribute of inFolder set to true. If that attribute is set to true, you can construct the type by using the component name with the word Folder, such as DashboardFolder.

The following example shows folders in package.xml. The names used in package.xml must be developer names, not dashboard titles.

```

```

## Version

Dashboard components are available in API version 14.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| backgroundEndColor | string | Required. A dashboard can have a gradient color change on its charts. This field defines the second color for the gradient and backgroundStartColor defines the first color. If you prefer your background to be all one color or do not want a gradient color change, select the same color for this field and backgroundStartColor. The color is in hexadecimal format; for example #FF6600. |
| backgroundFadeDirection | ChartBackgroundDirection (enumeration of type string) | Required. The direction of the gradient color change, defined by the backgroundStartColor and backgroundEndColor fields. The valid values are:DiagonalLeftToRightTopToBottom |
| backgroundStartColor | string | Required. The starting color for the gradient color change on the dashboard's charts. See backgroundEndColor for more information. The color is in hexadecimal format; for example #FF6600. |
| chartTheme | ChartTheme (enumeration of type string) | Determines the default theme for all dashboard charts. Replaces dashboardChartTheme for API v42.0 and later.light—Light-colored theme.dark—Dark-colored theme.This field is available in API version 42.0 and later. |
| colorPalette | ChartColorPalettes (enumeration of type string) | Determines the default palette for all dashboard charts. Replaces dashboardColorPalette for API v42.0 and later.accessiblebluegrasscolorSafeDefaultduskearthfiregrayheatjusticenightfallpondsunrisetropicunitywaterwatermelonThis field is available in API version 42.0 and later. |
| dashboardChartTheme | ChartTheme (enumeration of type string) | Determines the default theme for all dashboard charts.light—Light-colored theme.dark—Dark-colored theme.This field is available to maintain backward compatibility with versions prior to API version 42.0. |
| dashboardColorPalette | ChartColorPalettes (enumeration of type string) | Determines the default palette for all dashboard charts.accessiblebluegrasscolorSafeDefaultduskearthfiregrayheatjusticenightfallpondsunrisetropicunitywaterwatermelonThis field is available to maintain backward compatibility with versions prior to API version 42.0. |
| dashboardFilters | DashboardFilter[] | The list of filters in a dashboard.This field is available in API version 23.0 and later. |
| dashboardGridLayout | DashboardGridLayout | Lists the included DashboardGridComponent objects, specifies the number of dashboard columns, and sets each dashboard row’s height in pixels.This field is available in API version 35.0 and later. |
| dashboardType | DashboardType (enumeration of type string) | Determines the way visibility settings are set for a dashboard. The valid values are:SpecifiedUser—All users see data at the access level of one specific running user, specified in the runningUser field, regardless of their own security settings.LoggedInUser—Each logged-in user sees data according to his or her own access level.MyTeamUser—Managers can choose to view the dashboard from the point of view of their subordinates in the role hierarchy. This value is available in API version 20.0 and later.This field is available in API version 19.0 and later. |
| description | string | Description for the dashboard. Maximum of 255 characters. |
| folderName | string | Name of the folder that houses the dashboard.This field is available in API version 35.0 and later. |
| fullName | string | Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call.This field specifies the folder and dashboard title; for example folderSales/California. |
| isGridLayout | boolean | Specifies whether a dashboard uses the Lightning Experience layout (true) or not (false).Lightning Experience allows dashboards with more than three columns with components that span multiple columns and multiple rows in size.This field is available in API version 35.0 and later. |
| dashboardResultRefreshedDate | string | Required. Date that the dashboard was last refreshed. |
| dashboardResultRunningUser | string | Required. User currently accessing the dashboard. |
| leftSection | DashboardComponentSection | Required. The left section or column of the dashboard. |
| middleSection | DashboardComponentSection | The middle section or column of the dashboard. |
| numSubscriptions | int | Number of subscriptions reported on the dashboard. This field is available in API version 42.0 and later. |
| owner | string | The creator of the dashboard. |
| rightSection | DashboardComponentSection | Required. The right section or column of the dashboard. |
| runningUser | string | The username of the user whose role and sharing settings are used to determine the data shown in the dashboard.When you deploy a dashboard and the value in this field is not defined or does not correspond to a valid user, the field is populated with the username of the user performing the deployment.Regardless of their security settings, all users viewing a dashboard see exactly the same data, because dashboards are always run using the security settings of a particular user.TipTo avoid inappropriate exposure of sensitive data, save the dashboard to a folder that is visible only to appropriate users. |
| textColor | string | Required. Color of the text on each chart in the dashboard. The color is in hexadecimal format; for example #FF6600. |
| title | string | Required. The dashboard title. |
| titleColor | string | Required. Color of the titles on each dashboard component. The color is in hexadecimal format; for example #FF6600. |
| titleSize | int | Required. Size of characters in title text. For example, a value of 12 indicates 12pt text. |

## DashboardFilter

DashboardFilter represents a filter in a dashboard.

| Field | Field Type | Description |
| --- | --- | --- |
| dashboardFilterOptions | DashboardFilterOption[] | The list of items you can select in the Filter Options section of the Add Filter dialog. |
| name | string | Required. The filter label. |

## DashboardFilterOption

DashboardFilterOption represents a filter option in a dashboard.

| Field | Field Type | Description |
| --- | --- | --- |
| operator | DashboardFilterOperation(enumeration of type string) | Required. Represents the filter operation for this filter item. Valid values are:equalsnotEquallessThangreaterThanlessOrEqualgreaterOrEqualcontainsnotContainstartsWithincludesexcludesbetweenNoteThe “between” operator takes two operands (for example, “between MinimumValue, MaximumValue”). Note also that the minimum value is inclusive, while the maximum value is exclusive. All other dashboard filter operations take a single operand only.This field is available in API version 24.0 and later.With API version 23.0, valid values are enumerated in CustomField. |
| values | string[] | Required. One or more values in the Filter Options area of the Add Filter dialog. This field is available in API version 24.0 and later. |

## DashboardGridLayout

Lightning Experience features dashboards with more than three columns and components that span multiple columns and multiple rows in size. DashboardGridLayout lists the included dashboard components, specifies the number of dashboard columns, and sets each dashboard row’s height in pixels.

| Field | Field Type | Description |
| --- | --- | --- |
| dashboardGridComponents | DashboardGridComponent[] | List of DashboardGridComponent objects in the dashboard. |
| numberOfColumns | int | Required. Total number of columns in the dashboard. |
| rowHeight | int | Required. Height of each row in pixels. |

## DashboardGridComponent

Lightning Experience features dashboards with more than three columns and components that span multiple columns and multiple rows in size. DashboardGridComponent specifies location and size of a given dashboard component.

| Field | Field Type | Description |
| --- | --- | --- |
| colSpan | int | Required. The width of the dashboard component in columns.For example, if colSpan is 5, then the dashboard component spans five columns. |
| columnIndex | int | Required. The left-most column that is occupied by the dashboard component. |
| dashboardComponent | DashboardComponent | Required. The dashboard component that is being sized and placed. |
| rowIndex | int | Required. The top-most row that is occupied by the dashboard component. |
| rowSpan | int | Required. The height of the dashboard component in rows. |

## DashboardComponent

A dashboard consists of a group of different components or elements that display data. Each component can use a custom report or a custom s-control as their data source to display corporate metrics or key performance indicators. You can create several dashboard components and display them all in one dashboard aligned in up to three columns.

| Field | Field Type | Description |
| --- | --- | --- |
| chartAxisRange | ChartRangeType (enumeration of type string) | A manual or automatic axis range for bar or line charts. The valid values are:automanual |
| chartAxisRangeMax | double | The maximum axis range to be displayed. This only applies to bar and line charts in which the manual axis range is selected for the chartAxisRange field. |
| chartAxisRangeMin | double | The minimum axis range to be displayed. This only applies to bar and line charts in which the manual axis range is selected for the chartAxisRange field. |
| chartSummary | ChartSummary | Specifies the summary field for the chart data. Required if isAutoSelectFromReport is set to false.This field is available in API version 25.0 and later. |
| componentType | DashboardComponentType (enumeration of type string) | Required. Dashboard component type. The valid values are:BarBarGroupedBarStackedBarStacked100ColumnColumnGroupedColumnLineColumnLineGroupedColumnLineStackedColumnLineStacked100ColumnStackedColumnStacked100DonutFlexTableFunnelGaugeImageLightningWebComponentLineLineCumulativeLineGroupedLineGroupedCumulativeMetricPiePulseMetricCardRichTextScatterScatterGroupedSControlTableVisualforcePage |
| dashboardComponentContents | DashboardComponentContent[] | A list of dashboard component contents.This field is available in API version 58.0 and later. |
| dashboardDynamicValues | DashboardDynamicValue[] | A list of dashboard dynamic values.This field is available in API version 36.0 and later. |
| dashboardFilterColumns | DashboardFilterColumn[] | A list of dashboard filter columns. Each report-based component must have a dashboard filter column that defines the column that the filter applies to.This field is available in API version 23.0 and later. |
| dashboardTableColumn | DashboardTableColumn[] | Represents a list of columns on a customized dashboard table component. |
| displayUnits | ChartUnits (enumeration of type string) | Chart Units. The valid values are:AutoIntegerHundredsThousandsMillionsBillionsTrillions |
| drillDownUrl | string | For charts, specifies a URL that users go to when they click the dashboard component. Use this option to send users to another dashboard, report, record detail page, or other system that uses a Web interface. This field overrides the drillEnabled and drillToDetailEnabled fields. |
| drillEnabled | boolean | Specifies whether to take users to the full or filtered source report when they click the dashboard component. Set to false to drill to the full source report; set to true to drill to the source report filtered by what they clicked. If set to true, users can click individual groups, axis values, or legend entries.This overrides the drillToDetailEnabled field. This field is available in API version 17.0 and later. |
| drillToDetailEnabled | boolean | When enabled, users are taken to the record detail page when they click a record name, record owner, or feed post in a table or chart. When set to true users can click axis and legend values, chart elements, and table entries. The drillDownUrl and drillEnabled fields override this field. This field is available in API version 20.0 and later. |
| enableHover | boolean | Specifies whether to display values, labels, and percentages when hovering over charts. Hover details depend on chart type. Percentages apply to pie, donut, and funnel charts only. This field is available in API version 17.0 and later. |
| expandOthers | boolean | Specifies whether to combine all groups less than or equal to 3% of the total into a single 'Others' wedge or segment. This only applies to pie, donut, and funnel charts. Set to true to show all values individually on the chart; set to false to combine small groups into 'Others.' This field is available in API version 17.0 and later. |
| flexComponentProperties | DashboardFlexTableComponentProperties | Defines metadata for Lightning Experience table columns and sorting. This field is available in API version 41.0 and later. |
| footer | string | Footer displayed at the bottom of the dashboard component. Maximum of 255 characters. |
| gaugeMax | double | The maximum value on a gauge. A gauge is used to see how far you are from reaching a goal. It looks like a speedometer in a car. |
| gaugeMin | double | The minimum value on a gauge. |
| groupingColumn | string | Specifies the field by which to group data. This data is displayed on the X-axis for vertical column charts and on the Y-axis for horizontal bar charts.This field is available in API version 25.0 and later. |
| GroupingSortProperties | DashboardComponentGroupingSortProperties | This field captures sort properties of the dashboard component. If the component has one or more groupings, sort information is stored here; otherwise, it is stored in the sortBy field. This field is available in API version 46.0 and later. |
| header | string | Header displayed at the top of the dashboard component. Maximum of 80 characters. |
| indicatorBreakpoint1 | double | The value that separates the indicatorLowColor from the indicatorMiddleColor on the dashboard. |
| indicatorBreakpoint2 | double | The value that separates the indicatorMiddleColor from the indicatorHighColor on the dashboard. |
| indicatorHighColor | string | The color representing a high number range on the gauge. |
| indicatorLowColor | string | The color representing a low number range on the gauge. |
| indicatorMiddleColor | string | The color representing a medium number range on the gauge. |
| legendPosition | ChartLegendPosition (enumeration of type string) | The location of the legend with respect to the chart. The valid values are:BottomOnChartRight |
| maxValuesDisplayed | int | The maximum number of elements to include in the top-level grouping of the horizontal axis of a horizontal chart, vertical axis of a vertical chart, or selected axis of a stacked bar chart. For example, if you want to list only your top five salespeople, create an opportunity report that lists total opportunity amounts by owner and enter 5 in this field. |
| metricLabel | string | Descriptive label for the metric. This is relevant if metric is the value of the componentType field. |
| page | string | Visualforce page associated with the component. |
| pageHeightInPixels | int | Display height of the Visualforce page in pixels. |
| report | string | Name of the report associated with the component. |
| scontrol | string | S-control associated with component if scontrol is the value of the componentType field. For more information, see “Defining Custom S-Controls” in the Salesforce online help. |
| scontrolHeightInPixels | int | Display height of the s-control in pixels. |
| showPercentage | boolean | Indicates if percentages are displayed for regions of gauges and wedges and segments of pie, donut, and funnel charts (true), or not (false). |
| showPicturesOnCharts | boolean | Display Chatter photos for up to 20 records in a horizontal bar chart component whose source report is grouped by a user or group name field. If there are more than 20 records with photos, record names are shown instead of photos. Set Grouping Display to None to show photos. Set the Drill Down to option to Record Detail Page to take users directly to user profile or group pages when they click photos. Chatter must be enabled for photos to be displayed. Depending on your organization's setup, you may not see photos on tables and charts. |
| showPicturesOnTables | boolean | Display Chatter photos for up to 20 records in a horizontal bar chart component whose source report is grouped by a user or group name field. If there are more than 20 records with photos, record names are shown instead of photos. Set Grouping Display to None to show photos. Set the Drill Down to option to Record Detail Page to take users directly to user profile or group pages when they click photos. Chatter must be enabled for photos to be displayed. Depending on your organization's setup, you may not see photos on tables and charts. |
| showTotal | boolean | Indicates if the total of all wedges is displayed for gauges and donut charts (true), or not (false). |
| showValues | boolean | Indicates if the values of individual records or groups are displayed for charts (true), or not (false). |
| sortBy | DashboardComponentFilter (enumeration of type string) | The sort option for the dashboard component. |
| sortLegendValues | boolean | Specifies whether to sort the legend values for the dashboard component. |
| title | string | The title of the dashboard component. Maximum of 40 characters. |
| useReportChart | boolean | Specifies whether to use the chart defined in the source report on this dashboard component. The chart settings in the source report determine how the chart displays in the dashboard, and any chart settings you define for the dashboard are overridden. If you defined a combination chart in the source report, use this option to use that combination chart on this dashboard. |

## DashboardComponentContent

dashboardComponentContent represents the content of a dashboard’s components.

| Field | Field Type | Description |
| --- | --- | --- |
| additionalInfo | string | Any additional metadata the user wants to include for the component contents. |
| altText | string | The component’s alternative text. |
| fileName | string | The name of the component file. |
| fit | Fit (enumeration of type string) | The image alignment type. Valid values are:FitHeightFitWidthOriginalStretchTile |
| horizontalAlignment | HorizontalAlignment (enumeration of type string) | The horizontal alignment type. Valid values are:LeftCenterRight |
| componentParameters | string | The parameters for the component. |
| richTextContent | string | The rich text content for the component. |
| tooltip | string | The dashboard component’s tooltip. |
| verticalAlignment | VerticalAlignment (enumeration of type string) | The vertical alignment type. Valid values are:BottomCenterTop |

## DashboardDynamicValue

DashboardDynamicValue represents a dynamic value in a dashboard.

| Field | Field Type | Description |
| --- | --- | --- |
| additionalInfo | string | Any additional metadata the user wants to include for the dynamic value. |
| fieldName | string | Required. The name of the field for the dynamic value. |
| isDynamicUser | boolean | Indicates whether the value should be retrieved as the user running the dashboard (true) or not (false). |

## DashboardFilterColumn

DashboardFilterColumn represents a filter column in a dashboard.

| Field | Field Type | Description |
| --- | --- | --- |
| column | string | Required. The report column code for the filter. |

## DashboardTableColumn

DashboardTableColumn represents a column in a customized table component in a dashboard.

| Field | Field Type | Description |
| --- | --- | --- |
| aggregateType | ReportSummaryType[] (enumeration of type string) | Specifies the aggregation type for the table column. |
| column | string | Required. The label of the column to use in the table. |
| showTotal | boolean | Displays the totals for each summarizable column in the dashboard table. This field is available in API version 19.0 and later. |
| sortBy | DashboardComponentSection(enumeration of type string) | The sort option for the dashboard table component. Sort on just one column per table. |

## DashboardFlexTableComponentProperties

DashboardFlexTableComponentProperties represents a column in a customized table component in a dashboard.

| Field | Field Type | Description |
| --- | --- | --- |
| flexTableColumn | DashboardComponentColumn | Represents a column in a Lightning Experience table component. This field is available in API version 41.0 and later. |
| flexTableSortInfo | DashboardComponentSortInfo | Represents sorting column and order in a Lightning Experience table component. This field is available in API version 41.0 and later. |
| hideChatterPhotos | boolean | If true, hides any photos from Chatter feeds.This field is available in API version 41.0 and later. |
| decimalPrecision | integer | For columns with numeric values, indicates the number of significant digits. |
| useReportTableSetting | boolean | If true, users can import report table settings to this component.This field is available in API version 65.0 and later. |

## DashboardComponentGroupingSortProperties

DashboardComponentGroupingSortProperties is composed of multiple elements of the type DashboardComponentGroupingSort.

| Field | Field Type | Description |
| --- | --- | --- |
| groupingSorts | DashboardComponentGroupingSort | This field stores sort information for a dashboard at each grouping level of granularity. This field is available in API version 46.0 and later. |

## DashboardComponentGroupingSort

DashboardComponentGroupingSort specifies properties for sorting on a dashboard component group.

| Field | Field Type | Description |
| --- | --- | --- |
| groupingLevel | String | Grouping at which this sort configuration is applied. |
| inheritedReportGroupingSort | String | true if the sort order is picked up from an underlying report for this grouping level. |
| sortColumn | String | If grouping is sorted by an aggregate, this value is the aggregate value (such as sortColumn). If the grouping is sorted by its own value, this field is null. |
| sortOrder | String | Ascending or Descending to reflect the sort order. |

## DashboardComponentColumn

DashboardComponentColumn represents a component column in a dashboard. Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| breakPoint1 | double | The value that separates the lowRangeColor from the midRangeColor on the dashboard. |
| breakPoint2 | double | The value that separates the midRangeColor from the highRangeColor on the dashboard. |
| breakPointOrder | double | Conditional highlighting can be applied to multiple columns. This field stores the order of conditional highlights. |
| highRangeColor | int | The color representing a high number range on the column. |
| lowRangeColor | int | The color representing a low number range on the column. |
| midRangeColor | int | The color representing a mid number range on the column. |
| reportColumn | string | Required. The report column code for the filter. |
| showTotal | boolean | If true, the column total is displayed. |
| type | DashboardComponentColumnType (enumeration of type string) | Represents the type of Lightning Experience table column:DetailsAggregatesGroupingThis field is available in API version 41.0 and later. |

## DashboardComponentSortInfo

DashboardFilterColumns represents a filter column in a dashboard.

| Field | Field Type | Description |
| --- | --- | --- |
| ComponentSortColumn | string | Indicates the column on which the table is sorted. This field is available in API version 41.0 and later. |
| sortOrder | string | Indicates whether column sorting is ascending or descending. This field is available in API version 41.0 and later. |

## DashboardComponentSection

DashboardComponentSection represents one of the sections or columns in a dashboard.

| Field | Field Type | Description |
| --- | --- | --- |
| columnSize | DashboardComponentSize (enumeration of type string) | Required. The size of the column in the dashboard:MediumNarrowWide |
| components | DashboardComponent[] | The list of DashboardComponent objects in the dashboard column. |

## DashboardComponentFilter

DashboardComponentFilter is an enumeration of type string that lists the sort values for dashboard components. The valid values are:

| Enumeration Value | Description |
| --- | --- |
| RowLabelAscending | Sorts in alphabetical order by the label. |
| RowLabelDescending | Sorts in reverse alphabetical order by the label. |
| RowValueAscending | Sorts lowest to highest by the value. |
| RowValueDescending | Sorts highest to lowest by the value. |

## Declarative Metadata Sample Definition — Filtered Dashboard

A sample XML definition of a filtered dashboard is shown below. Note that this example is supported in API version 24.0 and later. The file name matches the dashboard title and the extension is .dashboard.

```

```

## Declarative Metadata Sample Definition — Unfiltered Dashboard

A sample XML definition of a dashboard is shown below. The file name matches the dashboard title and the extension is .dashboard.

```

```

## Declarative Metadata Sample Definition — Lightning Experience Dashboard with isGridLayout Equals true

A sample XML definition of a Lightning Experience dashboard with isGridLayout equals true is shown below. Note that this example is supported in API version 35.0 and later. The file name matches the dashboard title and the extension is .dashboard.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Folder](atlas.en-us.api_meta.meta/api_meta/meta_folder.htm "Represents a folder. This type extends the Metadata metadata type and inherits its fullName field.")

-   [Report](atlas.en-us.api_meta.meta/api_meta/meta_report.htm "Represents a custom report. This metadata type only supports custom reports; standard reports aren’t supported.")

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyDBFolder/MyDBName</members>
        <name>Dashboard</name>
    </types>
    <types>
        <members>MyDocumentFolder/MyDocumentName</members>
        <name>Document</name>
    </types>
    <types>
        <members>unfiled$public/MarketingProductInquiryResponse</members>
        <members>unfiled$public/SalesNewCustomerEmail</members>
        <name>EmailTemplate</name>
    </types>
    <types>
        <members>MyReportFolder/MyReportName</members>
        <name>Report</name>
    </types>
    <version>66.0</version>
</Package>
```

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Dashboard xmlns="http://soap.sforce.com/2006/04/metadata">
    <backgroundEndColor>#FFFFFF</backgroundEndColor>
    <backgroundFadeDirection>Diagonal</backgroundFadeDirection>
    <backgroundStartColor>#FFFFFF</backgroundStartColor>
    <dashboardFilters>
        <dashboardFilterOptions>
            <operator>equals</operator>
            <values>Media</values>
        </dashboardFilterOptions>
        <dashboardFilterOptions>
            <operator>lessThan</operator>
            <values>Working</values>
        </dashboardFilterOptions>
        <dashboardFilterOptions>
            <operator>between</operator>
            <values>ABC</values>
            <values>XYZ</values>
        </dashboardFilterOptions>
        <name>Industry</name>
    </dashboardFilters>
    <dashboardFilters>
        <dashboardFilterOptions>
            <operator>equals</operator>
            <values>Analyst,Partner</values>
        </dashboardFilterOptions>
        <dashboardFilterOptions>
            <operator>startsWith</operator>
            <values>Integrator</values>
        </dashboardFilterOptions>
        <name>Account Type</name>
    </dashboardFilters>
    <dashboardType>SpecifiedUser</dashboardType>
    <leftSection>
        <columnSize>Medium</columnSize>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Bar</componentType>
            <dashboardFilterColumns>
                <column>INDUSTRY</column>
            </dashboardFilterColumns>
            <dashboardFilterColumns>
                <column>TYPE</column>
            </dashboardFilterColumns>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>false</drillEnabled>
            <drillToDetailEnabled>false</drillToDetailEnabled>
            <enableHover>false</enableHover>
            <expandOthers>false</expandOthers>
            <legendPosition>Bottom</legendPosition>
            <report>unfiled$public/SampleReportofAccounts</report>
            <showPercentage>false</showPercentage>
            <showPicturesOnCharts>false</showPicturesOnCharts>
            <showValues>false</showValues>
            <sortBy>RowLabelAscending</sortBy>
            <useReportChart>false</useReportChart>
        </components>
    </leftSection>
    <middleSection>
        <columnSize>Medium</columnSize>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Funnel</componentType>
            <dashboardFilterColumns>
                <column>ACCOUNT_INDUSTRY</column>
            </dashboardFilterColumns>
            <dashboardFilterColumns>
                <column>ACCOUNT.TYPE</column>
            </dashboardFilterColumns>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>false</drillEnabled>
            <drillToDetailEnabled>false</drillToDetailEnabled>
            <enableHover>false</enableHover>
            <expandOthers>false</expandOthers>
            <legendPosition>Bottom</legendPosition>
            <report>unfiled$public/SampleReportofCases</report>
            <showPercentage>false</showPercentage>
            <showValues>true</showValues>
            <sortBy>RowLabelAscending</sortBy>
            <useReportChart>false</useReportChart>
        </components>
    </middleSection>
    <rightSection>
        <columnSize>Medium</columnSize>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Column</componentType>
            <dashboardFilterColumns>
                <column>INDUSTRY</column>
            </dashboardFilterColumns>
            <dashboardFilterColumns>
                <column>ACCOUNT_TYPE</column>
            </dashboardFilterColumns>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>false</drillEnabled>
            <drillToDetailEnabled>false</drillToDetailEnabled>
            <enableHover>false</enableHover>
            <expandOthers>false</expandOthers>
            <legendPosition>Bottom</legendPosition>
            <report>unfiled$public/SampleReportofOpportunities</report>
            <showPercentage>false</showPercentage>
            <showValues>false</showValues>
            <sortBy>RowLabelAscending</sortBy>
            <useReportChart>false</useReportChart>
        </components>
    </rightSection>
    <runningUser>admin@TESTORGNUM</runningUser>
    <textColor>#000000</textColor>
    <title>My Dashboard</title>
    <titleColor>#000000</titleColor>
    <titleSize>12</titleSize>
</Dashboard>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Dashboard xmlns="http://soap.sforce.com/2006/04/metadata">
    <backgroundEndColor>#FFFFFF</backgroundEndColor>
    <backgroundFadeDirection>LeftToRight</backgroundFadeDirection>
    <backgroundStartColor>#FFFFFF</backgroundStartColor>
    <description>Dashboard with all possible chart types</description>
    <leftSection>
        <columnSize>Medium</columnSize>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>BarStacked100</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <componentType>Table</componentType>
            <dashboardTableColumn>
                <column>CLOSE_DATE</column>
                <sortBy>RowLabelAscending</sortBy>
            </dashboardTableColumn>
            <dashboardTableColumn>
                <aggregateType>Sum</aggregateType>
                <column>AMOUNT</column>
                <showTotal>true</showTotal>
            </dashboardTableColumn>
            <dashboardTableColumn>
                <column>STAGE_NAME</column>
            </dashboardTableColumn>
            <dashboardTableColumn>
                <column>PROBABILITY</column>
                <aggregateType>Maximum</aggregateType>
            </dashboardTableColumn>
            <displayUnits>Integer</displayUnits>
            <header>Opportunities Table</header>
            <indicatorHighColor>#54C254</indicatorHighColor>
            <indicatorLowColor>#C25454</indicatorLowColor>
            <indicatorMiddleColor>#C2C254</indicatorMiddleColor>
            <maxValuesDisplayed>10</maxValuesDisplayed>
            <report>testFolder/sourceRep</report>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Bar</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Column</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <legendPosition>Bottom</legendPosition>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
            <useReportChart>true</useReportChart>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Funnel</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <expandOthers>true</expandOthers>
            <legendPosition>Bottom</legendPosition>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
    </leftSection>
    <middleSection>
        <columnSize>Medium</columnSize>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>ColumnStacked100</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>ColumnStacked</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>ColumnStacked</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>ColumnGrouped</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Column</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
    </middleSection>
    <rightSection>
        <columnSize>Medium</columnSize>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Bar</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Pie</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <expandOthers>true</expandOthers>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>LineGroupedCumulative</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>LineGrouped</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>LineCumulative</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
        <components>
            <chartAxisRange>Auto</chartAxisRange>
            <componentType>Donut</componentType>
            <displayUnits>Auto</displayUnits>
            <drillEnabled>true</drillEnabled>
            <enableHover>true</enableHover>
            <expandOthers>true</expandOthers>
            <report>testFolder/sourceRep</report>
            <sortBy>RowLabelAscending</sortBy>
        </components>
    </rightSection>
    <runningUser>admin@TESTORGNUM</runningUser>
    <textColor>#000000</textColor>
    <title>Db Title</title>
    <titleColor>#000000</titleColor>
    <titleSize>12</titleSize>
</Dashboard>
```

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Dashboard xmlns="http://soap.sforce.com/2006/04/metadata">
    <backgroundEndColor>#FFFFFF</backgroundEndColor>
    <backgroundFadeDirection>Diagonal</backgroundFadeDirection>
    <backgroundStartColor>#FFFFFF</backgroundStartColor>
    <dashboardType>SpecifiedUser</dashboardType>
    <gridLayout>
        <dashboardGridComponents>
            <colSpan>3</colSpan>
            <columnIndex>0</columnIndex>
            <dashboardComponent>
                <autoselectColumnsFromReport>false</autoselectColumnsFromReport>
                <chartAxisRange>Auto</chartAxisRange>
                <chartSummary>
                    <axisBinding>y</axisBinding>
                    <column>RowCount</column>
                </chartSummary>
                <componentType>Donut</componentType>
                <drillEnabled>false</drillEnabled>
                <drillToDetailEnabled>false</drillToDetailEnabled>
                <enableHover>false</enableHover>
                <expandOthers>false</expandOthers>
                <groupingColumn>TITLE</groupingColumn>
                <legendPosition>Bottom</legendPosition>
                <report>unfiled$public/lead_rpt</report>
                <showPercentage>false</showPercentage>
                <showTotal>false</showTotal>
                <showValues>true</showValues>
                <sortBy>RowLabelAscending</sortBy>
                <useReportChart>false</useReportChart>
            </dashboardComponent>
            <rowIndex>0</rowIndex>
            <rowSpan>3</rowSpan>
        </dashboardGridComponents>
        <dashboardGridComponents>
            <colSpan>3</colSpan>
            <columnIndex>0</columnIndex>
            <dashboardComponent>
                <autoselectColumnsFromReport>false</autoselectColumnsFromReport>
                <chartAxisRange>Auto</chartAxisRange>
                <chartSummary>
                    <axisBinding>y</axisBinding>
                    <column>RowCount</column>
                </chartSummary>
                <componentType>Pie</componentType>
                <drillEnabled>false</drillEnabled>
                <drillToDetailEnabled>false</drillToDetailEnabled>
                <enableHover>false</enableHover>
                <expandOthers>false</expandOthers>
                <groupingColumn>TITLE</groupingColumn>
                <legendPosition>Bottom</legendPosition>
                <report>unfiled$public/lead_rpt</report>
                <showPercentage>false</showPercentage>
                <showValues>true</showValues>
                <sortBy>RowLabelAscending</sortBy>
                <useReportChart>false</useReportChart>
            </dashboardComponent>
            <rowIndex>3</rowIndex>
            <rowSpan>3</rowSpan>
        </dashboardGridComponents>
        <dashboardGridComponents>
            <colSpan>3</colSpan>
            <columnIndex>0</columnIndex>
            <dashboardComponent>
                <autoselectColumnsFromReport>false</autoselectColumnsFromReport>
                <chartAxisRange>Auto</chartAxisRange>
                <chartSummary>
                    <axisBinding>y</axisBinding>
                    <column>RowCount</column>
                </chartSummary>
                <componentType>Column</componentType>
                <drillEnabled>false</drillEnabled>
                <drillToDetailEnabled>false</drillToDetailEnabled>
                <enableHover>false</enableHover>
                <expandOthers>false</expandOthers>
                <groupingColumn>TITLE</groupingColumn>
                <legendPosition>Bottom</legendPosition>
                <report>unfiled$public/lead_rpt</report>
                <showPercentage>false</showPercentage>
                <showValues>false</showValues>
                <sortBy>RowLabelAscending</sortBy>
                <useReportChart>false</useReportChart>
            </dashboardComponent>
            <rowIndex>9</rowIndex>
            <rowSpan>3</rowSpan>
        </dashboardGridComponents>
        <numberOfColumns>9</numberOfColumns>
        <rowHeight>90</rowHeight>
    </gridLayout>
    <isGridLayout>true</isGridLayout>
    <runningUser>admin@s1.com</runningUser>
    <textColor>#000000</textColor>
    <title>sfx</title>
    <titleColor>#000000</titleColor>
    <titleSize>12</titleSize>
</Dashboard>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- CustomField (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- ChartSummary (atlas.en-us.api_meta.meta/api_meta/meta_report.htm)
- ReportSummaryType (atlas.en-us.api_meta.meta/api_meta/meta_report.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Folder (atlas.en-us.api_meta.meta/api_meta/meta_folder.htm)
- Report (atlas.en-us.api_meta.meta/api_meta/meta_report.htm)
