---
title: "parameters
        Properties"
domain: bi-dev-guide-json
topic: parameters-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.411Z
estimatedTokens: 7922
keywords: [key, control, appearance, widget, including, chart, unique]
---

# parameters
        Properties

> The parameters key contains a list of properties
        that control the appearance of the widget. Each widget type, including each chart type,
        contains a unique set of properties.

# parameters Properties

The parameters key contains a list of properties that control the appearance of the widget. Each widget type, including each chart type, contains a unique set of properties.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_json)

#### Note

You can dynamically set properties for number and chart widgets in CRM Analytics dashboards based on the selection or results of another step. For example, you can change the map type in a chart based on a selection in a toggle widget. For more information, see the [Analytics Bindings Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_bindings.meta/bi_dev_guide_bindings/bi_dbjson_bindings.htm).

Chart widgets have many properties that vary based on the chart type. For chart-specific properties for CRM Analytics dashboards, see [Visualizing Data with Charts](https://help.salesforce.com/apex/HTViewHelpDoc?id=bi_visualize.htm&language=en_US).

The widget properties set in the parameters property are:

| Property Name | Details |
| --- | --- |
| absoluteModeEnabled | TypeBooleanAvailable for This WidgetdateselectorExposed in the Dashboard Designer's User InterfaceYesDescriptionShow absolute dates in the date widget when users view the dashboard. true, by default.Default is true. |
| alignmentX | TypeStringAvailable for This WidgetimageExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates the horizontal alignment of the image in the widget.Valid values are: left (default), center, and right. |
| alignmentX | TypeStringAvailable for This WidgetimageExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates the horizontal alignment of the image in the widget.Valid values are: left (default), center, and right. |
|  |  |
| alignmentY | TypeStringAvailable for This WidgetimageExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates the vertical alignment of the image in the widget.Valid values are: top (default), center, and bottom. |
| calendarTypeSwitchingAllowed | TypeBooleanAvailable for This WidgetdateselectorExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether the dashboard viewer can switch between the fiscal and calendar year in the date widget.Default is false. |
| columns | TypeArrayAvailable for This WidgetcharttableExposed in the Dashboard Designer's User InterfaceYes (for aggregateflex and saql step types only)DescriptionList of API names of step fields to include in the widget. Use this property to include specific fields in the widget or to change the field order for the widget. This property appears when you reorder or hide a field while editing a widget that’s based an aggregateflex (for a compare table) or a saql step type. To specify the fields or change their order for widgets based on other step types, you have to manually add and set this property in the JSON.Example: A step returns data in the following fields: Id, Name, Amount, and Profit. To hide the Id and Profit fields from the chart widget (chart_2), set the “columns” property."chart_2": {   "parameters": {     "columns": [ "Name", "Amount" ],     "visualizationType": "hbar",     "step": "Amount_Prob_1",     ...   },   "type": "chart",   .... } |
| columnProperties | TypeObjectAvailable for This WidgettableExposed in the Dashboard Designer's User InterfaceYesDescriptionAn object representation of the column properties. This includes thetype enum with valid values of bar, image, and text.For each type, the parameters object specifies addtional attributes.parameters (bar)A bar column type. This type contains the following parameter:width (integer) - The column’s width.parameters (image)An image column type. This type contains the following parameters:alignment (enum) - The column’s width.height (integer) - The image’s height.width (integer) - The column’s width.parameters (text)A text column type. This type contains the following parameters:alignment (enum) - The column’s width.styles (object) - The image’s style, where bold is either true or false, and linkColor is the text color when the text is a link.width (integer) - The column’s width.ExamplesThis example shows the bar type:"columnProperties":      [          {              "type": "Bar",              "parameters":                  {                      "width": 100                 }          }      ] This example shows the imagetype."columnProperties":      [          {              "type": "Image",              "parameters":                  {                      "alignment": "Center\|Left\|Right",                     "height": 100,                     "width": 100                 }          }      ] This example shows the texttype."columnProperties":      [          {              "type": "Text",              "parameters":                  {                    "alignment": "Center\|Left\|Right",                    "styles": [                     {                       "bold": false,                       "linkColor": "#0000FF"                     }                   ]                   "width": 100                 }          }      ] |
| compact | TypeBooleanAvailable for These WidgetslistselectornumberpillboxExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether displayed numbers are abbreviated (true) or not (false).For example, if true, the number 48,081 appears as 48k. Although the number appears to be rounded, it is not. The value 48,081 is preserved in charts and when performing calculations. If false, then 48,081 appears as 48,081. For number widgets, shortened numbers are rounded to the nearest 10th.Default is false. |
| computeTotal | TypeBooleanAvailable for These Widgetschart (only when visualizationType is stackwaterfall and waterfall)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether to include the total measure column (true) or not (false).Default is true. |
| containedWidgets | TypeListAvailable for This WidgetcontainerExposed in the Dashboard Designer's User InterfaceYesDescriptionA list of all widgets inside the container widget.ExampleThis example shows 2 widgets (meafilter_1 and chart_1) included in the container widget (container_1)."container_1": {     "type": "container",     "position":{             "x": 0,             "y": 0     },     "parameters":{         "containedWidgets": [             "meafilter_1",             "chart_1"         ]     } } |
| customBulkActions | TypeBooleanAvailable for This WidgettableExposed in the Dashboard Designer's User InterfaceYesDescriptionSpecifies the following details about custom bulk action.labelDisplay label for the button in the table widget’s action menu. The dashboard viewer clicks the button to execute the action.visualforceThe name and namespace prefix of the Visualforce page that defines the bulk action. Namespace prefix is optional.Example"customBulkActions":      [          {              "label": "Generate Opportunities",              "visualforce":                  {                      "name": "VF_Create_Opportunities",                      "namespace": "Prefix"                  }              }      ] |
| defaultFiscalMode | TypeBooleanAvailable for This WidgetdateselectorExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether the date widget displays dates using the fiscal year, by default. If not, then it uses the calendar year.Default is false. |
| destination | TypeStringAvailable for This WidgetlinkExposed in the Dashboard Designer's User InterfaceYesDescriptionThe ID of the dashboard, lens, step, or page.Default is null. |
| destinationLink | TypeStringAvailable for This WidgetlinkExposed in the Dashboard Designer's User InterfaceYesDescriptionThe object to which you are linking. One of the following properties identifies the linked object.nameThe ID of the dashboard, lens, step, or page. Default is null.urlThe URL that the link points to.tooltipThe tooltip that displays when you hover over a link to a URL. |
| destinationType | TypeStringAvailable for This WidgetlinkExposed in the Dashboard Designer's User InterfaceYesDescriptionThe destination type of a link. Possible values are:dashboard — a dashboardexplore — a steplens — a lenspage — a pageurl — a websiteDefault is lens. |
| displayTemplate | TypeStringAvailable for This WidgetlistselectorpillboxExposed in the Dashboard Designer's User InterfaceYesDescriptionSpecifies the string of grouping and measure fields to display in the widget. Fields must be enclosed in square brackets. By default, all groupings are included.ExampleThis example displays the value for the Account.Type dimension, Account.BillingCountry dimension, and Amount measure."displayTemplate": "[Account.Type] - [Account.BillingCountry]  ([avg_Amount])" |
| documentId | TypeStringAvailable for This WidgetimageExposed in the Dashboard Designer's User InterfaceYesDescriptionThe 15-character document Id of the image file that you want to apply as the background. To ensure security, the image file must be uploaded to Salesforce as a document and the Externally Available Image option must be selected. If this option is not selected or the referenced document is not an image, the image doesn’t show up in the widget. Default is null.ExampleThis example image widget (image_1) displays an image with ID 015R0000000DClP."image_1": {     "type": "image",     "parameters": {         "documentId": "015R0000000DClP",         "fit": "stretch",         "alignmentX": "center",         "alignmentY": "center"     } } |
| dualAxis | TypeBooleanAvailable for These Widgetschart (only when visualizationType is combo)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether to include an axis for each of the two measures (true) or not (false).Default is true. |
| exploreLink | TypeBooleanAvailable for These WidgetschartcomparetablelistselectornumberpillboxvaluestableExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether the widget shows the explore icon that dashboard viewers can click to explore the widget as a lens (true) or not (false). This option only applies to widgets based on steps in compact form. You can’t explore widgets that are built on SAQL form steps.Default is true.Mobile devices display the icon, regardless of this setting. |
| filterItemOptions | TypeListAvailable for This WidgetfilterpanelExposed in the Dashboard Designer's User InterfaceYesDescriptionDetails about each global filter shown in the global filter panel widget. You can configure the following details, which are also available in the user interface.propertyColorColor of the field namevalueColorColor of the field valuebackgroundColorColor of the filter backgroundborderColorColor of the filter borderborderWidthWidth of the filter borderborderRadiusRadius of the filter border |
| fit (for chart widgets) | TypeBooleanAvailable for This Widgetchart (only when visualizationType is scatter)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether the axis of a chart is in the center of the data (true) or at (0, 0) (false).Default is false. |
| fit (for image widgets) | TypeStringAvailable for This WidgetimageExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates how to scale the image. Valid values are: original (default), stretch, tile, fitwidth, and fitheight. |
| fontSize | TypeIntegerAvailable for These WidgetslinknumbertextExposed in the Dashboard Designer's User InterfaceYesDescriptionThe font size of a number or of text.Defaults are:number: 36text: 26 |
| hideHeaderColumn | TypeBooleanAvailable for These WidgetschartvaluestableExposed in the Dashboard Designer's User InterfaceNo. Only editable via JSON.DescriptionIndicates whether the first column in a raw data table—which is simply a count of rows—is hidden (true) or not (false).Default is false.This setting doesn’t apply when viewing the widget on mobile devices. |
| image | TypeArrayAvailable for This WidgetcontainerimageExposed in the Dashboard Designer's User InterfaceYesDescriptionIdentifies the image using the following properties.nameName of the image.namespaceOptional. Namespace of the image. Default is null.Example"image": {     "name": "My_Corporate_Logo",     "namespace": "" } |
| includeState | TypeBooleanAvailable for This WidgetlinkExposed in the Dashboard Designer's User InterfaceYesDescriptionIf set to true:CRM Analytics passes selections in chart, list, toggle, range, and date widgets as selections in the linked asset if they apply. For example, you select North America in a list widget based on the Region dataset field. CRM Analytics applies that same selection to faceted queries in the linked dashboard that have a grouping based on the Region field in the same dataset.CRM Analytics passes global filters as filters to a linked asset as long as the filters apply. CRM Analytics ignores a global filter if the linked asset doesn’t use the dataset that the global filter is defined on. If the global filter is locked and the incoming filter is defined on the same field, CRM Analytics ignores the incoming filter. If it’s unlocked, the incoming filter overrides the global filter defined in the dashboard.Default is false. |
| instant | TypeBooleanAvailable for These WidgetsdateselectorlistselectorrangeselectorExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether other faceted widgets immediately update (true) or not (false) when a dashboard viewer makes a selection in this widget.When false, dashboard viewers must click Update for their changes to cascade to faceted widgets. When true, the Update button is hidden.Defaults are:dateselector: falselistselector: truerangeselector: falseFor list, range, or date widgets that are expanded in the dashboard designer, this widget property is always enabled. Selections in these widgets instantly update other widgets. While these widgets are expanded, you can’t change this setting. |
| itemsPerRow | TypeIntegerAvailable for This WidgetfilterpanelExposed in the Dashboard Designer's User InterfaceYesDescriptionNumber of global filters to show per row in the global filter panel. Default is 6. |
| legend | TypeBooleanAvailable for This Widgetchart (only when visualizationType is hbar, vbar, stackhbar, stackvbar, pie, scatter, time, time-bar, time-combo, hdot, vdot, matrix, calheatmap, heatmap, parallelcoords, stackwaterfall, funnel, or choropleth)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether to display a legend (true), or not (false).Default is false for all chart types, except pivottable.Mobile devices can only display legends for pie widgets. |
| legendHideHeader | TypeBooleanAvailable for This Widgetchart (only when visualizationType is hbar, vbar, stackhbar, stackvbar, pie, scatter, time, time-bar, time-combo, hdot, vdot, matrix, calheatmap, heatmap, stackwaterfall, combo, combo, or parallelcoords)Exposed in the Dashboard Designer's User InterfaceNo. Only editable via JSON.DescriptionIndicates whether the legend has a title (true) or not (false). The title is always the name of the dimension that the legend describes.Default is false for all chart types except pivottable.This setting doesn’t apply when viewing the widget on mobile devices. |
| legendWidth | TypeIntegerAvailable for This Widgetchart (only when visualizationType is hbar, vbar, stackhbar, stackvbar, pie, scatter, time, time-bar, time-combo, hdot, vdot, matrix, calheatmap, heatmap, stackwaterfall, combo, or parallelcoords)Exposed in the Dashboard Designer's User InterfaceNo. Only editable via JSON.DescriptionThe width of the legend area in pixels.Default is 145 for all chart types except pivottable.This setting doesn’t apply when viewing the widget on mobile devices. |
| measureField | TypeStringAvailable for These WidgetslistselectornumberpillboxExposed in the Dashboard Designer's User InterfaceYesDescriptionThe mathematical function performed on data.Specify the measureField in this format: <formula>_<field>.<formula> must match one of the formulas specified in the measures step property. Possible values for <formula> are:avg — calculate the mathematical average (mean)max — the maximum valuemin — the minimum valuesum — add all the valuesunique — count the number of unique values. For example, use to count the number of unique dimensions.The <field> paired with the <formula> must match the field name that is specified in measures.For example, if the measures step property is:"measures”: [   [     "sum",     "Profit"   ],   [     "avg",     "Discount"   ],   [     "count",     "ModelNumber"   ] ] Then measureField must be sum_Profit, avg_Discount, or unique_ModelNumber. The measureField can’t be avg_Profit because avg and Profit aren’t paired together in the measures step property.Unlike for measures, a count on a dimension in the user interface calculates the number of unique dimension values. As a result, measureField in the underlying JSON shows the unique formula, like unique_<dimension_field_name>.Default is null. |
| multiMetrics | TypeBooleanAvailable for This Widgetchart (only when visualizationType is hbar or vbar)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether two or more measures are displayed as adjacent bars under each grouping (true) or as individual, adjacent graphs (false).Default is false (available only for bar charts and column charts). |
| negativeColor | TypeStringAvailable for These Widgetschart (only when visualizationType is waterfall)Exposed in the Dashboard Designer's User InterfaceYesDescriptionThe color of the measure columns that have decreased in value in the chart.Specify the color in this format: rgb(a, b, c, d).Using a number between zero and 255, a indicates how much red is in the color, b how much green, and c how much blue. A value of 0 indicates the absence of a color, and a value of 255 indicates the full expression of a color.Using a number between zero and one, d indicates the level of transparency. A value of 0 is invisible and 1 is opaque.For example, rgb(0, 0, 0, 0.93) sets the color to a nearly opaque black. rgb(255, 0, 0, 0.14) sets the color to a nearly invisible red.Alternatively, the color can be set using hexadecimal notation. When using hexadecimal notation, transparency can’t be set. All hexadecimal colors default to opaque. #000000 indicates black in hexadecimal. #ff0000 indicates red. |
| normalize | TypeBooleanAvailable for This Widgetchart (only when visualizationType is stackhbar or stackvbar)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether charts are displayed using a logarithmic scale (true) or a linear scale (false).Default is false (available only for stackhbar and stackvbar). |
| numberColor | TypeStringAvailable for This WidgetnumberExposed in the Dashboard Designer's User InterfaceYesDescriptionThe font color of the number.Specify the color in this format: rgb(a, b, c, d).Using a number between zero and 255, a indicates how much red is in the color, b how much green, and c how much blue. A value of 0 indicates the absence of a color, and a value of 255 indicates the full expression of a color.Using a number between zero and one, d indicates the level of transparency. A value of 0 is invisible and 1 is opaque.For example, rgb(0, 0, 0, 0.93) sets the color to a nearly opaque black. rgb(255, 0, 0, 0.14) sets the color to a nearly invisible red.Alternatively, the color can be set using hexadecimal notation. When using hexadecimal notation, transparency can’t be set. All hexadecimal colors default to opaque. #000000 indicates black in hexadecimal. #ff0000 indicates red.Default is #000. |
| numberSize | TypeIntegerAvailable for This WidgetnumberExposed in the Dashboard Designer's User InterfaceYesDescriptionThe font size of the number. Default is 26. |
| pivoted | TypeBooleanAvailable for This WidgettableExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether the table is pivoted. A pivot table requires the underlying step to have at least one grouping. CRM Analytics pivots the table on the last defined grouping. Default is false. |
| positiveColor | TypeStringAvailable for These Widgetschart (only when visualizationType is waterfall)Exposed in the Dashboard Designer's User InterfaceYesDescriptionThe color of the measure columns that have increased in value or remained the same in the chart.Specify the color in this format: rgb(a, b, c, d).Using a number between zero and 255, a indicates how much red is in the color, b how much green, and c how much blue. A value of 0 indicates the absence of a color, and a value of 255 indicates the full expression of a color.Using a number between zero and one, d indicates the level of transparency. A value of 0 is invisible and 1 is opaque.For example, rgb(0, 0, 0, 0.93) sets the color to a nearly opaque black. rgb(255, 0, 0, 0.14) sets the color to a nearly invisible red.Alternatively, the color can be set using hexadecimal notation. When using hexadecimal notation, transparency can’t be set. All hexadecimal colors default to opaque. #000000 indicates black in hexadecimal. #ff0000 indicates red. |
| presetsEnabled | TypeBooleanAvailable for This WidgetdateselectorExposed in the Dashboard Designer's User InterfaceYesDescriptionShow preset dates in the date widget when users view the dashboard. true, by default.Default is true. |
| relativeModeEnabled | TypeBooleanAvailable for This WidgetdateselectorExposed in the Dashboard Designer's User InterfaceYesDescriptionShow relative dates in the date widget when users view the dashboard. true, by default.Default is true. |
| showValues | TypeBooleanAvailable for This Widgetchart (only when visualizationType is stackwaterfall or waterfall)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether to display the values of each measure column (true) or not (false).Default is true. |
| splitAxis | TypeBooleanAvailable for This WidgetchartExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether each dimension in a chart is measured on its own axis (true) or a shared axis (false).Only applicable when multiMetrics is true.Default is false (available only for bar charts and column charts).This setting doesn’t apply when viewing the widget on mobile devices. |
| sqrt | TypeBooleanAvailable for This Widgetchart (only when visualizationType is parallelcoords, hdot, vdot, time, time-bar, time-combo, scatter, stackhbar, stackvbar, hbar, stackwaterfall, or vbar)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether charts are displayed using a logarithmic scale (true) or a linear scale (false).Default is false (available only for bar charts, column charts, line charts, and time series).This setting doesn’t apply when viewing the widget on mobile devices. |
| startColor | TypeStringAvailable for These Widgetschart (only when visualizationType is waterfall)Exposed in the Dashboard Designer's User InterfaceYesDescriptionThe color of the first measure column in the chart.Specify the color in this format: rgb(a, b, c, d).Using a number between zero and 255, a indicates how much red is in the color, b how much green, and c how much blue. A value of 0 indicates the absence of a color, and a value of 255 indicates the full expression of a color.Using a number between zero and one, d indicates the level of transparency. A value of 0 is invisible and 1 is opaque.For example, rgb(0, 0, 0, 0.93) sets the color to a nearly opaque black. rgb(255, 0, 0, 0.14) sets the color to a nearly invisible red.Alternatively, the color can be set using hexadecimal notation. When using hexadecimal notation, transparency can’t be set. All hexadecimal colors default to opaque. #000000 indicates black in hexadecimal. #ff0000 indicates red. |
| step | TypeStringAvailable for These WidgetschartcomparetabledateselectorglobalfilterslistselectornumberpillboxrangeselectorvaluestableExposed in the Dashboard Designer's User InterfaceYesDescriptionThe name of the step that supplies data for the widget.Default is null. |
| stretch | TypeBooleanAvailable for This WidgetboxExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether an image’s width and height are set to the same values of the widget’s width and height (true) or not (false).Default is false. |
| stretchImage | TypeBooleanAvailable for This WidgetcontainerExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether an image’s width and height are set to the same values of the widget’s width and height (true) or not (false).Default is false. |
| text | TypeStringAvailable for This WidgetlinktextExposed in the Dashboard Designer's User InterfaceYesDescriptionThe message rendered in a text widget. For example, if text is assigned the value “Hello, World!”, then “Hello, World!” appears in the text widget.Default is null. |
| textAlignment | TypeStringAvailable for This WidgetlinknumbertextExposed in the Dashboard Designer's User InterfaceYesDescriptionThe alignment of text. Possible values include left, center, and right. If no value is specified, text alignment defaults to center.Defaults are:number: righttext: center |
| textColor | TypeStringAvailable for These WidgetslinktextExposed in the Dashboard Designer's User InterfaceYesDescriptionThe font color of text.Specify the color in this format: rgb(a, b, c, d).Using a number between zero and 255, a indicates how much red is in the color, b how much green, and c how much blue. A value of 0 indicates the absence of a color, and a value of 255 indicates the full expression of a color.Using a number between zero and one, d indicates the level of transparency. A value of 0 is invisible and 1 is opaque.For example, rgb(0, 0, 0, 0.93) sets the color to a nearly opaque black. rgb(255, 0, 0, 0.14) sets the color to a nearly invisible red.Alternatively, the color can be set using hexadecimal notation. When using hexadecimal notation, transparency can’t be set. All hexadecimal colors default to opaque. #000000 indicates black in hexadecimal. #ff0000 indicates red.Default is #000. |
| title (For widgets except global filter panel) | TypeStringAvailable for These WidgetsdateselectorlistselectornumberpillboxrangeselectorExposed in the Dashboard Designer's User InterfaceYesDescriptionThe title of a widget.Default is null. |
| title (for global filter panel widgets only) | TypeListAvailable for This WidgetfilterpanelExposed in the Dashboard Designer's User InterfaceYesDescriptionDetails about the title of the global filter panel widget. You can configure the following details, which are also available in the user interface.visibleIndicates whether the title is visible when viewing the dashboardtextDetails about the title: title (label), color of title (color), font size of title (fontSize), and horizontal alignment (align)separatorColorColor of the line that separates the widget title from the global filters |
| titleColor | TypeStringAvailable for This WidgetnumberExposed in the Dashboard Designer's User InterfaceYesDescriptionThe font color of the title.Specify the color in this format: rgb(a, b, c, d).Using a number between zero and 255, a indicates how much red is in the color, b how much green, and c how much blue. A value of 0 indicates the absence of a color, and a value of 255 indicates the full expression of a color.Using a number between zero and one, d indicates the level of transparency. A value of 0 is invisible and 1 is opaque.For example, rgb(0, 0, 0, 0.93) sets the color to a nearly opaque black. rgb(255, 0, 0, 0.14) sets the color to a nearly invisible red.Alternatively, the color can be set using hexadecimal notation. When using hexadecimal notation, transparency can’t be set. All hexadecimal colors default to opaque. #000000 indicates black in hexadecimal. #ff0000 indicates red.Default is #000. |
| titleSize | TypeIntegerAvailable for This WidgetnumberExposed in the Dashboard Designer's User InterfaceYesDescriptionThe font size of the title. Default is 26. |
| tooltip | TypeStringAvailable for These WidgetsimagetextExposed in the Dashboard Designer's User InterfaceYesDescriptionText that appears when you hover over the widget while viewing the dashboard. Use a tooltip to add context to the text or image. |
| totalColor | TypeStringAvailable for These Widgetschart (only when visualizationType is waterfall)Exposed in the Dashboard Designer's User InterfaceYesDescriptionThe color of the total measure column in the chart.Specify the color in this format: rgb(a, b, c, d).Using a number between zero and 255, a indicates how much red is in the color, b how much green, and c how much blue. A value of 0 indicates the absence of a color, and a value of 255 indicates the full expression of a color.Using a number between zero and one, d indicates the level of transparency. A value of 0 is invisible and 1 is opaque.For example, rgb(0, 0, 0, 0.93) sets the color to a nearly opaque black. rgb(255, 0, 0, 0.14) sets the color to a nearly invisible red.Alternatively, the color can be set using hexadecimal notation. When using hexadecimal notation, transparency can’t be set. All hexadecimal colors default to opaque. #000000 indicates black in hexadecimal. #ff0000 indicates red. |
| totals | TypeBooleanAvailable for These Widgetschart (only when visualizationType is pivottable)Exposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether to include a row that displays the sum of all the values in each measure column (true) or not (false).Default for chart is false (available only for pivottable).This setting doesn’t apply when viewing the widget on mobile devices. |
| trellis | TypeBooleanAvailable for This WidgetchartExposed in the Dashboard Designer's User InterfaceYesDescriptionIndicates whether the last grouping displays on its own axis (true) if a step has multiple groupings and one measure. If false, it displays all groupings on the same axis.Default for chart is false (available only for bar charts and column charts).This setting doesn’t apply when viewing the widget on mobile devices. |
| videoSize | TypeStringAvailable for This WidgeturlExposed in the Dashboard Designer's User InterfaceYesDescriptionThe dimensions of a YouTube video. Possible values are:(4/3) 240 x 180(4/3) 420 x 315(4/3) 480 x 360(4/3) 640 x 480(4/3) 960 x 720(16/9) 320 x 180(16/9) 560 x 315(16/9) 640 x 360(16/9) 853 x 480(16/9) 1280 x 720Default is (4/3) 240 x 180.Mobile devices don’t display url widgets. |
| visualizationType | TypeStringAvailable for These WidgetschartExposed in the Dashboard Designer's User InterfaceYesDescriptionThe type of chart used to show data. Possible values are:calheatmap— calendar heat mapchoropleth — choropleth (map)combo — lines and bars to show multiple metricsflatgauge — flat gaugefunnel — funnelhbar — horizontal barhdot — horizontal dot plotheatmap— heat mapmatrix— matrixparallelcoords — parallel coordinatespie — donutpivottable — pivot tablepolargauge — polar gaugepyramid — pyramidrating — ratingscatter — scatter plotstackhbar — stacked horizontal barstackpyramid — stacked pyramidstackvbar — stacked vertical barstackwaterfall — stacked waterfalltime — timelinetime-bar — time bartime-combo — time barvbar — vertical barvdot — vertical dot plotwaterfall — waterfall |
| url | TypeConnectUriAvailable for This WidgeturlExposed in the Dashboard Designer's User InterfaceYesDescriptionThe URL of a YouTube video.Default is null.Mobile devices don’t display url widgets. |

## Code Examples

```
"chart_2": {
  "parameters": {
    "columns": [ "Name", "Amount" ],
    "visualizationType": "hbar",
    "step": "Amount_Prob_1",
    ...
  },
  "type": "chart",
  ....
}
```

```
"columnProperties": 
    [ 
        { 
            "type": "Bar", 
            "parameters": 
                { 
                    "width": 100
                } 
        } 
    ]
```

```
"columnProperties": 
    [ 
        { 
            "type": "Image", 
            "parameters": 
                { 
                    "alignment": "Center|Left|Right",
                    "height": 100,
                    "width": 100
                } 
        } 
    ]
```

```
"columnProperties": 
    [ 
        { 
            "type": "Text", 
            "parameters": 
                { 
                  "alignment": "Center|Left|Right", 
                  "styles": [
                    {
                      "bold": false,
                      "linkColor": "#0000FF"
                    }
                  ]
                  "width": 100
                } 
        } 
    ]
```

```
"container_1": {
    "type": "container",
    "position":{
            "x": 0,
            "y": 0
    },
    "parameters":{
        "containedWidgets": [
            "meafilter_1",
            "chart_1"
        ]
    }
}
```
