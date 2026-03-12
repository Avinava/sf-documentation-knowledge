---
title: "ConnectApi.ApplyCreditResult"
domain: revenue-cloud
topic: connectapiapplycreditresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.124Z
estimatedTokens: 143
keywords: [ConnectApi.ApplyCreditResult, Connect, API, representation, credit, memo, apply, output, result]
---

# ConnectApi.ApplyCreditResult

> Connect API representation of credit memo apply output result

# ConnectApi.ApplyCreditResult

Connect API representation of credit memo apply output result

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| appliedToId | String | ID of the invoice record that the credit is applied to. | 62.0 |
| errors | List<ConnectApi.ErrorResponse> | List of errors encountered during the processing of the API request. | 62.0 |
| id | String | ID of the credit memo invoice application. | 62.0 |
| success | Boolean | Indicates whether the credit memo is successfully applied (true) or not (false). | 62.0 |
