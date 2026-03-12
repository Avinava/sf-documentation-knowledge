---
title: "Replicated Dataset Fields Resource"
domain: bi-dev-guide-rest
topic: replicated-dataset-fields-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.805Z
estimatedTokens: 460
keywords: [Replicated, Dataset, Resource, Retrieves, connected, URL, Formats, Version, Postman, Components, HTTP, PATCH]
---

# Replicated Dataset Fields Resource

> Retrieves a list of fields for the specified connected
    object.

# Replicated Dataset Fields Resource

Retrieves a list of fields for the specified connected object.

## Resource URL

```

```

## Formats

JSON

## Available Version

37.0

## Available in Postman

To view and test a working example of this resource, see [getReplicatedFields](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-23f55ff1-f93d-49e5-90a3-21128db3244b?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getReplicatedFields()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-replicated-fields.html)
-   LWC — [lightning/analyticsWaveApi updateReplicatedFields()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-replicated-dataset-fields.html)

## HTTP Methods

GET PATCH

## Response body for GET and PATCH

[Replicated Field Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_field_collection.htm "A collection of fields for an Analytics replicated dataset, also known as a connected object.")

## PATCH Request Body

[Replicated Field Collection Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_field_collection_input.htm "A collection of fields for an Analytics replicated dataset, also known as a connected object.")

The following JSON shows how to update fields for a connected object.

```

```

## Code Examples

```
/wave/replicatedDatasets/<Id>/fields
```

```
{
    "fields": [
        {"fieldType": "text", "label": "Id", "name": "Id", "skipped": "false"},
        {"fieldType": "text", "label": "Name", "name": "Name", "skipped": "false"},
        {"fieldType": "numeric", "label": "Amount", "name": "Amount", "precision": 18,
        "scale": 2, "skipped": "false"},
        {"fieldType": "date", "label": "CloseDate", "name": "CloseDate", 
        "format": "yyyy-MM-dd‘T‘HH:mm:ss.SSS‘Z‘", "skipped": "false"}
    ]
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Replicated Field Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_field_collection.htm)
- Replicated Field Collection Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_replicated_field_collection_input.htm)
