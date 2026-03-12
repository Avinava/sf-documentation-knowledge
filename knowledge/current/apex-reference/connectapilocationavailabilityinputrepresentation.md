---
title: "ConnectApi.LocationAvailabilityInputRepresentation"
domain: apex-reference
topic: connectapilocationavailabilityinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.290Z
estimatedTokens: 126
keywords: [quantity, product, inventory, location]
---

# ConnectApi.LocationAvailabilityInputRepresentation

> The available quantity of a product at an inventory
    location.

# ConnectApi.LocationAvailabilityInputRepresentation

The available quantity of a product at an inventory location.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalReferenceId | String | The external reference ID of the inventory location. | Optional | 51.0 |
| quantity | Double | The available quantity of the product. | Required | 51.0 |
| stockKeepingUnit | String | The Stock Keeping Unit of the product. | Required | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
