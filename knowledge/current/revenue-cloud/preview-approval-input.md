---
title: "Preview Approval Input"
domain: revenue-cloud
topic: preview-approval-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.149Z
estimatedTokens: 128
keywords: [Preview, Approval, Input, representation]
---

# Preview Approval Input

> Input representation of the details of the request to preview an approval.

# Preview Approval Input

Input representation of the details of the request to preview an approval.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| flowApiName | String | API name of the auto-launched flow. | Required | 65.0 |
| objectApiName | String | API name of the object to preview the approvals for. | Required | 65.0 |
| recordId | String | ID of the record to preview the approvals for. | Required | 65.0 |

## Code Examples

```
{
  "flowApiName": "QuoteApprovals",
  "objectApiName": "Quote",
  "recordId": "0Q0DU0000005HZC0A2"
}
```
