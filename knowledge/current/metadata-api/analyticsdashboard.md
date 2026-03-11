---
title: "AnalyticsDashboard"
domain: metadata-api
topic: analyticsdashboard
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:50.481Z
keywords: [AnalyticsDashboard, Important, Parent, Type, File, Suffix, Directory, Location, Version, Limits, Fields, AnalyticsDashboardLayout, AnalyticsDashboardPage, AnalyticsDashPageWidget, AnalyticsDashboardWidget, AnalyticsAssetAction, AnalyticsButtonWidgetDef, AnalyticsContainerWidgetDef, AnlytDshbrdWdgtDynamicTkn, AnalyticsFilterWidgetDef]
---

# AnalyticsDashboard

# AnalyticsDashboard

Represents a Tableau Next dashboard.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AnalyticsDashboard components have the suffix .uadash and are stored in the analyticsDashboards folder.

## Version

AnalyticsDashboard components are available in API version 64.0 and later.

## Limits

| Definition | Limit |
| --- | --- |
| The maximum number of AnalyticsDashboard components in a single deploy operation. | 50 |
| The maximum number of AnalyticsDashboard components in a single retrieve operation. | 100 |
| The maximum number of AnalyticsDashboard components across all deploy operations in a 24-hour window. | 100 |
| The maximum number of AnalyticsDashboard components across all retrieve operations in a 24-hour window. | 200 |

## Fields

| Field Name | Description |
| --- | --- |
| analyticsWorkspace | Field TypestringDescriptionRequired.The Tableau Next workspace the dashboard belongs to. |
| description | Field TypestringDescriptionThe description of the dashboard. |
| lastDraftModifiedDate | Field TypedateTimeDescriptionThe date the dashboard draft was last modified. |
| lastPublishedDate | Field TypedateTimeDescriptionThe date the dashboard was last published. |
| layouts | Field TypeAnalyticsDashboardLayout[]DescriptionThe layouts for the dashboard. A dashboard has 0 or more layouts. |
| masterLabel | Field TypestringDescriptionRequired.The name of the dashboard. |
| style | Field TypestringDescriptionThe style of the dashboard. This is a JSON string.Example:{"widgetStyle":{"backgroundColor":"#ffffff","borderEdges":[],"borderColor":"#cccccc","borderWidth":1,"borderRadius":0}} |
| templateAssetSourceName | Field TypestringDescriptionIf the dashboard was created from a template, the name of the source dashboard in the template. |
| templateSource | Field TypestringDescriptionIf the dashboard was created from a template, the name of the source template. |
| version | Field TypedoubleDescriptionThe API version of the dashboard. |
| widgets | Field TypeAnalyticsDashboardWidget[]DescriptionA list of widgets in the dashboard. A dashboard has 0 or more widgets. |
| workspaceAssetRelationships | Field TypeAnalyticsWorkspaceAsset[]DescriptionA list of analytics assets in the workspace this dashboard is associated with. A dashboard has 0 or more workspace asset relationships. |

## AnalyticsDashboardLayout

Represents a layout for a Tableau Next dashboard. A dashboard can have multiple layouts, like Desktop and Mobile.

