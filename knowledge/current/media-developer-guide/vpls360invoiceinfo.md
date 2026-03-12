---
title: "VPLS360_InvoiceInfo"
domain: media-developer-guide
topic: vpls360invoiceinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.242Z
estimatedTokens: 112
keywords: [VPLS360_InvoiceInfo, Integration, Procedure, fetches, stub, data, billing, summary, invoices, VPLS360, _InvoiceInfo, Sample, Input, Output, Calls]
---

# VPLS360_InvoiceInfo

> This Integration Procedure fetches stub data for the
		billing summary and for invoices.

# VPLS360\_InvoiceInfo

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

None.

## Code Examples

```
{
	"userId": "0054W0100087rTN"
}
```

```
{
	"Billing": [{
			"InvoiceAmount": "$67.50",
			"InvoiceDate": "7-April-2020",
			"InvoiceDownload": "/resource/VPLS360Invoice/VPLInvoices/VPLInvoiceApr2020.pdf",
			"PaymentStatus": "Failed"
		},
		{
			"InvoiceAmount": "$67.50",
			"InvoiceDate": "7-March-2020",
			"InvoiceDownload": "/resource/VPLS360Invoice/VPLInvoices/VPLInvoiceMarch2020.pdf",
			"PaymentStatus": "Paid"
		}
	]
}
```
