---
title: "Configurator Deleted Node Input"
domain: revenue-cloud
topic: configurator-deleted-node-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.904Z
estimatedTokens: 84
keywords: [Configurator, Deleted, Node, Input, representation, nodes, deleted, product, configuration.]
---

# Configurator Deleted Node Input

> Input representation of the nodes to be deleted from a product configuration.

# Configurator Deleted Node Input

Input representation of the nodes to be deleted from a product configuration.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| path | String[] | Path to the node that’s being deleted. | Required | 60.0 |

## Code Examples

```
"deletedNodes": [
        {
            "path": ["0Q0DE000000ISHJs81", "0QLDE000000IBXw4AO"]
        }
    ]
```
