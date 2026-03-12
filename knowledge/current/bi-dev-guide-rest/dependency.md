---
title: "Dependency"
domain: bi-dev-guide-rest
topic: dependency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.294Z
estimatedTokens: 538
keywords: [Dependency, Analytics, asset]
---

# Dependency

> An Analytics asset dependency.

# Dependency

An Analytics asset dependency.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset​Sharing​Url | String | The sharing URL for an asset. | Small, 36.0 | 36.0 |
| components | Dependency​Collection | The components that depend on the asset. | Small, 46.0 | 46.0 |
| dashboards | Dependency​Collection | The dashboards that depend on the asset. | Small, 36.0 | 36.0 |
| datasets | Dependency​Collection | The datasets that depend on the asset. | Small, 36.0 | 36.0 |
| folder | Asset​Reference | The folder containing the asset. | Small, 36.0 | 36.0 |
| id | String | The 18-character asset ID. | Small, 36.0 | 36.0 |
| last​Accessed​Date | Date | The time at which the asset was last accessed. | Small, 36.0 | 39.0 |
| last​Modified​By | Wave​User | The user who last modified the asset. | Small, 36.0 | 36.0 |
| last​Modified​Date | Date | The last time the asset was modified, in ISO8601 date format. | Small, 36.0 | 36.0 |
| lenses | Dependency​Collection | The lenses that depend on the asset. | Small, 36.0 | 36.0 |
| name | String | The name of the asset. | Small, 36.0 | 36.0 |
| recipes | Dependency​Collection | The recipes that depend on the asset. | Small, 44.0 | 44.0 |
| type | Connect​Wave​Asset​Type​Enum | The asset type. Valid values areCollectionComponentContextual​DashboardDashboardDashboard​Saved​ViewDashboard​SnapshotData​Cloud​ReportData​ConnectorDataflowDataflow​JobDataflow​Job​NodeDatasetDataset​ShardDataset​VersionExternal​DataFolderLensLightning​ComponentLightning​DashboardLightning​Dashboard​FolderRecipeRecipe​ConfigurationRecipe​ModelReplicated​DatasetReportReport​FolderStoryTableau​DashboardTableau​WorkbookTemplateWidgetWorkflow | Small, 36.0 | 36.0 |
| url | String | The URL to retrieve the definition of the asset. | Small, 36.0 | 36.0 |
| workflows | Dependency​Collection | The dataflows that depend on the asset. | Small, 36.0 | 36.0 |

#### See Also

-   [Dependencies Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dependencies_id.htm "Returns the dependencies for an asset.")

## Related Topics

- Dependency​Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dependency_collection.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
- Dependencies Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dependencies_id.htm)
