---
title: "Dashboard State Input Representation"
domain: bi-dev-guide-rest
topic: dashboard-state-input-representation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:09.253Z
estimatedTokens: 21707
namespace: String
keywords: [Dashboard, State, Input, Representation, DashboardStateInputRepresentation, resource, representations, API, POST, PATCH, requests, REST, endpoints, their, own]
---

# Dashboard State Input Representation

> This page contains the reference for the DashboardStateInputRepresentation resource and
    all the representations that make up the dashboard state for API POST and PATCH requests. The
    following representation details are not REST API endpoints on their own, but describe object
    representations used in REST API request bodies.

**Namespace:** `String`

# Dashboard State Input Representation

This page contains the reference for the DashboardStateInputRepresentation resource and all the representations that make up the dashboard state for API POST and PATCH requests. The following representation details are not REST API endpoints on their own, but describe object representations used in REST API request bodies.

## Dashboard​State​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| data​Source​Links | Dashboard​Data​Source​Link​Input​Representation[] | The list of datasource links used as part of the dashboard. | Optional | DEPRECATED 39.0-56.0 |
| data​Source​Links​Info | Dashboard​Data​Source​Links​Info​Input​Representation[] | The list of datasource links information used as part of the dashboard. | Optional | 57.0 |
| filters | Filter​Item​Input​Representation[] | The list of datasource filters applied in the dashboard. | Optional | 41.0 |
| grid​Layouts | Grid​Layout​Input​Representation[] | The list of Grid​Layout​Input​Representation objects used as part of this dashboard. If present, layouts must not be set. | Optional | 36.0 |
| layouts | Layout​Input​Representation[] | The list of Layout​Input​Representation objects used as part of this dashboard. | Optional | 36.0 |
| parameters | ParameterItemInputRepresentation[] | The list of parameters created for this dashboard. | Optional | 58.0 |
| steps | Map<String, StepInputRepresentation> | The map of all the steps used to create this dashboard keyed with the step names. Valid step types are:Aggregate​Flex​Query​Step​Input​RepresentationAggregate​Step​Input​RepresentationApex​Step​Input​RepresentationCdp​Step​Input​RepresentationDirect​Report​Step​Input​RepresentationForecasting​Step​Input​RepresentationHierarchy​Step​Input​RepresentationInput​Step​Input​RepresentationGrain​Step​Input​RepresentationLens​Step​Input​RepresentationMultistep​Input​RepresentationSql​Step​Input​RepresentationSaql​Step​Input​RepresentationSoql​Step​Input​RepresentationStatic​Flex​Step​Input​Representation | Optional | 36.0 |
| widget​Style | Grid​Layout​Widget​Style​Input​Representation | The default styling for widgets in this dashboard. | Optional | 37.0 |
| widgets | Map<String, Dashboard​Widget​Input​Representation> | The map of all the Dashboard​Widget​Input​Representation objects used to create this dashboard keyed with their names. | Optional | 36.0 |

## Dashboard​Data​Source​Link​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | Dashboard​Data​Source​Field​Input​Representation[] | The list of fields connected in the datasource link. | Required | 39.0 |
| label | String | The label of the datasource link. | Required | 39.0 |
| name | String | The name of the datasource link. | Required | 39.0 |

## Dashboard​Data​Source​Links​Info​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enable​Automatic​Linking | Boolean | Indicates whether automatic linking is enabled for the dashboard (true) or not (false). | Optional | 57.0 |
| exclude​Relationships | Dashboard​Data​Source​Relationship​Input​Representation[] | The list of data source exclude relationships from faceting in the dashboard. | Optional | 57.0 |
| links | Dashboard​Data​Source​Link​Input​Representation[] | The list of data source links for the dashboard. | Required | 57.0 |

## Dashboard​Data​Source​Relationship​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| from​Data​Source | String | The fully qualified name of the "from" data source. | Required | 57.0 |
| from​Data​Source​Type | Connect​Wave​Data​Source​Type​Enum | The type of the "from" data source. Valid values are:ApexCdpDatasetHierarchyReport​TypeSaqlSobjectStatic | Required | 57.0 |
| to​Data​Source | String | The fully qualified name of the "to" data source. | Required | 57.0 |
| to​Data​Source​Type | Connect​Wave​Data​Source​Type​Enum | The type of the "to" data source. Valid values are:ApexCdpDatasetHierarchyReport​TypeSaqlSobjectStatic | Required | 57.0 |

## Dashboard​Data​Source​Field​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| data​Source​Name | String | The developer name of the data source. | Required | 39.0 |
| data​Source​Namespace | String | The namespace that qualifies the dataset asset name. | Optional | 39.0 |
| data​Source​Type | Connect​Wave​Data​Source​Type​Enum | The type of datasource. Valid values are:ApexCdpDatasetHierarchyReport​TypeSaqlSobjectStatic | Required | 39.0 |
| dataspace | String | The name of datasapce that the Data 360 object is assigned to. | Optional | 62.0 |
| field​Name | String | The name of the field in data source. | Required | 39.0 |

## ParameterItemInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| default​Value | Object | The default value of the parameter. | Required | 58.0 |
| description | String | The description of the parameter. | Optional | 58.0 |
| label | String | The label of the parameter. | Optional | 58.0 |
| name | String | The name of the parameter. | Required | 58.0 |

## Filter​Item​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cdpObject | String | The Data 360 datasource the filter applies to. | Required | 55.0 |
| dataset | Asset​Reference​Input​Representation | The datasource the filter applies to. | Required | 41.0 |
| dependent | Boolean | Indicates whether the filter item is dependent (true) or not (false). | Optional | 45.0 |
| fields | String[] | The list of fields in filter. | Optional | 41.0 |
| hidden | Boolean | Indicates whether the filter is hidden in view mode (true) or not (false). | Optional | 41.0 |
| label | String | The label of the filter. | Optional | 41.0 |
| locked | Boolean | Indicates whether the filter is locked (true) or not (false). | Optional | 41.0 |
| operator | String | The operator for the filter. | Required | 41.0 |
| sObject | String | The sObject datasource the filter applies to. | Required | 55.0 |
| value | String | The value for the filter. | Required | 41.0 |

## Grid​Layout​Style​Input​Representation

