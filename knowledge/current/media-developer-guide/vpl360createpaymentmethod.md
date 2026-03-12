---
title: "VPL360_CreatePaymentmethod"
domain: media-developer-guide
topic: vpl360createpaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.135Z
estimatedTokens: 154
keywords: [VPL360_CreatePaymentmethod, Integration, Procedure, self, care, portal, payment, card, VPL360, _CreatePaymentmethod, Sample, Input, Output, Calls]
---

# VPL360_CreatePaymentmethod

> This Integration Procedure is used in the self care portal
		to create the payment card details.

# VPL360\_CreatePaymentmethod

This Integration Procedure is used in the self care portal to create the payment card details.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| cardExpMonth | Required |
| cardExpYear | Required |
| cardNumber | Required |
| cvc | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Billing Details Page

-   Components:

    -   LWC: vplS360SelfCareBillingDetails.js


## Calls

-   Data Mapper: FetchAPIFromVPLMetadata

-   Data Mapper: DRLoadPaymentMethod

-   HTTP Action: ValidateCreditCard

## Code Examples

```
{
	"AccountId": "0014W00002Buu2OQAR",
	"cardExpMonth": "08",
	"cardExpYear": "2022",
	"cardNumber": "4242424242424242",
	"cvc": "336"
}
```

```
{
	"ActualTime": 785,
	"CpuTime": 356,
	"vlocity_cmt__PaymentMethod__c_1": [{
		"UpsertSuccess": true,
		"Id": "a3Q4W000000gYc9UAE",
		"vlocity_cmt__MethodType__c": "Credit Card",
		"vlocity_cmt__ExpirationYear__c": "2022",
		"vlocity_cmt__ExpirationMonth__c": "08",
		"vlocity_cmt__CardNumber__c": "4242424242424242",
		"vlocity_cmt__AccountId__c": "0014W00002Buu2OQAR"
	}],
	"error": "OK",
	"responseType": "SObject"
}
```
