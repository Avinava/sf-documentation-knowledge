---
title: "ConnectApi.ConvertNegativeInvoiceLinesResult"
domain: revenue-cloud
topic: connectapiconvertnegativeinvoicelinesresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:01.988Z
estimatedTokens: 142
keywords: [credit, memo, along, status]
---

> Output representation of the details of the credit memo along with the status of the
    request.

# ConnectApi.ConvertNegativeInvoiceLinesResult

Output representation of the details of the credit memo along with the status of the request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorResponse> | List of errors encountered during the processing of the API request. | 62.0 |
| id | String | ID of the credit memo that’s created after the conversion of the negative invoice lines. | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | 62.0 |
