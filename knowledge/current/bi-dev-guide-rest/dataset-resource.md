---
title: "Dataset Resource"
domain: bi-dev-guide-rest
topic: dataset-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.683Z
estimatedTokens: 545
keywords: [Dataset, Resource, deletes, updates, API, URL, Formats, Version, Postman, Components, HTTP, PATCH]
---

# Dataset Resource

> Returns, deletes, or updates a dataset with the specified ID or API
      name.

# Dataset Resource

Returns, deletes, or updates a dataset with the specified ID or API name.

## Resource URL

```

```

## Formats

JSON

## Available Version

## Available in Postman

To view and test a working example of this resource, see [getDataset](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-76b9e92b-ed58-4a54-b618-c61eea634de4?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

36.0

## Available Components

-   Aura — [<wave:sdk> describeDataset()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)
-   Aura — [<wave:sdk> getDatasetFields()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)
-   LWC — [lightning/analyticsWaveApi getDataset()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataset.html)
-   LWC — [lightning/analyticsWaveApi createDataset()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-dataset.html)
-   LWC — [lightning/analyticsWaveApi deleteDataset()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-dataset.html)
-   LWC — [lightning/analyticsWaveApi updateDataset()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-dataset.html)

## HTTP Methods

GET DELETE PATCH

## Response body for GET and PATCH

[Dataset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset.htm "An Analytics dataset.")

## Request body for PATCH

[Dataset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_input.htm "An Analytics dataset.")

The following JSON shows how to edit an existing dataset description.

```

```

## Code Examples

```
/wave/datasets/<datasetIdOrApiName>
```

```
{
  "description": "This is my dataset",
  "label": "Test Dataset"
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset.htm)
- Dataset Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_input.htm)
