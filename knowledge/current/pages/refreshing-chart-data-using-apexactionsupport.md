---
title: "Refreshing Chart Data Using  <apex:actionSupport>"
domain: pages
topic: refreshing-chart-data-using-apexactionsupport
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.999Z
estimatedTokens: 801
keywords: [Refreshing, Chart, Data, <apex, actionSupport>, Visualforce, user’s, actions, adding, component, user, elements, affect, chart’s, PieChartRemoteController]
---

# Refreshing Chart Data Using  <apex:actionSupport>

> Update a Visualforce chart in
        response to a user’s actions by adding the <apex:actionSupport> component to Visualforce user interface elements
        that affect the chart’s data.

# Refreshing Chart Data Using <apex:actionSupport>

Update a Visualforce chart in response to a user’s actions by adding the <apex:actionSupport\> component to Visualforce user interface elements that affect the chart’s data.

The following markup displays a pie chart that can be updated by choosing a new year from a menu next to the chart:

```

```

This markup attaches a chart component to its data source by setting the chart’s data attribute to the Visualforce expression {!pieData}. The expression calls the getPieData() controller method, which returns the data. The chart is wrapped in an <apex:outputPanel\> with an id attribute of theChart.

An <apex:form\> component is used to submit a new year back to the page’s controller when the chart needs to be updated. The <apex:selectList\> tag displays the years available to chart, and a child <apex:actionSupport\> tag submits the form whenever the menu changes. The id of the chart’s <apex:outputPanel\>, theChart, is used in the <apex:actionSupport\> reRender attribute to limit updating to the chart, instead of reloading the whole page. Finally, an <apex:actionStatus\> component provides a status message while the chart is refreshing. It’s easy to replace the minimal text message with an animated graphic or text effect.

## PieChartRemoteController

The controller for this page is an expansion of the pie chart controller used in [A Simple Charting Example](atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm "A Visualforce chart requires that you create a chart container component, which encloses at least one data series component. You can optionally add additional series components, chart axes, as well as labeling components such as a legend, chart labels, and tooltips for data points.").

```

```

This controller supports providing data to a Visualforce chart two different ways:

-   Using a Visualforce expression, {!pieData}, which calls the instance method getPieData().
-   Using JavaScript remoting, by calling the @RemoteAction static method getRemotePieData() from a JavaScript method.

#### See Also

-   [Refreshing Chart Data Using JavaScript Remoting](atlas.en-us.pages.meta/pages/pages_charting_refreshing_data_javascript_remoting.htm "Update a Visualforce chart periodically, or in response to a user’s actions, using custom JavaScript. JavaScript code can respond to complex user activity or timer events, and use JavaScript remoting to retrieve new chart data whenever required.")

-   [Providing Chart Data via a Controller Method](atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_controller_method.htm "The most straightforward way to provide data to a chart is using a Visualforce expression that references a controller method. Simply reference the controller in the <apex:chart> data attribute.")

-   [apex:actionSupport](atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm "A component that adds AJAX support to another component, allowing the component to be refreshed asynchronously by the server when a particular event occurs, such as a button click or hover.")

-   [apex:actionStatus](atlas.en-us.pages.meta/pages/pages_compref_actionStatus.htm)

## Code Examples

```
<apex:page controller="PieChartRemoteController">
    <apex:pageBlock title="Charts">

        <apex:pageBlockSection title="Standard Visualforce Charting">

            <apex:outputPanel id="theChart">
            <apex:chart height="350" width="450" data="{!pieData}">
                <apex:pieSeries dataField="data" labelField="name"/>
                <apex:legend position="right"/>
            </apex:chart>
            </apex:outputPanel>
            
            <apex:form>
                <apex:selectList value="{!chartYear}" size="1">
                    <apex:selectOptions value="{!chartYearOptions}"/>
                    <apex:actionSupport event="onchange" reRender="theChart" 
                        status="actionStatusDisplay"/>
                </apex:selectList>
                <apex:actionStatus id="actionStatusDisplay"
                    startText="loading..." stopText=""/>
            </apex:form>
            
        </apex:pageBlockSection>
        
    </apex:pageBlock>
</apex:page>
```

```apex
public class PieChartRemoteController {

    // The year to be charted
    public String chartYear { 
        get {
            if (chartYear == Null) chartYear = '2013';
            return chartYear;
        }
        set;
    }
    
    // Years available to be charted, for <apex:selectList>
    public static List<SelectOption> getChartYearOptions() {
        List<SelectOption> years = new List<SelectOption>();
        years.add(new SelectOption('2013','2013'));
        years.add(new SelectOption('2012','2012'));
        years.add(new SelectOption('2011','2011'));
        years.add(new SelectOption('2010','2010'));
        return years;
    }
    
    public List<PieWedgeData> getPieData() {
        // Visualforce expressions can't pass parameters, so get from property
        return PieChartRemoteController.generatePieData(this.chartYear);
    }
    
    @RemoteAction
    public static List<PieWedgeData> getRemotePieData(String year) {
        // Remoting calls can send parameters with the call
        return PieChartRemoteController.generatePieData(year);
    }

    // Private data "generator"
    private static List<PieWedgeData> generatePieData(String year) {
        List<PieWedgeData> data = new List<PieWedgeData>();
        if(year.equals('2013')) {
            // These numbers are absolute quantities, not percentages
            // The chart component will calculate the percentages
            data.add(new PieWedgeData('Jan', 30));
            data.add(new PieWedgeData('Feb', 15));
            data.add(new PieWedgeData('Mar', 10));
            data.add(new PieWedgeData('Apr', 20));
            data.add(new PieWedgeData('May', 20));
            data.add(new PieWedgeData('Jun',  5));
        }
        else {
            data.add(new PieWedgeData('Jan', 20));
            data.add(new PieWedgeData('Feb', 35));
            data.add(new PieWedgeData('Mar', 30));
            data.add(new PieWedgeData('Apr', 40));
            data.add(new PieWedgeData('May',  5));
            data.add(new PieWedgeData('Jun', 10));
        }
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

## Related Topics

- A Simple Charting Example (atlas.en-us.pages.meta/pages/pages_charting_overview_simple_example.htm)
- Refreshing Chart Data Using JavaScript Remoting (atlas.en-us.pages.meta/pages/pages_charting_refreshing_data_javascript_remoting.htm)
- Providing Chart Data via a Controller Method (atlas.en-us.pages.meta/pages/pages_charting_overview_providing_data_controller_method.htm)
- apex:actionSupport (atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm)
- apex:actionStatus (atlas.en-us.pages.meta/pages/pages_compref_actionStatus.htm)
