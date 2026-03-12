---
title: "Plan Benefit Networks"
domain: insurance-developer-guide
topic: plan-benefit-networks
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.710Z
estimatedTokens: 130
keywords: [Plan, Benefit, Networks, Output, representation, insurance, policy, coverage]
---

# Plan Benefit Networks

> Output representation details of the insurance policy coverage networks.

# Plan Benefit Networks

Output representation details of the insurance policy coverage networks.

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | ID of the insurance policy coverage network. | 63.0 |
| name | String | Name of the insurance policy coverage network. | 63.0 |
| network | String | Insurance policy coverage network tier type. | 63.0 |
| sequence | String | Sequence field of the insurance policy coverage network. | 63.0 |

## Code Examples

```
{
  "networks": [
    {
      "id": "n1",
      "network": "FIRST_NETWORK_TIER",
      "name": "Preferred Network",
      "sequence": 1
    },
    {
      "id": "n2",
      "network": "SECOND_NETWORK_TIER",
      "name": "In Network",
      "sequence": 2
    }
  ]
}
```
