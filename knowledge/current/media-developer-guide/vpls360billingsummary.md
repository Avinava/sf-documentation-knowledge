---
title: "VPLS360_BillingSummary"
domain: media-developer-guide
topic: vpls360billingsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.233Z
estimatedTokens: 134
keywords: [VPLS360_BillingSummary, Integration, Procedure, fetches, stub, data, billing, summary, invoices, VPLS360, _BillingSummary, Sample, Input, Output, Calls]
---

# VPLS360_BillingSummary

> This Integration Procedure fetches stub data for the
		billing summary and for invoices.

# VPLS360\_BillingSummary

This Integration Procedure fetches stub data for the billing summary and for invoices.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| userId | Required |

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

-   Data Mapper: FetchAccountMasterDetails

-   Integration Procedure: VPL360\_InvoiceInfo

## Code Examples

```
{
	"userId": "0054W0100087rTN"
}
```

```
{
	"AccountId": "",
	"AssetActivationDate": "",
	"AssetCreatedDate": "",
	"AssetInstallDate": "",
	"BillingInfo": [{
		"InvoiceAmount": "$67.50",
		"InvoiceDate": "7-Jan-2021",
		"InvoiceDownload": "/resource/VPLS360Invoice/VPLInvoices/VPLInvoiceJan2020.pdf",
		"PaymentStatus": "Paid"
	}],
	"DueMonthly": "$67.50",
	"LastPaymentDate": "2020-04-07",
	"MonthlyCharges": 67.5,
	"PaperlessBilling": "off",
	"Payment": null,
	"nextpaymentdate": "2020-05-07"
}
```
