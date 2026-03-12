---
title: "ConnectApi.CreditMemoLineUnappliedResponse"
domain: revenue-cloud
topic: connectapicreditmemolineunappliedresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.163Z
estimatedTokens: 146
keywords: [Output, representation, credit, memo, line, invoice, record, status]
---

# ConnectApi.CreditMemoLineUnappliedResponse

> Output representation of the details of the credit memo line invoice line record with the
    status of the request.

# ConnectApi.CreditMemoLineUnappliedResponse

Output representation of the details of the credit memo line invoice line record with the status of the request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| creditMemoLineInvoiceLineId | String | ID of the credit memo line invoice line record. | 62.0 |
| errors | List<ConnectApi.ErrorResponse> | List of errors encountered during the processing of the API request. | 62.0 |
| success | Boolean | Indicates whether the credit memo line is successfully unapplied (true) or not (false). | 62.0 |
