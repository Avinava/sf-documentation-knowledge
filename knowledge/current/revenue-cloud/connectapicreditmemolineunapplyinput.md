---
title: "ConnectApi.CreditMemoLineUnapplyInput"
domain: revenue-cloud
topic: connectapicreditmemolineunapplyinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:41.450Z
estimatedTokens: 139
keywords: [ConnectApi.CreditMemoLineUnapplyInput, unapply, credit, memo, line, invoice]
---

> Input representation of the details of the request to unapply a credit memo line from an
    invoice line.

# ConnectApi.CreditMemoLineUnapplyInput

Input representation of the details of the request to unapply a credit memo line from an invoice line.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemoLineInvoiceLineId | String | ID of the credit memo line invoice line record. | Required | 62.0 |
| description | String | Explanation or reason for unapplying the credit memo line. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo line. | Optional | 62.0 |
