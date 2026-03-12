---
title: "VPL360_CreateSetupIntent"
domain: media-developer-guide
topic: vpl360createsetupintent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:54.139Z
estimatedTokens: 118
keywords: [VPL360_CreateSetupIntent, Integration, Procedure, creates, setup, intent, payment, confirmation, received, VPL360, _CreateSetupIntent, Sample, Input, Output, Calls]
---

# VPL360_CreateSetupIntent

> This Integration Procedure creates a setup intent before
		payment confirmation is received.

# VPL360\_CreateSetupIntent

This Integration Procedure creates a setup intent before payment confirmation is received.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| UserId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: Create Setup Intent

-   Components:

    -   LWC: vplS360StripePaymentIntegration.js


## Calls

-   Data Mapper: VPL360-DRFetchStripeCustId

-   HTTP Action: SetupIntentCallout

## Code Examples

```
{
	"UserId": "0054W00000CRwmKQAT"
}
```

```
{
	"client_secret": "seti_PPGg0QYiFw6afa"
}
```
