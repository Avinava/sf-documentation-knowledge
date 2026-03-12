---
title: "OCI Inventory Record Output"
domain: chatterapi
topic: oci-inventory-record-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.984Z
estimatedTokens: 245
keywords: [OCI, Inventory, Record, Output, availability, data, product]
---

# OCI Inventory Record Output

> Inventory availability data for a product.

# OCI Inventory Record Output

Inventory availability data for a product.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| availableToFulfill | Double | The Available To Fulfill quantity. | Big, 51.0 | 51.0 |
| availableToOrder | Double | The Available To Order quantity. | Big, 51.0 | 51.0 |
| effectiveDate | String | The effective date of the inventory. Indicates if the SKU exists in the inventory. | Big, 51.0 | 51.0 |
| exists | Boolean | Indicates if the SKU exists in the inventory. | Big, 62.0 | 62.0 |
| futures | OCI Future Inventory Output[] | A list of any expected future inventory restocks. | Big, 51.0 | 51.0 |
| onHand | Double | The On Hand quantity. | Big, 51.0 | 51.0 |
| reserved | Double | The Reserved quantity. | Big, 51.0 | 51.0 |
| safetyStockCount | Double | The Safety Stock Count. | Big, 51.0 | 51.0 |
| stockKeepingUnit | String | The SKU of the product. | Big, 51.0 | 51.0 |

## Related Topics

- OCI Future Inventory Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_future_inventory_output.htm)
