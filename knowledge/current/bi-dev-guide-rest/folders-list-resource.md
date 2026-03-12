---
title: "Folders List Resource"
domain: bi-dev-guide-rest
topic: folders-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.741Z
estimatedTokens: 1156
keywords: [Folders, Resource, collection, apps, creates, Analytics, app, folder, dataset, lenses, dashboard, URL, Formats, Version, Postman]
---

# Folders List Resource

> Returns a collection of apps or folders and creates an Analytics
      app, which is a folder that contains Analytics dataset, lenses, and
    dashboard.

# Folders List Resource

Returns a collection of apps or folders and creates an Analytics app, which is a folder that contains Analytics dataset, lenses, and dashboard.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getWaveFolderCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-1ef07cc4-fcb6-47f4-9bee-0262bfe41533?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Aura — [<wave:sdk> createFolder()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
-   Aura — [<wave:sdk> listFolders()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
-   LWC — [lightning/analyticsWaveApi getWaveFolders()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-folders.html)
-   LWC — [lightning/analyticsWaveApi postWaveFolders()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-post-wave-folders.html)

## HTTP Methods

GET POST

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| is​Pinned | Boolean | Indicates whether to filter the collection of folders to return only pinned folders (true) or not (false). | Optional | 36.0 |
| mobile​Only​Featured​Assets | Boolean | Indicates whether to filter the collection of folders to show only dashboards that are enabled for the Analytics mobile app (true) or not (false). | Optional | 43.0 |
| page | String | A generated token that indicates the view of folders to be returned. | Optional | 36.0 |
| pageSize | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 36.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 36.0 |
| scope | Connect​Wave​Scope​Type​Enum | The type of scope to be applied to the returned collection. Valid values are:BrowseCreated​By​MeInsights​Applications​Is​Cans​EditMru (Most Recently Used)Shared​With​Me | Optional | 38.0 |
| sort | Connect​Wave​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:AppCreated​ByCreated​By​IdCreated​DateFolder​NameLast​ModifiedLast​Modified​ByLast​Modified​By​IdLast​Modified​DateLocationMru (Most Recently Used, last viewed date)NameOutcomeOwnerRefresh​Date (for assets like datasets)Run​Date (for assets like reports)StatusTitleType | Optional | 38.0 |
| template​Filters | Connect​Wave​Template​Search​Filters​Enum | The filter templates to apply to the returned collection. Valid values are:Apps​Constructed​By​TemplateApps​With​Install​History | Optional | 57.0 |
| template​Source​Id | String | Filters the results to include only a collection of folders created from a specific template source | Optional | 36.0 |

## Response body for GET

[Wave Folder Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder_collection.htm "A collection of Analytics folders.")

## Request body for POST

This is a [Wave Folder Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_input.htm "An Analytics folder. This implements BaseWaveFolderInput.") or a [Wave Folder Template Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_template_input.htm "A templated Analytics folder. This implements BaseWaveFolderInput."), both of which implement the [Base Wave Folder Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm "The base Analytics folder asset.").

## Response body for POST

[Wave Folder](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder.htm "An Analytics folder.")

## Code Examples

```
/wave/folders
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Wave Folder Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder_collection.htm)
- Wave Folder Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_input.htm)
- Wave Folder Template
          Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_template_input.htm)
- Base Wave Folder Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm)
- Wave Folder (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder.htm)
