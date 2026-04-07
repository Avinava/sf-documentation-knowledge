---
title: "Dashboard Input"
domain: bi-dev-guide-rest
topic: dashboard-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:08.309Z
estimatedTokens: 686
keywords: [Dashboard, Input, Analytics]
---

# Dashboard Input

> An Analytics dashboard.

# Dashboard Input

An Analytics dashboard.

## Properties

DashboardInput inherits properties from the abstract [Base Asset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_reference_input.htm "The base Analytics asset."). These base properties appear in DashboardInput alongside the properties defined explicitly in the following table.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cloned​Template​Origin | String | If the asset was cloned from an asset that was created from a template, this is the template origin of the original asset. | Optional | 56.0 |
| current​History​Id | String | The current saved history id to display for the dashboard. | Optional | 44.0 |
| date​Version | Integer | The version of dates used by the dashboard. Valid values are:12 | Optional | 44.0 |
| folder | Asset​Reference​Input​Representation | The folder in which this dashboard is stored. | Required for POST, optional for PATCH | 44.0 |
| history​Label | String | A history label to tag the dashboard version being saved. | Optional | 44.0 |
| layout​Auto​Sync | String | Indicates whether the dashboard has auto sync enabled for layouts(true) or not (false). | Optional | 60.0 |
| mobile​Disabled | Boolean | Indicates whether the dashboard is disabled for mobile (true) or not (false). | Optional | 41.0 |
| state | Dashboard​State​Input | The state of the dashboard. | Required for POST, optional for PATCH | 36.0 |
| type | Connect​Wave​Asset​Type​Enum | The asset type. The default type is Dashboard. Valid types are:CollectionComponentContextual​DashboardDashboardDashboard​Saved​ViewDashboard​SnapshotData​Cloud​ReportData​ConnectorDataflowDataflow​JobDataflow​Job​NodeDatasetDataset​ShardDataset​VersionExternal​DataFolderLensLightning​ComponentLightning​DashboardLightning​Dashboard​FolderRecipeRecipe​ConfigurationRecipe​ModelReplicated​DatasetReportReport​FolderStoryTableau​DashboardTableau​WorkbookTemplateWidgetWorkflow | Optional | 44.0 |
| xmd | Xmd​Input | The asset XMD of the dashboard. | Optional | 44.0 |
| visibility | Connect​Wave​Asset​Visibility​Type | Indicates whether the asset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Optional | 51.0 |

#### See Also

-   [Dashboards List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards.htm "Returns a list of Analytics dashboard or creates a dashboard.")

-   [Dashboard Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id.htm "Returns, deletes, or updates the dashboard with the specified ID or API name.")

## Related Topics

- Base Asset Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_asset_reference_input.htm)
- Asset​Reference​Input​Representation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Dashboard​State​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboard_state_input_rep.htm)
- Xmd​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_input.htm)
- Dashboards List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards.htm)
- Dashboard Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id.htm)
