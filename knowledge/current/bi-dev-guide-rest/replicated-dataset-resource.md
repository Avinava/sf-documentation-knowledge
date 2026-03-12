---
title: "Replicated Dataset Resource"
domain: bi-dev-guide-rest
topic: replicated-dataset-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.801Z
estimatedTokens: 518
keywords: [Replicated, Dataset, Resource, updates, deletes, datasets, know, connected, objects, data, sync, loads, source, Analytics, can’t]
---

# Replicated Dataset Resource

> Returns, updates, and deletes replicated datasets, also know as
      connected objects. A data sync loads source object data as a connected object in Analytics. Connected objects
      can’t be visualized directly, but are used like a cache to speed up other jobs that pull from
      the source object and load it into a dataset.

# Replicated Dataset Resource

Returns, updates, and deletes replicated datasets, also know as connected objects. A data sync loads source object data as a connected object in Analytics. Connected objects can’t be visualized directly, but are used like a cache to speed up other jobs that pull from the source object and load it into a dataset.

## Resource URL

```

```

## Formats

JSON

## Available Version

37.0

## Available in Postman

To view and test a working example of this resource, see [getReplicatedDataset](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-9880bb3c-d6a3-40d9-b3ef-25c107407fe7?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## HTTP Methods

DELETE GET PATCH

## Available Components

-   LWC — [lightning/analyticsWaveApi deleteReplicatedDataset()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-replicated-dataset.html)
-   LWC — [lightning/analyticsWaveApi getReplicatedDataset()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-replicated-dataset.html)

## Response body for GET and PATCH

[Replicated Dataset](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_dataset.htm "An Analytics replicated dataset, also know as a connected object.")

## Request body for PATCH

[Replicated Dataset Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_dataset_input.htm "An Analytics replicated dataset, also know as a connected object.")

The following JSON shows how to update an existing connected object by adding a pass through filter and setting the connection mode to Full.

```

```

## Code Examples

```
/wave/replicatedDatasets/<id>
```

```
{
  "passThroughFilter": "(FiscalQuarter = 2 OR FiscalQuarter = 3) AND Amount > 1000 AND 
    Amount <= 20000",
  "connectionMode": "Full"
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Replicated Dataset (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_dataset.htm)
- Replicated Dataset Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_dataset_input.htm)
