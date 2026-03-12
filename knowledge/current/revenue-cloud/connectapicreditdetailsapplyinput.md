---
title: "ConnectApi.CreditDetailsApplyInput"
domain: revenue-cloud
topic: connectapicreditdetailsapplyinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.080Z
estimatedTokens: 173
keywords: [ConnectApi.CreditDetailsApplyInput, Input, representation, specify, applications, apply, credit, memo, line, application, representing, invoice]
---

# ConnectApi.CreditDetailsApplyInput

> Input representation of the request to specify one or more applications to apply a credit
    memo line for, with each application representing an invoice line.

# ConnectApi.CreditDetailsApplyInput

Input representation of the request to specify one or more applications to apply a credit memo line for, with each application representing an invoice line.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| appliedAmount | Double | Credit amount to be applied to the invoice line. | Required | 62.0 |
| description | String | Explanation or reason for applying the credit memo line. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo line. | Optional | 62.0 |
| invoiceLineId | String | ID of the invoice line record to apply the credit for. | Required | 62.0 |