| Field Name | Description |
| --- | --- |
| analyticsDashboard | Field TypestringDescriptionRequired.The name of the dashboard the layout is associated with. |
| analyticsDashboardVersion | Field TypestringDescriptionThe version of the dashboard the layout is associated with. |
| columnCount | Field TypestringDescriptionThe number of columns in the layout. |
| label | Field TypestringDescriptionThe label for the layout. |
| layoutName | Field TypestringDescriptionThe name of the layout. |
| maxWidth | Field TypestringDescriptionThe max width of the layout, in pixels. |
| pages | Field TypeAnalyticsDashboardPage[]DescriptionThe pages to display for this dashboard layout. A layout has 0 or more pages. |
| rowHeight | Field TypestringDescriptionThe row height for layout rows. |
| style | Field TypestringDescriptionThe style for the layout. This is a JSON string.Example:{"backgroundColor":"#ffffff","gutterColor":"#f3f3f3","cellSpacingX":8,"cellSpacingY":8 |
| version | Field TypedoubleDescriptionThe API version of the dashboard layout. |

## AnalyticsDashboardPage

Represents a page in a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| index | Field TypeintDescriptionThe index of the page in the dashboard. An index of 0 is the first page of the dashboard. No index is required if there is only the default page of the dashboard. |
| label | Field TypestringDescriptionThe label for the dashboard page. |
| pageName | Field TypestringDescriptionThe generated unique ID for the dashboard page. |
| pageWidgets | Field TypeAnalyticsDashPageWidget[]DescriptionA list of dashboard page widgets. A page has 0 or more page widgets. |

## AnalyticsDashPageWidget

Represents an dashboard page widget for a Tableau Next dashboard page.

| Field Name | Description |
| --- | --- |
| analyticsDashboardWidget | Field TypestringDescriptionRequired.The name of dashboard widget, defined in the list of widgets for the dashboard. |
| colspan | Field TypestringDescriptionThe column span for the widget on the page. This is a numeric value. |
| column | Field TypestringDescriptionThe column the widget is placed in on the page. This is a numeric value. |
| row | Field TypestringDescriptionThe row the widget is placed in on the page. This is a numeric value. |
| rowspan | Field TypestringDescriptionThe row span for the widget on the page. This is a numeric value. |

## AnalyticsDashboardWidget

Represents a widget on a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| analyticsDashboard | Field TypestringDescriptionRequired.The API name of the dashboard the widget is associated with. |
| buttonWidgetDefs | Field TypeAnalyticsButtonWidgetDef[]DescriptionThe definition for a button widget type. A dashboard has 0 or more button widgets. Required for button widget. |
| containerWidgetDefs | Field TypeAnalyticsContainerWidgetDef[]DescriptionThe definition for a container widget type. A dashboard has 0 or more container widgets. Required for container widget. |
| dynamicTokens | Field TypeAnlytDshbrdWdgtDynamicTkn[]DescriptionThe definition for a dynamic widget token. A dashboard has 0 or more dynamic tokens. |
| filterWidgetDefs | Field TypeAnalyticsFilterWidgetDef[]DescriptionThe definition for a filter widget type. A dashboard has 0 or more filter widgets. Required for filter widget. |
| imageWidgetDefs | Field TypeAnalyticsImageWidgetDef[]DescriptionThe definition for a image widget type. A dashboard has 0 or more image widgets. Required for image widget. |
| label | Field TypestringDescriptionThe label for the widget. |
| metricWidgetDefs | Field TypeAnalyticsMetricWidgetDef[]DescriptionThe definition for a metric widget type. A dashboard has 0 or more metric widgets. Required for metric widget. |
| parameterWidgetDefs | Field TypeAnalyticsParamWidgetDef[]DescriptionThe definition for a parameter widget type. A dashboard has 0 or more paramet widgets. Required for parameter widget. |
| textWidgetDefs | Field TypeAnalyticsTextWidgetDef[]DescriptionThe definition for a text widget type. A dashboard has 0 or more text widgets. Required for text widget. |
| type | Field TypeAnalyticsWidgetType (enumeration of type string)DescriptionRequired.The widget type.Values are:buttoncomponentcontainerfilterimagemetricparametertextsummaryvisualization |
| vizWidgetDefs | Field TypeAnalyticsVizWidgetDef[]DescriptionThe definition for a visualization widget type. A dashboard has 0 or more visualization widgets. Required for visualization widget. |
| widgetActions | Field TypeAnalyticsAssetAction[]DescriptionThe actions for the widget. A widget has 0 or more text widgets. |
| widgetName | Field TypestringDescriptionThe API name of the widget. Use this for the analyticsDashboardWidget value in AnalyticsDashPageWidget. |

## AnalyticsAssetAction

Represents an action for a Tableau Next asset.

| Field Name | Description |
| --- | --- |
| actionType | Field TypeAnalyticsActionType (enumeration of type string)DescriptionRequired.The action type.Values are:flownavigaterecordaction |
| analyticsAssetVerson | Field TypestringDescriptionOptional.The version of the Analytics asset the action is associated with. |
| eventType | Field TypeAnalyticsActionEventType (enumeration of type string)DescriptionRequired.The action event type.Values are:clickselect |
| parameters | Field TypestringDescriptionThe parameter for the action. This is a JSON string.Example:{"destination":{"type":"url","target":"www.salesforce.com"}} |
| version | Field TypedoubleDescriptionThe API version of the action. |

## AnalyticsButtonWidgetDef

Represents a button widget definition for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| parameters | Field TypestringDescriptionThe parameters for the button widget. This is a JSON String.Example:{"text":"Button","alignmentX":"center","alignmentY":"center","fontSize":16} |

## AnalyticsContainerWidgetDef

Represents a container widget definition for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| parameters | Field TypestringDescriptionThe parameters for the container widget. This is a JSON String.Example:{"widgetStyle":{"backgroundColor":"#1295FF","borderEdges":[]}} |

## AnlytDshbrdWdgtDynamicTkn

Represents a widget dynamic token for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description for the dynamic token. |
| label | Field TypestringDescriptionThe label for the dynamic token. |
| source | Field TypestringDescriptionThe source object of the dynamic token. |
| tokenName | Field TypestringDescriptionThe name of the dynamic token. |
| tokenSpec | Field TypestringDescriptionThe specification for the dynamic token. |
| type | Field TypeAnalyticsDynamicTokenTypeDescriptionThe type of dynamic token. Valid values include query and insights. |

## AnalyticsFilterWidgetDef

Represents a filter widget definition for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| initialValues | Field TypestringDescriptionThe initial values for the filter. |
| parameters | Field TypestringDescriptionThe parameters for the filter widget. This is a JSON String.Example:{"receiveFilterSource":{"filterMode":"all","widgetIds":[]},"filterOption":{"objectName":"Account","fieldName":"Account_Id","dataType":"Text","selectionType":"multiple"},"isLabelHidden":false} |
| source | Field TypestringDescriptionThe data source to apply the filter to. |

## AnalyticsImageWidgetDef

Represents a image widget definition for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| parameters | Field TypestringDescriptionThe parameters for the image widget. This is a JSON String. |
| source | Field TypestringDescriptionThe data source the image is associated with. |

## AnalyticsMetricWidgetDef

Represents a metric widget definition for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| parameters | Field TypestringDescriptionThe parameters for the filter widget. This is a JSON String.Example:{"metricOption":{"layout":{"componentVisibility":{"details":true,"title":true,"value":true,"comparison":true,"chart":true,"insights":false}},"sdmApiName":"AccountModel","sdmId":"2SMxx0000004CFUGA2"},"receiveFilterSource":{"filterMode":"all","widgetIds":[]}} |
| semanticModel | Field TypestringDescriptionThe semantic model the metric is associated with. |
| source | Field TypestringDescriptionThe data source the metric is associated with. |
| sourceDeprecated | Field TypestringDescriptionPresent if the data source the metric is associated with is deprecated. |
| version | Field TypedoubleDescriptionThe API version of the metric. |

## AnalyticsParamWidgetDef

Represents a parameters widget definition for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| initialValues | Field TypestringDescriptionThe initial values for the parameters. |
| parameters | Field TypestringDescriptionThe parameters for the filter widget. This is a JSON String.Example:{"parameterName":"AccountParameter_prm","isLabelHidden":false} |
| source | Field TypestringDescriptionThe data source the parameters are associated with. |

## AnalyticsTextWidgetDef

Represents a text widget definition for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| parameters | Field TypestringDescriptionThe parameters for the filter widget. This is a JSON String.Example:{"content":[{"attributes":{"color":"#000000","size":"12px"},"insert":"full dashboard"},{"attributes":{"align":"left"},"insert":" "}]} |

## AnalyticsVizWidgetDef

Represents a visualization widget definition for a Tableau Next dashboard.

| Field Name | Description |
| --- | --- |
| analyticsVisualization | Field TypestringDescriptionThe API name of the visualization. |
| analyticsVizVersion | Field TypestringDescriptionThe version of the visualization. |
| parameters | Field TypestringDescriptionThe parameters for the filter widget. This is a JSON String.Example:{"legendPosition":"Right","receiveFilterSource":{"filterMode":"all","widgetIds":[]}} |

## Declarative Metadata Sample Definition

The following is an example of an AnalyticsDashboard component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").