---
title: "ConnectApi.UnapplyCreditResult"
domain: revenue-cloud
topic: connectapiunapplycreditresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.137Z
estimatedTokens: 137
keywords: [ConnectApi.UnapplyCreditResult, Output, representation, details, credit, memo, invoice, application, record, status, request.]
---

# ConnectApi.UnapplyCreditResult

> Output representation of the details of the credit memo invoice application record with
    the status of the request.

# ConnectApi.UnapplyCreditResult

Output representation of the details of the credit memo invoice application record with the status of the request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorResponse> | List of errors encountered during the processing of the API request. | 62.0 |
| id | String | ID of the credit memo invoice application record. | 62.0 |
| success | Boolean | Indicates whether the credit memo is successfully unapplied (true) or not (false). | 62.0 |
