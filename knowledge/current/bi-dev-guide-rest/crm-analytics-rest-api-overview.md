---
title: "CRM Analytics REST API Overview"
domain: bi-dev-guide-rest
topic: crm-analytics-rest-api-overview
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:04.944Z
estimatedTokens: 1298
keywords: [CRM, Analytics, REST, API, access, features, datasets, dashboards, lenses, programmatically]
---

# CRM Analytics REST API Overview

> You can access CRM Analytics features such as datasets, dashboards, and lenses
    programmatically using the CRM Analytics REST API.

# CRM Analytics REST API Overview

You can access CRM Analytics features such as datasets, dashboards, and lenses programmatically using the CRM Analytics REST API.

Using the CRM Analytics REST API, you can:

-   Send queries directly to the CRM Analytics Platform.
-   Access datasets that have been imported into the CRM Analytics Platform.
-   Create and retrieve CRM Analytics lenses.
-   Create, validate, and update templates for CRM Analytics apps.
-   Back up and restore previous versions of CRM Analytics dashboards, lenses, and dataflows. See [Backup and Restore Previous Versions of CRM Analytics Assets with History API](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_asset_history.htm "When you edit CRM Analytics dashboards, lenses, recipes, and dataflows, CRM Analytics backs them up automatically. When you save a new version of an asset, CRM Analytics creates a snapshot of it. You can then preview snapshots and revert to previous versions using the REST History API.").
-   Run, schedule, and sync CRM Analytics dataflows, recipes, and connections. See [Run, Schedule, and Sync CRM Analytics Data with REST APIs](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm "You can use the CRM Analytics REST API to automate features, like running and scheduling data syncs, dataflows and recipes.")
-   Retrieve a list of dataflow job nodes and details for each individual node.
-   Access XMD information.
-   Create and retrieve standard datasets.
-   Retrieve a list of dataset versions.
-   Convert Data 360 data model objects to datasets.
-   Create and retrieve CRM Analytics apps.
-   Create, update, and retrieve CRM Analytics dashboards.
-   Retrieve a list of dependencies for an application.
-   Determine what features are available to the user.
-   Work with and schedule Trend in CRM Analytics report snapshots.
-   Manipulate synced datasets, also known as connected objects.
-   Get, add, update, and delete ‘eclair’ geo map charts.
-   Work with data connectors.
-   Retrieve or update recipe metadata. See [Build, Manage, Schedule, and Run Recipes with REST APIs](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_build_manage_recipes.htm)
-   Discover whether objects and particular dataset versions have support for sharing inheritance.
-   Create, update, and retrieve auto-install requests for embedded CRM Analytics applications.
-   Create and retrieve collections of CRM Analytics resources.
-   Create, update, and retrieve email subscriptions for updates on important analytics.
-   Create and retrieve watchlists to track important metrics.
-   Test JSON template transformation rules.
-   Retirive analytics assets and asset files.
-   Download a CRM Analytics dashboard or lens or a Lightning Experience dashboard or report as an image or PDF. For more information see, the [Analytics Download](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_analytics.meta/api_analytics/analytics_api_download_reference_resource.htm) resource in the Salesforce Reports and Dashboards REST API Developer Guide.
-   Get Einstein Discovery predictions on Salesforce objects and more via the smartdatadiscovery API. For more information, see the [Einstein Discovery REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_rest_sdd_overview.htm).
-   Access Search Insights features via the autonomous-analtyics API. For more information, see the [Search Insights REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest_aa.meta/bi_dev_guide_rest_aa/bi_rest_aa_overview.htm).

The CRM Analytics REST API is based on the Connect REST API and follows its conventions. For more information about the Connect REST API, see the [Connect REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm).

-   **[CRM Analytics Connect REST API Release Notes](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_releasenotes.htm)**
    Use the Salesforce Release Notes to learn about the most recent updates and changes to the CRM Analytics Connect REST API.
-   **[Connect REST API Authorization](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_authentication.htm)**
    Connect REST API uses OAuth to securely identify your application before connecting to Salesforce.
-   **[CRM Analytics Lightning Web Components](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_lwc.htm)**
    Use CRM Analytics Lightning Web Components to retrieve data and metadata for CRM Analytics assets, execute queries, and schedule data syncs for recipes and dataflows.
-   **[API End-of-Life Policy](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_rest_eol.htm)**
    Salesforce is committed to supporting each API version for a minimum of three years from the date of first release. In order to mature and improve the quality and performance of the API, versions that are more than three years old might cease to be supported.

## Related Topics

- Backup and Restore Previous Versions of CRM Analytics Assets with History API (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_asset_history.htm)
- Run, Schedule, and Sync CRM Analytics Data with REST APIs (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
- CRM Analytics Connect REST API Release Notes (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_releasenotes.htm)
- Connect REST API Authorization (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_authentication.htm)
- CRM Analytics Lightning Web Components (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_lwc.htm)
- API End-of-Life Policy (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_rest_api_rest_eol.htm)
