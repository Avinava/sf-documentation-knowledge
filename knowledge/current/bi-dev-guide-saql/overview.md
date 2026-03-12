---
title: "Overview"
domain: bi-dev-guide-saql
topic: overview
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:06.630Z
estimatedTokens: 593
keywords: [SAQL, Salesforce, Analytics, Query, Language, access, data, CRM, dataset, uses, behind, scenes, lenses, dashboards, explorer]
---

# Overview

> Use SAQL (Salesforce Analytics Query Language) to access data in CRM Analytics
            dataset. CRM Analytics uses SAQL behind the scenes in lenses, dashboards, and explorer
            to gather data for visualizations.

# Overview

Use SAQL (Salesforce Analytics Query Language) to access data in CRM Analytics dataset. CRM Analytics uses SAQL behind the scenes in lenses, dashboards, and explorer to gather data for visualizations.

Developers can write SAQL to directly access CRM Analytics data via:

-   CRM Analytics REST API

    Build your own app to access and analyze CRM Analytics data or integrate data with existing apps.

-   Dashboard JSON

    Create advanced dashboards. A dashboard is a curated set of charts, metrics, and tables.

-   Compare Table

    Use SAQL to perform calculations on data in your tables and add the results to a new column.

-   Transformations During Data Flow

    Use SAQL to perform manipulations or calculations on data when bringing it in to CRM Analytics.


-   **[Introduction](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_overview_intro.htm)**
    Most actions you take in Analytics result in one or more SAQL queries. Every lens, dashboard, and explorer action generates and executes a SAQL query to build the data needed for the visualization.
-   **[Use SAQL in the CRM Analytics Dashboard](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_UI.htm)**
    Use the CRM Analytics Studio user interface to modify existing SAQL queries or write new ones. Writing SAQL queries in the user interface is the easiest way to get started.
-   **[SAQL Null Measures and Dimensions](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_null_measures_and_dimensions.htm)**
    With CRM Analytics, you can use null measure handling to add null as the default value for numeric columns in datasets. Use null dimensions to return grouped null values from your SAQL queries.
-   **[Analytics SAQL Release Notes](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_releasenotes.htm)**
    Use the Salesforce Release Notes to learn about the most recent updates and changes to Analytics SAQL.

#### See Also

-   [Analytics REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/ "Analytics REST API Developer Guide - HTML (New Window)")

-   [Analytics Dashboard JSON Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_json.meta/bi_dev_guide_json/ "Analytics Dashboard JSON Developer Guide - HTML (New Window)")

## Related Topics

- Introduction (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_overview_intro.htm)
- Use SAQL in the CRM Analytics Dashboard (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_UI.htm)
- SAQL Null Measures and Dimensions (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_null_measures_and_dimensions.htm)
- Analytics SAQL Release Notes (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_releasenotes.htm)
