---
title: "OCI Get Inventory Availability Input"
domain: chatterapi
topic: oci-get-inventory-availability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.254Z
estimatedTokens: 623
keywords: [OCI, Inventory, Availability, Input, retrieve, Root, Tag, Choose, Location, Criteria, Product, SKU]
---

# OCI Get Inventory Availability Input

> Details of a request to retrieve inventory availability.

# OCI Get Inventory Availability Input

Details of a request to retrieve inventory availability.

## Root Tag

Root XML tag

<ociGetInventoryInput>

## REQUIRED: Choose ONE of these (Location Criteria)

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationGroupIdentifier | String | The External Reference of a location group to retrieve inventory availability data for. Specifying this value retrieves inventory data for all locations belonging to this group. | Conditional; combine with stockKeepingUnit only. Can’t combine with locationGroupIdentifiers or locationIdentifiers or stockKeepingUnits. | 51.0 |
| locationGroupIdentifiers | String[] | A list of up to 100 External References of location groups to retrieve inventory availability data for. | Conditional; combine with stockKeepingUnits only. Can’t combine with stockKeepingUnit, locationGroupIdentifier or locationIdentifiers. | 51.0 |
| locationIdentifiers | String[] | A list of up to 100 External References of locations to retrieve inventory availability data for. | Conditional; combine with stockKeepingUnits only. Can’t combine with locationGroupIdentifier, locationGroupIdentifiers, or stockKeepingUnits. | 51.0 |

## REQUIRED: Choose ONE of these (Product SKU)

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| stockKeepingUnit | String | The SKU of a product to retrieve inventory availability data for. Specifying a SKU with no locations or location groups returns availability data for that SKU at all inventory locations that aren’t assigned to location groups. | Conditional; can’t combine with stockKeepingUnits | 51.0 |
| stockKeepingUnits | String[] | A list of up to 100 SKUs of products to retrieve inventory availability data for. | Conditional; can’t combine with stockKeepingUnit | 51.0 |

## Optional

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeRelatedProducts | Boolean | Specifies whether the returned inventory level includes variant products if the given product has variants. When set to true, only one product ID is accepted. There's a limit of 100 variant products. If the total of variants exceeds 100, no variants are included in the inventory level. | Optional | 64.0 |
| useCache | Boolean | Specifies whether to fetch the inventory data from the cache. The default value is true. | Optional | 51.0 |
