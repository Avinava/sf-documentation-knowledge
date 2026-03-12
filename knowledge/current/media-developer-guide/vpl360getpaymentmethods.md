---
title: "VPL360_getPaymentMethods"
domain: media-developer-guide
topic: vpl360getpaymentmethods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.879Z
estimatedTokens: 142
keywords: [VPL360_getPaymentMethods, Integration, Procedure, fetches, payment, subscriber's, credit, card, Stripe, VPL360, _getPaymentMethods, Sample, Input, Output, Calls]
---

# VPL360_getPaymentMethods

> This Integration Procedure fetches payment details such as
        the subscriber's credit card information from Stripe

# VPL360\_getPaymentMethods

This Integration Procedure fetches payment details such as the subscriber's credit card information from Stripe

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Billing Card on Overview Page

-   Components:

    -   LWC: vplS360SelfCareOverviewBillingCard.js

    -   LWC: vplS360SelfCareBillingDetails.js


## Calls

-   Data Mapper: VPL360csr-DRFetchStripeCustId

-   HTTP Action: GetPaymentMethodFromStripe

## Code Examples

```
{
	"AccountId": "0014W00002Buu2OQAR"
}
```

```
{
  "brand": "visa",
  "card": "4242",
  "country": "US",
  "exp_month": 4,
  "exp_year": 2024
}
```
