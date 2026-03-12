---
title: "Configurator Delete Nodes (POST)"
domain: revenue-cloud
topic: configurator-delete-nodes-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.603Z
estimatedTokens: 268
keywords: [Configurator, Nodes, POST, product, configuration]
---

# Configurator Delete Nodes (POST)

> Delete nodes from a product configuration.

# Configurator Delete Nodes (POST)

Delete nodes from a product configuration.

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
| configurator​Options | Configurator Options Input | List of the configuration options to execute. | Optional | 60.0 |
| context​Id | String | ID of the context object that’s being considered. | Required | 60.0 |
| deleted​Nodes | Configurator Deleted Node Input[] | List of the nodes to be deleted. | Required | 60.0 |
| qualification​Context | User Context Input | Context details that are used for the qualification rules. | Optional | 60.0 |

Response body for POST

[Configurator Delete Nodes](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_delete_nodes_configurator_output.htm "Output representation of the details of the configuration request to delete nodes.")

## Code Examples

```
/connect/cpq/configurator/actions/delete-nodes
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/cpq/configurator/actions/delete-nodes
```

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
    "deletedNodes": [
        {
            "path": ["0Q0DE000000ISHJs81", "0QLDE000000IBXw4AO"]
        }
    ]
}
```

## Related Topics

- Configurator
                        Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_options_input.htm)
- Configurator Deleted Node Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_deleted_node_input.htm)
- User
                                                Context Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configurator_user_context_input.htm)
- Configurator Delete
              Nodes (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_delete_nodes_configurator_output.htm)
