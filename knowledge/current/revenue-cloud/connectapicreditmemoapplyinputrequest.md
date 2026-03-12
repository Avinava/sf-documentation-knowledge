---
title: "ConnectApi.CreditMemoApplyInputRequest"
domain: revenue-cloud
topic: connectapicreditmemoapplyinputrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.039Z
estimatedTokens: 137
keywords: [ConnectApi.CreditMemoApplyInputRequest, Input, representation, request, apply, credit, memo, invoice.]
---

# ConnectApi.CreditMemoApplyInputRequest

> Input representation of the request to apply a credit memo to an invoice.

# ConnectApi.CreditMemoApplyInputRequest

Input representation of the request to apply a credit memo to an invoice.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applications | List<ConnectApi.ApplicationsRequest> | List of one or more applications to apply the credit memo for. Each application represents an invoice that’s credited by using the balance of the specified credit memo. | Required | 62.0 |
| creditMemoId | String | ID of the credit memo record. | Required | 62.0 |

## Related Topics

- ConnectApi.ApplicationsRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_apply_application.htm)
