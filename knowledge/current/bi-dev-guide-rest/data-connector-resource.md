---
title: "Data Connector Resource"
domain: bi-dev-guide-rest
topic: data-connector-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.620Z
estimatedTokens: 667
keywords: [Data, Connector, Resource, Analytics, updates, deletes, connectors, URL, Formats, Version, Postman, Components, HTTP, PATCH, Schedule]
---

# Data Connector Resource

> Returns Analytics connector properties and updates or deletes
      Analytics connectors.

# Data Connector Resource

Returns Analytics connector properties and updates or deletes Analytics connectors.

## Resource URL

```

```

## Formats

JSON

## Available Version

39.0

## Available in Postman

To view and test a working example of this resource, see [getDataConnector](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-bb4b7379-80d5-46fc-9368-e7f15b040889?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataConnector()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector.html)
-   LWC — [lightning/analyticsWaveApi updateDataConnector()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-data-connector.html)
-   LWC — [lightning/analyticsWaveApi deleteDataConnector()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-data-connector.html)

## HTTP Methods

DELETE GET PATCH

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| user​Id | String | Retrieve the data connector with a user ID. | Optional | 55.0 |

## Response body for GET and PATCH

[Data Connector](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector.htm "An Analytics data connector.")

## Request body for PATCH

[Data Connector Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_input.htm "An Analytics data connector.")

The following JSON shows how to edit an existing Analytics connector. The name and connectorType can’t be changed after the Analytics connector is created, only the label, description, and connectionProperties.

```

```

## Schedule a Connection

To schedule a connection, use the [Schedule Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm "Retrieve, create or delete a schedule for a dataflow, recipe, or connection sync.") API. For examples of how to schedule dataflows, recipes, and data syncs, see [Schedule Dataflows, Recipes, and Data Syncs](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#schedule_data_assets)

## Code Examples

```
/wave/dataConnectors/<connectorIdOrApiName>
```

```
{
    "label": "My Salesforce External Connector",
    "description" : "Updated connection to another Salesforce org.",
    "connectionProperties" : [ 
        {
          "name" : "Password",
          "value" : "*******"
        }, {
          "name" : "Service_URL",
          "value" : "https://MyDomainName.my.salesforce.com
/services/Soap/u/41.0"
        }, {
          "name" : "Username",
          "value" : "user@yourSalesforceOrg.org"
      }
    ]
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Data Connector (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector.htm)
- Data Connector Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_input.htm)
- Schedule Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm)
- Schedule Dataflows, Recipes, and Data Syncs (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm)
