---
title: "A Simple Charting Example"
domain: pages
topic: a-simple-charting-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.985Z
estimatedTokens: 398
keywords: [Simple, Charting, Visualforce, chart, requires, container, component, encloses, least, data, series, optionally, add, additional, components]
---

# A Simple Charting Example

> A Visualforce chart requires that you create a chart container component, which
encloses at least one data series component. You can optionally add
additional series components, chart axes, as well as labeling components
such as a legend, chart labels, and tooltips for data points.

# A Simple Charting Example

A Visualforce chart requires that you create a chart container component, which encloses at least one data series component. You can optionally add additional series components, chart axes, as well as labeling components such as a legend, chart labels, and tooltips for data points.

Here is a simple pie chart and the markup that creates it:

![A simple pie chart](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_simple_pie_chart.png&folder=pages)

```

```

The <apex:chart\> component defines the chart container, and binds the component to the data source, the getPieData() controller method. The <apex:pieSeries\> describes the label and data fields to access in the returned data, to label and size each data point.

Here’s the associated controller:

```

```

This controller is deliberately simple; you normally issue one or more SOQL queries to collect your data.

These are the important points illustrated by the example:

-   The getPieData() method returns a List of simple objects, an inner class PieWedgeData used as a wrapper. Each element in the list is used to create a data point.
-   The PieWedgeData class is just a set of properties, and is essentially used as a name\=value store.
-   The chart series component <apex:pieSeries\> defines which properties from the PieWedgeData class to use to determine each point in the series. In this simple example there’s no mystery, but in charts with multiple series and axes this convention allows the efficient return of the entire data set in one List object.

## Code Examples

```
<apex:page controller="PieChartController" title="Pie Chart">
    <apex:chart height="350" width="450" data="{!pieData}">
        <apex:pieSeries dataField="data" labelField="name"/>
        <apex:legend position="right"/>
    </apex:chart>
</apex:page>
```

```apex
public class PieChartController {
    public List<PieWedgeData> getPieData() {
        List<PieWedgeData> data = new List<PieWedgeData>();
        data.add(new PieWedgeData('Jan', 30));
        data.add(new PieWedgeData('Feb', 15));
        data.add(new PieWedgeData('Mar', 10));
        data.add(new PieWedgeData('Apr', 20));
        data.add(new PieWedgeData('May', 20));
        data.add(new PieWedgeData('Jun', 5));
        return data;
    }

    // Wrapper class
    public class PieWedgeData {

        public String name { get; set; }
        public Integer data { get; set; }

        public PieWedgeData(String name, Integer data) {
            this.name = name;
            this.data = data;
        }
    }
}
```