GridLayoutStyleInputRepresentation inherits properties from the abstract [ImageParametersInputRepresentation](#ImageParametersInputRepresentation). These base properties appear in GridLayoutStyleInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | Background color for the layout. |  | 37.0 |
| cell​SpacingX | Integer | Horizontal spacing between grid cells. |  | 37.0 |
| cell​SpacingY | Integer | Vertical spacing between grid cells. |  | 37.0 |
| gutterColor | String | Gutter color of the layout. |  | 39.0 |
| widgetStyle | Grid​Layout​Widget​Style​Input​Representation | Default styling for widgets across all layouts. | Optional | 36.0 |

## Aggregate​Flex​Query​Step​Input​Representation

AggregateFlexQueryStepInputRepresentation inherits properties from the abstract [LegacyStepWithQueryInputRepresentation](#LegacyStepWithQueryInputRepresentation). These base properties appear in AggregateFlexQueryStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether the steps broadcasts facets (true) or not (false). | Optional | 41.0 |
| cdp​Object | String | The name of the Data 360 object used for the query. | Optional | 54.0-57.0 |
| cdp​Objects | String | A list of the Data 360 object names used for the query. | Optional | 58.0 |
| connection​Name | String | The name of the connection used for querying external data. | Optional | 48.0 |
| dataspace | String | The dataspace name for Data 360 objects. | Optional | 61.0 |
| receive​Facet​Source | Receive​Facet​Source​Input​Representation | The receive facet source configuration for the step. | Optional | 36.0 |
| sobject | String | The name of the sObject used for the SOQL query. | Required | 47.0 |
| values | Map<String, Dynamic​Value​Input​Representation> | A map of dynamic data values. | Optional | 57.0 |

## Aggregate​Step​Input​Representation

AggregateStepInputRepresentation inherits properties from the abstract [LegacyStepWithQueryInputRepresentation](#LegacyStepWithQueryInputRepresentation). These base properties appear in AggregateStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| is​Facet | Boolean | Indicates whether the step is faceted (true) or not (false). | Required | 36.0 |

## Apex​Step​Input​Representation

ApexStepInputRepresentation inherits properties from the abstract [StepInputRepresentation](#StepInputRepresentation). These base properties appear in ApexStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| query | Apex​Step​Query​Input​Representation | The query for the step | Required | 41.0 |

## Apex​Step​Query​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| body | Object | The body for the Apex request. | Required | 41.0 |
| path | String | The path to the Apex controller. | Required | 41.0 |

## Cdp​Step​Input​Representation

CdpStepInputRepresentation inherits properties from the abstract [FlexMetadataWithSimpleQueryStepInputRepresentation](#FlexMetadataWithSimpleQueryStepInputRepresentation). These base properties appear in CdpStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether the step broadcasts faceting (true) or not (false). | Optional | 54.0 |
| dataspace | String | The dataspace name for Data 360 objects. | Optional | 61.0 |
| receive​Facet​Source | Receive​Facet​Source​Input​Representation | The receive facet source configuration | Required | 54.0 |
| use​Legacy​Cdp​Query​Api | Boolean | Indicates whether this step uses the legacy Data 360 Query API (true) or not (false). | Optional | 65.0 |
| values | Map<String, Dynamic​Value​Representation> | A map of dynamic data values. | Required | 59.0 |

## Direct​Report​Step​Input​Representation

DirectReportStepInputRepresentation inherits properties from the abstract [StepInputRepresentation](#StepInputRepresentation). These base properties appear in DirectReportStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether this step broadcasts faceting filters to other steps on the dashboard (true) or not (false). | Optional | 56.0 |
| query | Direct​Report​Step​Query​Input​Representation | The query to run for this step. | Required | 53.0 |
| receive​Facet​Source | Receive​Facet​Source​Input​Representation | The receive facet configuration. | Optional | 56.0 |

## ForecastingStepInputRepresentation

ForecastingStepInputRepresentation inherits properties from the abstract [StepInputRepresentation](#StepInputRepresentation). These base properties appear in ForecastingStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| query | Forecasting​Step​Query​Input​Representation | The query to run for this step. | Required | 59.0 |

## Grain​Step​Input​Representation

GrainStepInputRepresentation inherits properties from the abstract [LegacyStepWithQueryInputRepresentation](#LegacyStepWithQueryInputRepresentation). These base properties appear in GrainStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| is​Facet | Boolean | Indicates whether the step is faceted (true) or not (false). | Required | 36.0 |

## HierarchyStepInputRepresentation

HierarchyStepInputRepresentation inherits properties from the abstract [StepInputRepresentation](#StepInputRepresentation). These base properties appear in HierarchyStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter​Field | String | The filter field to pass to the role hierarchy evaluation. | Required | 55.0 |
| hierarchy​Type | Hierarchy​Type​Enum | The type of hierarchy used to facet. Valid values are:Forecast​HierarchyRole​Hierarchy | Required | 55.0 |
| query | Hierarchy​Step​Query​Representation | The query parameters to pass to the role hierarchy evaluation. | Required | 55.0 |

## HierarchyStepQueryInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| limit | Integer | The maximum amount of results to return for this step. | Required | 55.0 |

## InputStepInputRepresentation

InputStepInputRepresentation inherits properties from the abstract [StepInputRepresentation](#bi_resources_dashboard_state_input_rep "This page contains the reference for the DashboardStateInputRepresentation resource and all the representations that make up the dashboard state for API POST and PATCH requests. The following representation details are not REST API endpoints on their own, but describe object representations used in REST API request bodies."). These base properties appear in InputStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| start | String | The start value for the step. | Required | 56.0 |
| value​Type | Connect​Wave​Input​Widget​Value​Format​Enum | The value type of the step. Valid values are:DateNumberText | Required | 56.0 |
| values | Input​Step​Values​Input​Representation[] | The list of values for the step. | Required | 56.0 |

## InputStepValuesInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| max | String | The max column in values. | Required | 56.0 |
| min | String | The min column in values. | Required | 56.0 |

## Lens​Step​Input​Representation

LensStepInputRepresentation inherits properties from the abstract [StepInputRepresentation](#StepInputRepresentation). These base properties appear in LensStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| source | Asset​Reference​Input​Representation | The lens source for this step. | Required | 50.0 |

## Multi​Step​Input​Representation

MultiStepInputRepresentation inherits properties from the abstract [LegacyStepInputRepresentation](#LegacyStepInputRepresentation). These base properties appear in MultiStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| columns | Column​Input​Representation[] | The list of columns of the comparison table. | Optional | 36.0 |
| global​Query | Query​Input | The SAQL used to create the step. | Optional | 36.0 |
| isFacet | Boolean | Indicates whether the step is faceted (true) or not (false). | Optional | 36.0 |

## Sql​Step​Input​Representation

SqlStepInputRepresentation inherits properties from the abstract [FlexMetadataWithSimpleQueryStepInputRepresentation](#FlexMetadataWithSimpleQueryStepInputRepresentation). These base properties appear in SqlStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether the step broadcasts faceting (true) or not (false). | Optional | 51.0 |
| connection​Name | String | The name of the connection used for querying external data | Required | 51.0 |
| receive​Facet​Source | Receive​Facet​Source​Input​Representation | The receive facet configuration. | Optional | 52.0 |

## Saql​Step​Input​Representation

SaqlStepInputRepresentation inherits properties from the abstract [FlexMetadataWithSimpleQueryStepInputRepresentation](#FlexMetadataWithSimpleQueryStepInputRepresentation). These base properties appear in SaqlStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether the step broadcasts faceting (true) or not (false). | Optional | 41.0 |
| receive​Facet​Source | Receive​Facet​Source​Input​Representation | The receive facet source configuration | Required | 48.0 |
| values | Map<String, Receive​Facet​Source​Input​Representation> | A map of dynamic data values. | Required | 57.0 |

## Soql​Step​Input​Representation

SoqlStepInputRepresentation inherits properties from the abstract [FlexMetadataWithSimpleQueryStepInputRepresentation](#FlexMetadataWithSimpleQueryStepInputRepresentation).

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether the step broadcasts faceting (true) or not (false). | Optional | 55.0 |
| receive​Facet​Source | Receive​Facet​Source​Input​Representation | The receive facet source configuration. | Optional | 55.0 |

## Static​Flex​Step​Input​Representation

StaticFlexStepInputRepresentation inherits properties from the abstract [FlexMetadataStepInputRepresentation](#FlexMetadataStepInputRepresentation). These base properties appear in StaticFlexStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether the step broadcasts faceting (true) or not (false). | Optional | 41.0 |
| columns | Map<String, Static​Flex​Step​Column​Input​Representation> | A map of metadata values for the columns. | Optional | 41.0 |
| datasets | Asset​Reference​Input​Representation[] | DEPRECATED The list of all the datasets used for the step. | Optional | 36.0-40.0 |
| dimensions | String[] | DEPRECATED The list of the dimensions for the step. | Optional | 36.0-40.0 |
| isFacet | Boolean | DEPRECATED Indicates whether the step is faceted (true) or not (false). | Optional | 36.0-40.0 |
| isGlobal | Boolean | Indicates whether this step is a global filter which can be faced to other steps or widgets in the dashboard (true) or not (false). | Optional | 38.0 |
| values | String[] | The list of values of this step. | Optional | 36.0 |

## Static​Step​Input​Representation

StaticStepInputRepresentation inherits properties from the abstract [LegacyStepInputRepresentation](#LegacyStepInputRepresentation). These base properties appear in StaticStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dimensions | String[] | The list of dimensions of the static step. | Optional | 36.0 |
| isFacet | Boolean | Indicates whether the step is faceted (true) or not (false). | Optional | 36.0 |
| values | String[] | The list of values for the step. | Optional | 36.0 |
| visualization​Parameters | Step​Visualization​Parameters​Input​Representation | The visualization parameters for the dashboard step. | Optional | 36.0 |

## Flex​Metadata​With​Simple​Query​Step​Input​Representation

FlexMetadataWithSimpleQueryStepInputRepresentation inherits properties from the abstract [FlexMetadataStepInputRepresentation](#FlexMetadataStepInputRepresentation). These base properties appear in FlexMetadataWithSimpleQueryStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| query | String | The query for the step. | Optional | 39.0 |

## Flex​Metadata​Step​Input​Representation

FlexMetadataStepInputRepresentation inherits properties from the abstract [StepInputRepresentation](#StepInputRepresentation). These base properties appear in FlexMetadataStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groups | Object | The subset of columns that define a semantic for the step. | Optional | 39.0 |
| numbers | Object | The number-based columns for the step. | Optional | 39.0 |
| strings | Object | The string-based columns for the step. | Optional | 39.0 |

## Legacy​Step​With​Query​Input​Representation

LegacyStepWithQueryInputRepresentation inherits properties from the abstract [LegacyStepInputRepresentation](#LegacyStepInputRepresentation). These base properties appear in LegacyStepWithQueryInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| query | String | Query​Input[]The query for the step. | Required | 39.0 |

## Legacy​Step​Input​Representation

LegacyStepInputRepresentation inherits properties from the abstract [StepInputRepresentation](#StepInputRepresentation). These base properties appear in LegacyStepInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| datasets | String | Asset​Reference​Input​Representation[]The list of datasets used by the step. | Required | 39.0 |
| is​Global | Boolean | Indicates whether the step is a global filter which can be faceted to other steps or widgets in the dashboard (true) or not (false). | Optional | 36.0 |

## Step​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| label | String | The display label of the step. | Optional | 39.0 |
| select​Mode | Connect​Wave​Select​Mode​Enum | The select mode types. Valid values are:MultiMultiRequiredNoneSingleSingleRequired | Optional | 36.0 |
| sortable | Boolean | Indicates whether this step supports quick sorting in preview mode (true) or not (false). | Optional | 64.0 |
| start | String | The start value of the step. | Optional | 36.0 |
| use​External​Filters | Boolean | Indicates whether this step uses external filters (true) or not (false). | Optional | 64.0 |
| use​Global | Boolean | Indicates whether the step is tied to the global step (true) or not (false). | Optional | 36.0 |
| visualization​Parameters | Step​Visualization​Parameters​Input​Representation | The visualization parameters for the step. | Optional | 36.0 |

## Direct​Report​Step​Query​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| metadata | Object | The metadata for the query. | Required | 53.0 |
| mode | Direct​Report​Mode​Enum | The query mode. Valid values are:AggregateDetailsSummary | Required | 53.0 |
| report​Id | String | The ID for the query report. | Required | 53.0 |

## ForecastingStepQueryInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| forecast​Type​Id | String | The forecast type for the query. | Required | 59.0 |
| start​Date | Object | The start date for the query. | Required | 59.0 |
| territory​Id | String | The territory ID for the query. | Required | 59.0 |
| user​Id | String | The user ID for the query. | Required | 59.0 |

## Static​Flex​Step​Column​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aggregate​Function | String | The aggregate function for the step. | Optional | 47.0 |
| dataset | Asset​Reference​Input​Representation | The dataset for the step. | Required | 47.0 |
| field | String | The aggregate field for the step. | Required | 47.0 |
| type | Connect​Wave​Dashboard​Static​Step​Column​Type​Enum | The column type. Valid values areStringNumberGroupingAggregate | Required | 47.0 |

## Column​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| format | Connect​Wave​Column​Format​Enum | The column format value. Valid values are:Currency​CentsCurrency​DollarsNumberPercentage | Optional | 36.0 |
| header | String | The header text of this column. | Optional | 36.0 |
| hidden | Boolean | Indicates whether the column is hidden (true) or not (false). | Optional | 36.0 |
| query | Query​Input | The SAQL used to create the comparison table. | Optional | 36.0 |
| showBars | Boolean | Indicates whether to show bars for the column (true) or not (false). | Optional | 36.0 |
| sort | Connect​Wave​Column​Sort​Enum | The column sort order. Valid values are:NoneAscendingDescendingInner​AscendingInner​Descending | Optional | 36.0 |

## Receive​Facet​Source​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| mode | Connect​Wave​Dashboard​Step​Receive​Facet​Mode​Type​Enum | The type of receive facet mode. Valid values are:AllExcludeIncludeNone | Required | 48.0 |
| steps | String[] | A list of steps that the current step receives or omits faceting from. | Required | 48.0 |

## Step​Visualization​Parameters​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| options | Lens​Visualization​Options​Input | The visualization option associated with this step. | Optional | 36.0 |
| parameters | Object | The valid widget parameters based on its type. | Optional | 40.0 |
| type | Connect​Wave​Widget​Type​Enum | The type of the widget. Valid values are:BoxChartCompare​TableComponentContainerDate​SelectorFilter​PanelGlobal​FiltersImageInheritLinkList​SelectorNavigationNumberPill​BoxRange​SelectorRepeater>TableTextUrlValues​Table |  | 40.0 |
| visualization​Type | Connect​Wave​Visualization​Type​Enum | The type of visualization. Valid values are:BulletCalendar​Heat​MapComboComparison​TableFlatgaugeGaugeHeat​MapHorizontal​BarHorizontal​DotLineMatrixParallel​CoordinatesPiePivot​TablePolargaugePyramidRatingScatterStack​WaterfallStacked​Horizontal​BarStacked​Vertical​BarTimeTime​BarTime​ComboValues​TableVertical​BarVertical​DotWaterfall | Optional | 36.0 |

## Grid​Layout​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| max​Width | Integer | The maximum width that the dashboard flexes to. | Optional | 38.0 |
| name | String | Name of this layout. | Required | 36.0 |
| num​Columns | Integer | The number of columns for a customizable dashboard grid layout. | Optional | 38.0 |
| pages | Grid​Layout​Page​Input​Representation[] | The list of pages of widgets within the layout. | Optional | 36.0 |
| row​Height | Connect​Wave​Row​Height​Enum | Specifies the grid cell row height. Valid values are:FineNormal | Optional | 39.0 |
| selectors | String[] | The list of selectors the layout applies to. | Optional | 36.0 |
| style | Grid​Layout​Style​Input​Representation | The styling for the layout. | Optional | 37.0 |
| version | Double | Version of this layout. | Required | 36.0 |
| widgetStyle | Grid​Layout​Widget​Style​Input​Representation | DEPRECATED Default styling for widgets within the layout. | Optional | 36.0-37.0 |

## Grid​Layout​Page​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| label | String | The display label for the page. | Optional | 41.0 |
| name | String | The unique id for a page within a layout. | Required | 41.0 |
| navigation​Hidden | Boolean | Indicates whether the page is hidden in the navigation widget (true) or not (false). | Optional | 44.0 |
| widgets | Grid​Layout​Widget​Input​Representation[] | The list of widgets within the page. | Required | 36.0 |

## Grid​Layout​Widget​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| background​Image | String | The background image for the widget. | Optional | 36.0 |
| colspan | Integer | The number of grid layout columns this widget spans. | Required | 36.0 |
| column | Integer | The column where this widget is located. | Required | 36.0 |
| name | String | The name of the widget. | Required | 36.0 |
| row | Integer | The row where this widget is located. | Required | 36.0 |
| rowspan | Integer | The number of grid layout rows this widget spans. | Required | 36.0 |
| widget​Style | Grid​Layout​Widget​Style​Input​Representation | The style of the widget. | Required | 36.0 |

## Grid​Layout​Widget​Style​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color for the widget. This is a 6 character hex string. For example: #012345. | Required | 36.0 |
| border​Color | String | The color of the widget border. This is a 6 character hex string. For example: #012345. | Required | 36.0 |
| border​Edges | Connect​Wave​Border​Edge​Type​Enum[] | The edges of the border to be drawn. Valid values are:AllBottomLeftRightTop | Required | 36.0 |
| border​Radius | Integer | The border radius of the widget. | Optional | 36.0 |
| border​Width | Integer | The width of the widget's border. | Required | 36.0 |
| bottom​Padding | Integer | The amount of padding on the bottom of the widget when rendered on mobile clients. | Optional | 36.0 |
| left​Padding | Integer | The amount of padding on the left of the widget when rendered on mobile clients. | Optional | 36.0 |
| right​Padding | Integer | The amount of padding on the right of the widget when rendered on mobile clients. | Optional | 36.0 |
| tooltip​Style | Tooltip​Style​Input​Representation | The style for the dashboard tooltips. | Optional | 63.0 |
| top​Padding | Integer | The amount of padding on the top of the widget when rendered on mobile clients. | Optional | 36.0 |

## Layout​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| device | Connect​Wave​Layout​Device​Type​Enum | The device rendering this dashboard. Valid values are:ApplewatchDefaultExternalIpadIphone | Optional | 36.0 |
| orientation | Connect​Wave​Layout​Orientation​Type​Enum | The layout orientation of this dashboard. Valid values are:LandscapePortrait | Optional | 36.0 |
| pages | Layout​Page​Input​Representation[] | The list of Layout​Page​Input​Representation objects available for the dashboard. | Optional | 36.0 |
| version | Double | The version of the layout representation for the dashboard. | Optional | 36.0 |

## Layout​Page​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| rows | String[] | The rows associated with the layout page. | Optional | 36.0 |

## Dashboard​Widget​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Object | The valid widget parameters based on the type of widget. Parameter types include:Box​Widget​Parameters​Input​RepresentationCompare​Table​Widget​Parameters​Input​RepresentationComponent​Widget​Parameters​Input​RepresentationContainer​Widget​Parameters​Input​RepresentationDate​Selector​Widget​Parameters​Input​RepresentationFilter​Panel​Widget​Parameters​Input​RepresentationGlobal​Filters​Widget​Parameters​Input​RepresentationImage​Widget​Parameters​Input​RepresentationInherit​Widget​Parameters​Input​RepresentationInput​Widget​Parameters​Input​RepresentationLink​Widget​Parameters​Input​RepresentationList​Selector​Widget​Parameters​Input​RepresentationNavigation​Widget​Parameters​Input​RepresentationNumber​Widget​Parameters​Input​RepresentationPill​Box​Widget​Parameters​Input​RepresentationRange​Selector​Widget​Parameters​Input​RepresentationRepeater​Widget​Parameters​Input​RepresentationTable​Widget​Parameters​Input​RepresentationText​Widget​Parameters​Input​RepresentationUrl​Widget​Parameters​Input​RepresentationValues​Table​Widget​Parameters​Input​Representation | Optional for PATCH, required for POST | 36.0 |
| position | Widget​Position​Input​Representation | The position information of the widget on a dashboard. | Optional for PATCH, required for POST | 36.0 |
| type | Connect​Wave​Widget​Type​Enum | The type of the widget. Valid values are:BoxChartCompare​TableComponentContainerDate​SelectorFilter​PanelGlobal​FiltersImageInheritLinkList​SelectorNavigationNumberPill​BoxRange​SelectorRepeater>TableTextUrlValues​Table | Optional for PATCH, required for POST | 36.0 |

## Box​Widget​Parameters​Input​Representation

BoxWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in BoxWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color to be used for the widget. | Optional | 36.0 |
| border​Color | String | The border color to be used for the widget. | Optional | 36.0 |
| image​Url | String | The documentId of the image to be used for the widget. | Optional | 36.0 |
| stretch | Boolean | Indicates whether to stretch the widget (true) or not (false). | Optional | 36.0 |

## Compare​Table​Widget​Parameters​Input​Representation

CompareTableWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in CompareTableWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| explore​Link | Boolean | Indicates whether to display the explore link (true) or not (false). | Optional | 36.0 |
| max​Column​Width | Integer | The maximum width of the header column. | Optional | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Optional | 36.0 |
| step | String | The step name for the widget. | Optional | 36.0 |
| totals | Boolean | Indicates whether the totals column is displayed (true) or not (false). | Optional | 36.0 |

## Component​Widget​Parameters​Input​Representation

ComponentWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in ComponentWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Object<String, Object> | The map of this component's attribute values. | Required | 51.0 |
| dynamic​Attributes | Object<String, Object> | The map of this component's dynamic attribute values. | Optional | 59.0 |
| page​Name | String | The default page of this widget. | Required | 50.0 |
| share​State | Boolean | Indicates whether this component widget shares state with the parent dashboard (true) or not (false). | Required | 51.0 |
| source | Typed​Asset​Reference​Input​Representation | The source asset for the component widget. | Required | 46.0 |
| step | String | The attached step for this component widget. | Required | 51.0 |

## Container​Widget​Parameters​Input​Representation

ContainerWidgetParametersInputRepresentation inherits properties from the [ImageWidgetParametersInputRepresentation](#ImageWidgetParametersInputRepresentation).

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| interactions | Interaction​Input​Representation[] | A list of the interaction parameters for the widget. | Optional | 58.0 |

## Date​Selector​Widget​Parameters​Input​Representation

DateSelectorWidgetParametersInputRepresentation inherits properties from the abstract [SelectorWidgetParametersInputRepresentation](#SelectorWidgetParametersInputRepresentation). These base properties appear in DateSelectorWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| absolute​Mode​Enabled | Boolean | Indicates whether absolute mode is enabled (true) or not (false). | Optional | 43.0 |
| calendar​Type​Switching​Allowed | Boolean | Indicates whether the widget can switch calendar types (true) or not (false). | Optional | 39.0 |
| custom​Filter​Presets[] | Custom​Filter​Preset​Type​Enum | The list of custom preset filters. Valid values are:All​TimeCurrent​Fiscal​QuarterCurrent​Fiscal​Quarter​To​DateCurrent​Fiscal​YearCurrent​Fiscal​Year​To​DateCurrent​MonthCurrent​Month​To​DateCurrent​QuarterCurrent​Quarter​To​DateCurrent​WeekCurrent​YearCurrent​Year​To​DateLast​180​DaysLast​30​DaysLast​7​DaysLast​90​DaysNext​180​DaysNext​30​DaysNext​7​DaysNext​90​DaysNext​Fiscal​QuarterNext​Fiscal​YearNext​MonthNext​QuarterNext​WeekNext​YearPrevious​Fiscal​QuarterPrevious​Fiscal​Quarter​To​DatePrevious​Fiscal​YearPrevious​Fiscal​Year​To​DatePrevious​Fiscal​MonthPrevious​Fiscal​Month​To​DatePrevious​QuarterPrevious​Quarter​To​DatePrevious​WeekPrevious​YearPrevious​Year​To​Date | Optional | 54.0 |
| default​Absolute​Mode | Boolean | DEPRECATED Indicates whether default date mode is absolute (true) or not (false). | Optional | 39.0-42.0 |
| default​Fiscal​Mode | Boolean | Indicates whether the fiscal mode is default (true) or not (false). | Optional | 39.0 |
| display​Mode | Connect​Wave​Selector​Display​Mode​Enum | The display mode type. Valid values are:ComboFilter | Optional | 54.0 |
| expanded | Boolean | Indicates whether the date selector is expanded (true) or not (false) | Optional | 36.0 |
| presets​Enabled | Boolean | Indicates whether presets are expanded (true) or not (false). | Optional | 43.0 |
| mode​Switching​Allowed | Boolean | DEPRECATED Indicates whether the widget can switch between two date modes (true) or not (false). |  | 39.0-42.0 |
| relative​Mode​Enabled | Boolean | Indicates whether relative mode is enabled (true) or not (false). |  | 43.0 |

## Filter​Panel​Widget​Parameters​Input​Representation

FilterPanelWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in FilterPanelWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter​Item​Options | Filter​Item​Options​Input​Representation | The filter item options. | Optional | 41.0 |
| filters | Filter​Item​Reference​Input​Representation | The list of filter references mapped to filters section. | Required | 41.0 |
| items​Per​Row | Integer | The number of filter items per row in the filter panel. | Optional | 41.0 |
| show​All​Filters | Boolean | Indicates whether all filters are displayed (true) or just one (false). | Optional | 41.0 |
| show​In​View​Mode | Boolean | Indicates whether the filter panel is displayed in view mode (true) or not (false). | Optional | 41.0 |
| title | Filter​Item​Title​Input​Representation | Indicates whether the filter panel is displayed in view mode (true) or not (false). | Optional | 41.0 |

## Global​Filters​Widget​Parameters​Input​Representation

GlobalFiltersWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in GlobalFiltersWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| step | String | The step name tied to the widget. | Optional | 36.0 |

## Image​Widget​Parameters​Input​Representation

ImageWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in ImageWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alignmentX | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Optional | 37.0 |
| alignmentY | Connect​Wave​Vertical​Alignment​Enum | The vertical alignment types. Valid values are:BottomCenterTop | Optional | 37.0 |
| documentId | String | The document ID of the image. | Required | 37.0 |
| fit | Connect​Wave​Image​Fit​Type​Enum | The image alignment types. Valid values are:FitHeightFitWidthOriginalStretchTile |  | 37.0 |
| image | Asset​Reference​Input​Representation | Image representation containing the name and namespace |  | 39.0 |
| interactions | Interaction​Input​Representation[] | A list of the interaction parameters for the widget. | Optional | 58.0 |
| tooltip | String | The tooltip the image. | Optional | 42.0 |

## Inherit​Widget​Parameters​Input​Representation

InheritWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in InheritWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| step | String | The step name for this widget. | Required | 50.0 |

## InputWidgetParametersInputRepresentation

InputWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in InputWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| active​Value​Color | String | The active color value for this widget. | Required | 56.0 |
| current​Value​Color | String | The current color value for this widget. | Required | 56.0 |
| display​Format | Connect​Wave​Input​Widget​Display​Format​Enum | The display format of the input value. Valid values are:CurrencyNonePercent | Required | 56.0 |
| handle​Color | String | The handle color for this widget. | Required | 56.0 |
| increments | Object | The increments for this widget. | Required | 56.0 |
| input​Background​Color | String | The background color for this widget. | Required | 56.0 |
| input​Border​Color | String | The border color for this widget. | Required | 56.0 |
| input​Type | Connect​Wave​Input​Widget​Input​Type​Enum | The input type of the widget. Valid values are:SliderTypein | Required | 56.0 |
| show​Current​Value | Boolean | Indicates whether to show the current value of the widget (true) or not (false). | Required | 56.0 |
| show​Values​Range | Boolean | Indicates whether to show the value range of the widget (true) or not (false). | Required | 56.0 |
| step | String | The step name for this widget. | Required | 56.0 |
| title | String | The title for this widget. | Required | 56.0 |
| title​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The title alignment of the widget. Valid values are:CenterLeftRight | Required | 56.0 |
| title​Color | String | The title color for this widget. | Required | 56.0 |
| title​Font​Size | Object | The title font size for this widget. | Required | 56.0 |
| track​Color | String | The track color for this widget. | Required | 56.0 |
| values​Range​Color | String | The value range color for this widget. | Required | 56.0 |

## Link​Widget​Parameters​Input​Representation

LinkWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in LinkWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| destination | String | The destination of the link. | Optional | 36.0 |
| destination​Link | Object | The destination of the link. | Required | 39.0 |
| destination​Type | Connect​Wave​Link​Widget​Dest​Type​Enum | The type of asset the link refers to. Values are:DashboardExploreLensPageUrl | Required | 36.0 |
| font​Size | Integer | The font size to be used for the widget. | Optional | 36.0 |
| include​State | Boolean | Indicates whether the state is included (true) or not (false). | Optional | 36.0 |
| text | String | The value of the text for the widget. | Optional | 36.0 |
| text​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Optional | 39.0 |
| text​Color | String | The color of the text for the widget. | Optional | 36.0 |
| visualization​Type | Connect​Wave​Visualization​Type​Enum | The visualization type used for this widget. Valid values are:BulletCalendar​Heat​MapComboComparison​TableFlatgaugeGaugeHeat​MapHorizontal​BarHorizontal​DotLineMatrixParallel​CoordinatesPiePivot​TablePolargaugePyramidRatingScatterStack​WaterfallStacked​Horizontal​BarStacked​Vertical​BarTimeTime​BarTime​ComboValues​TableVertical​BarVertical​DotWaterfall | Optional | 36.0 |

## List​Selector​Widget​Parameters​Input​Representation

ListSelectorWidgetParametersInputRepresentation inherits properties from the abstract [SelectorWidgetParametersInputRepresentation](#SelectorWidgetParametersInputRepresentation). These base properties appear in ListSelectorWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether the list selector is compact (true) or not (false). | Optional | 36.0 |
| display​Template | String | The display template for widget level projection. | Optional | 39.0 |
| expanded | Boolean | Value indicating whether the list selector is expanded (true) or not (false). | Optional | 36.0 |
| explore​Link | Boolean | Indicates whether the list selector has an explore link (true) or not (false). | Optional | 36.0 |
| interactions | Interaction​Input​Representation[] | A list of interactions for the widget. | Optional | 64.0 |
| measure​Field | String | The measure field this widget is applied on. | Optional | 36.0 |

## Navigation​Widget​Parameters​Input​Representation

NavigationWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in NavigationWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| font​Size | Integer | The value indicating the default font size for all the text in the navigation. | Optional | 43.0 |
| selected​Tab | Tab​Style​Parameters​Input​Representation | The selected tab styles for the widget. | Required | 43.0 |
| tab​Count | Integer | The number of tabs to show in the widget. | Optional | 43.0 |
| text​Color | String | The color value for the default tab text in the widget. | Optional | 43.0 |

## Number​Widget​Parameters​Input​Representation

NumberWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in NumberWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether the widget is compact (true) or not (false). | Optional | 36.0 |
| destination​Link | Object | The destination link for the widget. | Optional | 47.0 |
| explore​Link | Boolean | Indicates whether the widget has an explore link (true) or not (false). | Optional | 36.0 |
| font​Size | Object | The font size of the text. | Optional | 36.0 |
| interactions | Interaction​Input​Representation[] | A list of the interaction parameters for the widget. | Optional | 58.0 |
| measure​Field | String | The measure field this number is calculated upon. | Optional | 36.0 |
| no​Results​Label | String | The text to display when no results are found. | Optional | 45.0 |
| number​Bold | Object | The font weight of the number. | Optional | 62.0 |
| number​Color | String | The color of the number inside the widget. | Optional | 36.0 |
| number​Italic | Object | The font style of the number. | Optional | 62.0 |
| number​Size | Object | The size of the number. | Optional | 36.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Optional | 66.0 |
| step | String | The step name tied to the widget. | Optional | 36.0 |
| text​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Optional | 36.0 |
| text​Color | String | The color of the text inside the widget. | Optional | 36.0 |
| title | String | The title of the widget. | Optional | 36.0 |
| title​Bold | Object | The font weight of the title. | Optional | 62.0 |
| title​Color | String | The color of the title for the widget. | Optional | 36.0 |
| title​Italic | Object | The font style of the title. | Optional | 62.0 |
| title​Size | Object | The size of the title text. | Optional | 36.0 |
| tooltip | Tooltip​Input​Representation | The tooltip for the widget. | Optional | 51.0 |

## Pill​Box​Widget​Parameters​Input​Representation

PillBoxWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in PillBoxWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether the widget is compact (true) or not (false). | Optional | 36.0 |
| display​Template | String | The display template for widget level projection. | Optional | 39.0 |
| explore​Link | Boolean | Indicates whether the widget has an explore link (true) or not (false). | Optional | 36.0 |
| interactions | Interaction​Input​Representation[] | A list of interactions for the widget. | Optional | 64.0 |
| measure​Field | String | The measure field the widget is constructed upon. | Optional | 36.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Optional | 66.0 |
| step | String | The step name tied to the widget. | Optional | 36.0 |
| title | String | The title of the widget. | Optional | 36.0 |

## Range​Selector​Widget​Parameters​Input​Representation

RangeSelectorWidgetParametersInputRepresentation inherits properties from the [SelectorWidgetParametersInputRepresentation](#SelectorWidgetParametersInputRepresentation).

## Repeater​Widget​Parameters​Input​Representation

RepeaterWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in RepeaterWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| card​Properties | Repeater​Widget​Card​Properties​Input​Representation | The properties for a card for the widget. | Required | 53.0 |
| cell​Properties | Map<String, Repeater​Widget​Cell​Properties​Input​Representation> | A map of repeater cell properties for the widget. | Required | 53.0 |
| explore​Link | Boolean | Indicates whether to display the explorer link (true) or not (false). | Optional | 54.0 |
| cell​Properties | Map<String, Repeater​Widget​Cell​Properties​Input​Representation> | A map of repeater header cell properties for the widget. | Optional | 64.0 |
| interactions | Interaction​Input​Representation[] | A list of the interaction parameters for the widget. | Optional | 57.0 |
| items​Per​Row | Object | The number of cards per row of the widget. | Required | 53.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Optional | 66.0 |
| show​Header | Boolean | Indicates whether to display the header (true) or not (false). | Optional | 64.0 |
| sortable​Columns | Object | The sortable columns for the widget. | Optional | 59.0 |
| step | String | The step name associated to the widget. | Required | 53.0 |

## Table​Widget​Parameters​Input​Representation

TableWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in TableWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assistive​Text | String | The assistive text for the widget. | Optional | 64.0 |
| border​Color | String | The outer border color for the widget. | Optional | 41.0 |
| border​Width | Integer | The outer border width for the widget. | Optional | 41.0 |
| cell | Table​Widget​Cell​Parameters​Input​Representation | The cell properties for the widget. | Optional | 41.0 |
| collapsible | Boolean | Indicates whether the table is collapsible (true) or not (false). | Optional | 50.0 |
| column​Properties | Map<String, Column​Properties​Inputs​Representation> | The column properties for the widget. | Optional | 42.0 |
| column​Totals | Boolean | Indicates whether to display column totals in the table (true) or not (false). | Optional | 55.0 |
| column​Subtotals | Boolean | Indicates whether to display column subtotals in the table (true) or not (false). | Optional | 56.0 |
| columns | Object | The list of columns for the widget. | Required | 41.0 |
| custom​Bulk​Actions | Custom​Bulk​Action​Input​Representation[] | The list of custom bulk actions for the widget. | Optional | 42.0 |
| enable​All​Data​Fetch | Boolean | Indicates whether all data is loaded (true) or data loading is paginated (false). | Optional | 59.0 |
| even​Row​Color | String | The even row color for the widget. | Optional | 41.0 |
| explore​Link | Boolean | Indicates whether the widget has an explore link (true) or not (false). | Optional | 38.0 |
| fixed​Column​Width | Integer | The fixed column width for the widget. | Optional | 40.0 |
| header | Table​Widget​Cell​Parameters​Input​Representation | The header properties for the widget. | Required | 41.0 |
| header​Properties | Header​Properties​Input​Representation | The header properties for the table columns in the widget. | Small, 64.0 | 64.0 |
| inner​Major​Border​Color | String | The inner major border color for the widget. | Optional | 41.0 |
| inner​Minor​Border​Color | String | The inner minor border color for the widget. | Optional | 41.0 |
| interactions | Interaction​Input​Representation[] | A list of the interaction parameters for the widget. | Optional | 57.0 |
| max​Column​Width | Integer | The maximum column width for the widget. | Optional | 40.0 |
| min​Column​Width | Integer | The minimum column width for the widget. | Optional | 40.0 |
| mode | Connect​Wave​Table​Mode​Enum | The table mode for the widget. Valid values are:Fit​To​ContainerFixedVariable | Optional | 40.0 |
| number​Of​Frozen​Columns | Integer | The number of frozen columns for the widget. | Optional | 50.0 |
| number​Of​Lines | Integer | The number of lines of text per row for the widget. | Optional | 41.0 |
| odd​Row​Color | String | The odd row color for the widget. | Optional | 41.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Optional | 66.0 |
| pivoted | Boolean | Indicates whether to display the widget as pivot (true) or not (false). | Optional | 39.0 |
| repeat​Grouping​Row​Values | Boolean | Indicates whether to repeat row values (true) or not (false). | Optional | 66.0 |
| row​Totals | Boolean | Indicates whether to display row totals in the table (true) or not (false). | Optional | 55.0 |
| show​Row​Index​Column | Boolean | Indicates whether to show the row index column for the widget (true) or not (false). | Optional | 41.0 |
| step | String | The step name associated to the widget. | Required | 38.0 |
| subtotals | Boolean | Indicates whether to show the subtotals row for the widget (true) or not (false). | Optional | 47.0 |
| totals | Boolean | Indicates whether to show the totals row for the widget (true) or not (false). | Optional | 40.0 |
| vertical​Padding | Integer | The cell vertical padding value for the widget. | Optional | 41.0 |

## Text​Widget​Parameters​Input​Representation

TextWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in TextWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditional​Formatting​Source | Text​Widget​Conditional​Formatting​Source​Input​Representation | The conditional formatting source for the widget. | Optional | 57.0 |
| content | Dynamic​Data​Input​Representation | The dynamic value of the text in the widget. | Required | 49.0 |
| font​Size | Object | The font size of the text. | Optional | 36.0 |
| interactions | Interaction​Input​Representation[] | A list of the interaction parameters for the widget. | Optional | 57.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Optional | 66.0 |
| text | String | DEPRECATED The text for the widget. | Optional | 36.0-48.0 |
| text​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Optional | 36.0 |
| text​Color | String | The color of the text. | Optional | 36.0 |
| text​Overflow | Connect​Wave​Text​Overflow​Enum | The overflow of the text. Valid values are:TruncateWrap | Optional | 60.0 |
| tooltip | String | The tooltip for the widget. | Optional | 42.0 |

## Url​Widget​Parameters​Input​Representation

UrlWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in UrlWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | Connect​Wave​Url​Widget​Type | The type of URL for the widget. Valid values are:YouTube | Optional | 36.0 |
| url | String | The connect URL for the widget. | Optional | 36.0 |
| video​Size | String | The size of the video at which this URL points. | Optional | 36.0 |

## Values​Table​Widget​Parameters​Input​Representation

ValuesTableWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in ValuesTableWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| explore​Link | Boolean | Indicates whether the widget has an explore link (true) or not (false). | Optional | 36.0 |
| hide​Header​Column | Boolean | Indicating whether the header column is visible for the widget (true) or not (false). | Optional | 36.0 |
| max​Column​Width | Integer | The maximum width of the header column. | Optional | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Optional | 36.0 |
| step | String | The step name tied to the widget. | Optional | 36.0 |
| totals | Boolean | Indicates whether the totals column is displayed (true) or not (false). | Optional | 36.0 |

## Image​Parameters​Input​Representation

ImageParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in ImageParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alignmentX | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Optional | 37.0 |
| alignmentY | Connect​Wave​Vertical​Alignment​Enum | The vertical alignment types. Valid values are:BottomCenterTop | Optional | 37.0 |
| alt​Text | String | The alternate text for the image. | Optional | 55.0 |
| document​Id | String | The document id of the image. | Optional | 37.0 |
| fit | Connect​Wave​Image​Fit​Type​Enum | The image alignment types. Valid values are: Valid values are:FitHeightFitWidthOriginalStretchTile | Optional | 37.0 |
| image | Asset​Reference​Input​Representation | The image representation containing the name and the namespace. | Required | 39.0 |
| tooltip | String | The tooltip for the image. | Optional | 42.0 |

## Selector​Widget​Parameters​Input​Representation

SelectorWidgetParametersInputRepresentation inherits properties from the abstract [WidgetParametersInputRepresentation](#WidgetParametersInputRepresentation). These base properties appear in SelectorWidgetParametersInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| display​Mode | Connect​Wave​Selector​Display​Mode​Enum | The display mode for dashboard selector widgets. Valid values are:ComboFilter | Required | 46.0 |
| filter​Style | Filter​Style​Input​Representation | The styling properties for filter widgets. | Optional | 46.0 |
| instant | Boolean | Indicates whether the list selector is instant (true) or not (false). | Optional | 36.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Optional | 66.0 |
| step | String | The step name associated to the widget. | Required | 36.0 |
| title | String | The title of the widget. | Optional | 36.0 |

## Widget​Parameters​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| onboarding | Widget​Onboarding​Input​Representation | The list of onboarding content for the widget. | Optional | 46.0 |
| select​Mode​Override | Connect​Wave​Select​Mode​Enum | The select mode types. Valid values are:MultiMultiRequiredNoneSingleSingleRequired | Optional | 36.0 |
| show​Action​Menu | Boolean | Indicates whether to display the widget action menu (true) or not (false). | Optional | 44.0 |

## Widget​Onboarding​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| title | String | The title of the onboarding content. | Optional | 46.0 |
| url | String | The URL of the onboarding content. | Required | 46.0 |

## Widget​Position​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| h | String | The height of the widget. | Optional | 36.0 |
| w | String | The width of the widget. | Optional | 36.0 |
| x | Integer | The X index of widget. | Optional for PATCH, required for POST | 36.0 |
| y | Integer | The Y index of widget. | Optional for PATCH, required for POST | 36.0 |
| zIndex | Integer | The Z index of widget. | Optional | 36.0 |

## InteractionRepresentation​Input

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actions | Interaction​Action​Input​Representation[] | A list of the actions for the interaction. Valid actions types are:Interaction​Clear​Action​Input​RepresentationInteraction​Flow​Action​Input​RepresentationInteraction​Navigate​Action​Input​RepresentationInteraction​Reset​Action​Input​Representation | Required | 57.0 |
| event | Connect​Wave​Interaction​Event​Type | The event type for the interaction. Valid values are:ClickSelect | Required | 57.0 |

## InteractionAction​InputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | Connect​Wave​Interaction​Action​Type​Enum | The action type for the interaction. Valid values are:ClearFlowNavigateResetSort | Required | 60.0 |

## InteractionClearActionInputRepresentation

InteractionClearActionInputRepresentation inherits properties from the abstract [InteractionActionInputRepresentation](#InteractionActionInputRepresentation). These base properties appear in InteractionClearActionInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| clear​Type | Connect​Wave​Interaction​Clear​Type​Enum | The clear type for the interaction. Valid values are:Clear​AllClear​ExcludeClear​Include | Required | 59.0 |
| lens​Ids | String[] | A list of lens IDs for the interaction. | Required | 59.0 |

## InteractionFlowActionInputRepresentation

InteractionFlowActionInputRepresentation inherits properties from the abstract [InteractionActionInputRepresentation](#InteractionActionInputRepresentation). These base properties appear in InteractionFlowActionInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<Object,Object> | A map of interaction attributes. | Required | 58.0 |
| name | String | The API name of the action. | Required | 58.0 |

## InteractionNavigateActionInputRepresentation

+

InteractionNaviaateActionInputRepresentation inherits properties from the abstract [InteractionActionInputRepresentation](#InteractionActionInputRepresentation). These base properties appear in InteractionNavigateActionInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| destination​Link | Object | The destination link for the action. | Required | 57.0 |
| destination​Type | Connect​Wave​Interaction​Destination​Type​Enum | The destination type for the action. Valid values are:ComponentDashboardExploreLensPageUrl | Required | 57.0 |
| go​Back | Boolean | Indicates whether to navigate back on deselection (true) or not (false). | Required | 57.0 |

## InteractionResetActionInputRepresentation

InteractionResetActionInputRepresentation inherits properties from the abstract [InteractionActionInputRepresentation](#InteractionActionInputRepresentation). These base properties appear in InteractionResetActionInputRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| reset​Type | Connect​Wave​Interaction​Reset​Type​Enum | The reset type for the action. Valid values are:Reset​Filters | Required | 58.0 |

## TextWidgetConditionalFormattingSourceInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | The field used to retrieve the conditional formatting for the widget. | Required | 57.0 |
| scope | String | The scope of the conditional formatting rules for the widget | Required | 57.0 |
| step | String | The step used to retrieve the conditional formatting rules for the widget | Required | 57.0 |

## Filter​Item​Options​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color of the filter items. | Optional | 41.0 |
| border​Color | String | The border color of the filter items. | Optional | 41.0 |
| border​Radius | Integer | The border radius of the filter items. | Optional | 41.0 |
| border​Width | Integer | The border width of the filter items. | Optional | 41.0 |
| property​Color | String | The property color of the filter items. | Optional | 41.0 |
| value​Color | String | The value color of the filter items. | Optional | 41.0 |

## Filter​Item​Reference​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cdpObject | String | The Data 360 datasource in the filters section. | Required | 55.0 |
| dataset | Asset​Reference​Input​Representation[] | The dataset in the filters section. | Required | 46.0 |
| dataspace | String | The name of datasapce for the Data 360 datasource in the filters section. | Optional | 62.0 |
| field | String | The field in the filters section. | Required | 46.0 |
| sObject | String | The sObject in the filters section. | Required | 55.0 |

## Filter​Panel​Title​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| separator​Color | String | The filter panel's title separator color. | Optional | 41.0 |
| text | Text​Input​Representation[] | The filter panel's title text. | Required | 41.0 |
| visible | Boolean | Indicates whether the filter panel's title is visible (true) or not (false). | Optional | 41.0 |

## Text​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| align | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Optional | 41.0 |
| color | String | The color of the text. | Optional | 41.0 |
| fontSize | Integer | The font size of the text. | Optional | 41.0 |
| label | String | The label for the text. | Required | 41.0 |

## Filter​Style​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| title​Color | String | The color of the displayed title. | Required | 46.0 |
| value​Color | String | The color for the displayed value. | Required | 46.0 |

## Tab​Style​Parameters​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color for the tab. | Optional | 43.0 |
| border​Color | String | The border color for the tab. | Optional | 43.0 |
| border​Edges | Connect​Wave​Border​Edge​Type​Enum | The edges of the border to be drawn. Valid values are:AllBottomLeftRightTop | Optional | 43.0 |
| border​Width | Integer | The border width for the tab. | Optional | 43.0 |
| text​Color | String | The text color for the selected tab. | Optional | 43.0 |

## Tooltip​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content | Tooltip​Content​Input​Representation | The content for the tooltip. | Required | 51.0 |
| customize​Tooltip | Boolean | Indicates whether the tooltip is customized (true) or not (false). | Required | 51.0 |
| show​Tooltip​Title | Boolean | Indicates whether the tooltip title is visible (true) or not (false). | Optional | 62.0 |

## Repeater​Widget​Card​Properties​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cell​Spacing​X | Integer | The horizontal spacing between grid cells. | Required | 53.0 |
| cell​Spacing​Y | Integer | The vertical spacing between grid cells. | Required | 53.0 |
| num​Columns | Integer | The number of columns for a repeater grid. | Required | 53.0 |
| row​Height | Connect​Wave​Row​Height​Enum | Specifies the grid cell row height. Valid values are:FineNormal | Required | 53.0 |
| selected​Styles | Card​Selection​Style​Parameters​Input​Representation | The styling for the selected repeater card of the widget | Required | 54.0 |
| styles | Grid​Layout​Widget​Style​Input​Representation | The styling for the card of the widget | Required | 53.0 |

## Card​Selection​Style​Parameters​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color of selected card. Must be a 6 digit hex string. | Optional | 54.0 |
| border​Color | String | The border color of selected card. Must be a 6 digit hex string. | Optional | 54.0 |
| border​Edges | Connect​Wave​Border​Edge​Type​Enum[] | The edges of the border to be drawn. Valid values are:AllBottomLeftRightTop | Required | 54.0 |
| border​Radius | Integer | The border radius of selected card. | Optional | 54.0 |
| border​Width | Integer | The border width of selected card. | Optional | 54.0 |

## Repeater​Widget​Cell​Properties​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Object | The parameters of the cell, based on it's type. | Required | 53.0 |
| position | Grid​Layout​Widget​Input​Representation | The cell position, dimension, and styles. | Required | 53.0 |
| type | Connect​Wave​Repeater​Cell​Type​Enum | The cell type. Valid values are:Image (Cell​Properties​Image​Parameters​Input​Representation)Number (Cell​Properties​Number​Parameters​Input​Representation)Text (Cell​Properties​Text​Parameters​Input​Representation) | Required | 53.0 |

## Cell​Properties​Image​Parameters​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alignment​X | Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment for the image. Valid values are:CenterLeftRight | Required | 54.0 |
| alignment​Y | Connect​Wave​Vertical​Alignment​Enum | The vertical alignment for the image. Valid values are:BottomCenterTop | Required | 54.0 |
| alt​Text | String | The alternate text for the image. | Optional | 54.0 |
| fit | Connect​Wave​Image​Fit​Type​Enum | The fit type for the image. Valid values are:FitHeightFitWidthOriginalStretchTile | Required | 54.0 |
| source | Object | The source URL for the image. | Optional | 54.0 |

## Cell​Properties​Number​Parameters​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether compact form is on (true) or not (false). | Optional | 54.0 |
| measure​Field | String | The measure field this number is calculated from. | Required | 54.0 |
| no​Results​Label | String | The text to display when no results are found. | Optional | 54.0 |
| number​Bold | Object | The font weight of the number. | Optional | 62.0 |
| number​Color | String | The color of the number. | Optional | 54.0 |
| number​Italic | Object | The font style of the number. | Optional | 62.0 |
| number​Size | Object | The size of the number. | Optional | 54.0 |
| text​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The alignment for the text. Valid values are:CenterLeftRight | Required | 54.0 |
| title | String | The title of the widget. | Optional | 54.0 |
| title​Bold | String | The font weight of the title. | Optional | 62.0 |
| title​Color | String | The color of the title. | Optional | 54.0 |
| title​Size | String | The size of the title. | Optional | 54.0 |

## Cell​Properties​Text​Parameters​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditional​Formatting​Source | Text​Widget​Conditional​Formatting​Source​Input​Representation | The conditional formatting source for the text. | Optional | 57.0 |
| content | Dynamic​Data​Input​Representation | The dynamic value of the text. | Required | 54.0 |
| interactions | Interaction​Input​Representation[] | A list of interactions for the text. | Optional | 64.0 |
| tooltip | Tooltip​Input​Representation | The tooltip for the text. | Optional | 57.0 |

## Table​Widget​Cell​Parameters​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alignment | Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment for the table cell. Valid values are:CenterLeftRight | Optional | 62.0 |
| background​Color | String | The background color of the cell. | Optional | 41.0 |
| font​Color | String | The color for the cell text font. | Optional | 41.0 |
| font​Size | Integer | The size for the cell text font. | Optional | 41.0 |
| italic | Boolean | Indicates whether the cell font style is italic (true) or not (false). | Optional | 62.0 |
| text​Wrap | Boolean | Indicates whether text wrapping is allowed (true) or not (false). | Optional | 54.0 |
| underline | Boolean | Indicates whether the cell font style is underlined (true) or not (false). | Optional | 62.0 |

## Column​Properties​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Object | The valid column parameters based on its type. | Required | 42.0 |
| type | Connect​Wave​Column​Render​Type​Enum | The render types of a column. Valid values are:Bar (Column​Parameters​Bar​Input​Representation)Image (Column​Parameters​Image​Input​Representation)Text (Column​Parameters​Text​Input​Representation) | Required | 41.0 |

## ColumnParametersBarInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| width | Integer | The width for the column. | Required | 54.0 |

## ColumnParametersImageInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alignment | Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment for the image. Valid values are:CenterLeftRight | Required | 54.0 |
| height | Integer | The image height for the image. | Required | 54.0 |
| width | Integer | The width for the column. | Required | 54.0 |

## ColumnParametersTextInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alignment | Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment for the column. Valid values are:CenterLeftRight | Required | 54.0 |
| styles | Text​Style​Input​Representation | The text style for the column. | Required | 54.0 |
| width | Integer | The width for the column. | Required | 54.0 |

## TextStyleInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| bold | Boolean | Indicates whether the text is bold (true) or not (false). | Optional | 54.0 |
| link​Color | String | The text color when the text is a link. | Optional | 54.0 |

## Custom​Bulk​Action​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| label | String | Label for the custom action |  | 39.0 |
| visualforce | Asset​Reference​Input​Representation | Visualforce page to invoke for the custom action |  | 39.0 |

## Dynamic​Data​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| display​Template | String | The dynamic expression to resolve. | Required | 49.0 |
| rich​Text​Content | Map<String, Rich​Text​Content​Block​InputRepresentation[] | List of rich text content blocks. | Required | 52.0 |
| values | Map<String, Dynamic​Value​Input​Representation> | Map to contain the data for the dynamic values. | Required | 49.0 |

## Rich​Text​Content​Block​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<String, Object> | Map of text attribute names and values. | Required | 52.0 |
| insert | String | The text block content | Required | 52.0 |

## Dynamic​Value​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether the resolved value is compact (true) or not (false). | Required | 55.0 |
| field | String | The column used to resolve the value. | Required | 49.0 |
| no​Results​Label | String | The text to display when no results are found. | Required | 55.0 |
| source​Type | Connect​Wave​Dynamic​Data​Source​Type | The interaction type for the value. Valid values are:ResultSelection | Required | 49.0 |
| step | String | The step id for the value. | Required | 49.0 |

## Tooltip​Content​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| body | Tooltip​Visualization​Input​Representation | The visualization for the tooltip. | Required | 51.0-52.0 |
| description | Dynamic​Data​Input​Representation | The text content for the tooltip. | Required | 51.0 |
| widget | Tooltip​Widget​Input​Representation | The widget displayed in the tooltip. | Required | 53.0 |

## Tooltip​Widget​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| height | Object | The height of the widget in the tooltip. | Required | 53.0 |
| name | String | The name of the widget in the tooltip. | Required | 53.0 |
| width | Object | The width of the widget in the tooltip. | Required | 53.0 |

## Tooltip​Visualization​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| height | Object | The height for the tooltip. | Required | 51.0 |
| source | Typed​Asset​Reference​Input​Representation | The source for the tooltip visualization. | Required | 51.0 |
| width | Object | The width for the tooltip. | Required | 51.0 |

## Tooltip​Source​Input​Representation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the tooltip source. | Required | 51.0 |
| namespace | String | The namespace of the tooltip source. | Optional | 51.0 |
| type | String | The type of the tooltip source. | Required | 51.0 |

## TooltipStyleInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color of the tooltip. | Optional | 63.0 |
| label​Color | String | The label color of the tooltip. | Optional | 63.0 |
| value​Color | String | The value color of the tooltip. | Optional | 63.0 |

## HeaderPropertiesInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| tooltip | Table​Column​Header​Tooltip​Input​Representation | The tooltip for the table column header. | Required | 64.0 |

## TableColumnHeaderTooltipInputRepresentation

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sort | Tooltip​Mode​Enum | The tooltip mode. Valid values are:CustomDefaultNone | Required | 64.0 |
| text | String | The text for the tooltip. | Required | 64.0 |

## Related Topics

- Asset​Reference​Input​Representation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_appendix.htm)
- Query​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_lens_state_input.htm)
- Lens​Visualization​Options​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_lens_state_input.htm)
- Typed​Asset​Reference​Input​Representation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_appendix.htm)
