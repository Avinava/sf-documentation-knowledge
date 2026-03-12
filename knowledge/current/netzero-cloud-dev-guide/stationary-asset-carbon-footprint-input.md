---
title: "Stationary Asset Carbon Footprint Input"
domain: netzero-cloud-dev-guide
topic: stationary-asset-carbon-footprint-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.259Z
estimatedTokens: 139
keywords: [Stationary, Asset, Carbon, Footprint, Input, representation, source, calculate, assets, commercial, building, data, center]
---

# Stationary Asset Carbon Footprint Input

> Input representation of the source to calculate the carbon footprint
      from stationary assets, such as a commercial building or a data center.

# Stationary Asset Carbon Footprint Input

Input representation of the source to calculate the carbon footprint from stationary assets, such as a commercial building or a data center.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| footprintStage | String | Specifies the stage of the stationary asset carbon footprint. An annual emissions inventory request is created only for the stationary asset carbon footprints with a footprint stage. | Required | 54.0 |

## Code Examples

```
"stnryAssetCrbnFtprnt": {
  "footprintStage": "Internal Audit"
}
```
