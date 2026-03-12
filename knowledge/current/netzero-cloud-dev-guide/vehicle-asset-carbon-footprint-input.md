---
title: "Vehicle Asset Carbon Footprint Input"
domain: netzero-cloud-dev-guide
topic: vehicle-asset-carbon-footprint-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.281Z
estimatedTokens: 139
keywords: [Vehicle, Asset, Carbon, Footprint, Input, representation, source, calculate, assets, fleet, vehicles, corporate, aircraft, company, shuttles]
---

# Vehicle Asset Carbon Footprint Input

> Input representation of the source to calculate the carbon footprint
      from vehicle assets, such as fleet vehicles, corporate aircraft, and company
    shuttles.

# Vehicle Asset Carbon Footprint Input

Input representation of the source to calculate the carbon footprint from vehicle assets, such as fleet vehicles, corporate aircraft, and company shuttles.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| footprintStage | String | Specifies the stage of the vehicle asset carbon footprint. An annual emissions inventory is created only for the vehicle asset carbon footprints with a footprint stage. | Required | 54.0 |

## Code Examples

```
"vehicleAssetCrbnFtprnt": {
  "footprintStage": "Internal Audit"
}
```
