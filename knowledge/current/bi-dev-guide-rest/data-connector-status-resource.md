---
title: "Data Connector Status Resource"
domain: bi-dev-guide-rest
topic: data-connector-status-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.637Z
estimatedTokens: 324
keywords: [Data, Connector, Status, Resource, Tests, external, Analytics, API, doesn't, work, test, local, Salesforce, URL, Formats]
---

# Data Connector Status Resource

> Tests the status of an external Analytics connector. This API doesn't work to test a
  local Salesforce connector.

# Data Connector Status Resource

Tests the status of an external Analytics connector. This API doesn't work to test a local Salesforce connector.

## Resource URL

```

```

## Formats

JSON

## Available Version

45.0

## Available in Postman

To view and test a working example of this resource, see [getDataConnectorStatus](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-a1f138d6-1004-4e95-8257-950ff26bdc4d?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataConnectorStatus()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector-status.html)

## HTTP Methods

GET

## Response body for GET

[Data Connector Status](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector_status.htm "The status for an Analytics data connector.")

## Code Examples

```
/wave/dataConnectors/<connectorIdOrApiName>/status
```

## Related Topics

- CRM
     Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Data Connector Status (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector_status.htm)
