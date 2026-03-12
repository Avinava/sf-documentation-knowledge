---
title: "ConnectApi.ConvertNegativeInvoiceLinesInputRequest"
domain: revenue-cloud
topic: connectapiconvertnegativeinvoicelinesinputrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.016Z
estimatedTokens: 224
keywords: [ConnectApi.ConvertNegativeInvoiceLinesInputRequest, Input, representation, request, details, convert, negative, invoice, line, credit.]
---

# ConnectApi.ConvertNegativeInvoiceLinesInputRequest

> Input representation of the request details to convert a negative invoice line into a
    credit.

# ConnectApi.ConvertNegativeInvoiceLinesInputRequest

Input representation of the request details to convert a negative invoice line into a credit.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description stamped on the credit memo that’s created after the negative invoice line conversion. | Optional | 62.0 |
| effectiveDate | String | Date stamped on the credit memo that’s created after the negative invoice line conversion. | Required | 62.0 |
| invoiceId | String | ID of the invoice whose negative invoice lines must be converted into a posted credit memo. | Required | 62.0 |
| invoiceLines | List<String> | Complete list of the negative invoice lines along with the associated invoice line taxes. The specified negative invoice lines are converted into a posted credit memo. | Required | 62.0 |
