---
title: "Replicated Datasets List Resource"
domain: bi-dev-guide-rest
topic: replicated-datasets-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.798Z
estimatedTokens: 764
keywords: [Replicated, Datasets, Resource, know, connected, objects, URL, Formats, Version, Postman, Components, HTTP, POST]
---

# Replicated Datasets List Resource

> Returns a list of replicated datasets, also know as connected
      objects.

# Replicated Datasets List Resource

Returns a list of replicated datasets, also know as connected objects.

## Resource URL

```

```

## Formats

JSON

## Available Version

37.0

## Available in Postman

To view and test a working example of this resource, see [getReplicatedDatasetCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-4d63c328-18e7-42e1-9b32-1ab5a4c47a8a?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getReplicatedDatasets()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-replicated-datasets.html)
-   LWC — [lightning/analyticsWaveApi createReplicatedDataset()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-replicated-dataset.html)

## HTTP Methods

GET POST

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| category | Connect​Wave​Replicated​Dataset​Category​Enum | The category for connected objects. Valid values are:InputOutput | Optional | 50.0 |
| connector | String | Filter the list of returned connected objects by specifying the name of an Analytics connector. | Optional | 37.0 |
| include​Live | Boolean | Indicates whether to include live datasets in the list (true) or not (false). | Optional | 56.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 53.0 |
| source​Object | String | Filter the list of returned connected objects by specifying the name of a source object. | Optional | 37.0 |

## Response body for GET

[Replicated Dataset Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_dataset_collection.htm "A collection of Analytics replicated datasets, also know as connected objects.")

## Request body for POST

[Replicated Dataset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_dataset_input.htm "An Analytics replicated dataset, also know as a connected object.")

The following JSON shows how to create a connected object from an Analytics connector.

```

```

## Response body for POST

[Replicated Dataset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_dataset.htm "An Analytics replicated dataset, also know as a connected object.")

## Code Examples

```
/wave/replicatedDatasets
```

```
{
  "connectorId": "0ItS7000000xxxxxxx",
  "sourceObjectName": "Account"
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Replicated Dataset Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_dataset_collection.htm)
- Replicated Dataset
              Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_dataset_input.htm)
- Replicated Dataset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_dataset.htm)
