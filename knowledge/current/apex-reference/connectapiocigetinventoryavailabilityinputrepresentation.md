---
title: "ConnectApi.OCIGetInventoryAvailabilityInputRepresentation"
domain: apex-reference
topic: connectapiocigetinventoryavailabilityinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.366Z
keywords: [ConnectApi.OCIGetInventoryAvailabilityInputRepresentation]
---

# ConnectApi.OCIGetInventoryAvailabilityInputRepresentation

# ConnectApi.OCIGetInventoryAvailabilityInputRepresentation

Details of a request to retrieve inventory availability.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeRelated​Products | Boolean | Specifies whether the returned inventory level includes variant products if the given product has variants. When set to true, only one product ID is accepted. There's a limit of 100 variant products. If the total of variants exceeds 100, no variants are included in the inventory level. | Optional | 64.0 |
| locationGroup​Identifier | String | The External Reference of a location group to retrieve inventory availability data for. Specifying this value retrieves inventory data for all locations belonging to this group. | Optional; can’t combine with locationGroupIdentifiers or locationIdentifiers | 51.0 |
| locationGroup​Identifiers | List<String> | A list of up to 100 External References of location groups to retrieve inventory availability data for. | Optional; can’t combine with locationGroupIdentifier or locationIdentifiers | 51.0 |
| locationIdentifiers | List<String> | A list of up to 100 External References of locations to retrieve inventory availability data for. | Optional; can’t combine with locationGroupIdentifier or locationGroupIdentifiers | 51.0 |
| stockKeepingUnit | String | The SKU of a product to retrieve inventory availability data for. Specifying a SKU with no locations or location groups returns availability data for that SKU at all inventory locations that aren’t assigned to location groups. | Optional; can’t combine with stockKeepingUnits | 51.0 |
| stockKeepingUnits | List<String> | A list of up to 100 SKUs of products to retrieve inventory availability data for. | Optional; can’t combine with stockKeepingUnit | 51.0 |
| useCache | Boolean | Specifies whether to fetch the inventory data from the cache. The default value is true. | Optional | 51.0 |