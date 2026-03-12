---
title: "VPL360CSR_CreateSetupIntentCSR"
domain: media-developer-guide
topic: vpl360csrcreatesetupintentcsr
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:54.177Z
estimatedTokens: 145
keywords: [VPL360CSR_CreateSetupIntentCSR, Integration, Procedure, creates, setup, intent, confirming, payment, VPL360CSR, _CreateSetupIntentCSR, Sample, Input, Output, Calls]
---

# VPL360CSR_CreateSetupIntentCSR

> This Integration Procedure creates setup intent before
      confirming payment.

# VPL360CSR\_CreateSetupIntentCSR

This Integration Procedure creates setup intent before confirming payment.

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

-   Flows

    -   Agent console: Payment

-   Components:

    -   Omniscript: vpls360csr\_BuyAddonsV3\_English

    -   Omniscript: vpls360csr\_ChangeBasePackage\_English


## Calls

-   Data Mapper: vpls360Csr-FetchAccountFromInteraction

-   Data Mapper: VPL360csr-DRFetchStripeCustId

-   HTTP Action: SetupIntentCallout

## Code Examples

```
{
    "ContextId": "a1S4W000006A1ZyUAK"
}
```

```
{
   "client_secret": "seti_1I139VKOGFB3U5JQnpWBcgZi_secret_IcHiryRJKysgCyPlDYWYHHJhXr64XQ8"
}
```
