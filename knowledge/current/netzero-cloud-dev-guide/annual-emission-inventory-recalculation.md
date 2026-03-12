---
title: "Annual Emission Inventory Recalculation"
domain: netzero-cloud-dev-guide
topic: annual-emission-inventory-recalculation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.296Z
estimatedTokens: 136
keywords: [Annual, Emission, Inventory, Recalculation, Recalculate, record, whenever, data, factors]
---

# Annual Emission Inventory Recalculation

> Recalculate a record whenever you update data, such as emission
      factors.

# Annual Emission Inventory Recalculation

Recalculate a record whenever you update data, such as emission factors.

Resource

```

```

Resource example

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

POST

Response body for POST

[Annual Emissions Inventory Recalculation Output](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_annual_emissions_inventory_recalculation.htm "Output representation of the annual emissions inventory recalculation request.")

Response example

```

```

## Code Examples

```
/connect/sustainability/footprint-calculation/recalculate/${recordId}
```

```
https://yourInstance.salesforce.com/services/data/xx.x/connect/sustainability/footprint-calculation/recalculate/4sbT10000004CCRIA2
```

```
{ 
  "code"    : 0, 
  "message" : "The recalculation process is in progress and can take some time. Check back after some time." 
}
```

## Related Topics

- Annual Emissions Inventory Recalculation Output (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_annual_emissions_inventory_recalculation.htm)
