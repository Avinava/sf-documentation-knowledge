---
title: "Configuration Set Instance Input"
domain: revenue-cloud
topic: configuration-set-instance-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.492Z
estimatedTokens: 183
keywords: [Configuration, Set, Instance, Input, representation, request, set, product, configuration, instance.]
---

# Configuration Set Instance Input

> Input representation of the request to set a product configuration instance.

# Configuration Set Instance Input

Input representation of the request to set a product configuration instance.

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

## Code Examples

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
