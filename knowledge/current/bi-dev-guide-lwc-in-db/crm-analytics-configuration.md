---
title: "CRM Analytics Configuration"
domain: bi-dev-guide-lwc-in-db
topic: crm-analytics-configuration
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.440Z
estimatedTokens: 1840
keywords: [CRM, Analytics, Configuration, Now, Lightning, Web, Component, code, ready, it’s, time, bring, dashboard, Basic, Advanced]
---

# CRM Analytics Configuration

> Now that the Lightning Web Component code is ready to go, it’s time to bring the
    component into a CRM Analytics dashboard.

# CRM Analytics Configuration

Now that the Lightning Web Component code is ready to go, it’s time to bring the component into a CRM Analytics dashboard.

## Basic Configuration

After pushing your code into a Salesforce org, go to the CRM Analytics dashboard designer and create a blank dashboard.

1.  To create a dashboard component, drop a component widget (![Component widget icon](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_dashboard_component_widget.png&folder=bi_dev_guide_lwc_in_db)) onto a dashboard.
2.  Select the **Lightning Components** tab.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

    #### Note

    If you don’t see this tab, you must enable this feature. For enablement information, see the [Setup](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_setup.htm "Set up your environment to create Lightning Web Component widgets, and then add them to your CRM Analytics and Lightning dashboards.") page.

3.  Choose the Hello World Lightning Web Component that you created from the list.
4.  To see the title attribute, expand the Component Attributes on the right-hand side. Type your name in the box, and then watch your code in action.

![The Component Attributes in the Component properties menu](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_lwc_in_db_hw_example_title.png&folder=bi_dev_guide_lwc_in_db)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

#### Note

You can use **Preview** to run the dashboard, but many attributes update during design time, for faster testing.

## Advanced Configuration - SOQL Query

Let’s make your component dynamic by adding some user attributes. You can use SOQL with a filter by the current user token to grab any field from your user object. For this example, use the First.Name field.

1.  On your dashboard, click **Edit**.
2.  In the dashboard editor, click a blank space.
3.  At the top-right, click the **Create Query** button.
4.  Select the **Salesforce Object** tab.
5.  Select the **User** object.
6.  To edit the SOQL, click ![SAQL Mode button](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_mode_button.png&folder=bi_dev_guide_lwc_in_db).
7.  Paste this SOQL into the editor:

    ```

    ```

8.  Name the query and click **Done**.import chartjsPluginSubtitle from '@salesforce/resourceUrl/chartJsPluginSubtitle';

Now you have a query that returns one row containing the current user’s first name. Use the interactions UI to wire it into your step.

1.  To bring up the query panel to the right, click a blank space on the dashboard.
2.  Find your new SOQL query, and then from its dropdown menu, select **Properties**.
3.  Click **Advanced Editor**.
4.  Under **Source Query**, select your query.
5.  For **Source Data**, choose cell, 0, and FirstName.
6.  For **Interaction Type**, keep Result.
7.  Optionally, add a default value in case no results are found. This example uses You.
8.  Copy the interaction.
9.  Save your work.
10.  Click on your component and then click **Advanced Editor** in the Widget menu.
11.  In the editor, paste the interaction as the title value and click **Save**.

![Using the Advanced Editor to create an interactive SOQL query for your LWC.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_lwc_in_db_hw_example_soql.png&folder=bi_dev_guide_lwc_in_db)

Next. Try it out. You have a dynamic value automatically set by the current user viewing your content. If it’s not working, preview your results from the query panel to verify the data is coming back correct. To debug for typos, use the Advanced Editor, or cmd+e/CTRL+e to view the dashboard JSON.

## Advanced End-User Configuration - Static Step UI

Using bindings, you can create any dynamic value from existing queries and selections. Let’s make a set of discrete values that an end user can select that drives an attribute in your LWC code.

1.  Drag a toggle widget onto the dashboard page.
2.  To configure the widget, click the **Toggle** button.
3.  At the bottom of the configuration menu, choose **Create Custom Query**.
4.  Under the **Display** column, add a few options. This example uses the many names of Salesforce Analytics: ![Creating a custom static query for your LWC.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_lwc_in_db_hw_example_static_names.png&folder=bi_dev_guide_lwc_in_db)
5.  Click **Done**.
6.  To show the **Properties** panel on the right, click your LWC Component.
7.  Click **Advanced Editor**.
8.  To create an interaction, choose the static query you created.
9.  For **Source Data**, select cell, 0, and Display.
10.  Choose a selection binding.
11.  Optionally, add a default value in case no results are found. This example uses whoever the user is.
12.  Copy and paste the interaction as the title value.
13.  Save your changes.

![Using the Advanced Editor to create an interactive static query for your LWC.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_lwc_in_db_hw_example_static.png&folder=bi_dev_guide_lwc_in_db)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

#### Note

Instead of setting a default value, you can go into the query properties and set the selection mode to SingleRequired. This setting ensures there’s always a selection for the query.

And there you have it. Preview your dashboard to try it out. Select a name from the toggle and then watch your Lightning Web Component say “Hello” to that name.

![Your LWC with a static query in a CRM Analytics dashboard.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_lwc_in_db_hw_example_full.png&folder=bi_dev_guide_lwc_in_db)

Now that you have an understanding of attributes and configuration, feel free to add more to your widget. You can add style and CSS options to your component and expose them as attributes, such as Text Size, Text Color, or Background Color.

#### See Also

-   [Component Attributes](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_attributes.htm "You can convert any Lightning Web Component into a CRM Analytics Lightning Web Component by adding specific attributes.")

-   [Lightning Dashboards Configuration (Beta)](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_lightning_dashboard_config.htm "Lightning dashboards provide a flexible way to visualize your data. By default, dashboards include standard components such as charts, tables, and gauges. However, you can extend their capabilities by adding custom Lightning Web Components (LWC).")

-   [Query Data](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_query_data.htm "Let’s learn how to inject query results into your running Lightning Web Component code.")

-   [Other Widgets](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_other.htm "The Hello World example is a simplified scenario. The most common real world use cases are a custom data visualization, a selection widget, or even better, a widget that does both. With practice, you can add anything you want. To see a list, a third-party data visualization integration, a hierarchy, and more widgets, check out the example GitHub repository.")

## Code Examples

```
SELECT FirstName, COUNT(Id) FROM User WHERE Id= '!{User.Id}' GROUP BY FirstName ORDER BY FirstName ASC LIMIT 1
```

## Related Topics

- Setup (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_setup.htm)
- Component Attributes (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_attributes.htm)
- Lightning Dashboards Configuration (Beta) (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_lightning_dashboard_config.htm)
- Query Data (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_query_data.htm)
- Other Widgets (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_hw_example_other.htm)
