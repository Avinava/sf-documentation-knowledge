---
title: "Data Connectors List Resource"
domain: bi-dev-guide-rest
topic: data-connectors-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.614Z
estimatedTokens: 704
keywords: [Data, Connectors, Resource, collection, Analytics, creates, connector, URL, Formats, Version, Postman, Components, HTTP, POST]
---

# Data Connectors List Resource

> Returns a collection of Analytics connectors and creates an
      Analytics connector.

# Data Connectors List Resource

Returns a collection of Analytics connectors and creates an Analytics connector.

## Resource URL

```

```

## Formats

JSON

## Available Version

39.0

## Available in Postman

To view and test a working example of this resource, see [getDataConnectorCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-5a36e087-493b-43b2-9387-ee5b5c8fd589?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getDataConnectors()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connectors.html)
-   LWC — [lightning/analyticsWaveApi createDataConnector()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-data-connector.html)

## HTTP Methods

GET POST

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| category | Connect​Wave​Connector​Category​Enum | The categories that the data connector belongs to. Valid values are:Advanced​Properties​SupportBatch​ReadDirectFile​BasedFilter​SupportOutputPrivate | Optional | 49.0 |
| connector​Type | Connect​Wave​Data​Connector​Type​Enum | For a full list of the data connector types, see the enum description. | Optional | 39.0 |
| folder​Id | Id | Filters the results to include on the contents of a specific folder. The id can be the requesting user's ID for items in the user's private folder. | Optional | 49.0 |
| scope | Connect​Wave​Scope​Type​Enum | The type of scope to be applied to the returned collection. Valid values are:BrowseCreated​By​MeInsights​Applications​Is​Cans​EditMru (Most Recently Used)Shared​With​Me | Optional | 38.0 |

## Response body for GET

[Data Connector Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector_collection.htm "A collection of Analytics data connectors.")

## Request body for POST

[Data Connector Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_input.htm "An Analytics data connector.")

The following JSON shows how to create a new Analytics connector, of connectorType SalesforceExternal.

```

```

## Response body for POST

[Data Connector](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector.htm "An Analytics data connector.")

## Code Examples

```
/wave/dataConnectors
```

```
{
  "label": "My SalesforceExternal Connector",
  "name" : "mySFDCExt",
  "description" : "Connection to another Salesforce org.",
  "connectorType" : "SalesforceExternal",
  "connectorHandler" : "Legacy",
  "connectionProperties" : [ {
      "name" : "Password",
      "value" : "*******"
    }, {
      "name" : "Service_URL",
      "value" : "https://MyDomainName.my.salesforce.com
/services/Soap/u/53.0"
    }, {
      "name" : "Username",
      "value" : "user@yourSalesforceOrg.org"
    }, {
      "name" : "APIType",
      "value" : "BULKV2"
    }
  ]
}
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- enum description (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_dev_guide_rest_enums.htm)
- Data Connector Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector_collection.htm)
- Data Connector Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_data_connector_input.htm)
- Data Connector (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_data_connector.htm)
