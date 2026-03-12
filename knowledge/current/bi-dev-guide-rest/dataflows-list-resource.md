---
title: "Dataflows List Resource"
domain: bi-dev-guide-rest
topic: dataflows-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.672Z
estimatedTokens: 444
keywords: [Dataflows, Resource, collection, URL, Formats, Version, Postman, Components, HTTP]
---

# Dataflows List Resource

> Returns a collection of dataflows.

# Dataflows List Resource

Returns a collection of dataflows.

## Resource URL

```

```

## Formats

JSON

## Available Version

37.0

## Available in Postman

To view and test a working example of this resource, see [getDataflowCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-908d9377-62d2-4bdc-b67a-80eb112386bb?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analtyicsWaveApi getDataflows()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflows.html)

## HTTP Methods

GET

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 47.0 |

The following REST URL shows how to use the q parameter as a search query in the GET request.

```

```

## Response body for GET

[Dataflow Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_collection.htm "A collection of Analytics dataflows.")

## Code Examples

```
/wave/dataflows
```

```
/wave/dataflows?q=MyDataflow
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dataflow Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dataflow_collection.htm)
