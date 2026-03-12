---
title: "Lightning Web Components in CRM Analytics and Lightning Dashboards"
domain: bi-dev-guide-lwc-in-db
topic: lightning-web-components-in-crm-analytics-and-lightning-dashboards
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:02.463Z
estimatedTokens: 790
keywords: [Lightning, Web, Components, CRM, Analytics, Dashboards, now, extend, dashboard, capabilitieswith, own, custom, widgets]
---

# Lightning Web Components in CRM Analytics and Lightning Dashboards

> With Lightning Web Components in dashboards, you can now extend  the dashboard
  capabilitieswith
  your own custom widgets.

# Lightning Web Components in CRM Analytics and Lightning Dashboards

With Lightning Web Components in dashboards, you can now extend the dashboard capabilitieswith your own custom widgets.

## Overview

With Lightning Web Components in dashboards, widgets can be a custom data visualization, a custom selection control, a richly formatted custom document, and more. The main benefits are:

-   Part of the dashboard canvas - Any Lightning Web Component can be next to a dashboard, but it’s always offset by spacing. Lightning Web Components in dashboards allow the component to render ON the dashboard canvas, and it can look and feel like a native widget. Also, the dashboard can have one or more Lightning Web Components inside it, so everything can be browsed, embedded, and consumed as a single, cohesive unit. In Lightning dashboards, you can add only one custom Lightning Web Component.
-   No code data querying built-in - Each Lightning Web Component can be optionally associated with a query, also known as a step. This query provides a table of data to the Lightning Web Component, so that the developer writes less code to query and fetch data. Anyone configuring your component can use the CRM Analytics Explorer UI to configure any query against datasets, Salesforce Objects, or Snowflake with clicks and not code. Also, the Analytics Dashboard Designer UI has additional features like Embedded Filters, Global Filters, selective faceting, and bindings. Here you can configure how the widget interacts with other dashboard elements without adding any additional code to your Lightning Web Component. This doesn't apply for custom Lightning Web Components added to Lightning dashboards.
-   Attributes UI - The developer can specify attributes and their types that populate a configuration UI for each setup. These attributes are a great way to abstract:
    -   Constants for use case defined parameters
    -   Dynamic, calculated data
    -   Metadata about how to use the columns of configured query results
    -   Labels
    -   Colors, sizes, and other styling attributesBy specifying the attribute type, your users see the appropriate configuration UI and validation for that type. And they always have the option to use the Designer IDE to create custom interactions to make any attribute dynamic.
-   Set and Get State Functions - These functions provide the same functionality present in the CRM Analytics Dashboard Component. Your custom Lightning Web Component can get the entire state of the parent dashboard and modify it in any way. The benefit of a Lightning Web Component is that it’s even easier to connect to the parent dashboard with auto-wiring.

-   **[Architecture](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_architecture.htm)**
    Let’s look at how custom Lightning Web Component widgets fit into the existing CRM Analytics dashboard architecture.
-   **[Setup](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_setup.htm)**
    Set up your environment to create Lightning Web Component widgets, and then add them to your CRM Analytics and Lightning dashboards.

## Related Topics

- Architecture (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_architecture.htm)
- Setup (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_setup.htm)
