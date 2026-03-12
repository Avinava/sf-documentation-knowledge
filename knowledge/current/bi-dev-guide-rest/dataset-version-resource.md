---
title: "Dataset Version Resource"
domain: bi-dev-guide-rest
topic: dataset-version-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.701Z
estimatedTokens: 420
keywords: [Dataset, Version, Resource, Analytics, updates, predicate, URL, Formats, Postman, Components, HTTP, PATCH]
---

# Dataset Version Resource

> Returns an Analytics
      dataset version or updates the
      version predicate.

# Dataset Version Resource

Returns an Analytics dataset version or updates the version predicate.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getDatasetVersion](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-99f344f0-5d13-42fb-9854-88851d1af502?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDatasetVersion()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataset-version.html)
-   LWC — [lightning/analyticsWaveApi updateDatasetVersion()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-dataset-version.html)

## HTTP Methods

GET PATCH

## Response body for GET and PATCH

[Dataset Version](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_version.htm "A specific version of an Analytics dataset.")

## Request body for PATCH

[Dataset Version Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_version_input.htm "A specific version of an Analytics dataset.")

The following JSON shows how to edit an existing dataset version predicate.

```

```

## Code Examples

```
/wave/datasets/<datasetIdOrApiName>/versions/<versionID>
```

```
{  
  "predicate" : "<predicate value>"
 }
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataset Version (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataset_version.htm)
- Dataset Version Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dataset_version_input.htm)
