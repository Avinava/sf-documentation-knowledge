---
title: "Sustainability Purchase Input"
domain: netzero-cloud-dev-guide
topic: sustainability-purchase-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.274Z
estimatedTokens: 275
keywords: [Sustainability, Purchase, Input, representation, carbon, credit]
---

# Sustainability Purchase Input

> Input representation of the sustainability carbon credit
      purchase.

# Sustainability Purchase Input

Input representation of the sustainability carbon credit purchase.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billingAddress | Billing Address Input | The billing address associated with the sustainability purchase. | Optional | 57.0 |
| description | String | The description of the sustainability purchase. | Optional | 57.0 |
| externalIdentifier | String | The external identifier of the data that is imported for the carbon credit project. | Required | 57.0 |
| invoiceNumber | String | The invoice number associated with the sustainability purchase. | Optional | 57.0 |
| name | String | The name of the environmental project that generates carbon credits by removing greenhouse gases or preventing a certain quantity of greenhouse gases from being released. | Required | 57.0 |
| purchaseOrderNumber | String | The purchase order number associated with the sustainability purchase. | Optional | 57.0 |
| type | String | The type of the sustainability purchase. | Required | 57.0 |

## Related Topics

- Billing Address Input (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_requests_billing_address_input.htm)
