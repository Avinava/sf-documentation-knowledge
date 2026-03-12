---
title: "ConnectApi.ApplicationsRequest"
domain: revenue-cloud
topic: connectapiapplicationsrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.077Z
estimatedTokens: 148
keywords: [ConnectApi.ApplicationsRequest, Connect, API, representation, application, item, input, credit, memo, apply]
---

# ConnectApi.ApplicationsRequest

> Connect API representation of an application item input request for credit memo apply api

# ConnectApi.ApplicationsRequest

Connect API representation of an application item input request for credit memo apply api

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Credit amount to be applied to the invoice. | Required | 62.0 |
| appliedToId | String | ID of the invoice record to apply the credit for. | Required | 62.0 |
| description | String | Explanation or reason for applying the credit memo. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo. | Optional | 62.0 |
