---
title: "Configuration Load Instance Input"
domain: revenue-cloud
topic: configuration-load-instance-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.077Z
estimatedTokens: 185
keywords: [Configuration, Load, Instance, Input, representation, product]
---

# Configuration Load Instance Input

> Input representation of the request to load a product configuration
            instance.

# Configuration Load Instance Input

Input representation of the request to load a product configuration instance.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configurator​Options | Configurator Options Input | List of the configurator options to execute. | Optional | 60.0 |
| context​Mapping​Id | String | ID of the context mapping record. | Optional | 60.0 |
| qualification​Context | User Context Input | Context details that are used for the qualification rules. | Optional | 60.0 |
| transaction​Id | String | Transaction ID of the header entity that’s used to create a session. For example, a Quote or an Order. | Required | 60.0 |

## Code Examples

```
{
    "configuratorOptions": 
      {
        "addDefaultConfiguration": true,
        "executeConfigurationRules": true,
        "executePricing": true,
        "qualifyAllProductsInTransaction": true,
        "validateAmendRenewCancel": true,
        "validateProductCatalog": true
    },
    "qualificationContext": {
        "accountId": "001DU000001nHUGYA2"
    },
    "transactionId": "0Q0DU0000000XoN0AU"
}
```

## Related Topics

- Configurator Options
                                                Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_options_input.htm)
- User
                                                Context Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_user_context_input.htm)
