---
title: "ConnectApi.VoidPostedCreditMemoOutputRepresentation"
domain: revenue-cloud
topic: connectapivoidpostedcreditmemooutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.213Z
estimatedTokens: 150
keywords: [Output, representation, posted, credit, memo]
---

# ConnectApi.VoidPostedCreditMemoOutputRepresentation

> Output representation of the request to void a posted credit memo.

# ConnectApi.VoidPostedCreditMemoOutputRepresentation

Output representation of the request to void a posted credit memo.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| debitMemoId | String | ID of the created debit memo. | 66.0 |
| errors | List<ConnectApi.ErrorResponse> | List of errors specific to this API request that were encountered during voiding the credit memo. | 66.0 |
| isSuccess | Boolean | Indicates whether the API request was successful (true) or not (false). | 66.0 |
| statusURL | String | Status URL for tracking this operation. | 66.0 |
