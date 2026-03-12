---
title: "Dataset Versions List Resource"
domain: bi-dev-guide-rest
topic: dataset-versions-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.698Z
estimatedTokens: 621
keywords: [Dataset, Versions, Resource, particular, creates, version, URL, Formats, Postman, Components, HTTP, POST]
---

# Dataset Versions List Resource

> Returns a list of dataset versions for a particular dataset or creates a
    version.

# Dataset Versions List Resource

Returns a list of dataset versions for a particular dataset or creates a version.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getDatasetVersionCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-6e4b4e2a-8fc3-4cec-afac-0aa38318451c?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDatasetVersions()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataset-versions.html)
-   LWC — [lightning/analyticsWaveApi createDatasetVersion()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-dataset-version.html)

## HTTP Methods

GET POST

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| created​After | String | Filters the results to include only dataset versions created after a specific timestamp. | Optional | 62.0 |
| created​Before | String | Filters the results to include only dataset versions created before a specific timestamp. | Optional | 62.0 |
| include​Archived | Boolean | Filters the results to include archived dataset versions (true) or not (false). | Optional | 62.0 |

## Response body for GET

[Dataset Version Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_version_collection.htm "A collection of versions for an Analytics dataset.")

## Request body for POST

[Restore Dataset Version Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_restore_dataset_version_input.htm "A specific version to restore an Analytics dataset to.")

## Response body for POST

[Restore Dataset Version](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_restore_dataset_version.htm "The message returned for an Analytics data connector ingest request or an Analytics dataset version update request.")

## Code Examples

```
/wave/datasets/<datasetIdOrApiName>/versions
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataset Version Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_version_collection.htm)
- Restore Dataset Version Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_restore_dataset_version_input.htm)
- Restore Dataset Version (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_restore_dataset_version.htm)
