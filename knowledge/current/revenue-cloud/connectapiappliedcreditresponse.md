---
title: "ConnectApi.AppliedCreditResponse"
domain: revenue-cloud
topic: connectapiappliedcreditresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.131Z
estimatedTokens: 156
keywords: [ConnectApi.AppliedCreditResponse, Output, representation, list, applied, credit, memo, line, results.]
---

# ConnectApi.AppliedCreditResponse

> Output representation of the list of applied credit memo line results.

# ConnectApi.AppliedCreditResponse

Output representation of the list of applied credit memo line results.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| creditMemoLineInvoiceLineId | String | ID of the credit memo line invoice line ID. | 62.0 |
| errors | List<ConnectApi.ErrorResponse> | List of errors encountered during the processing of the API request. | 62.0 |
| invoiceLineId | String | ID of the invoice line record that the credit is applied to. | 62.0 |
| success | Boolean | Indicates whether the credit memo line is successfully applied (true) or not (false). | 62.0 |
