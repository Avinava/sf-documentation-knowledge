---
title: "Networks Input"
domain: insurance-developer-guide
topic: networks-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:51.403Z
estimatedTokens: 91
keywords: [Networks, Insurance, Policy, Coverage, creating, plan, benefits]
---

> Represents Insurance Policy Coverage Networks for creating plan benefits.

# Networks Input

Represents Insurance Policy Coverage Networks for creating plan benefits.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the network. | Required | 63.0 |
| network | String | Tier type of the network. | Required | 63.0 |

## Code Examples

```
{
  "networks": [
    {
      "network": "First Network Tier",
      "name": "Preferred Network Updated"
    },
    {
      "network": "Second Network Tier",
      "name": "In Network Updated"
    },
    {
      "network": "Third Network Tier",
      "name": "Out Network"
    }
  ]
}
```
