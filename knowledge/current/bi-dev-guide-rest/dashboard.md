---
title: "Dashboard"
domain: bi-dev-guide-rest
topic: dashboard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.117Z
estimatedTokens: 642
keywords: [Dashboard, Analytics]
---

# Dashboard

> An Analytics dashboard.

# Dashboard

An Analytics dashboard.

## Properties

Dashboard inherits properties from the abstract [Base Templated Asset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_templated_asset.htm "A base Analytics asset created from a template."). These base properties appear in Dashboard alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| allow​Preview | Boolean | Indicates whether this dashboard is available for preview. | Small, 36.0 | 36.0 |
| current​History​Id | String | The current saved history to display for the dashboard. If null, the latest dashboard is displayed | Small, 44.0 | 44.0 |
| datasets | Asset​Reference​Representation[] | The list of datasets used to create this dashboard. | Small, 36.0 | 36.0 |
| date​Version | Integer | The version of dates used by the dashboard. Valid values are:12 | Small, 44.0 | 44.0 |
| files | Lens​File​Representation[] | The list of files used to create this dashboard. | Medium, 36.0 | 36.0 |
| files​Url | String | The URL for the files associated with the dashboard. | Small, 36.0 | 36.0 |
| folder | Asset​Reference​Representation[] | The folder that contains this dashboard. | Small, 36.0 | 36.0 |
| histories​Url | String | The URL for the dashboard histories associated with this dashboard. | Small, 44.0 | 44.0 |
| layout​Auto​Sync | String | Indicates whether the dashboard has auto sync enabled for layouts(true) or not (false). | Small, 60.0 | 60.0 |
| mobile​Disabled | Boolean | Indicates whether the dashboard is disabled for mobile (true) or not (false). | Small, 41.0 | 41.0 |
| refresh​Date | Date | The date of the most recent current dataset that is used by the dashboard, in ISO8601 date format. | Small, 36.0 | 36.0 |
| state | Dashboard​State​Representation | The state of the dashboard | Big, 36.0 | 36.0 |
| visibility | Connect​Wave​Asset​Visibility​Type | Indicates whether the asset is hidden from users with view access or not. Valid values are:All (Show all assets)Limited (Hide assets from viewers with view access) | Small, 51.0 | 51.0 |

#### See Also

-   [Dashboards List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards.htm "Returns a list of Analytics dashboard or creates a dashboard.")

-   [Dashboard Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id.htm "Returns, deletes, or updates the dashboard with the specified ID or API name.")

## Related Topics

- Base Templated Asset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_templated_asset.htm)
- Asset​Reference​Representation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Lens​File​Representation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_file.htm)
- Dashboard​State​Representation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboard_state_rep.htm)
- Dashboards List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards.htm)
- Dashboard Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dashboards_id.htm)
