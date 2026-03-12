---
title: "Base Wave Asset"
domain: bi-dev-guide-rest
topic: base-wave-asset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:04.027Z
estimatedTokens: 1310
keywords: [Base, Wave, Asset, Analytics]
---

# Base Wave Asset

> The base Analytics asset.

# Base Wave Asset

The base Analytics asset.

Inherited by [Analytics Asset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_asset.htm "An Analytics asset."), [Base Templated Asset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_templated_asset.htm "A base Analytics asset created from a template."), [Contextual Source Asset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_contextual_source_asset.htm "A contextual representation of an Analytics dashboard."), [Coverage Job](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_contextual_source_asset.htm "A contextual representation of an Analytics dashboard."), [Dashboard Context Asset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_context_asset.htm "A contextual representation of an embedded Analytics dashboard."), [Data Connector](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector.htm "An Analytics data connector."), [Dataflow Job Node](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_node.htm "A node in a dataflow job."), [Dataflow Job](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job.htm "An Analytics dataflow job."), [Dataflow](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow.htm "An Analytics dataflow."), [Dataset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset.htm "An Analytics dataset."), [Dataset Version](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_version.htm "A specific version of an Analytics dataset."), [Lens Source Asset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_source_asset.htm "A contextual representation of an Analytics lens."), [Recipe Configuration](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_recipes.meta/api_recipes/sforce_recipes_api_responses_recipe_configuration.htm), [Recipe](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_recipes.meta/api_recipes/sforce_recipes_api_responses_recipe.htm), [Replicated Dataset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_dataset.htm "An Analytics replicated dataset, also know as a connected object."), [Report Source Asset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_report_source_asset.htm "A contextual representation of a report asset."), [Wave Collection Item](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_item.htm "An item in a collection of Analytics resources."), [Wave Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection.htm "A collection of Analytics resources."), and [Wave Folder](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder.htm "An Analytics folder.").

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asset​Sharing​Url | String | The URL for opening this asset in the user interface. This is a form of deep linking. The server examines the link parameters, which can include urlType, assetId, orgId, and loginHost, as well as other optional parameters, and translates as necessary to produce the correct result on the target client. For example, it opens the asset on a desktop client, or mobile if you are on a mobile OS. | Small, 36.0 | 36.0 |
| created​By | Wave​User | The user who created the asset. | Small, 36.0 | 36.0 |
| created​Date | Date | The time at which the asset was created, in ISO8601 date format. | Small, 36.0 | 36.0 |
| description | String | Short description of the asset. | Small, 36.0 | 36.0 |
| id | String | The 18 character ID of the asset. | Small, 36.0 | 36.0 |
| label | String | The asset label. | Small, 36.0 | 36.0 |
| last​Accessed​Date | Date | The last time the asset was accessed, in ISO8601 date format. | Small, 36.0 | 36.0 |
| last​ModifiedBy | Wave​User | The user who last updated the asset. | Small, 36.0 | 36.0 |
| last​Modified​Date | Date | The last time the asset was modified, in ISO8601 date format. | Small, 36.0 | 36.0 |
| name | String | The asset developer name. | Small, 36.0 | 36.0 |
| namespace | String | The namespace that qualifies the asset name. The default is the current organization's namespace, which is "empty namespace" for all organizations, except those developer edition orgs that have set a namespace. | Small, 36.0 | 36.0 |
| permissions | Permissions | The permissions for the current user. | Small, 36.0 | 36.0 |
| type | Connect​Wave​Asset​Type​Enum | The asset type. The default type is Dashboard. Valid types are:CollectionComponentContextual​DashboardDashboardDashboard​Saved​ViewDashboard​SnapshotData​Cloud​ReportData​ConnectorDataflowDataflow​JobDataflow​Job​NodeDatasetDataset​ShardDataset​VersionExternal​DataFolderLensLightning​ComponentLightning​DashboardLightning​Dashboard​FolderRecipeRecipe​ConfigurationRecipe​ModelReplicated​DatasetReportReport​FolderStoryTableau​DashboardTableau​WorkbookTemplateWidgetWorkflow | Optional, Small, 36.0 | 36.0 |
| url | String | The asset URL. | Small, 36.0 | 36.0 |

## Related Topics

- Analytics Asset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_analytics_asset.htm)
- Base Templated Asset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_templated_asset.htm)
- Contextual Source Asset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_contextual_source_asset.htm)
- Coverage Job (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_contextual_source_asset.htm)
- Dashboard Context Asset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_context_asset.htm)
- Data Connector (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector.htm)
- Dataflow Job Node (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job_node.htm)
- Dataflow Job (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_job.htm)
- Dataflow (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow.htm)
- Dataset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset.htm)
