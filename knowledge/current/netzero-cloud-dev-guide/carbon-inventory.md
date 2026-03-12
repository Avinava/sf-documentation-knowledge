---
title: "Carbon Inventory"
domain: netzero-cloud-dev-guide
topic: carbon-inventory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.321Z
estimatedTokens: 409
keywords: [Carbon, Inventory, Capture, organization’s, footprint, source, certain, time, period, creating, annual, emissions, data, base, achieve]
---

# Carbon Inventory

> Capture your organization’s carbon footprint from a source for a
      certain time period by creating an annual emissions inventory. Using this data as the base,
      achieve your emissions reduction targets and fulfill your Net Zero
    commitment.

# Carbon Inventory

Capture your organization’s carbon footprint from a source for a certain time period by creating an annual emissions inventory. Using this data as the base, achieve your emissions reduction targets and fulfill your Net Zero commitment.

Resource

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

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

Response body for POST

[Sustainability Carbon Inventory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_carbon_inventory.htm "Output representation of the annual emissions inventory creation request.")

## Code Examples

```
/connect/sustainability/carbon-inventory
```

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
- Sustainability Carbon Inventory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_sustainability_carbon_inventory.htm)
