---
title: "ConnectApi.CreditMemoAddressesInputRequest"
domain: revenue-cloud
topic: connectapicreditmemoaddressesinputrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:41.416Z
estimatedTokens: 119
keywords: [billing, shipping, addresses]
---

> Input representation of the details of the billing and shipping addresses.

# ConnectApi.CreditMemoAddressesInputRequest

Input representation of the details of the billing and shipping addresses.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billingAddress | ConnectApi.BillingAddressRequest | Billing address for charge or adjustment line. | Optional | 62.0 |
| shippingAddress | ConnectApi.BillingAddressRequest | Shipping address for charge or adjustment line. | Optional | 62.0 |

## Related Topics

- ConnectApi.BillingAddressRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_address.htm)
