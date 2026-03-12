---
title: "Providing Chart Data via a Controller Method"
domain: pages
topic: providing-chart-data-via-a-controller-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.972Z
estimatedTokens: 751
keywords: [Providing, Chart, Data, via, Controller, straightforward, way, provide, Visualforce, expression, references, Simply, <apex, chart>, attribute]
---

# Providing Chart Data via a Controller Method

> The most straightforward way to provide data to a chart is using a Visualforce expression that
        references a controller method. Simply reference the controller in the <apex:chart>
        data attribute.

# Providing Chart Data via a Controller Method

The most straightforward way to provide data to a chart is using a Visualforce expression that references a controller method. Simply reference the controller in the <apex:chart\> data attribute.

On the server side, write a controller method that returns a List of objects, which can be your own Apex wrapper objects as in [A Simple Charting Example](atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm "A Visualforce chart requires that you create a chart container component, which encloses at least one data series component. You can optionally add additional series components, chart axes, as well as labeling components such as a legend, chart labels, and tooltips for data points."), sObjects, or AggregateResult objects. The method is evaluated server-side, and the results serialized to JSON. On the client, these results are used directly by <apex:chart\>, with no further opportunity for processing.

To illustrate this technique with sObjects, here is a simple controller that returns a list of Opportunities, and a bar chart for their amounts:

```

```

```

```

![A horizontal bar chart from a List of sObjects](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_sobjects.png&folder=pages)

There are two important things to notice about this example:

-   The Visualforce chart components access the data attributes from a List of Opportunity sObjects the same way as from the simple Data object used in [A Simple Charting Example](atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm "A Visualforce chart requires that you create a chart container component, which encloses at least one data series component. You can optionally add additional series components, chart axes, as well as labeling components such as a legend, chart labels, and tooltips for data points.").
-   The object field names used as data attributes are case-sensitive in JavaScript while field names in Apex and Visualforce are case-**in**sensitive. Be careful to use the precise field name in the fields, xField, and yField attributes of axes and data series components, or your chart will silently fail.

#### See Also

-   [Chart Data Format](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_format.htm "Data provided to a Visualforce chart must meet some specific requirements. Every element in the data collection must contain all fields referenced in the <apex:chart> component hierarchy that is bound to that data source. If all fields aren’t provided, a client-side JavaScript error is thrown, which you can view in a JavaScript console such as Firebug.")

-   [Refreshing Chart Data Using <apex:actionSupport>](atlas.en-us.pages.meta/pages/pages_charting_refreshing_data_actionsupport.htm "Update a Visualforce chart in response to a user’s actions by adding the <apex:actionSupport> component to Visualforce user interface elements that affect the chart’s data.")

## Code Examples

```apex
public class OppsController {
    
    // Get a set of Opportunities
    public ApexPages.StandardSetController setCon {
        get {
            if(setCon == null) {
                setCon = new ApexPages.StandardSetController(Database.getQueryLocator(
                      [SELECT name, type, amount, closedate FROM Opportunity]));
                setCon.setPageSize(5);
            }
            return setCon;
        }
        set;
    }
    
    public List<Opportunity> getOpportunities() {
         return (List<Opportunity>) setCon.getRecords();
    }
}
```

```
<apex:page controller="OppsController">
    <apex:chart data="{!Opportunities}" width="600" height="400">
        <apex:axis type="Category" position="left" fields="Name" title="Opportunities"/>
        <apex:axis type="Numeric" position="bottom" fields="Amount" title="Amount"/>
        <apex:barSeries orientation="horizontal" axis="bottom" 
            xField="Name" yField="Amount"/>
    </apex:chart>
    <apex:dataTable value="{!Opportunities}" var="opp">
        <apex:column headerValue="Opportunity" value="{!opp.name}"/>
        <apex:column headerValue="Amount" value="{!opp.amount}"/>
    </apex:dataTable>
</apex:page>
```

## Related Topics

- A Simple Charting Example (atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm)
- Chart Data Format (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_format.htm)
- Refreshing Chart Data Using <apex:actionSupport> (atlas.en-us.pages.meta/pages/pages_charting_refreshing_data_actionsupport.htm)
