---
title: "AnalyticsDashboard"
domain: metadata-api
topic: analyticsdashboard
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.817Z
estimatedTokens: 3474
keywords: [AnalyticsDashboard, Represents, Tableau, Next, dashboard., Important, Parent, File, Suffix, Directory, Location, Version, Limits, Fields, AnalyticsDashboardLayout, AnalyticsDashboardPage, AnalyticsDashPageWidget, AnalyticsDashboardWidget, AnalyticsAssetAction, AnalyticsButtonWidgetDef]
---

# AnalyticsDashboard

> Represents a Tableau Next dashboard.

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

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AnalyticsDashboard xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <analyticsWorkspace>My_Workspace</analyticsWorkspace>
    <description>A dashboard</description>
    <layouts>
        <analyticsDashboard>My_Dashboard</analyticsDashboard>
        <columnCount>36</columnCount>
        <layoutName>default</layoutName>
        <maxWidth>1200</maxWidth>
        <label>layoutLabel</label>
        <pages>
            <index>0</index>
            <label>Page 1</label>
            <pageName>e412bc11-d43b-4fba-ab44-b31bb842b49a</pageName>
            <pageWidgets>
                <analyticsDashboardWidget>visualization_1</analyticsDashboardWidget>
                <colspan>11</colspan>
                <column>1</column>
                <row>2</row>
                <rowspan>10</rowspan>
            </pageWidgets>
            <pageWidgets>
                <analyticsDashboardWidget>button_1</analyticsDashboardWidget>
                <colspan>9</colspan>
                <column>13</column>
                <row>8</row>
                <rowspan>2</rowspan>
            </pageWidgets>
            <pageWidgets>
                <analyticsDashboardWidget>container_1</analyticsDashboardWidget>
                <colspan>11</colspan>
                <column>23</column>
                <row>2</row>
                <rowspan>10</rowspan>
            </pageWidgets>
            <pageWidgets>
                <analyticsDashboardWidget>text_2</analyticsDashboardWidget>
                <colspan>9</colspan>
                <column>13</column>
                <row>5</row>
                <rowspan>2</rowspan>
            </pageWidgets>
            <pageWidgets>
                <analyticsDashboardWidget>metric_1</analyticsDashboardWidget>
                <colspan>11</colspan>
                <column>1</column>
                <row>13</row>
                <rowspan>10</rowspan>
            </pageWidgets>
            <pageWidgets>
                <analyticsDashboardWidget>list_4</analyticsDashboardWidget>
                <colspan>9</colspan>
                <column>13</column>
                <row>13</row>
                <rowspan>2</rowspan>
            </pageWidgets>
            <pageWidgets>
                <analyticsDashboardWidget>list_1</analyticsDashboardWidget>
                <colspan>9</colspan>
                <column>13</column>
                <row>2</row>
                <rowspan>2</rowspan>
            </pageWidgets>
        </pages>
        <rowHeight>24</rowHeight>
        <style>{&quot;backgroundColor&quot;:&quot;#ffffff&quot;,&quot;gutterColor&quot;:&quot;#f3f3f3&quot;,&quot;cellSpacingX&quot;:8,&quot;cellSpacingY&quot;:8}</style>
    </layouts>
    <masterLabel>My Dashboard</masterLabel>
    <style>{&quot;widgetStyle&quot;:{&quot;backgroundColor&quot;:&quot;#ffffff&quot;,&quot;borderEdges&quot;:[],&quot;borderColor&quot;:&quot;#cccccc&quot;,&quot;borderWidth&quot;:1,&quot;borderRadius&quot;:0}}</style>
    <version>64.0</version>
    <widgets>
        <analyticsDashboard>My_Dashboard</analyticsDashboard>
        <type>visualization</type>
        <vizWidgetDefs>
            <analyticsVisualization>New_Visualization</analyticsVisualization>
            <parameters>{&quot;legendPosition&quot;:&quot;Right&quot;,&quot;receiveFilterSource&quot;:{&quot;filterMode&quot;:&quot;all&quot;,&quot;widgetIds&quot;:[]}}</parameters>
        </vizWidgetDefs>
        <widgetName>visualization_1</widgetName>
    </widgets>
    <widgets>
        <analyticsDashboard>My_Dashboard</analyticsDashboard>
        <buttonWidgetDefs>
            <parameters>{&quot;text&quot;:&quot;Button&quot;,&quot;alignmentX&quot;:&quot;center&quot;,&quot;alignmentY&quot;:&quot;center&quot;,&quot;fontSize&quot;:16}</parameters>
        </buttonWidgetDefs>
        <type>button</type>
        <widgetActions>
            <actionType>navigate</actionType>
            <eventType>click</eventType>
            <parameters>{&quot;destination&quot;:{&quot;type&quot;:&quot;url&quot;,&quot;target&quot;:&quot;www.salesforce.com&quot;}}</parameters>
            <version>63.0</version>
        </widgetActions>
        <widgetName>button_1</widgetName>
    </widgets>
    <widgets>
        <analyticsDashboard>My_Dashboard</analyticsDashboard>
        <containerWidgetDefs>
            <parameters>{&quot;widgetStyle&quot;:{&quot;backgroundColor&quot;:&quot;#1295FF&quot;,&quot;borderEdges&quot;:[]}}</parameters>
        </containerWidgetDefs>
        <type>container</type>
        <widgetName>container_1</widgetName>
    </widgets>
    <widgets>
        <analyticsDashboard>My_Dashboard</analyticsDashboard>
        <textWidgetDefs>
            <parameters>{&quot;content&quot;:[{&quot;attributes&quot;:{&quot;color&quot;:&quot;#000000&quot;,&quot;size&quot;:&quot;12px&quot;},&quot;insert&quot;:&quot;full dashboard&quot;},{&quot;attributes&quot;:{&quot;align&quot;:&quot;left&quot;},&quot;insert&quot;:&quot;
&quot;}]}</parameters>
        </textWidgetDefs>
        <type>text</type>
        <widgetName>text_2</widgetName>
    </widgets>
    <widgets>
        <analyticsDashboard>My_Dashboard</analyticsDashboard>
        <metricWidgetDefs>
            <parameters>{&quot;metricOption&quot;:{&quot;layout&quot;:{&quot;componentVisibility&quot;:{&quot;details&quot;:true,&quot;title&quot;:true,&quot;value&quot;:true,&quot;comparison&quot;:true,&quot;chart&quot;:true,&quot;insights&quot;:false}},&quot;sdmApiName&quot;:&quot;AccountModel&quot;,&quot;sdmId&quot;:&quot;2SMxx0000004CFUGA2&quot;},&quot;receiveFilterSource&quot;:{&quot;filterMode&quot;:&quot;all&quot;,&quot;widgetIds&quot;:[]}}</parameters>
            <source>AccountMetric_mtc</source>
        </metricWidgetDefs>
        <type>metric</type>
        <widgetName>metric_1</widgetName>
    </widgets>
    <widgets>
        <analyticsDashboard>My_Dashboard</analyticsDashboard>
        <filterWidgetDefs>
            <initialValues>null</initialValues>
            <parameters>{&quot;receiveFilterSource&quot;:{&quot;filterMode&quot;:&quot;all&quot;,&quot;widgetIds&quot;:[]},&quot;filterOption&quot;:{&quot;objectName&quot;:&quot;Account&quot;,&quot;fieldName&quot;:&quot;Account_Id&quot;,&quot;dataType&quot;:&quot;Text&quot;,&quot;selectionType&quot;:&quot;multiple&quot;},&quot;isLabelHidden&quot;:false}</parameters>
            <source>AccountModel</source>
        </filterWidgetDefs>
        <label>Account Id</label>
        <type>filter</type>
        <widgetName>list_4</widgetName>
    </widgets>
    <widgets>
        <analyticsDashboard>My_Dashboard</analyticsDashboard>
        <label>AccountParameter</label>
        <parameterWidgetDefs>
            <initialValues>null</initialValues>
            <parameters>{&quot;parameterName&quot;:&quot;AccountParameter_prm&quot;,&quot;isLabelHidden&quot;:false}</parameters>
            <source>AccountModel</source>
        </parameterWidgetDefs>
        <type>parameter</type>
        <widgetName>list_1</widgetName>
    </widgets>
    <templateSource></templateSource>
    <templateAssetSourceName></templateAssetSourceName>
    <workspaceAssetRelationships>
        <asset xsi:nil="true"/>
        <assetType>AnalyticsDashboard</assetType>
        <assetUsageType>Created</assetUsageType>
        <workspace>My_Workspace</workspace>
    </workspaceAssetRelationships>
</AnalyticsDashboard>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>My_Dashboard</members>
        <name>AnalyticsDashboard</name>
    </types>
    <version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- AnalyticsWorkspaceAsset[] (atlas.en-us.api_meta.meta/api_meta/meta_analyticsworkspace.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
