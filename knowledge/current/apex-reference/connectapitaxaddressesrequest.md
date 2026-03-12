---
title: "ConnectApi.TaxAddressesRequest"
domain: apex-reference
topic: connectapitaxaddressesrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.562Z
estimatedTokens: 142
keywords: [ConnectApi.TaxAddressesRequest, Addresses, including, Bill, address, Ship, Sold]
---

# ConnectApi.TaxAddressesRequest

> Addresses, including the Bill To address, Ship From address, Ship to
      address, and Sold To address.

# ConnectApi.TaxAddressesRequest

Addresses, including the Bill To address, Ship From address, Ship to address, and Sold To address.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billTo | ConnectApi.​TaxAddress​Request | Bill To address. | Optional | 55.0 |
| shipFrom | ConnectApi.​TaxAddress​Request | Ship From address. | Optional | 55.0 |
| shipTo | ConnectApi.​TaxAddress​Request | Ship To address. | Optional | 55.0 |
| soldTo | ConnectApi.​TaxAddress​Request | Sold To address. | Optional | 55.0 |

## Related Topics

- ConnectApi.​TaxAddress​Request (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_tax_address.htm)
