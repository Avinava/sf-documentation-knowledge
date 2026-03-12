---
title: "CRM Analytics REST Resources"
domain: bi-dev-guide-rest
topic: crm-analytics-rest-resources
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:02.595Z
estimatedTokens: 1851
keywords: [CRM, Analytics, REST, Resources, API, sometimes, endpoints]
---

# CRM Analytics REST Resources

> REST API resources are sometimes called endpoints.

# CRM Analytics REST Resources

REST API resources are sometimes called endpoints.

-   **[Wave Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_wave.htm)**
    Lists the top-level resources available for Analytics.
-   **[Actions Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_actions.htm)**
    Returns the Salesforce actions available for the user in Analytics. The entityId is the user id.
-   **[Analytics Assets Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_analytics_assets_overview.htm)**
    Query Analytics assets using parameters for a collections or query a single asset by ID.
-   **[Annotation Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_annotations_overview.htm)**
    Annotate Analytics dashboard widgets with comments posted in the dashboard and in Chatter.
-   **[Asset Files Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_assetfiles_overview.htm)**
    Analytics assets contain files to define their previews. Get a collection of files available and individual files, and create and update asset files
-   **[Auto-Install Request Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests_overview.htm)**
    Auto-Install requests are used to create, update, and delete Analytics embedded apps. Analytics embedded apps are run-time implementations of Analytics templates and instead of user interaction, they’re managed via auto-install requests.
-   **[Collection Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_overview.htm)**
    Analytics collections let users manage their own groups of items and personalize their Analytics Studio home page.
-   **[Dashboard Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_overview.htm)**
    Analytics dashboards allow users to continuously monitor key metrics of their business. These resources allow users to manage collections of dashboards, individual dashboards, dashboard saved views, dashboard histories, and dashboard publishers.
-   **[Data Connector Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_overview.htm)**
    Data connectors are prebuilt connectors to quickly connect to data in your Salesforce orgs, apps, data warehouses, and database services. These resources allow users to manage data connectors and their source objects, run data syncs, and check statuses.
-   **[Dataflow Job Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_overview.htm)**
    Dataflow jobs are used to sync data for data prep recipes and standard dataflows.
-   **[Dataflow Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflows_overview.htm)**
    Dataflows are used to prepare data for Analytics, creating one or more datasets using transformations to manipulate the data.
-   **[Dataset Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_datasets_overview.htm)**
    Manage Analytics dataset and dataset versions.
-   **[Dependencies Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dependencies_id.htm)**
    Returns the dependencies for an asset.
-   **[Eclair Chart Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclaircharts_overview.htm)**
    Eclair charts render maps and geodata in Analytics dashboards.
-   **[Features Configuration Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_config_features.htm)**
    The Analytics features that are available to a user.
-   **[Folder Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_folders_overview.htm)**
    Analytics folders represent apps, a collection of assets. Folders can be created by users or by Analytics templates.
-   **[JsonXform Transformation Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_jsonxform_transformation.htm)**
    Performs a JSON transformation by invoking a set of rules and expressions on a JSON document. The transformed JSON is returned in the REST response and isn't saved on the server. This service is provided to test rules used in Analytics templates.
-   **[Limits Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_limits.htm)**
    The Analytics limits for the Salesforce org.
-   **[Lens Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_lenses_overview.htm)**
    Analytics lenses are how users view data in a dataset and are the basis for building any dashboard. These resources allow users to manage collections of lenses, individual lenses, and lens files.
-   **[Query Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_query.htm)**
    Executes a query written in Salesforce Analytics Query Language (SAQL) or SQL for CRM Analytics.
-   **[Recipe Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_recipes_overview.htm)**
    Recipes are used to prepare data, creating a dataset using transformations to manipulate the data.
-   **[Replicated Dataset Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_overview.htm)**
    Manage Analytics replicated datasets, also know as connected objects. A data sync loads source object data as a connected object in Analytics. Connected objects can’t be visualized directly, but are used like a cache to speed up other jobs that pull from the source object and load it into a dataset.
-   **[Schedule Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm)**
    Retrieve, create or delete a schedule for a dataflow, recipe, or connection sync.
-   **[Subscription Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_subscriptions_overview.htm)**
    Manages subscriptions for Analytics dashboards.
-   **[Security Coverage Dataset Version Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_security_coverage_dataset_version.htm)**
    Returns the security coverage (sharing inheritance) for a particular dataset version. The source objects listed are local to the org (there are no objects from other orgs or other external sources).
-   **[Security Coverage Object Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_security_coverage_object.htm)**
    Returns the security coverage for a particular object. Use this API to discover whether Analytics can inherit sharing settings from an object.
-   **[Template Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_templates_overview.htm)**
    Manage Analytics templates, template configuration, and template release notes.
-   **[Trended Report Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_trendedreports_overview.htm)**
    Manage Analytics trending reports.
-   **[Watchlist Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_watchlists_overview.htm)**
    Manages watchlists for Analytics dashboards.
-   **[Xmd Resources](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_overview.htm)**
    Manages Xmds for Analytics datasets and assets.

## Related Topics

- Wave Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_wave.htm)
- Actions Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_actions.htm)
- Analytics Assets Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_analytics_assets_overview.htm)
- Annotation Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_annotations_overview.htm)
- Asset Files Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_assetfiles_overview.htm)
- Auto-Install Request Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests_overview.htm)
- Collection Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_overview.htm)
- Dashboard Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_overview.htm)
- Data Connector Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_overview.htm)
- Dataflow Job Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs_overview.htm)
