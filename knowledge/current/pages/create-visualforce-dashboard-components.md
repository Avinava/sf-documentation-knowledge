---
title: "Create Visualforce Dashboard Components"
domain: pages
topic: create-visualforce-dashboard-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.929Z
estimatedTokens: 795
keywords: [Visualforce, Dashboard, Components, pages, data, source, reports, visual, charts, gauges, tables, metrics, provide, snapshot, key]
---

# Create Visualforce Dashboard Components

> Use Visualforce pages as dashboard components. A dashboard shows data
        from source reports as visual components, such as charts, gauges, tables, metrics, or
        Visualforce pages. The components provide a snapshot of key metrics and performance
        indicators. Each dashboard can have up to 20 components.

# Create Visualforce Dashboard Components

Use Visualforce pages as dashboard components. A dashboard shows data from source reports as visual components, such as charts, gauges, tables, metrics, or Visualforce pages. The components provide a snapshot of key metrics and performance indicators. Each dashboard can have up to 20 components.

| Available in: Salesforce Classic (not available in all orgs) |
| --- |
| Available in: all editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Visualforce pages as dashboard components are only available in Salesforce Classic. In Lightning Experience, you can create a custom tab and use that as a dashboard for your custom lightning components.

To be included in a dashboard, a Visualforce page must use a custom controller, use a standard or custom list controller, or not have a controller. You can’t add a Visualforce page with a standard controller to a dashboard. Only Visualforce pages that meet these requirements appear as options in the Data Sources tab.

Visualforce dashboard components aren’t supported when third-party cookies are disabled. See [Visualforce Limitations in Salesforce Classic When Third-Party Cookies are Blocked](https://help.salesforce.com/s/articleView?id=003786014&type=1&language=en_US "html (New Window)").

1.  Create a Visualforce page called VFDashboard.

    The Visualforce page uses a standard list controller, so you can add it to a dashboard. It displays a list of the cases associated with your org.

    ```

    ```

2.  [Build a Salesforce Classic dashboard](https://help.salesforce.com/s/articleView?id=analytics.dashboards_create.htm&type=5&language=en_US "HTML (New Window)").
3.  Add the Visualforce page to a dashboard.

    1.  Click the **Dashboards** tab.
    2.  On the dashboard where you want to add the Visualforce page component, click **Edit**.
    3.  From the Components tab, drag **Visualforce Page** onto your dashboard.
    4.  From the Data Sources tab, click the **Visualforce Pages** dropdown, and drag VFDashboard onto the component that you just added to the dashboard.
    5.  Optionally, enter a header or footer to display on the Visualforce dashboard component.
    6.  Save your changes.

    ![A Visualforce dashboard displaying a view of all open cases.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_basic_visualforce_dashboard.png&folder=pages)

    For a more complex example that uses a custom list controller, see [Create Advanced Visualforce Dashboard Components](atlas.en-us.pages.meta/pages/pages_quick_start_advanced_dashboard_components.htm "Create a Visualforce page with a custom list controller, then use it as a dashboard component.").


#### See Also

-   [*Salesforce Help*: Reports and Dashboards: What’s Different or Not Available in Lightning Experience](https://help.salesforce.com/s/articleView?id=xcloud.lex_considerations_intro.htm&type=5&language=en_US)

-   [*Salesforce Help*: Add a Dashboard Component in Salesforce Classic](https://help.salesforce.com/s/articleView?id=analytics.dashboards_add_component.htm&type=5&language=en_US)

## Code Examples

```
<apex:page standardController="Case" recordSetvar="cases">
    <apex:pageBlock>
        <apex:form id="theForm">
            <apex:panelGrid columns="2">
                <apex:outputLabel value="View:"/>
                <apex:selectList value="{!filterId}" size="1">
                    <apex:actionSupport event="onchange" rerender="list"/>
                    <apex:selectOptions value="{!listviewoptions}"/>
                </apex:selectList>
            </apex:panelGrid>
            <apex:pageBlockSection>
                <apex:dataList var="c" value="{!cases}" id="list">
                {!c.subject}
                </apex:dataList>
            </apex:pageBlockSection>
        </apex:form>
    </apex:pageBlock>
</apex:page>
```

## Related Topics

- Create Advanced Visualforce Dashboard Components (atlas.en-us.pages.meta/pages/pages_quick_start_advanced_dashboard_components.htm)
