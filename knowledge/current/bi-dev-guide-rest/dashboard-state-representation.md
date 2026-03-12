---
title: "Dashboard State Representation"
domain: bi-dev-guide-rest
topic: dashboard-state-representation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.565Z
estimatedTokens: 23197
namespace: String
keywords: [Dashboard, State, Representation, DashboardStateRepresentation, resource, representations, API, responses, REST, endpoints, their, own, describe, bodies, DashboardDataSourceFieldRepresentation]
---

# Dashboard State Representation

> This page contains the reference for the DashboardStateRepresentation resource and all
  the representations that make up the dashboard state for API responses. The following
  representation details are not REST API endpoints on their own, but describe object
  representations used in REST API response bodies.

**Namespace:** `String`

# Dashboard State Representation

This page contains the reference for the DashboardStateRepresentation resource and all the representations that make up the dashboard state for API responses. The following representation details are not REST API endpoints on their own, but describe object representations used in REST API response bodies.

## DashboardStateRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data​Source​Links | Dashboard​Data​Source​Link​Representation[] | The list of all datasource links in a dashboard. | Small, 39.0 | DEPRECATED 39.0-56.0 |
| data​Source​Links​Info | Dashboard​Data​Source​Links​Info​Representation[] | The list of datasource links information used as part of the dashboard. | Small, 57.0 | 57.0 |
| filters | Filter​Item​Representation[] | The list of datasource filters applied in this dashboard. | Small, 41.0 | 41.0 |
| gridLayouts | Grid​Layout​Representation[] | The list of all grid layouts for this dashboard. This property replaces the 'layouts' property and the two are mutually exclusive. | Small, 36.0 | 36.0 |
| layouts | LayoutRepresentation[] | DEPRECATED The list of layouts for this dashboard. The gridLayouts parameter replaces this list. | Small, 36.0 | 36.0 |
| parameters | ParameterItemRepresentation[] | The list of parameters created for this dashboard. | Small, 58.0 | 58.0 |
| steps | Map<String, Step​Representation> | The map of steps used to create this dashboard. The key string is the step name. Valid step types are:Aggregate​Flex​Step​RepresentationAggregate​Step​RepresentationApex​Step​RepresentationApex​Step​Query​RepresentationCdp​Step​RepresentationDirect​Report​Step​RepresentationForecasting​Step​RepresentationGrain​Step​RepresentationHierarchy​Step​RepresentationInput​Step​RepresentationLens​Step​RepresentationMulti​Query​Step​RepresentationSql​Step​RepresentationSaql​Step​RepresentationSoql​Step​RepresentationStatic​Flex​Step​RepresentationStatic​Step​Representation | Small, 36.0 | 36.0 |
| widgetStyle | Grid​Layout​Widget​Style​Representation | Default styling for widgets in this dashboard. | Small, 37.0 | 37.0 |
| widgets | Map<String, Dashboard​Widget​Representation | The map of widgets used to create this dashboard. The key string is the widget name. | Small, 36.0 | 36.0 |

## Dashboard​Data​Source​Link​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields | Dashboard​Data​Source​Field​Representation[] | The list of fields connected in the data source link. | Small, 39.0 | 39.0 |
| label | String | The label of the data source link. | Small, 39.0 | 39.0 |
| name | String | The name of the data source link. | Small, 39.0 | 39.0 |

## Dashboard​Data​Source​Links​Info​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| enable​Automatic​Linking | Boolean | Indicates whether automatic linking is enabled for the dashboard (true) or not (false). | Small, 57.0 | 57.0 |
| exclude​Relationships | Dashboard​Data​Source​Relationship​Representation[] | The list of data source exclude relationships from faceting in the dashboard. | Small, 57.0 | 57.0 |
| links | Dashboard​Data​Source​Link​Representation[] | The list of data source links for the dashboard. | Small, 57.0 | 57.0 |

## Dashboard​Data​Source​Relationship​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| from​Data​Source | String | The fully qualified name of the "from" data source. | Small, 57.0 | 57.0 |
| from​Data​Source​Type | Connect​Wave​Data​Source​Type​Enum | The type of the "from" data source. Valid values are:ApexCdpDatasetHierarchyReport​TypeSaqlSobjectStatic | Small, 57.0 | 57.0 |
| to​Data​Source | String | The fully qualified name of the "to" data source. | Small, 57.0 | 57.0 |
| to​Data​Source​Type | Connect​Wave​Data​Source​Type​Enum | The type of the "to" data source. Valid values are:ApexCdpDatasetHierarchyReport​TypeSaqlSobjectStatic | Small, 57.0 | 57.0 |

## DashboardDataSourceFieldRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data​Source​Name | String | The datasource developer name. | Small, 39.0 | 39.0 |
| data​Source​Namespace | String | The namespace that qualifies the dataset name | Small, 39.0 | 39.0 |
| data​Source​Type | Connect​Wave​Data​Source​Type​Enum | The type of datasource. Valid values are:ApexCdpDatasetHierarchyReport​TypeSaqlSobjectStatic | Small, 39.0 | 39.0 |
| dataspace | String | The name of datasapce that the Data 360 object is assigned to. | Small, 62.0 | 62.0 |
| fieldName | String | The name of field in the datasource. | Small, 39.0 | 39.0 |

## FilterItemRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cdpObject | String | The Data 360 datasource the filter applies to. | Small, 55.0 | 55.0 |
| dataset | Asset​Reference​Representation | The datasource to apply the filter to. | Small, 41.0 | 41.0 |
| cdpObject | String | The Data 360 datasource in the filters section. | Small, 62.0 | 62.0 |
| fields | String[] | The list of fields in filter. | Small, 41.0 | 41.0 |
| hidden | Boolean | Indicates whether the filter is hidden in view mode (true) or not (false). | Small, 41.0 | 41.0 |
| label | String | The label of the filter. | Small, 41.0 | 41.0 |
| locked | Boolean | Indicates whether the filter is locked (true) or not (false). | Small, 41.0 | 41.0 |
| operator | String | The operator for the filter. | Small, 41.0 | 41.0 |
| sObject | String | The sObject datasource the filter applies to. | Small, 55.0 | 55.0 |
| value | String | The value for the filter. | Small, 41.0 | 41.0 |

## GridLayoutWidgetStyleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color for the widget. This is a 6 character hex string. For example: #012345. | Small, 36.0 | 36.0 |
| border​Color | String | The color of the widget's border. This is a 6 character hex string. For example: #012345. | Small, 36.0 | 36.0 |
| border​Edges | Connect​Wave​Border​Edge​Type​Enum[] | The edges of the border to be drawn. Valid values are:AllBottomLeftRightTop | Small, 36.0 | 36.0 |
| border​Radius | Object | The border radius of the widget. | Small, 36.0 | 36.0 |
| border​Width | Object | The width of the widget's border. | Small, 36.0 | 36.0 |
| bottom​Padding | Integer | The amount of padding on the bottom of the widget when rendered on mobile clients. | Small, 36.0 | 36.0 |
| left​Padding | Integer | The amount of padding on the left of the widget when rendered on mobile clients. | Small, 36.0 | 36.0 |
| right​Padding | Integer | The amount of padding on the right of the widget when rendered on mobile clients. | Small, 36.0 | 36.0 |
| tooltip​Style | Tooltip​Style​Representation | The style for the dashboard tooltips. | Small, 63.0 | 63.0 |
| top​Padding | Integer | The amount of padding on the top of the widget when rendered on mobile clients. | Small, 36.0 | 36.0 |

## GridLayoutRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| maxWidth | Integer | Add the ability for users to specify the maximum width that their dashboard can flex to. | Small, 38.0 | 38.0 |
| name | String | The name of this layout. | Small, 36.0 | 36.0 |
| numColumns | Integer | Add the number of columns for a dashboard grid layout that is customizable. | Small, 38.0 | 38.0 |
| pages | Grid​Layout​Page​Representation[] | The list of pages of widgets within the layout. | Small, 36.0 | 36.0 |
| rowHeight | Connect​Wave​Row​Height​Enum | Specifies the grid cell row height. Valid values are:FineNormal | Small, 39.0 | 39.0 |
| selectors | String[] | The list of selectors this layout applies to. | Small, 36.0 | 36.0 |
| style | Grid​Layout​Style​Representation | The styling for the layout. | Small, 37.0 | 37.0 |
| version | Double | Version of this layout. | Small, 36.0 | 36.0 |
| widgetStyle | Grid​Layout​Widget​Style​Representation | DEPRECATED The default styling for widgets within the layout. | Small, 36.0 | 36.0—37.0 |

## GridLayoutPageRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | The display label for the page. | Small, 41.0 | 41.0 |
| name | String | The unique id for a page within a layout. | Small, 41.0 | 41.0 |
| navigation​Hidden | Boolean | Indicates whether the page is hidden in the navigation widget (true) or not (false). | Small, 44.0 | 44.0 |
| widgets | Grid​Layout​Widget​Representation[] | Widgets within the page. | Small, 36.0 | 36.0 |

## GridLayoutWidgetRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​Image | String | The background image for the widget. | Small, 36.0 | 36.0 |
| colspan | Integer | The number of grid layout columns this widget spans. | Small, 36.0 | 36.0 |
| column | Integer | The column where this widget is located. | Small, 36.0 | 36.0 |
| name | String | The name of the widget. | Small, 36.0 | 36.0 |
| row | Integer | The row where this widget is located. | Small, 36.0 | 36.0 |
| rowspan | Integer | The number of grid layout rows this widget spans. | Small, 36.0 | 36.0 |
| widgetStyle | Grid​Layout​Widget​Style​Representation | The style of the widget. | Small, 36.0 | 36.0 |

## GridLayoutStyleRepresentation

GridLayoutStyleRepresentation inherits properties from the abstract [ImageParametersRepresentation](#ImageParametersRepresentation). These base properties appear in GridLayoutStyleRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color for the layout. | Small, 36.0 | 36.0 |
| cell​Spacing​X | Integer | The horizontal spacing between grid cells. | Small, 36.0 | 36.0 |
| cell​Spacing​Y | Integer | The vertical spacing between grid cells. | Small, 36.0 | 36.0 |
| gutter​Color | String | The gutter color for the layout. | Small, 36.0 | 36.0 |

## ParameterItemRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| default​Value | Object | The default value of the parameter. | Small, 58.0 | 58.0 |
| description | String | The description of the parameter. | Small, 58.0 | 58.0 |
| label | String | The label of the parameter. | Small, 58.0 | 58.0 |
| name | String | The name of the parameter. | Small, 58.0 | 58.0 |

## ImageParametersRepresentation

ImageParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in ImageParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alignmentX | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Small, 37.0 | 37.0 |
| alignmentY | Connect​Wave​Vertical​Alignment​Enum | The vertical alignment types.Valid values are:BottomCenterTop | Small, 37.0 | 37.0 |
| documentId | String | The document id of the image. | Small, 37.0 | 37.0 |
| fit | Connect​Wave​Image​Fit​Type​Enum | The image alignment types. Valid values are:FitHeightFitWidthOriginalStretchTile | Small, 37.0 | 37.0 |
| image | Asset​Reference​Representation | The image representation containing the name and the namespace. | Small, v39.0 | 39.0 |

## LayoutRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| device | Connect​Wave​Layout​Device​Type​Enum | The device rendering this dashboard. Valid values are:ApplewatchDefaultExternalIpadIphone | Small, 36.0 | 36.0 |
| orientation | Connect​Wave​Layout​Orientation​Type​Enum | The layout orientation of this dashboard. Valid values are:LandscapePortrait | Small, 36.0 | 36.0 |
| pages | Layout​Page​Representation[] | The list of layout pages available for the dashboard. | Small, 36.0 | 36.0 |
| version | Double | The version of the layout for the dashboard. | Small, 36.0 | 36.0 |

## LayoutPageRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| rows | String[] | The rows associated with a layout page. | Small, 36.0 | 36.0 |

## AggregateStepRepresentation

AggregateStepRepresentation inherits properties from the abstract [QueryStepRepresentation](#QueryStepRepresentation). These base properties appear in AggregateStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isFacet | Boolean | Indicates whether this step is a global filter which can be faceted to other steps or widgets in the dashboard (true) or not (false). | Small, 36.0 | 36.0 |

## AggregateFlexStepRepresentation

AggregateFlexStepRepresentation inherits properties from the abstract [QueryStepRepresentation](#QueryStepRepresentation). These base properties appear in AggregateFlexStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether this step broadcasts faceting filters to other steps on the dashboard (true) or not (false). | Small, 41.0 | 41.0 |
| cdp​Object | String | The name of the Data 360 object used for the query. | Small, 54.0 | 54.0-57.0 |
| cdp​Objects | String[] | A list of the Data 360 object names used for the query. | Small, 58.0 | 58.0 |
| connection​Name | String | The name of the connection used for steps powered by external data. | Small, 48.0 | 48.0 |
| dataspace | String | The dataspace name for Data 360 objects. | Small, 61.0 | 61.0 |
| receive​Facet​Source | Receive​Facet​Source​Representation | The receive facet configurations. | Small, 41.0 | 41.0-47.0 |
| sobject | String | The name of the sObject used for a SOQL query. | Small, 47.0 | 47.0 |
| values | Map<String, Dynamic​Value​Representation> | A map of dynamic data values. | Small, 57.0 | 57.0 |

## ApexStepRepresentation

ApexStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in ApexStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| query | Apex​Step​Query​Representation | The queries to run for this step. | Small, 41.0 | 41.0 |

## CdpStepRepresentation

CdpStepRepresentation inherits properties from the abstract [FlexMetadataStepRepresentation](#FlexMetadataStepRepresentation). These base properties appear in CdpStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether this step broadcasts faceting filters to other steps on the dashboard (true) or not (false). | Small, 54.0 | 54.0 |
| dataspace | String | The dataspace name for Data 360 objects. | Small, 61.0 | 61.0 |
| query | String | The query for the step. | Small, 54.0 | 54.0 |
| receive​Facet​Source | Receive​Facet​Source​Representation | The receive facet source configuration | Small, 54.0 | 54.0 |
| start | String | The start value for the step. | Small, 54.0 | 54.0 |
| use​Legacy​Cdp​Query​Api | Boolean | Indicates whether this step uses the legacy Data 360 Query API (true) or not (false). | Small, 65.0 | 65.0 |
| use​External​Filters | Boolean | Indicates whether this step uses external filters (true) or not (false). | Small, 64.0 | 64.0 |
| use​Global | Boolean | Indicates whether this step is faceted to the global step (true) or not (false). | Small, 54.0 | 54.0 |
| values | Map<String, Dynamic​Value​Representation> | A map of dynamic data values. | Small, 59.0 | 59.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for the step visualization. | Small, 54.0 | 54.0 |

## DirectReportStepRepresentation

DirectReportStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in DirectReportStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether this step broadcasts faceting filters to other steps on the dashboard (true) or not (false). | Small, 56.0 | 56.0 |
| query | Direct​Report​Step​Query​Representation | The query to run for this step. | Small, 53.0 | 53.0 |
| receive​Facet​Source | Receive​Facet​Source​Representation | The receive facet configuration. | Small, 56.0 | 56.0 |
| start | String | The start value for the step. | Small, 56.0 | 56.0 |
| use​Global | Boolean | Indicates whether this step gets tied to the global step (true) or not (false). | Small, 56.0 | 56.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for the step visualization. | Small, 56.0 | 5.0 |

## ForecastingStepRepresentation

ForecastingStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in ForecastingStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| query | Forecasting​Step​Query​Representation | The query to run for this step. | Small, 59.0 | 59.0 |

## GrainStepRepresentation

GrainStepRepresentation inherits properties from the abstract [QueryStepRepresentation](#QueryStepRepresentation). These base properties appear in GrainStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isFacet | Boolean | Indicates whether this step is a global filter which can be faceted to other steps or widgets in the dashboard (true) or not (false). | Small, 41.0 | 41.0 |
| query | Apex​Step​Query​Representation | The queries to run for this step. | Small, 41.0 | 41.0 |

## HierarchyStepRepresentation

HierarchyStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in HierarchyStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| filter​Field | String | The filter field to pass to the role hierarchy evaluation. | Small, 55.0 | 55.0 |
| hierarchy​Type | Hierarchy​Type​Enum | The type of hierarchy used to facet. Valid values are:Forecast​HierarchyRole​Hierarchy | Small, 55.0 | 55.0 |
| query | Hierarchy​Step​Query​Representation | The query parameters to pass to the role hierarchy evaluation. | Small, 55.0 | 55.0 |

## HierarchyStepQueryRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| limit | Integer | The maximum amount of results to return for this step. | Small, 55.0 | 55.0 |

## InputStepRepresentation

InputStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in InputStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| start | String | The start value for the step. | Small, 56.0 | 56.0 |
| value​Type | Connect​Wave​Input​Widget​Value​Format​Enum | The value type of the step. Valid values are:DateNumberText | Small, 56.0 | 56.0 |
| values | Input​Step​Values​Representation[] | The list of values for the step. | Small, 56.0 | 56.0 |

## InputStepValuesRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| max | String | The max column in values. | Small, 56.0 | 56.0 |
| min | String | The min column in values. | Small, 56.0 | 56.0 |

## LensStepRepresentation

LensStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in LensStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| source | Asset​Reference​Representation | The lens source for this step. | Small, 50.0 | 50.0 |

## MultiQueryStepRepresentation

MultiQueryStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in MultiQueryStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columns | Column​Representation[] | The list of queries to run for this step. | Small, 36.0 | 36.0 |
| datasets | Asset​Reference​Representation[] | The list of datasets used by this step. | Small, 36.0 | 36.0 |
| globalQuery | Query[] | The query override for all columns. | Small, 41.0 | 41.0 |
| isFacet | Boolean | Indicates whether this step is a global filter which can be faceted to other steps or widgets in the dashboard (true) or not (false). | Small, 41.0 | 41.0 |
| isGlobal | Boolean | Indicates whether this step is a global filter which can be faced to other steps or widgets in the dashboard (true) or not (false). | Small, 36.0 | 36.0 |
| sortable | Boolean | Indicates whether this step supports quick sorting in preview mode (true) or not (false). | Small, 64.0 | 64.0 |
| start | String | The start value for the step. | Small, 36.0 | 36.0 |
| use​External​Filters | Boolean | Indicates whether this step uses external filters (true) or not (false). | Small, 64.0 | 64.0 |
| useGlobal | Boolean | Indicates whether this step gets tied to the global step (true) or not (false). | Small, 36.0 | 36.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for the step visualization. | Small, 36.0 | 36.0 |

## SqlStepRepresentation

SqlStepRepresentation inherits properties from the abstract [FlexMetadataStepRepresentation](#FlexMetadataStepRepresentation). These base properties appear in SqlStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether this step broadcasts faceting filters to other steps on the dashboard (true) or not (false). | Small, 51.0 | 51.0 |
| connection​Name | String | The name of the connection for the step. | Small, 51.0 | 51.0 |
| query | String | The query for the step. | Small, 51.0 | 51.0 |
| receive​Facet​Source | Receive​Facet​Source​Representation | The receive facet configuration. | Small, 52.0 | 52.0 |
| start | String | The start value for the step. | Small, 51.0 | 51.0 |
| use​External​Filters | Boolean | Indicates whether this step uses external filters (true) or not (false). | Small, 64.0 | 64.0 |
| use​Global | Boolean | Indicates whether this step is tied to the global step (true) or not (false). | Small, 53.0 | 53.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for the step visualization. | Small, 51.0 | 51.0 |

## SaqlStepRepresentation

SaqlStepRepresentation inherits properties from the abstract [FlexMetadataStepRepresentation](#FlexMetadataStepRepresentation). These base properties appear in SaqlStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether this step broadcasts faceting filters to other steps on the dashboard (true) or not (false). | Small, 41.0 | 41.0 |
| query | String | The SAQL query for the step. | Small, 39.0 | 39.0 |
| receive​Facet​Source | Receive​Facet​Source​Representation | The receive facet source configuration | Small, 48.0 | 48.0 |
| sortable | Boolean | Indicates whether this step supports quick sorting in preview mode (true) or not (false). | Small, 64.0 | 64.0 |
| start | String | The start value for the step. | Small, 39.0 | 39.0 |
| use​External​Filters | Boolean | Indicates whether this step uses external filters (true) or not (false). | Small, 64.0 | 64.0 |
| use​Global | Boolean | Indicates whether this step is faceted to the global step. | Small, 39.0 | 39.0 |
| values | Map<String, Receive​Facet​Source​Representation> | A map of dynamic data values. | Small, 57.0 | 57.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for the step visualization. | Small, 40.0 | 40.0 |

## SoqlStepRepresentation

SoqlStepRepresentation inherits properties from the abstract [FlexMetadataStepRepresentation](#FlexMetadataStepRepresentation). These base properties appear in SoqlStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether the step broadcasts faceting (true) or not (false). | Small, 55.0 | 55.0 |
| is​Facet | Boolean | Indicates whether this step is faceted to other steps on the dashboard (true) or not (false). | Small, 39.0 | 39.0 |
| query | String | The query for the step. | Small, 39.0 | 39.0 |
| receive​Facet​Source | Receive​Facet​Source​Representation | The receive facet source configuration. | Small, 55.0 | 55.0 |
| start | String | The start value for the step. | Small, 39.0 | 39.0 |
| use​External​Filters | Boolean | Indicates whether this step uses external filters (true) or not (false). | Small, 64.0 | 64.0 |
| use​Global | Boolean | Indicates whether this step gets tied to the global step (true) or not (false). | Small, 39.0 | 39.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for step visualization. | Small, 55.0 | 55.0 |

## StaticStepRepresentation

StaticStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in StaticStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| datasets | Asset​Reference​Representation[] | The list of datasets used by this step. | Small, 36.0 | 36.0 |
| dimensions | String[] | A list of dimensions for the step. | Small, 36.0 | 36.0 |
| is​Facet | Boolean | Indicates whether this step is faceted to other steps on the dashboard (true) or not (false). | Small, 36.0 | 36.0 |
| is​Global | Boolean | Indicates whether this step is a global filter which can be faceted to other steps or widgets in the dashboard (true) or not (false). | Small, 36.0 | 36.0 |
| start | String | The start value for the step. | Small, 36.0 | 36.0 |
| use​External​Filters | Boolean | Indicates whether this step uses external filters (true) or not (false). | Small, 64.0 | 64.0 |
| useGlobal | Boolean | Indicates whether this step gets tied to the global step (true) or not (false). | Small, 36.0 | 36.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for the step visualization. | Small, 36.0 | 36.0 |

## StaticFlexStepRepresentation

StaticFlexStepRepresentation inherits properties from the abstract [FlexMetadataStepRepresentation](#FlexMetadataStepRepresentation). These base properties appear in StaticFlexStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| broadcast​Facet | Boolean | Indicates whether this step broadcasts faceting filters to other steps on the dashboard (true) or not (false). | Small, 41.0 | 41.0 |
| columns | Static​Flex​Step​Column​Representation | The metadata about the columns used in values. | Small, 47.0 | 47.0 |
| isGlobal | Boolean | Indicates whether this step is a global filter which can be faced to other steps or widgets in the dashboard (true) or not (false). | Small, 36.0 | 36.0 |
| start | String | The start value for the step. | Small, 39.0 | 39.0 |
| use​External​Filters | Boolean | Indicates whether this step uses external filters (true) or not (false). | Small, 64.0 | 64.0 |
| useGlobal | Boolean | Indicates whether this step gets tied to the global step (true) or not (false). | Small, 39.0 | 39.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for the step visualization. | Small, 40.0 | 40.0 |

## QueryStepRepresentation

QueryStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in QueryStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| datasets | Asset​Reference​Representation[] | The list of datasets used by this step. | Small, 36.0 | 36.0 |
| interactions | Interaction​Representation[] | A list of interactions for the widget. | Small, 64.0 | 64.0 |
| isGlobal | Boolean | Indicates whether this step is a global filter which can be faced to other steps or widgets in the dashboard (true) or not (false). | Small, 36.0 | 36.0 |
| query | Query | The query to run for this step. | Small, 36.0 | 36.0 |
| sortable | Boolean | Indicates whether this step supports quick sorting in preview mode (true) or not (false). | Small, 64.0 | 64.0 |
| start | String | The start value for the step. | Small, 36.0 | 36.0 |
| useGlobal | Boolean | Indicates whether this step gets tied to the global step (true) or not (false). | Small, 36.0 | 36.0 |
| visualization​Parameters | Step​Visualization​Parameters​Representation | The parameters for the step visualization. | Small, 36.0 | 36.0 |

## FlexMetadataStepRepresentation

FlexMetadataStepRepresentation inherits properties from the abstract [StepRepresentation](#StepRepresentation). These base properties appear in FlexMetadataStepRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| groups | Object | The columns that are also groups. | Small, 39.0 | 39.0 |
| numbers | Object | The number columns. | Small, 39.0 | 39.0 |
| strings | Object | The string columns. | Small, 39.0 | 39.0 |

## StepRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | The display label for the step. | Small, 36.0 | 36.0 |
| selectMode | Connect​Wave​Select​Mode​Enum | The select mode types. Valid values are:MultiMultiRequiredNoneSingleSingleRequired | Small, 36.0 | 36.0 |
| type | Connect​Wave​Dashboard​Step​Type​Enum | The type of dashboard step. Valid values are:AggregateAggregate​FlexApexCdpDirect​ReportDiscoveryForecastingGrainHierarchyLensMultiSaqlSoqlSqlStaticStatic​FlexWatchlist | Small, 36.0 | 36.0 |

## ApexStepQueryRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| body | Object | The body for the Apex request. | Small, 41.0 | 41.0 |
| path | String | The path to the Apex controller. | Small, 41.0 | 41.0 |

## DirectReportStepQueryRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| metadata | Object | The metadata for the query. | Small, 53.0 | 53.0 |
| mode | Direct​Report​Mode​Enum | The query mode. Valid values are:AggregateDetailsSummary | Small, 53.0 | 53.0 |
| report​Id | String | The ID for the query report. | Small, 53.0 | 53.0 |

## ForecastingStepQueryRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| forecast​Type​Id | String | The forecast type for the query. | Small, 59.0 | 59.0 |
| start​Date | Object | The start date for the query. | Small, 59.0 | 59.0 |
| territory​Id | String | The territory ID for the query. | Small, 59.0 | 59.0 |
| user​Id | String | The user ID for the query. | Small, 59.0 | 59.0 |

## StaticFlexStepColumnRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregate​Function | String | The aggregate function for the column. | Small, 47.0 | 47.0 |
| dataset | Asset​Reference​Representation | The dataset used in the column. | Small, 47.0 | 47.0 |
| field | String | The aggregate field for the column. | Small, 47.0 | 47.0 |
| type | Connect​Wave​Dashboard​Static​Step​Column​Type​Enum | The column type. Valid values areStringNumberGroupingAggregate | Small, 47.0 | 47.0 |

## StepVisualizationParametersRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| options | Lens​Visualization​Options | The configuration options for different lens visualizations. Valid values are:Bar​Lens​Visualization​OptionsComparison​Table​Lens​Visualization​OptionsDot​Lens​Visualization​OptionsHeat​Map​Lens​Visualization​OptionsMatrix​Lens​Visualization​OptionsParallel​Coords​Lens​Visualization​OptionsPie​Lens​Visualization​OptionsPivot​Table​Lens​Visualization​OptionsScatter​Lens​Visualization​OptionsStacked​Bar​Lens​Visualization​OptionsTable​Lens​Visualization​OptionsTime​Lens​Visualization​OptionsValues​Table​Lens​Visualization​Options | Small, 36.0 | 36.0 |
| parameters | Object | Valid widget parameters based on its type. | Small, 40.0 | 40.0 |
| type | Connect​Wave​Widget​Type​Enum | The type of the widget. Valid values are:BoxChartCompare​TableComponentContainerDate​SelectorFilter​PanelGlobal​FiltersImageInheritLinkList​SelectorNavigationNumberPill​BoxRange​SelectorRepeater>TableTextUrlValues​Table | Small, 40.0 | 40.0 |
| visualization​Type | String | The type of visualization. Valid values are:BulletCalendar​Heat​MapComboComparison​TableFlatgaugeGaugeHeat​MapHorizontal​BarHorizontal​DotLineMatrixParallel​CoordinatesPiePivot​TablePolargaugePyramidRatingScatterStack​WaterfallStacked​Horizontal​BarStacked​Vertical​BarTimeTime​BarTime​ComboValues​TableVertical​BarVertical​DotWaterfall | Small, 36.0 | 36.0 |

## ReceiveFacetSourceRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| mode | Connect​Wave​Dashboard​Step​Receive​Facet​Mode​Type​Enum | The type of receive facet mode. Valid values are:AllExcludeIncludeNone | Small, 48.0 | 48.0 |
| steps | String[] | A list of steps that the current step receives or omits faceting from. | Small, 48.0 | 48.0 |

## DashboardWidgetRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Object | The valid widget parameters based on the type of widget. Parameter types include:Box​Widget​Parameters​RepresentationCompare​Table​Widget​Parameters​RepresentationComponent​Widget​Parameters​RepresentationContainer​Widget​Parameters​RepresentationDate​Selector​Widget​Parameters​RepresentationFilter​Panel​Widget​Parameters​RepresentationGlobal​Filters​Widget​Parameters​RepresentationImage​Widget​Parameters​RepresentationInherit​Widget​Parameters​RepresentationInput​Widget​Parameters​RepresentationLink​Widget​Parameters​RepresentationList​Selector​Widget​Parameters​RepresentationNavigation​Widget​Parameters​RepresentationNumber​Widget​Parameters​RepresentationPill​Box​Widget​Parameters​RepresentationRange​Selector​Widget​Parameters​RepresentationRepeater​Widget​Parameters​RepresentationTable​Widget​Parameters​RepresentationText​Widget​Parameters​RepresentationUrl​Widget​Parameters​RepresentationValues​Table​Widget​Parameters​Representation | Small, 36.0 | 36.0 |
| position | Widget​Position​Representation | The position information for the widget. | Small, 36.0 | 36.0 |
| type | String | The type of the widget. Valid values are:BoxChartCompare​TableComponentContainerDate​SelectorFilter​PanelGlobal​FiltersImageInheritLinkList​SelectorNavigationNumberPill​BoxRange​SelectorRepeater>TableTextUrlValues​Table | Small, 36.0 | 36.0 |

## BoxWidgetParametersRepresentation

BoxWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in BoxWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| backgroundColor | String | The background color of the widget. | Small, 36.0 | 36.0 |
| borderColor | String | The border color of the widget. | Small, 36.0 | 36.0 |
| imageUrl | String | A 15-character or 18-character Salesforce document ID. | Small, 36.0 | 36.0 |
| stretch | Boolean | Indicates whether to stretch the widget. | Small, 36.0 | 36.0 |

## CompareTableWidgetParametersRepresentation

CompareTableWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in CompareTableWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| explore​Link | Boolean | Indicates whether exploreLink is on (true) or not (false). | Small, 36.0 | 36.0 |
| max​Column​Width | Integer | The maximum width of the header column. | Small, 36.0 | 36.0 |
| min​Column​Width | Integer | The minimum width of the header column. | Small, 36.0 | 36.0 |
| step | String | The step name tied to this widget. | Small, 36.0 | 36.0 |
| totals | Boolean | Indicates whether to use totals. | Small, 36.0 | 36.0 |

## ComponentWidgetParametersRepresentation

ComponentWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in ComponentWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Object<String, Object> | The map of this component's attribute values. | Small, 51.0 | 51.0 |
| dynamic​Attributes | Object<String, Object> | The map of this component's dynamic attribute values. | Small, 59.0 | 59.0 |
| page​Name | String | The default page of this widget. | Small, 50.0 | 50.0 |
| share​State | Boolean | Indicates whether this component widget shares state with the parent dashboard (true) or not (false). | Small, 51.0 | 51.0 |
| source | Typed​Asset​Reference​Representation[] | The component definition for this component widget. | Small, 46.0 | 46.0 |
| step | String | The attached step for this component widget. | Small, 51.0 | 51.0 |

## ContainerWidgetParametersRepresentation

ContainerWidgetParametersRepresentation inherits properties from the abstract [ImageParametersRepresentation](#ImageParametersRepresentation).

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| interactions | Interaction​Representation[] | A list of the interaction parameters for the widget. | Small, 58.0 | 58.0 |

## Date​Selector​Widget​Parameters​Representation

DateSelectorWidgetParametersRepresentation inherits properties from the abstract [SelectorWidgetParametersRepresentation](#SelectorWidgetParametersRepresentation). These base properties appear in DateSelectorWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| absolute​Mode​Enabled | Boolean | Indicates whether the widget has absolute mode enabled (true) or not (false). | Small, 43.0 | 43.0 |
| calendar​Type​Switching​Allowed | Boolean | Indicates whether widget can switch calendar types (true) or not (false). | Small, 39.0 | 39.0 |
| custom​Filter​Presets[] | Custom​Filter​Preset​Type​Enum | The list of custom preset filters. Valid values are:All​TimeCurrent​Fiscal​QuarterCurrent​Fiscal​Quarter​To​DateCurrent​Fiscal​YearCurrent​Fiscal​Year​To​DateCurrent​MonthCurrent​Month​To​DateCurrent​QuarterCurrent​Quarter​To​DateCurrent​WeekCurrent​YearCurrent​Year​To​DateLast​180​DaysLast​30​DaysLast​7​DaysLast​90​DaysNext​180​DaysNext​30​DaysNext​7​DaysNext​90​DaysNext​Fiscal​QuarterNext​Fiscal​YearNext​MonthNext​QuarterNext​WeekNext​YearPrevious​Fiscal​QuarterPrevious​Fiscal​Quarter​To​DatePrevious​Fiscal​YearPrevious​Fiscal​Year​To​DatePrevious​Fiscal​MonthPrevious​Fiscal​Month​To​DatePrevious​QuarterPrevious​Quarter​To​DatePrevious​WeekPrevious​YearPrevious​Year​To​Date | Small, 54.0 | 54.0 |
| default​Fiscal​Mode | Boolean | Indicates whether there is a default calendar type (true) or not (false). | Small, 39.0 | 39.0 |
| displayMode | Connect​Wave​Selector​Display​Mode​Enum | The display mode for dashboard selector widgets. Valid values are:ComboFilter | Small, 46.0 | 46.0 |
| expanded | Boolean | Indicates whether the selector widget is expanded (true) or not (false). | Small, 36.0 | 36.0 |
| presets​Enabled | Boolean | Indicates whether the widget has presets enabled (true) or not (false). | Small, 43.0 | 43.0 |
| relative​Mode​Enabled | Boolean | Indicates whether the widget has relative mode enabled (true) or not (false). | Small, 43.0 | 43.0 |

## FilterPanelWidgetParametersRepresentation

FilterPanelWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in FilterPanelWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| filterItemOptions | Filter​Item​Options​Representation | The filter items options. | Small, 41.0 | 41.0 |
| filters | Filter​Item​Reference​Representation | The list of filter references mapped to the filters section. | Small, 46.0 | 46.0 |
| items​Per​Row | Integer | The number of filter items per row in a filter panel. | Small, 41.0 | 41.0 |
| show​All​Filters | Integer | Indicates whether to display all the filters or just one filter. | Small, 46.0 | 46.0 |
| showIn​View​Mode | Boolean | Indicates whether the filter panel is displayed in view mode (true) or not (false). | Small, 41.0 | 41.0 |
| title | Filter​Panel​Title​Representation | The filter panel title text. | Small, 41.0 | 41.0 |

## GlobaFiltersWidgetParametersRepresentation

GlobalFiltersWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in GlobalFiltersWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| step | String | The step name tied to this widget. | Small, 36.0 | 36.0 |

## ImageWidgetParametersRepresentation

ImageWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in ImageWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alt​Text | String | The alternate text for the image. | Samll, 55.0 | 55.0 |
| interactions | Interaction​Representation[] | A list of the interaction parameters for the widget. | Small, 57.0 | 57.0 |
| tooltip | String | The tooltip for the image widget. | Small, 42.0 | 42.0 |

## InheritWidgetParametersRepresentation

InheritWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in InheritWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| step | String | The step name for this widget. | Small, 50.0 | 50.0 |

## InputWidgetParametersRepresentation

InputWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in InputWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| active​Value​Color | String | The active color value for this widget. | Small, 56.0 | 56.0 |
| current​Value​Color | String | The current color value for this widget. | Small, 56.0 | 56.0 |
| display​Format | Connect​Wave​Input​Widget​Display​Format​Enum | The display format of the input value. Valid values are:CurrencyNonePercent | Small, 56.0 | 56.0 |
| handle​Color | String | The handle color for this widget. | Small, 56.0 | 56.0 |
| increments | Object | The increments for this widget. | Small, 56.0 | 56.0 |
| input​Background​Color | String | The background color for this widget. | Small, 56.0 | 56.0 |
| input​Border​Color | String | The border color for this widget. | Small, 56.0 | 56.0 |
| input​Type | Connect​Wave​Input​Widget​Input​Type​Enum | The input type of the widget. Valid values are:SliderTypein | Small, 56.0 | 56.0 |
| show​Current​Value | Boolean | Indicates whether to show the current value of the widget (true) or not (false). | Small, 56.0 | 56.0 |
| show​Values​Range | Boolean | Indicates whether to show the value range of the widget (true) or not (false). | Small, 56.0 | 56.0 |
| step | String | The step name for this widget. | Small, 56.0 | 56.0 |
| title | String | The title for this widget. | Small, 56.0 | 56.0 |
| title​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The title alignment of the widget. Valid values are:CenterLeftRight | Small, 56.0 | 56.0 |
| title​Color | String | The title color for this widget. | Small, 56.0 | 56.0 |
| title​Font​Size | Object | The title font size for this widget. | Small, 56.0 | 56.0 |
| track​Color | String | The track color for this widget. | Small, 56.0 | 56.0 |
| values​Range​Color | String | The value range color for this widget. | Small, 56.0 | 56.0 |

## LinkWidgetParametersRepresentation

LinkWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in LinkWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| destination | String | The destination of the link. | Small, 36.0 | 36.0 |
| destination​Link | Link​Destination​Representation | The destination reference of this link. Valid values are:Link​Asset​Destination​RepresentationLink​Page​Destination​RepresentationLink​Url​Destination​Representation | Small, 39.0 | 39.0 |
| destination​Type | Connect​Wave​Link​Widget​Dest​Type​Enum | The type of asset the link refers to. Values are:DashboardExploreLensPageUrl | Small, 36.0 | 36.0 |
| fontSize | Integer | The font size for the widget. | Small, 36.0 | 36.0 |
| include​State | Boolean | Indicates whether to include the state. | Small, 36.0 | 36.0 |
| text | String | The text value for the link. | Small, 36.0 | 36.0 |
| text​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Small, 36.0 | 36.0 |
| text​Color | String | The text color for the widget. | Small, 36.0 | 36.0 |
| visualization​Type | String | The visualization type used for this widget. Valid values are:BulletCalendar​Heat​MapComboComparison​TableFlatgaugeGaugeHeat​MapHorizontal​BarHorizontal​DotLineMatrixParallel​CoordinatesPiePivot​TablePolargaugePyramidRatingScatterStack​WaterfallStacked​Horizontal​BarStacked​Vertical​BarTimeTime​BarTime​ComboValues​TableVertical​BarVertical​DotWaterfall | Small, 36.0 | 36.0 |

## ListSelectorWidgetParametersRepresentation

ListSelectorWidgetParametersRepresentation inherits properties from the abstract [SelectorWidgetParametersRepresentation](#SelectorWidgetParametersRepresentation). These base properties appear in ListSelectorWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether the list selector is compact (true) or not (false). | Small, 36.0 | 36.0 |
| display​Mode | Connect​Wave​Selector​Display​Mode​Enum | The display mode for dashboard selector widgets. Valid values are:ComboFilter | Small, 46.0 | 46.0 |
| display​Template | String | Display template for widget level projection. | Small, 39.0 | 39.0 |
| expanded | Boolean | Indicates whether the list selector is expanded (true) or not (false). | Small, 36.0 | 36.0 |
| explore​Link | Boolean | Indicates whether the list selector has an explore link (true) or not (false). | Small, 36.0 | 36.0 |
| interactions | Interaction​Representation[] | A list of interactions for the widget. | Small, 64.0 | 64.0 |
| measure​Field | String | The measure field associated with this widget. | Small, 36.0 | 36.0 |

## NavigationWidgetParametersRepresentation

NavigationWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in NavigationWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| font​Size | Integer | The value indicating the default font size for all the text in the navigation. | Small, 43.0 | 43.0 |
| selected​Tab | Tab​Style​Parameters​Representation | The selected tab styles for the widget. | Small, 43.0 | 43.0 |
| tab​Count | Integer | The number of tabs to show in the widget. | Small, 43.0 | 43.0 |
| text​Color | String | The color value for the default tab text in the widget. | Small, 43.0 | 43.0 |

## NumberWidgetParametersRepresentation

NumberWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in NumberWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether the widget is compact (true) or not (false). | Small, 36.0 | 36.0 |
| destination​Link | Link​Destination​Representation | The destination reference of the link. | Small, 47.0 | 47.0 |
| explore​Link | Boolean | Indicates whether the widget has an explore link (true) or not (false). | Small, 36.0 | 36.0 |
| font​Size | String | The font size of the widget text. | Small, 36.0 | 36.0 |
| interactions | Interaction​Representation[] | A list of the interaction parameters for the widget. | Small, 57.0 | 57.0 |
| measure​Field | String | The measure field associated with the widget. | Small, 36.0 | 36.0 |
| no​Results​Label | String | The text to display when no results are found. | Small, 45.0 | 45.0 |
| number​Bold | Object | The font weight of the number. | Small, 62.0 | 62.0 |
| number​Color | String | The color of the number inside the widget. | Small, 36.0 | 36.0 |
| number​Italic | Object | The font style of the number. | Small, 62.0 | 62.0 |
| number​Size | Object | The size of the number inside the widget. | Small, 36.0 | 36.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Small, 66.0 | 66.0 |
| step | String | The step name associated to the widget. | Small, 36.0 | 36.0 |
| text​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Small, 36.0 | 36.0 |
| text​Color | String | The color of the text inside the widget. | Small, 36.0 | 36.0 |
| title | String | The title of the widget. | Small, 36.0 | 36.0 |
| title​Bold | Object | The font weight of the title. | Small, 62.0 | 62.0 |
| title​Color | String | The title color of the widget. | Small, 36.0 | 36.0 |
| title​Italic | Object | The font style of the title. | Small, 62.0 | 62.0 |
| title​Size | String | The title size of the widget. | Small, 36.0 | 36.0 |
| tooltip | Tooltip​Representation | The tooltip for the widget. | Small, 51.0 | 51.0 |

## PillBoxWidgetParametersRepresentation

PillBoxWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in PillBoxWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether the widget is compact (true) or not (false). | Small, 36.0 | 36.0 |
| display​Template | String | The display template for widget level projection. | Small, 39.0 | 39.0 |
| explore​Link | Boolean | Indicates whether the widget has an explore link (true) or not (false). | Small, 36.0 | 36.0 |
| font​Size | String | The default font size for all items in the widget. | Small, 45.0 | 45.0 |
| interactions | Interaction​Representation[] | A list of interactions for the widget. | Small, 64.0 | 64.0 |
| measure​Field | String | The measure field associated with the widget. | Small, 36.0 | 36.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Small, 66.0 | 66.0 |
| selected​Tab | Tab​Style​Parameters​Representation | The selected tab styles for the widget. | Small, 45.0 | 45.0 |
| step | String | The step name associated to the widget. | Small, 36.0 | 36.0 |
| text​Color | String | The color of the default text in the widget. | Small, 36.0 | 36.0 |
| title | String | The title of the widget. | Small, 36.0 | 36.0 |

## RangeSelectorWidgetParametersRepresentation

RangeSelectorWidgetParametersRepresentation inherits properties from the abstract [SelectorWidgetParametersRepresentation](#SelectorWidgetParametersRepresentation). These base properties appear in RangeSelectorWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| display​Mode | Connect​Wave​Selector​Display​Mode​Enum | The display mode for dashboard selector widgets. Valid values are:ComboFilter | Small, 46.0 | 46.0 |

## RepeaterWidgetParametersRepresentation

RepeaterWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in RepeaterWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| card​Properties | Repeater​Widget​Card​Properties​Representation | The properties for a card for the widget. | Small, 53.0 | 53.0 |
| cell​Properties | Map<String, Repeater​Widget​Cell​Properties​Representation> | A map of repeater cell properties for the widget. | Small, 53.0 | 53.0 |
| explore​Link | Boolean | Indicates whether to display the explorer link (true) or not (false). | Small, 54.0 | 54.0 |
| header​Cell​Properties | Map<String, Repeater​Widget​Cell​Properties​Representation> | A map of repeater header cell properties for the widget. | Small, 64.0 | 64.0 |
| interactions | Interaction​Representation[] | A list of the interaction parameters for the widget. | Small, 57.0 | 57.0 |
| items​Per​Row | Object | The number of cards per row of the widget. | Small, 53.0 | 53.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Small, 66.0 | 66.0 |
| show​Header | Boolean | Indicates whether to display the header (true) or not (false). | Small, 64.0 | 64.0 |
| sortable​Columns | Object | The sortable columns for the widget. | Small, 59.0 | 59.0 |
| step | String | The step name associated to the widget. | Small, 53.0 | 53.0 |

## TableWidgetParametersRepresentation

TableWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in TableWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assistive​Text | String | The assistive text for the widget. | Small, 64.0 | 64.0 |
| border​Color | String | The outer border color for the widget. | Small, 41.0 | 41.0 |
| border​Width | Integer | The outer border width for the widget. | Small, 41.0 | 41.0 |
| cell | Table​Widget​Cell​Parameters​Representation | The cell properties for the widget. | Small, 41.0 | 41.0 |
| collapsible | Boolean | Indicates whether the table is collapsible (true) or not (false). | Small, 50.0 | 50.0 |
| column​Properties | Column​Properties​Representation | The column properties for the widget. | Small, 42.0 | 42.0 |
| column​Subtotals | Boolean | Indicates whether to display column subtotals in the table (true) or not (false). | Small, 56.0 | 56.0 |
| column​Totals | Boolean | Indicates whether to display column totals in the table (true) or not (false). | Small, 55.0 | 55.0 |
| columns | Object | The columns for the widget. | Small, 41.0 | 41.0 |
| custom​Bulk​Actions | Custom​Bulk​Action​Representation | The custom bulk actions for the widget. | Small, 42.0 | 42.0 |
| enable​All​Data​Fetch | Boolean | Indicates whether all data is loaded (true) or data loading is paginated (false). | Small, 59.0 | 59.0 |
| even​Row​Color | String | The even row color for the widget. | Small, 41.0 | 41.0 |
| explore​Link | Boolean | Indicates whether the widget has an explore link (true) or not (false). | Small, 38.0 | 38.0 |
| fixed​Column​Width | Integer | The fixed column width for the widget. | Small, 40.0 | 40.0 |
| header | Table​Widget​Cell​Parameters​Representation | The header properties for the widget. | Small, 41.0 | 41.0 |
| header​Properties | Header​Properties​Representation | The header properties for the table columns in the widget. | Small, 64.0 | 64.0 |
| inner​Major​Border​Color | String | The inner major border color for the widget. | Small, 41.0 | 41.0 |
| inner​Minor​Border​Color | String | The inner minor border color for the widget. | Small, 41.0 | 41.0 |
| interactions | Interaction​Representation[] | A list of the interaction parameters for the widget. | Small, 57.0 | 57.0 |
| max​Column​Width | Integer | The maximum column width for the widget. | Small, 40.0 | 40.0 |
| min​Column​Width | Integer | The minimum column width for the widget. | Small, 40.0 | 40.0 |
| mode | Connect​Wave​Table​Mode​Enum | The table mode for the widget. Valid values are:Fit​To​ContainerFixedVariable | Small, 40.0 | 40.0 |
| number​Of​Frozen​Columns | Integer | The number of frozen columns for the widget. | Small, 50.0 | 50.0 |
| number​Of​Lines | Integer | The number of lines of text per row for the widget. | Small, 41.0 | 41.0 |
| odd​Row​Color | String | The odd row color for the widget. | Small, 41.0 | 41.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Small, 66.0 | 66.0 |
| pivoted | Boolean | Indicates whether to display the widget as pivot (true) or not (false). | Small, 39.0 | 39.0 |
| repeat​Grouping​Row​Values | Boolean | Indicates whether to repeat row values (true) or not (false). | Small, 66.0 | 66.0 |
| row​Totals | Boolean | Indicates whether to display row totals in the table (true) or not (false). | Small, 55.0 | 55.0 |
| show​Row​Index​Column | Boolean | Indicates whether to show the row index column for the widget (true) or not (false). | Small, 41.0 | 41.0 |
| step | String | The step name associated to the widget. | Small, 38.0 | 38.0 |
| subtotals | Boolean | Indicates whether to show the subtotals row for the widget (true) or not (false). | Small, 47.0 | 47.0 |
| totals | Boolean | Indicates whether to show the totals row for the widget (true) or not (false). | Small, 40.0 | 40.0 |
| vertical​Padding | Integer | The cell vertical padding value for the widget. | Small, 41.0 | 41.0 |

## TextWidgetParametersRepresentation

TextWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in TextWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conditional​Formatting​Source | Text​Widget​Conditional​Formatting​Source​Representation | The conditional formatting source for the widget. | Small, 57.0 | 57.0 |
| content | Dynamic​Data​Representation | The dynamic value of the text in the widget. | Small, 49.0 | 49.0 |
| font​Size | Object | The font size of the text in the widget. | Small, 36.0 | 36.0 |
| interactions | Interaction​Representation[] | A list of the interaction parameters for the widget. | Small, 57.0 | 57.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Small, 66.0 | 66.0 |
| text | String | DEPRECATED The value of the text in the widget. | Small, 36.0 | 36.0-48.0 |
| text​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Small, 36.0 | 36.0 |
| text​Color | String | The color of the text in the widget. | Small, 36.0 | 36.0 |
| text​Overflow | Connect​Wave​Text​Overflow​Enum | The overflow of the text. Valid values are:TruncateWrap | Small, 60.0 | 60.0 |
| tooltip | String | The tooltip for the widget. | Small, 42.0 | 42.0 |

## UrlWidgetParametersRepresentation

UrlWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in UrlWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| type | Connect​Wave​Url​Widget​Type | The type of URL for the widget. Valid values are:YouTube | Small, 36.0 | 36.0 |
| url | String | The URL for the widget. | Small, 36.0 | 36.0 |
| video​Size | String | The size of the video the URL loads for the widget. | Small, 36.0 | 36.0 |

## ValueTableWidgetParametersRepresentation

ValueTablesWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in ValueTablesWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| explore​Link | Boolean | Indicates whether the widget has an explore link (true) or not (false). | Small, 36.0 | 36.0 |
| hide​Header​Link | Boolean | Indicates whether the header column is hidden for this widget (true) or not (false). | Small, 36.0 | 36.0 |
| max​Column​Width | Integer | The maximum column width for the widget. | Small, 36.0 | 36.0 |
| min​Column​Width | Integer | The minimum column width for the widget. | Small, 36.0 | 36.0 |
| step | String | The step name associated to the widget. | Small, 36.0 | 36.0 |
| totals | Boolean | Indicates whether to show the totals row for the widget (true) or not (false). | Small, 36.0 | 36.0 |

## WidgetParametersRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| onboarding | Widget​Onboarding​Representation | The value to indicate the widget onboarding content. | Small, 46.0 | 46.0 |
| select​Mode​Override | Connect​Wave​Select​Mode​Enum | The select mode types. Valid values are:MultiMultiRequiredNoneSingleSingleRequired | Small, 36.0 | 36.0 |
| show​Action​Menu | Boolean | Indicates whether to display the widget action menu (true) or not (false). | Small, 44.0 | 44.0 |

## WidgetOnboardingRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| title | String | The title of the onboarding content. | Small, 46.0 | 46.0 |
| url | String | The URL of the onboarding content. | Small, 46.0 | 46.0 |

## SelectorWidgetParametersRepresentation

SelectorWidgetParametersRepresentation inherits properties from the abstract [WidgetParametersRepresentation](#WidgetParametersRepresentation). These base properties appear in SelectorWidgetParametersRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| display​Mode | Connect​Wave​Selector​Display​Mode​Enum | The display mode for dashboard selector widgets. Valid values are:ComboFilter | Small, 46.0 | 46.0 |
| filter​Style | Filter​Style​Representation | The styling properties for filter widgets. | Small, 46.0 | 46.0 |
| instant | Boolean | Indicates whether the list selector is instant (true) or not (false). | Small, 36.0 | 36.0 |
| persist​Action​Menu | Boolean | Indicates whether to persist the actions menu (true) or not (false). | Small, 66.0 | 66.0 |
| step | String | The step name associated to the widget. | Small, 36.0 | 36.0 |
| title | String | The title of the widget. | Small, 36.0 | 36.0 |

## WidgetPositionRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| h | String | The height of the widget. | Small, 36.0 | 36.0 |
| w | String | The width of the widget. | Small, 36.0 | 36.0 |
| x | Integer | The x-index of the widget. | Small, 36.0 | 36.0 |
| y | Integer | The y-index of the widget. | Small, 36.0 | 36.0 |
| zIndex | Integer | The z-index of the widget. | Small, 36.0 | 36.0 |

## InteractionRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actions | Interaction​Action​Representation[] | A list of the actions for the interaction. Valid actions types are:Interaction​Clear​Action​RepresentationInteraction​Flow​Action​RepresentationInteraction​Navigate​Action​RepresentationInteraction​Reset​Action​Representation | Small, 57.0 | 57.0 |
| event | Connect​Wave​Interaction​Event​Type | The event type for the interaction. Valid values are:ClickSelect | Small, 57.0 | 57.0 |

## InteractionActionRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| action | Connect​Wave​Interaction​Action​Type​Enum | The action type for the interaction. Valid values are:ClearFlowNavigateResetSort | Small, 57.0 | 57.0-59.0 |
| type | Connect​Wave​Interaction​Action​Type​Enum | The action type for the interaction. Valid values are:ClearFlowNavigateResetSort | Small, 60.0 | 60.0 |

## InteractionClearActionRepresentation

InteractionClearActionRepresentation inherits properties from the abstract [InteractionActionRepresentation](#InteractionActionRepresentation). These base properties appear in InteractionClearActionRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| clear​Type | Connect​Wave​Interaction​Clear​Type​Enum | The clear type for the interaction. Valid values are:Clear​AllClear​ExcludeClear​Include | Small, 59.0 | 59.0 |
| lens​Ids | String[] | A list of lens IDs for the interaction. | Small, 59.0 | 59.0 |

## InteractionFlowActionRepresentation

InteractionFlowActionRepresentation inherits properties from the abstract [InteractionActionRepresentation](#InteractionActionRepresentation). These base properties appear in InteractionFlowActionRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<Object,Object> | A map of interaction attributes. | Small, 58.0 | 58.0 |
| name | String | The API name of the action. | Small, 58.0 | 58.0 |

## InteractionNavigateActionRepresentation

InteractionNavigateActionRepresentation inherits properties from the abstract [InteractionActionRepresentation](#InteractionActionRepresentation). These base properties appear in InteractionNavigateActionRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| destination​Link | Link​Destination​Representation | The destination link for the action. | Small, 57.0 | 57.0 |
| destination​Type | Connect​Wave​Interaction​Destination​Type​Enum | The destination type for the action. Valid values are:ComponentDashboardExploreLensPageUrl | Small, 57.0 | 57.0 |
| go​Back | Boolean | Indicates whether to navigate back on deselection (true) or not (false). | Small, 57.0 | 57.0 |

## InteractionResetActionRepresentation

InteractionResetActionRepresentation inherits properties from the abstract [InteractionActionRepresentation](#InteractionActionRepresentation). These base properties appear in InteractionResetActionRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| reset​Type | Connect​Wave​Interaction​Reset​Type​Enum | The reset type for the action. Valid values are:Reset​Filters | Small, 58.0 | 58.0 |

## TextWidgetConditionalFormattingSourceRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| field | String | The field used to retrieve the conditional formatting for the widget. | Small, 57.0 | 57.0 |
| scope | String | The scope of the conditional formatting rules for the widget | Small, 57.0 | 57.0 |
| step | String | The step used to retrieve the conditional formatting rules for the widget | Small, 57.0 | 57.0 |

## FilterItemOptionsRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color of the filter items. | Small, 41.0 | 41.0 |
| border​Color | String | The border color of the filter items. | Small, 41.0 | 41.0 |
| border​Radius | Integer | The border radius of the filter items. | Small, 41.0 | 41.0 |
| border​Width | Integer | The border width of the filter items. | Small, 41.0 | 41.0 |
| property​Color | String | The property color of the filter items. | Small, 41.0 | 41.0 |
| value​Color | String | The value color of the filter items. | Small, 41.0 | 41.0 |

## FilterItemReferenceRepresentation

FilterItemReferenceRepresentation inherits properties from the abstract [FilterRepresentation](#FilterRepresentation). These base properties appear in FilterItemReferenceRepresentation alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cdpObject | String | The Data 360 datasource in the filters section. | Small, v55 | 55.0 |
| dataset | Asset​Reference​Representation[] | The dataset in the filters section. | Small, 46.0 | 46.0 |
| field | String | The field in the filters section. | Small, 46.0 | 46.0 |
| sObject | String | The sObject in the filters section. | Small, v55 | 55.0 |

## FilterPanelTitleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| separator​Color | String | The filter panel's title separator color. | Small, 41.0 | 41.0 |
| text | Text​Representation[] | The filter panel's title text. | Small, 41.0 | 41.0 |
| visible | Boolean | Indicates whether the filter panel's title is visible (true) or not (false). | Small, 41.0 | 41.0 |

## FilterRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Filter​Param​Representation[] | The filter panel parameters. | Small, 41.0 | 41.0 |

## FilterParamRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | The filter expression that specifies which records to include. | Small, 41.0 | 41.0 |
| saql​Filter | String | The SAQL expression that specifies which records to include. | Small, 44.0 | 44.0 |

## LinkAssetDestinationRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the asset referenced by the link. | Small, 45.0 | 45.0 |
| namespace | String | The namespace of the asset referenced by the link. | Small, 45.0 | 45.0 |
| pageName | String | The page name for the link. | Small, 45.0 | 45.0 |
| saved​View​Id | String | The dashboard saved view id for the link. | Small, 47.0 | 47.0 |
| widget​Id | String | The dashboard widget id for the link. | Small, 47.0 | 47.0 |

## LinkPageDestinationRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the page referenced by the link. | Small, 45.0 | 45.0 |

## LinkUrlDestinationRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| tooltip | String | The tooltip for the link. | Small, 45.0 | 45.0 |
| tooltip​Mode | Tooltip​Mode​Enum | The tooltip mode. The status of the readiness task. Valid values are:CustomDefaultNone | Small, 62.0 | 62.0 |
| url | String | The URL of the link. | Small, 45.0 | 45.0 |

## TabStyleParametersRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color for the tab. | Small, 43.0 | 43.0 |
| border​Color | String | The border color for the tab. | Small, 43.0 | 43.0 |
| border​Edges | Connect​Wave​Border​Edge​Type​Enum[] | The edges of the border to be drawn. Valid values are:AllBottomLeftRightTop | Small, 43.0 | 43.0 |
| border​Width | Integer | The border width for the tab. | Small, 43.0 | 43.0 |
| text​Color | String | The text color for the selected tab. | Small, 43.0 | 43.0 |

## LinkDestinationRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| tooltip | String | The tooltip for the link. | Small, 46.0 | 46.0 |
| url | String | The URL for the link. | Small, 43.0 | 43.0 |

## LinkMassActionDestinationRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| action​Name | String | The name of the action. | Small, 51.0 | 51.0 |
| field | String | The field name for the action. | Small, 51.0 | 51.0 |
| step | String | The step to invoke the action on. | Small, 51.0 | 51.0 |

## TooltipRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| content | Tooltip​Content​Representation | The content for the tooltip. | Small, 51.0 | 51.0 |
| customize​Tooltip | Boolean | Indicates whether the tooltip is customized (true) or not (false). | Small, 51.0 | 51.0 |
| show​Tooltip​Title | Boolean | Indicates whether the tooltip title is visible (true) or not (false). | Small, 62.0 | 62.0 |

## FilterStyleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| title​Color | String | The color of the displayed title. | Small, 46.0 | 46.0 |
| value​Color | String | The color for the displayed value. | Small, 46.0 | 46.0 |

## RepeaterWidgetCardPropertiesRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cell​Spacing​X | Integer | The horizontal spacing between grid cells. | Small, 53.0 | 53.0 |
| cell​Spacing​Y | Integer | The vertical spacing between grid cells. | Small, 53.0 | 53.0 |
| num​Columns | Integer | The number of columns for a repeater grid. | Small, 53.0 | 53.0 |
| row​Height | Connect​Wave​Row​Height​Enum | Specifies the grid cell row height. Valid values are:FineNormal | Small, 53.0 | 53.0 |
| selected​Styles | Card​Selection​Style​Parameters​Representation | The styling for the selected repeater card of the widget | Small, 54.0 | 54.0 |
| styles | Grid​Layout​Widget​Style​Representation | The styling for the repeater card of the widget | Small, 53.0 | 53.0 |

## Card​Selection​Style​Parameters​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color of selected card. Must be a 6 digit hex string. | Small, 54.0 | 54.0 |
| border​Color | String | The border color of selected card. Must be a 6 digit hex string. | Small, 54.0 | 54.0 |
| border​Edges | Connect​Wave​Border​Edge​Type​Enum[] | The edges of the border to be drawn. Valid values are:AllBottomLeftRightTop | Small, 54.0 | 54.0 |
| border​Radius | Integer | The border radius of selected card. | Small, 54.0 | 54.0 |
| border​Width | Integer | The border width of selected card. | Small, 54.0 | 54.0 |

## RepeaterWidgetCellPropertiesRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Object | The parameters of the cell, based on it's type. | Small, 53.0 | 53.0 |
| position | Grid​Layout​Widget​Representation | The cell position, dimension, and styles. | Small, 53.0 | 53.0 |
| type | Connect​Wave​Repeater​Cell​Type​Enum | The cell type. Valid values are:Image (Cell​Properties​Image​Parameters​Representation)Number (Cell​Properties​Number​Parameters​Representation)Text (Cell​Properties​Text​Parameters​Representation) | Small, 53.0 | 53.0 |

## Cell​Properties​Image​Parameters​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alignment​X | Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment for the image. Valid values are:CenterLeftRight | Small, 54.0 | 54.0 |
| alignment​Y | Connect​Wave​Vertical​Alignment​Enum | The vertical alignment for the image. Valid values are:BottomCenterTop | Small, 54.0 | 54.0 |
| alt​Text | String | The alternate text for the image. | Small, 54.0 | 54.0 |
| fit | Connect​Wave​Image​Fit​Type​Enum | The fit type for the image. Valid values are:FitHeightFitWidthOriginalStretchTile | Small, 54.0 | 54.0 |
| source | Object | The source URL for the image. | Small, 54.0 | 54.0 |

## Cell​Properties​Number​Parameters​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether compact form is on (true) or not (false). | Small, 54.0 | 54.0 |
| measure​Field | String | The measure field this number is calculated from. | Small, 54.0 | 54.0 |
| no​Results​Label | String | The text to display when no results are found. | Small, 54.0 | 54.0 |
| number​Bold | Object | The font weight of the number. | Small, 62.0 | 62.0 |
| number​Color | String | The color of the number. | Small, 54.0 | 54.0 |
| number​Italic | Object | The font style of the number. | Small, 62.0 | 62.0 |
| number​Size | Object | The size of the number. | Small, 54.0 | 54.0 |
| text​Alignment | Connect​Wave​Horizontal​Alignment​Enum | The alignment for the text. Valid values are:CenterLeftRight | Small, 54.0 | 54.0 |
| title | String | The title of the widget. | Small, 54.0 | 54.0 |
| title​Bold | String | The font weight of the title. | Small, 62.0 | 62.0 |
| title​Color | String | The color of the title. | Small, 54.0 | 54.0 |
| title​Size | String | The size of the title. | Small, 54.0 | 54.0 |

## Cell​Properties​Text​Parameters​Representation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conditional​Formatting​Source | Text​Widget​Conditional​Formatting​Source​Representation | The conditional formatting source for the text. | Small, 57.0 | 57.0 |
| content | Dynamic​Data​Representation | The dynamic value of the text. | Small, 53.0 | 53.0 |
| interactions | Interaction​Representation[] | A list of interactions for the text. | Small, 64.0 | 64.0 |
| tooltip | Tooltip​Representation | The tooltip for the text. | Small, 57.0 | 57.0 |

## TableWidgetCellParametersRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alignment | Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment for the table cell. Valid values are:CenterLeftRight | Small, 62.0 | 62.0 |
| background​Color | String | The background color of the cell. | Small, 41.0 | 41.0 |
| background​Color | String | The background color of the cell. | Small, 41.0 | 41.0 |
| font​Color | String | The color for the cell text font. | Small, 41.0 | 41.0 |
| font​Size | Integer | The size for the cell text font. | Small, 41.0 | 41.0 |
| italic | Boolean | Indicates whether the cell font style is italic (true) or not (false). | Small, 62.0 | 62.0 |
| text​Wrap | Boolean | Indicates whether text wrapping is allowed (true) or not (false). | Small, 54.0 | 54.0 |
| underline | Boolean | Indicates whether the cell font style is underlined (true) or not (false). | Small, 62.0 | 62.0 |

## ColumnPropertiesRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Object | The valid column parameters based on its type. | Small, 42.0 | 42.0 |
| type | Connect​Wave​Column​Render​Type​Enum | The render types of a column. Valid values are:Bar (Column​Parameters​Bar​Representation)Image (Column​Parameters​Image​Representation)Text (Column​Parameters​Text​Representation) | Small, 41.0 | 41.0 |

## ColumnParametersBarRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| width | Integer | The width for the column. | Small, 54.0 | 54.0 |

## ColumnParametersImageRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alignment | Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment for the image. Valid values are:CenterLeftRight | Small, 54.0 | 54.0 |
| height | Integer | The image height for the image. | Small, 54.0 | 54.0 |
| width | Integer | The width for the column. | Small, 54.0 | 54.0 |

## ColumnParametersTextRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alignment | Connect​Wave​Horizontal​Alignment​Enum | The horizontal alignment for the column. Valid values are:CenterLeftRight | Small, 54.0 | 54.0 |
| styles | Text​Style​Representation | The text style for the column. | Small, 54.0 | 54.0 |
| width | Integer | The width for the column. | Small, 54.0 | 54.0 |

## TextStyleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| bold | Boolean | Indicates whether the text is bold (true) or not (false). | Small, 54.0 | 54.0 |
| link​Color | String | The text color when the text is a link. | Small, 54.0 | 54.0 |

## CustomBulkActionRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| label | String | The label for the custom action. | Small, 39.0 | 39.0 |
| visualforce | Asset​Reference​Representation | The VisualForce page to invoke for the custom action. | Small, 39.0 | 39.0 |

## TextRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| align | Connect​Wave​Horizontal​Alignment​Enum | The alignment of the text. Valid values are:CenterLeftRight | Small, 41.0 | 41.0 |
| color | String | The color of the text. | Small, 41.0 | 41.0 |
| fontSize | Integer | The font size of the text. | Small, 41.0 | 41.0 |
| label | String | The label for the text. | Small, 41.0 | 41.0 |

## ColumnRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| format | Connect​Wave​Column​Format​Enum | The column format value. Valid values are:Currency​CentsCurrency​DollarsNumberPercentage | Small, 36.0 | 36.0 |
| header | String | The header text of this column. | Small, 36.0 | 36.0 |
| hidden | Boolean | Indicates whether the column is hidden (true) or not (false). | Small, 36.0 | 36.0 |
| query | Query | The SAQL used to create the comparison table. | Small, 36.0 | 36.0 |
| showBars | Boolean | Indicates whether to show bars for the column (true) or not (false). | Small, 36.0 | 36.0 |
| sort | Connect​Wave​Column​Sort​Enum | The column sort order. Valid values are:NoneAscendingDescendingInner​AscendingInner​Descending | Small, 36.0 | 36.0 |

## DynamicDataRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| display​Template | String | The dynamic expression to resolve. | Small, 49.0 | 49.0 |
| rich​Text​Content | Map<String, Rich​Text​Content​Block​Representation[] | List of rich text content blocks. | Small, 52.0 | 52.0 |
| values | Map<String, Dynamic​Value​Representation> | Map to contain the data for the dynamic values. | Small, 49.0 | 49.0 |

## RichTextContentBlockRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<String, Object> | Map of text attribute names and values. | Small, 52.0 | 52.0 |
| insert | String | The text block content | Small, 52.0 | 52.0 |

## DynamicValueRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| compact | Boolean | Indicates whether the resolved value is compact (true) or not (false). | Small, 55.0 | 55.0 |
| field | String | The column used to resolve the value. | Small, 49.0 | 49.0 |
| no​Results​Label | String | The text to display when no results are found. | Small, 55.0 | 55.0 |
| sourcecType | Connect​Wave​Dynamic​Data​Source​Type | The interaction type for the value. Valid values are:ResultSelection | Small, 49.0 | 49.0 |
| step | String | The step id for the value. | Small, 49.0 | 49.0 |

## TooltipContentRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| body | Tooltip​Visualization​Representation | The visualization for the tooltip. | Small, 51.0 | 51.0-52.0 |
| description | Dynamic​Data​Representation | The text content for the tooltip. | Small, 51.0 | 51.0 |
| widget | Tooltip​Widget​Representation | The widget displayed in the tooltip. | Small, 53.0 | 53.0 |

## TooltipWidgetRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| height | Object | The height of the widget in the tooltip. | Small, 53.0 | 53.0 |
| name | String | The name of the widget in the tooltip. | Small, 53.0 | 53.0 |
| width | Object | The width of the widget in the tooltip. | Small, 53.0 | 53.0 |

## TooltipVisualizationRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| height | Object | The height for the tooltip. | Small, 51.0 | 51.0 |
| source | Typed​Asset​Reference​Representation | The source for the tooltip visualization. | Small, 51.0 | 51.0 |
| width | Object | The width for the tooltip. | Small, 51.0 | 51.0 |

## TooltipSourceRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the tooltip source. | Small, 51.0 | 51.0 |
| namespace | String | The namespace of the tooltip source. | Small, 51.0 | 51.0 |
| type | String | The type of the tooltip source. | Small, 51.0 | 51.0 |

## TooltipStyleRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​Color | String | The background color of the tooltip. | Small, 63.0 | 63.0 |
| label​Color | String | The label color of the tooltip. | Small, 63.0 | 63.0 |
| value​Color | String | The value color of the tooltip. | Small, 63.0 | 63.0 |

## HeaderPropertiesRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| tooltip | Table​Column​Header​Tooltip​Representation | The tooltip for the table column header. | Small, 54.0 | 64.0 |

## TableColumnHeaderTooltipRepresentation

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| sort | Tooltip​Mode​Enum | The tooltip mode. Valid values are:CustomDefaultNone | Small, 64.0 | 64.0 |
| text | String | The text for the tooltip. | Small, 54.0 | 64.0 |

## Related Topics

- Asset​Reference​Representation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_appendix.htm)
- Query (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Bar​Lens​Visualization​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Comparison​Table​Lens​Visualization​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Dot​Lens​Visualization​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Heat​Map​Lens​Visualization​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Matrix​Lens​Visualization​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Parallel​Coords​Lens​Visualization​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Pie​Lens​Visualization​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
- Pivot​Table​Lens​Visualization​Options (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_state.htm)
