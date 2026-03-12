---
title: "Dashboards List Resource"
domain: bi-dev-guide-rest
topic: dashboards-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.575Z
estimatedTokens: 931
keywords: [Dashboards, Resource, Analytics, dashboard, creates, URL, Formats, Version, Postman, Components, HTTP, POST]
---

# Dashboards List Resource

> Returns a list of Analytics
      dashboard or creates a dashboard.

# Dashboards List Resource

Returns a list of Analytics dashboard or creates a dashboard.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getDashboardCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-348611a2-5c12-4744-bc3e-cd2d4b2c57a2?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Aura — [<wave:sdk> listDashboards()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)

## HTTP Methods

GET POST

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| folder​Id | ID | Filters the results to include only the contents of a specific folder. The id can be the requesting user’s ID for items in the user’s private folder. | Optional | 36.0 |
| ids | String | Filters the results to include only the dashboards with the specified ids. | Optional | 52.0 |
| mobile​Only | Boolean | Filters the results for mobile enabled dashboards only. | Optional | 41.0 |
| page | String | A generated token that indicates the view of dashboard to be returned. | Optional | 36.0 |
| page​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 36.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 36.0 |
| scope | Connect​Wave​Scope​Type​Enum | The type of scope to be applied to the returned collection. Valid values are:Created​By​MeMru (Most Recently Used)Shared​With​Me | Optional | 38.0 |
| sort | Connect​Wave​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:AppCreated​ByCreated​DateLast​ModifiedLast​Modified​ByMru (Most Recently Used, last viewed date)NameType | Optional | 38.0 |
| template​Api​Name | String | Filters the results to include only a collection of dashboards created from a specific application template | Optional | 38.0 |
| type | Connect​Wave​Asset​Type​Enum | The asset type. The default type is Dashboard. Valid types are:CollectionComponentDashboardDashboard​Saved​ViewDashboard​SnapshotData​ConnectorDataflowDataflow​JobDataflow​Job​NodeDatasetDataset​ShardDataset​VersionExternal​DataFolderLensLightning​ComponentLightning​DashboardLightning​Dashboard​FolderRecipeRecipe​ConfigurationRecipe​ModelReplicated​DatasetReportReport​FolderStoryWidgetWorkflow | Optional, Small, 36.0 | 36.0 |

## GET Response Body

[Dashboard Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_collection.htm "A collection of Analytics dashboards.")

## POST Request Body

[Dashboard Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_input.htm "An Analytics dashboard.")

## POST Response Body

[Dashboard](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard.htm "An Analytics dashboard.")

## Code Examples

```
/wave/dashboards
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dashboard Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_collection.htm)
- Dashboard Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_input.htm)
- Dashboard (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard.htm)
