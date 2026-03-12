---
title: "Configurator Update Nodes Input"
domain: revenue-cloud
topic: configurator-update-nodes-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.379Z
estimatedTokens: 177
keywords: [Configurator, Nodes, Input, representation, product, configuration]
---

# Configurator Update Nodes Input

> Input representation of the request to update the nodes in a product
        configuration.

# Configurator Update Nodes Input

Input representation of the request to update the nodes in a product configuration.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configurator​Options | Configurator Options Input | List of the configuration options to execute. | Optional | 60.0 |
| context​Id | String | ID of the context object that’s being considered. | Required | 60.0 |
| qualification​Context | User Context Input | Context details that are used for the qualification rules. | Optional | 60.0 |
| updated​Nodes | Configurator Updated Node Input[] | List of the nodes to be updated. | Required | 60.0 |

## Code Examples

```
{
    "configuratorOptions": {
        "executePricing": true,
        "returnProductCatalogData": true,
        "qualifyAllProductsInTransaction": true,
        "validateProductCatalog": true,
        "validateAmendRenewCancel": true,
        "executeConfigurationRules": true,
        "addDefaultConfiguration": true
    },
    "qualificationContext": {
        "accountId": "001xx0000000001AAA",
        "contactId": "003xx00000000D7AAI"
    },
    "contextId": "008d27d7-e004-4906-a949-ee7d7c323c77",
    "updatedNodes": [
        {
            "path": ["0Q0DE000000ISHJs81", "0QLDE000000IBXw4AO"],
            "updatedAttributes": {
                "Quantity": 5
            }
        }
    ]
}
```

## Related Topics

- Configurator
                        Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_options_input.htm)
- User
                                                Context Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_user_context_input.htm)
- Configurator Updated Node Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_updated_node_input.htm)
