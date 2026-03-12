---
title: "Providing Chart Data Using a JavaScript
Function"
domain: pages
topic: providing-chart-data-using-a-javascript-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.981Z
estimatedTokens: 586
keywords: [Providing, Chart, Data, JavaScript, Function, access, remoting, external, non-Salesforce, source, provide, <apex, chart>, component, defined]
---

# Providing Chart Data Using a JavaScript
Function

> To access data using JavaScript remoting, or an external (non-Salesforce)
data source, provide the <apex:chart> component with the name of a JavaScript function that provides the
data. That JavaScript function must be defined in or linked from your Visualforce page.

# Providing Chart Data Using a JavaScript Function

To access data using JavaScript remoting, or an external (non-Salesforce) data source, provide the <apex:chart\> component with the name of a JavaScript function that provides the data. That JavaScript function must be defined in or linked from your Visualforce page.

This function has the opportunity to manipulate the results before passing it to <apex:chart\>, or to perform other user interface or page updates.

The JavaScript function must take a callback function as a parameter, and invoke the callback with the function's data result object. The simplest working JavaScript function looks like this:

```

```

To support this chart, add the following controller method to the PieChartController class defined in [A Simple Charting Example](atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm "A Visualforce chart requires that you create a chart container component, which encloses at least one data series component. You can optionally add additional series components, chart axes, as well as labeling components such as a legend, chart labels, and tooltips for data points."):

```

```

#### See Also

-   [Chart Data Format](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_format.htm "Data provided to a Visualforce chart must meet some specific requirements. Every element in the data collection must contain all fields referenced in the <apex:chart> component hierarchy that is bound to that data source. If all fields aren’t provided, a client-side JavaScript error is thrown, which you can view in a JavaScript console such as Firebug.")

-   [JavaScript Remoting for Apex Controllers](atlas.en-us.pages.meta/pages/pages_js_remoting.htm "Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components.")

-   [Refreshing Chart Data Using JavaScript Remoting](atlas.en-us.pages.meta/pages/pages_charting_refreshing_data_javascript_remoting.htm "Update a Visualforce chart periodically, or in response to a user’s actions, using custom JavaScript. JavaScript code can respond to complex user activity or timer events, and use JavaScript remoting to retrieve new chart data whenever required.")

## Code Examples

```
<apex:page>
    <script>
    function getRemoteData(callback) {
       PieChartController.getRemotePieData(function(result, event) {
           if(event.status && result && result.constructor === Array) {
               callback(result);
           }
       });
    }
    </script>

    <apex:chart data="getRemoteData" ...></apex:chart>
</apex:page>
```

```apex
@RemoteAction
public static List<PieWedgeData> getRemotePieData() {
    List<PieWedgeData> data = new List<PieWedgeData>();
    data.add(new PieWedgeData('Jan', 30));
    data.add(new PieWedgeData('Feb', 15));
    data.add(new PieWedgeData('Mar', 10));
    data.add(new PieWedgeData('Apr', 20));
    data.add(new PieWedgeData('May', 20));
    data.add(new PieWedgeData('Jun',  5));
    return data;
}
```

## Related Topics

- A Simple Charting Example (atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm)
- Chart Data Format (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_format.htm)
- JavaScript Remoting for Apex Controllers (atlas.en-us.pages.meta/pages/pages_js_remoting.htm)
- Refreshing Chart Data Using JavaScript Remoting (atlas.en-us.pages.meta/pages/pages_charting_refreshing_data_javascript_remoting.htm)
