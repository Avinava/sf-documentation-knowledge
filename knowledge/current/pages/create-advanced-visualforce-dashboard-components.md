---
title: "Create Advanced Visualforce Dashboard Components"
domain: pages
topic: create-advanced-visualforce-dashboard-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.908Z
estimatedTokens: 625
keywords: [Advanced, Visualforce, Dashboard, Components, custom, controller, component]
---

# Create Advanced Visualforce Dashboard Components

> Create a Visualforce page with a custom list controller, then use it as a dashboard
        component.

# Create Advanced Visualforce Dashboard Components

Create a Visualforce page with a custom list controller, then use it as a dashboard component.

| Available in: Salesforce Classic (not available in all orgs) |
| --- |
| Available in: all editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Visualforce pages as dashboard components are only available in Salesforce Classic. In Lightning Experience, you can create a custom tab and use that as a dashboard for your custom lightning components.

To be included in a dashboard, a Visualforce page must use a custom controller, use a standard or custom list controller, or not have a controller. You can’t add a Visualforce page with a standard controller to a dashboard. Only Visualforce pages that meet these requirements appear as options in the Data Sources tab.

Visualforce dashboard components aren’t supported when third-party cookies are disabled. See [Visualforce Limitations in Salesforce Classic When Third-Party Cookies are Blocked](https://help.salesforce.com/s/articleView?id=003786014&type=1&language=en_US "html (New Window)").

This Visualforce dashboard component displays all of the open cases associated with a contact named “Barbara Levy.”

1.  Create a custom list controller called retrieveCase.

    ```

    ```

2.  Create a Visualforce page that uses the retrieveCase custom controller.

    ```

    ```

3.  To add the Visualforce page to a dashboard, see [Add a Dashboard Component in Salesforce Classic](https://help.salesforce.com/s/articleView?id=analytics.dashboards_add_component.htm&type=5&language=en_US "HTML (New Window)").

![A Visualforce dashboard titled Barbara Levy's Cases](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_advanced_visualforce_dashboard.png&folder=pages)

#### See Also

-   [Create Visualforce Dashboard Components](atlas.en-us.pages.meta/pages/pages_quick_start_basic_dashboard_components.htm "Use Visualforce pages as dashboard components. A dashboard shows data from source reports as visual components, such as charts, gauges, tables, metrics, or Visualforce pages. The components provide a snapshot of key metrics and performance indicators. Each dashboard can have up to 20 components.")

-   [Standard List Controllers](atlas.en-us.pages.meta/pages/pages_controller_sosc_about.htm)

-   [Building a Custom List Controller](atlas.en-us.pages.meta/pages/pages_custom_list_controller.htm)

## Code Examples

```apex
public class retrieveCase {

    public String getContactName() {
        return 'Barbara Levy';
    }

    public List<Case> getCases() {
        return [SELECT status, subject FROM Case
                WHERE Contact.name = 'Barbara Levy' AND status != 'Closed' limit 5];
    }
}
```

```
<apex:page controller="retrieveCase" tabStyle="Case">
    <apex:pageBlock>
        {!contactName}'s Cases
        <apex:pageBlockTable value="{!cases}" var="c">     
            <apex:column value="{!c.status}"/>
            <apex:column value="{!c.subject}"/>
        </apex:pageBlockTable>
    </apex:pageBlock>
</apex:page>
```

## Related Topics

- Create Visualforce Dashboard Components (atlas.en-us.pages.meta/pages/pages_quick_start_basic_dashboard_components.htm)
- Standard List Controllers (atlas.en-us.pages.meta/pages/pages_controller_sosc_about.htm)
- Building a Custom List Controller (atlas.en-us.pages.meta/pages/pages_custom_list_controller.htm)
