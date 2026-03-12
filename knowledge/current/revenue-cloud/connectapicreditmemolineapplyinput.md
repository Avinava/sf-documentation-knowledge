---
title: "ConnectApi.CreditMemoLineApplyInput"
domain: revenue-cloud
topic: connectapicreditmemolineapplyinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.083Z
estimatedTokens: 151
keywords: [ConnectApi.CreditMemoLineApplyInput, Input, representation, apply, credit, memo, line, invoice]
---

# ConnectApi.CreditMemoLineApplyInput

> Input representation of the details of the request to apply a credit memo line to an
    invoice line.

# ConnectApi.CreditMemoLineApplyInput

Input representation of the details of the request to apply a credit memo line to an invoice line.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applyCreditDetails | List<ConnectApi.CreditDetailsApplyInput> | List of one or more applications to apply the credit memo line for. Each application represents an invoice line that’s credited by using the balance of the specified credit memo line. | Required | 62.0 |
| creditMemoLineId | String | ID of the credit memo line record. | Required | 62.0 |

## Related Topics

- ConnectApi.CreditDetailsApplyInput (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_application.htm)
