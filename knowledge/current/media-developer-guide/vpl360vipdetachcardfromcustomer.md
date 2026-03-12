---
title: "VPL360_VIP_DetachcardFromCustomer"
domain: media-developer-guide
topic: vpl360vipdetachcardfromcustomer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.166Z
estimatedTokens: 160
keywords: [VPL360_VIP_DetachcardFromCustomer, Integration, Procedure, detaches, card, payment, subscriber's, account, VPL360, _VIP, _DetachcardFromCustomer, Sample, Input, Output, Calls]
---

# VPL360_VIP_DetachcardFromCustomer

> This Integration Procedure detaches the card used for
        payment from the subscriber's account.

# VPL360\_VIP\_DetachcardFromCustomer

This Integration Procedure detaches the card used for payment from the subscriber's account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| UserId | Required |

## Sample Output

The credit card is removed from the customer account at the payment gateway, and a list of all Payment Methods is returned.

## Called By

-   Flows:

    -   Self care: Billing Details Page

-   Components:

    -   LWC: vplS360SelfCareBillingDetails.js


## Calls

-   Data Mapper: VPL360-DRFetchStripeCustId

-   HTTP Action: ListAllPaymentmethods

-   HTTP Action: DetachCardFromCustomer

## Code Examples

```
{
	"UserId": "0054W00000DMONMQA5"
}
```
