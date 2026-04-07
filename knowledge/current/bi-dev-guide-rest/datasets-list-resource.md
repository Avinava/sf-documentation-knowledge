---
title: "Datasets List Resource"
domain: bi-dev-guide-rest
topic: datasets-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:09.656Z
estimatedTokens: 1492
keywords: [Datasets, Resource, collection, Analytics, dataset, creates, URL, Formats, Version, Postman, Components, HTTP, POST]
---

# Datasets List Resource

> Returns a collection of Analytics dataset and creates a
      dataset.

# Datasets List Resource

Returns a collection of Analytics dataset and creates a dataset.

## Resource URL

```

```

## Formats

JSON

## Available Version

GET 36.0 POST 50.0

## Available in Postman

To view and test a working example of this resource, see [getDatasetCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-0850900b-70ff-4536-9b86-11cf3dee9d57?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Aura — [<wave:sdk> listDatasets()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)
-   LWC — [lightning/analyticsWaveApi getDatasets()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-datasets.html)

## HTTP Methods

GET POST

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| created​After | String | Filters the results to include only the contents created after a specific timestamp. | Optional | 56.0 |
| created​Before | String | Filters the results to include only the contents created before a specific timestamp. | Optional | 56.0 |
| dataset​Types | Connect​Wave​Dataset​Type​Enum | The type of the dataset. Valid values are:DefaultLiveStaged​DataTrended | Optional | 50.0 |
| folder​Id | ID | Filters the results to include only the contents of a specific folder. The id can be the requesting user’s ID for items in the user’s private folder. | Optional | 36.0 |
| has​Current​Only | Boolean | Indicates whether to filter the list of datasets to include only those datasets that have a current version (true) or not (false). The default is false. | Optional | 52.0 |
| ids | ID[] | Filter the list of datasets to include only datasets with the specified ids. | Optional | 53.0 |
| include​Current​Version | Boolean | Indicates whether to include the current dataset version metadata in the collection (true) or not (false). The default is false. | Optional | 52.0 |
| last​Queried​After | String | Filters the results to include only the contents last queried after a specific timestamp. | Optional | 56.0 |
| last​Queried​Before | String | Filters the results to include only the contents last queried before a specific timestamp. | Optional | 56.0 |
| license​Type | Connect​Analytics​License​Type​Enum | Filters the collection by the Analytics license type. Valid values are:Cdp (Data 360)Data​Pipeline​Query (Data Pipeline Query)Einstein​Analytics (CRM Analytics)Intelligent​Apps (Intelligent Apps)Sonic (Salesforce Data Pipeline) | Optional | 52.0 |
| order | Enum | Ordering applied to the results. Valid values are:AscendingDescending | Optional | 42.0 |
| page | String | A generated token that indicates the view of datasets to be returned. | Optional | 36.0 |
| page​Size | Int | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 36.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 36.0 |
| scope | Connect​Wave​Scope​Type​Enum | The type of scope to be applied to the returned collection. Valid values are:BrowseCreated​By​MeInsights​Applications​Is​Cans​EditMru (Most Recently Used)Shared​With​Me | Optional | 38.0 |
| sort | Connect​Wave​Dataset​Sort​Order​Type​Enum | The type of sort order to be applied to the returned dataset collection. Valid values are:Connection​Name (only valid if the dataset is a Live Dataset)Created​ByCreated​DateLast​ModifiedLast​QueriedLast​RefreshedMru (Most Recently Used, last viewed date)NameTotal​Rows | Optional | 38.0 |
| supports​New​Dates | Boolean | Indicates whether to filter the list of datasets to include only those datasets that support new dates (true) or not (false). The default is false. | Optional | 52.0 |
| type​Of​Dataflow | String | Filters the list of datasets to include only those datasets that have the specified type of dataflow. | Optional | 61.0 |

You can filter the results to include only those datasets that have a current dataset version defined by using the hasCurrentOnly parameter. You can also request supplemental information about datasets that have a current dataset version defined by using the filterGroup parameter. For example, the following GET request sets these parameters:

```

```

This request filters the list of datasets and adds the following supplemental fields to the output representation:

-   current​Version​Created​By
-   current​Version​Created​Date
-   current​Version​Last​Modified​By
-   current​Version​Last​Modified​Date

For more information about the filterGroup parameter, ﻿see [Specifying Response Sizes](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_returns_filters.htm) in the Connect REST API Developer Guide.

## Response body for GET

[Dataset Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_collection.htm "A collection of datasets.")

## Request body for POST

[Dataset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_input.htm "An Analytics dataset.")

## Response body for POST

[Dataset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset.htm "An Analytics dataset.")

## Code Examples

```
/wave/datasets
```

```
/wave/datasets?hasCurrentOnly=true&filterGroup=Supplemental
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataset Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_collection.htm)
- Dataset Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_input.htm)
- Dataset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset.htm)
