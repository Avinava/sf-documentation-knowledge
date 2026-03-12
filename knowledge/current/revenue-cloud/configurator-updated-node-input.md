---
title: "Configurator Updated Node Input"
domain: revenue-cloud
topic: configurator-updated-node-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.929Z
estimatedTokens: 151
keywords: [Configurator, Updated, Node, Input, representation, nodes, updated, product, configuration.]
---

# Configurator Updated Node Input

> Input representation of the nodes to be updated in a product configuration.

# Configurator Updated Node Input

Input representation of the nodes to be updated in a product configuration.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| path | String[] | Path to the node that’s being updated. | Required | 60.0 |
| updated​Attributes | Map<String, Object> | Details of the object that’s being updated. This property supports fields of objects from the Sales Transaction context definition, including custom objects and fields in your extended context definition. | Required | 60.0 |

## Code Examples

```
"updatedNodes": [
        {
            "path": ["0Q0DE000000ISHJs81", "0QLDE000000IBXw4AO"],
            "updatedAttributes": {
                "Quantity": 5
            }
        }
    ]
```
