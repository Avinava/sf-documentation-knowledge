---
title: "Providing Chart Data"
domain: pages
topic: providing-chart-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.968Z
estimatedTokens: 716
keywords: [Providing, Chart, Data, Visualforce, binds, source, attribute, <apex, chart>, component]
---

# Providing Chart Data

> A Visualforce chart binds to the source of its data through the data attribute
on the <apex:chart> component.

# Providing Chart Data

A Visualforce chart binds to the source of its data through the data attribute on the <apex:chart\> component.

Data can be provided several different ways:

-   As [an expression that represents a controller method reference](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_controller_method.htm "The most straightforward way to provide data to a chart is using a Visualforce expression that references a controller method. Simply reference the controller in the <apex:chart> data attribute.")
-   As [a string representing a JavaScript function](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_function.htm "To access data using JavaScript remoting, or an external (non-Salesforce) data source, provide the <apex:chart> component with the name of a JavaScript function that provides the data. That JavaScript function must be defined in or linked from your Visualforce page.")
-   As [a string representing a JavaScript array](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_array.htm "You can use Visualforce charting with non-Salesforce data sources by building a JavaScript array, in your own JavaScript code in your page, and providing the name of that array to <apex:chart>.")

#### See Also

-   [Providing Chart Data via a Controller Method](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_controller_method.htm "The most straightforward way to provide data to a chart is using a Visualforce expression that references a controller method. Simply reference the controller in the <apex:chart> data attribute.")

-   [Providing Chart Data Using a JavaScript Function](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_function.htm "To access data using JavaScript remoting, or an external (non-Salesforce) data source, provide the <apex:chart> component with the name of a JavaScript function that provides the data. That JavaScript function must be defined in or linked from your Visualforce page.")

-   [Providing Chart Data via a JavaScript Array](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_array.htm "You can use Visualforce charting with non-Salesforce data sources by building a JavaScript array, in your own JavaScript code in your page, and providing the name of that array to <apex:chart>.")

-   [Chart Data Format](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_format.htm "Data provided to a Visualforce chart must meet some specific requirements. Every element in the data collection must contain all fields referenced in the <apex:chart> component hierarchy that is bound to that data source. If all fields aren’t provided, a client-side JavaScript error is thrown, which you can view in a JavaScript console such as Firebug.")

## Related Topics

- an expression that represents
a controller method reference (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_controller_method.htm)
- a string representing a
JavaScript function (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_function.htm)
- a string representing a
JavaScript array (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_array.htm)
- Providing Chart Data via a Controller Method (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_controller_method.htm)
- Providing Chart Data Using a JavaScript Function (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_function.htm)
- Providing Chart Data via a JavaScript Array (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_javascript_array.htm)
- Chart Data Format (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_format.htm)
