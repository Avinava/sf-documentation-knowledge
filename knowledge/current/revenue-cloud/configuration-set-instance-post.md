---
title: "Configuration Set Instance (POST)"
domain: revenue-cloud
topic: configuration-set-instance-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.966Z
estimatedTokens: 327
keywords: [Configuration, Instance, POST, product, API, scenarios, different, database, Salesforce, catalog, management, data]
---

# Configuration Set Instance (POST)

> Set a product configuration instance. This API is used in scenarios
      where the configuration instance is available in a different database than Salesforce and the
      product catalog management data is in Salesforce.

# Configuration Set Instance (POST)

Set a product configuration instance. This API is used in scenarios where the configuration instance is available in a different database than Salesforce and the product catalog management data is in Salesforce.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configurator​Options | Configurator Options Input | List of the configurator options to execute. | Optional | 60.0 |
| context​MappingId | String | ID of the context mapping record. | Required | 60.0 |
| qualification​Context | User Context Input | Context details that are used for the qualification rules. | Optional | 60.0 |
| transaction | String | Transaction JSON payload representing an object in an external system that’s used to create a session. | Required | 60.0 |

Response body for POST

[Configuration Set Instance](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_set_configuration_instance_output.htm "Output representation of the details of the context or session that are returned with a set configuration request.")

## Code Examples

```
/connect/cpq/configurator/actions/set-instance
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/configurator/actions/set-instance
```

```
{
  "configuratorOptions": {
    "addDefaultConfiguration": true,
    "executeConfigurationRules": true,
    "executePricing": false,
    "qualifyAllProductsInTransaction": false,
    "validateAmendRenewCancel": false,
    "validateProductCatalog": false
  },
  "contextMappingId": "11jEk000017YdyUIAS",
  "qualificationContext": {
    "accountId": "001DU000001nHUGYA2"
  },
  "transaction": "{"Quote":[{"QuoteLineItem":[{"businessObjectType":"QuoteLineItem","id":"qli_1"},{"businessObjectType":"QuoteLineItem","id":"qli_2"},{"businessObjectType":"QuoteLineItem","id":"qli_3"},{"businessObjectType":"QuoteLineItem","id":"qli_4"}],"businessObjectType":"Quote","id":"aJSdm0000003m3JGAQ"}]}"
}
```

## Related Topics

- Configurator
                        Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_options_input.htm)
- User
                        Context Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_user_context_input.htm)
- Configuration Set
              Instance (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_set_configuration_instance_output.htm)
