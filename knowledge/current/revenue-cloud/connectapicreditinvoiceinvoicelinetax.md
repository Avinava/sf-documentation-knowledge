---
title: "ConnectApi.CreditInvoiceInvoiceLineTax"
domain: revenue-cloud
topic: connectapicreditinvoiceinvoicelinetax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.031Z
estimatedTokens: 161
keywords: [ConnectApi.CreditInvoiceInvoiceLineTax, Input, representation, details, tax, lines, created, manually, invoice, line.]
---

# ConnectApi.CreditInvoiceInvoiceLineTax

> Input representation of the details of the tax lines to be created manually for the
    invoice line.

# ConnectApi.CreditInvoiceInvoiceLineTax

Input representation of the details of the tax lines to be created manually for the invoice line.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| taxAmount | Double | Amount of tax to be applied related to this invoice line. | Required | 62.0 |
| taxCode | String | Tax code to be applied related to this invoice line to create the tax line. | Optional | 62.0 |
| taxName | String | Name of tax to be applied related to this invoice line. | Optional | 62.0 |
| taxRate | Double | Tax rate used to create the tax line. | Optional | 62.0 |
