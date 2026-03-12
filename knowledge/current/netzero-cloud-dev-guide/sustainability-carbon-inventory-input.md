---
title: "Sustainability Carbon Inventory Input"
domain: netzero-cloud-dev-guide
topic: sustainability-carbon-inventory-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.263Z
estimatedTokens: 283
keywords: [Sustainability, Carbon, Inventory, Input, representation, annual, emissions, creation]
---

# Sustainability Carbon Inventory Input

> Input representation of the annual emissions inventory creation
      request.

# Sustainability Carbon Inventory Input

Input representation of the annual emissions inventory creation request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Name of the annual emissions inventory. | Required | 54.0 |
| scope3CrbnFtprnt | Scope 3 Carbon Footprint Input | Carbon footprint from scope 3 category of greenhouse gas emissions, such as emissions from sources owned or controlled by other entities in your organization. | Required | 54.0 |
| stnryAssetCrbnFtprnt | Stationary Asset Carbon Footprint Input | Stationary asset carbon footprint from environmental sources, such as a commercial building or a data center. | Required | 54.0 |
| vehicleAssetCrbnFtprnt | Vehicle Asset Carbon Footprint Input | Vehicle asset carbon footprint from vehicle assets, such as fleet vehicles, corporate aircraft, and company shuttles. | Required | 54.0 |
| year | String | Year considered for the annual emissions inventory. You can create only one annual emissions inventory for a specific year. | Required | 54.0 |

## Code Examples

```
{
  "name": "Annual Emissions Inventory 2020",
  "year": "2020",
  "stnryAssetCrbnFtprnt": {
    "footprintStage": "Internal Audit"
  },
  "vehicleAssetCrbnFtprnt": {
    "footprintStage": "Internal Audit"
  },
  "scope3CrbnFtprnt": {
    "footprintStage": "Internal Audit"
  }
}
```

## Related Topics

- Scope 3 Carbon Footprint Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_requests_scope3_carbon_footprint_input.htm)
- Stationary Asset Carbon Footprint Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_requests_stationary_asset_carbon_footprint_input.htm)
- Vehicle Asset Carbon Footprint Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_requests_vehicle_asset_carbon_footprint_input.htm)
