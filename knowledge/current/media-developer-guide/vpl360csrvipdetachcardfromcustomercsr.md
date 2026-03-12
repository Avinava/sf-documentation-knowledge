---
title: "VPL360CSR_VIP_DetachcardFromCustomerCSR"
domain: media-developer-guide
topic: vpl360csrvipdetachcardfromcustomercsr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.188Z
estimatedTokens: 148
keywords: [VPL360CSR_VIP_DetachcardFromCustomerCSR, Integration, Procedure, detaches, payment, card, customer's, account, enabling, customer, VPL360CSR, _VIP, _DetachcardFromCustomerCSR, Sample, Input]
---

# VPL360CSR_VIP_DetachcardFromCustomerCSR

> This Integration Procedure detaches a payment card from the
    customer's account, enabling the customer to update the card details.

# VPL360CSR\_VIP\_DetachcardFromCustomerCSR

This Integration Procedure detaches a payment card from the customer's account, enabling the customer to update the card details.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ContextId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Payment

    -   Agent console: Billing


## Calls

-   Data Mapper: vpls360Csr-FetchAccountFromInteraction

-   Data Mapper: VPL360csr-DRFetchStripeCustId

-   HTTP Action: ListAllPaymentmethod

-   HTTP Action: DetachCardFromCustomer

## Code Examples

```
{
    "ContextId": "a1S4W000006A1ZyUAK"
}
```

```
{
  "url": "/v1/payment_methods",
  "has_more": false,
  "data": [
    {
      "type": "card",
      "metadata": {},
      "livemode": false,
      "customer": "cus_Ic0euqbWnFYOg3",
      "created": 1608550430,
      "card": {
        "wallet": null,
        "three_d_secure_usage": {
          "supported": true
        },
        "networks": {
          "preferred": null,
          "available": [
            "visa"
          ]
        },
        "last4": "4242",
        "generated_from": null,
        "funding": "credit",
        "fingerprint": "2yNCV5uyUTRDaoJu",
        "exp_year": 2024,
        "exp_month": 4,
        "country": "US",
        "checks": {
          "cvc_check": "pass",
          "address_postal_code_check": "pass",
          "address_line1_check": null
        },
        "brand": "visa"
      },
      "billing_details": {
        "phone": null,
        "name": null,
        "email": null,
        "address": {
          "state": null,
          "postal_code": "44422",
          "line2": null,
          "line1": null,
          "country": null,
          "city": null
        }
      }

}
```
