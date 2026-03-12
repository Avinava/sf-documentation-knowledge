---
title: "Building a Complex Chart with"
domain: pages
topic: building-a-complex-chart-with
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.960Z
estimatedTokens: 1322
keywords: [Building, Complex, Chart, Visualforce, charting, assemble, variety, components, multiple, data, end, result, quite, sophisticated, attention]
---

# Building a Complex Chart with

> Use Visualforce charting to assemble a variety of chart components into a complex
chart that represents multiple sets of related data. The end result
can be quite sophisticated and attention getting.

# Building a Complex Chart with

Use Visualforce charting to assemble a variety of chart components into a complex chart that represents multiple sets of related data. The end result can be quite sophisticated and attention getting.

## The Chart Controller

The examples later in this topic use the following controller, which is a modest expansion of the controller in [A Simple Charting Example](atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm "A Visualforce chart requires that you create a chart container component, which encloses at least one data series component. You can optionally add additional series components, chart axes, as well as labeling components such as a legend, chart labels, and tooltips for data points."). It includes more data, and methods that can be called by [remote JavaScript invocation](atlas.en-us.pages.meta/pages/pages_js_remoting.htm#pages_js_remoting "Use JavaScript remoting in Visualforce to call methods in Apex controllers from JavaScript. Create pages with complex, dynamic behavior that isn’t possible with the standard Visualforce AJAX components."):

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The @RemoteAction method isn’t used in the chart examples in this topic, but it illustrates how you can re-use your data generation method for both server-side and JavaScript remoting methods.

## Creating a Simple Line Chart

Here is a simple line chart that graphs one of the three data series in the data set, “Opportunities Closed-Won,” over a calendar year:

![A simple line chart with one data series](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_complex_ex1.png&folder=pages)

```

```

Things to note about this example:

-   Line and bar charts require you to define the X and Y axes for the chart.
-   The vertical axis is defined on the left side of the chart, and measures the dollar amount of the Opportunities closed in that month.
-   The horizontal axis is defined on the bottom of the chart, and represents the months of the calendar year.
-   The actual line chart, the <apex:lineSeries\> component, is bound to a specific axis.
-   There are a number of marker attributes that you can use to differentiate each line in the chart.

## Adding a Second Data Series

Adding a second data series with the same unit of measure is simple. Here, the “Opportunities Closed-Lost” data set is added as a second line series:

![A line chart with two data series](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_complex_ex2.png&folder=pages)

```

```

The important thing to note is how both data1 and data2 fields are bound to the vertical <apex:axis\> by the fields attribute of that component. This allows the charting engine to determine appropriate scale and tick marks for the axis.

## Adding a Bar Chart Series with a Second Axis

To add another data series, but charted against a different set of units, you need to add a second vertical axis. The following example shows a data series, “Revenue by Month,” added as a bar chart:

![A combo line and bar chart with three data series](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_complex_ex3.png&folder=pages)

```

```

Notice the following:

-   To add a data series with a new unit of measure, you need to add a second vertical axis on the right side of the chart.
-   You can have up to four different axes, one for each edge of the chart.
-   The bar chart is set to a vertical orientation and bound to the right axis. Bind a horizontal bar chart to the top or bottom axis.

## Adding a Legend, Labels, and Chart Tips

You can improve the comprehensibility of the chart by adding a chart legend, series labels, and by making sure that chart labels are readable:

![A combo line/bar chart with legend, custom labels, and chart tips](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_charting_complex_ex4.png&folder=pages)

```

```

Note the following about the additions:

-   The order of the data series components determines the layering of the chart elements when drawn. In [the prior example](#pages_charting_complex_ex3), the bar chart was in the foreground. In this example, the bar chart has been placed in the background because the <apex:barSeries\> component is before the two <apex:lineSeries\> components.
-   The <apex:legend\> component can be in any of four positions: left, right, top, or bottom. The legend is placed within the boundary of the chart; in this example the legend has compressed the horizontal width of the chart itself.
-   Add legend titles using the data series component title attribute.
-   To rotate the labels for the bottom chart axis, the <apex:chartLabel\> component is enclosed in the <apex:axis\> component it affects.
-   The <apex:chartTips\> component enables rollover tool tips that provide additional information about each data point in the series that encloses it.

#### See Also

-   [How Works Works](atlas.en-us.pages.meta/pages/pages_charting_overview.htm "A Visualforce chart is defined using a series of charting components, which are then linked to a data source to be graphed on the chart.")

## Code Examples

```apex
public class ChartController {
    // Return a list of data points for a chart
    public List<Data> getData() {
        return ChartController.getChartData();
    }
    
    // Make the chart data available via JavaScript remoting
    @RemoteAction
    public static List<Data> getRemoteData() {
        return ChartController.getChartData();
    }

    // The actual chart data; needs to be static to be
    // called by a @RemoteAction method
    public static List<Data> getChartData() {
        List<Data> data = new List<Data>();
        data.add(new Data('Jan', 30, 90, 55));
        data.add(new Data('Feb', 44, 15, 65));
        data.add(new Data('Mar', 25, 32, 75));
        data.add(new Data('Apr', 74, 28, 85));
        data.add(new Data('May', 65, 51, 95));
        data.add(new Data('Jun', 33, 45, 99));
        data.add(new Data('Jul', 92, 82, 30));
        data.add(new Data('Aug', 87, 73, 45));
        data.add(new Data('Sep', 34, 65, 55));
        data.add(new Data('Oct', 78, 66, 56));
        data.add(new Data('Nov', 80, 67, 53));
        data.add(new Data('Dec', 17, 70, 70));
        return data;
    }
    
    // Wrapper class
    public class Data {
        public String name { get; set; }
        public Integer data1 { get; set; }
        public Integer data2 { get; set; }
        public Integer data3 { get; set; }
        public Data(String name, Integer data1, Integer data2, Integer data3) {
            this.name = name;
            this.data1 = data1;
            this.data2 = data2;
            this.data3 = data3;
        }
    }
}
```

```
<apex:page controller="ChartController">
    <apex:chart height="400" width="700" data="{!data}">
    	  <apex:axis type="Numeric" position="left" fields="data1" 
            title="Opportunities Closed" grid="true"/>
    	  <apex:axis type="Category" position="bottom" fields="name" 
            title="Month of the Year">
    	</apex:axis>
    	<apex:lineSeries axis="left" fill="true" xField="name" yField="data1"
          markerType="cross" markerSize="4" markerFill="#FF0000"/>
   </apex:chart>
</apex:page>
```

```
<apex:page controller="ChartController">
    <apex:chart height="400" width="700" data="{!data}">
    	  <apex:axis type="Numeric" position="left" fields="data1,data2" 
            title="Opportunities Closed" grid="true"/>
    	  <apex:axis type="Category" position="bottom" fields="name" 
            title="Month of the Year">
    	  </apex:axis>
    	  <apex:lineSeries axis="left" fill="true" xField="name" yField="data1"
        	  markerType="cross" markerSize="4" markerFill="#FF0000"/>
    	  <apex:lineSeries axis="left" xField="name" yField="data2" 
            markerType="circle" markerSize="4" markerFill="#8E35EF"/>
    </apex:chart>
</apex:page>
```

```
<apex:page controller="ChartController">
    <apex:chart height="400" width="700" data="{!data}">
    	  <apex:axis type="Numeric" position="left" fields="data1,data2" 
            title="Opportunities Closed" grid="true"/>
        <apex:axis type="Numeric" position="right" fields="data3" 
            title="Revenue (millions)"/>
    	  <apex:axis type="Category" position="bottom" fields="name" 
            title="Month of the Year"/>
    	  <apex:lineSeries axis="left" fill="true" xField="name" yField="data1"
        	  markerType="cross" markerSize="4" markerFill="#FF0000"/>
    	  <apex:lineSeries axis="left" xField="name" yField="data2" 
            markerType="circle" markerSize="4" markerFill="#8E35EF"/>
        <apex:barSeries orientation="vertical" axis="right" 
            xField="name" yField="data3"/>
    </apex:chart>
</apex:page>
```

```
<apex:page controller="ChartController">
    <apex:chart height="400" width="700" data="{!data}">
        <apex:legend position="right"/>
        <apex:axis type="Numeric" position="left" fields="data1"
            title="Opportunities Closed" grid="true"/>
        <apex:axis type="Numeric" position="right" fields="data3"
            title="Revenue (millions)"/>
        <apex:axis type="Category" position="bottom" fields="name"
            title="Month of the Year">
            <apex:chartLabel rotate="315"/>
        </apex:axis>
        <apex:barSeries title="Monthly Sales" orientation="vertical" axis="right"
            xField="name" yField="data3">
            <apex:chartTips height="20" width="120"/>
        </apex:barSeries>
        <apex:lineSeries title="Closed-Won" axis="left" xField="name" yField="data1"
            fill="true" markerType="cross" markerSize="4" markerFill="#FF0000"/>
        <apex:lineSeries title="Closed-Lost" axis="left" xField="name" yField="data2"
            markerType="circle" markerSize="4" markerFill="#8E35EF"/>
    </apex:chart>
</apex:page>
```

## Related Topics

- A Simple Charting Example (atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm)
- remote JavaScript invocation (atlas.en-us.pages.meta/pages/pages_js_remoting.htm)
- How Works Works (atlas.en-us.pages.meta/pages/pages_charting_overview.htm)
