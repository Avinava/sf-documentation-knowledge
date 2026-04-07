---
title: "Location Availability Input"
domain: chatterapi
topic: location-availability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:08.844Z
estimatedTokens: 133
keywords: [Location, Availability, quantity, product, inventory]
---

> The available quantity of a product at an inventory
    location.

# Location Availability Input

The available quantity of a product at an inventory location.

Root XML tag

<locationAvailabilityInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalReferenceId | String | The external reference ID of the inventory location. | Optional | 51.0 |
| quantity | Double | The available quantity of the product. | Required | 51.0 |
| stockKeepingUnit | String | The Stock Keeping Unit of the product. | Required | 51.0 |
