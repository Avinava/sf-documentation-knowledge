---
title: "ConnectApi.CreditMemoUnapplyInputRequest"
domain: revenue-cloud
topic: connectapicreditmemounapplyinputrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.089Z
estimatedTokens: 129
keywords: [Input, representation, unapply, credit, memo, invoice]
---

# ConnectApi.CreditMemoUnapplyInputRequest

> Input representation of the request to unapply a credit memo from an invoice.

# ConnectApi.CreditMemoUnapplyInputRequest

Input representation of the request to unapply a credit memo from an invoice.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemoInvApplicationId | String | ID of the credit memo invoice application. | Required | 62.0 |
| description | String | Explanation or reason for unapplying the credit memo. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo. | Optional | 62.0 |
