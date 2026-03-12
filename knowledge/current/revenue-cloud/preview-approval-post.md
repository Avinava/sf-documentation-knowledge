---
title: "Preview Approval (POST)"
domain: revenue-cloud
topic: preview-approval-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.053Z
estimatedTokens: 275
keywords: [Preview, Approval, POST, approval, levels, record, associated, level, details, chains, approvers, conditions, before, submit, approval.]
---

# Preview Approval (POST)

> Preview the approval levels of a record and associated level details,
      approval chains, approvers, and conditions before you submit the record for an
    approval.

# Preview Approval (POST)

Preview the approval levels of a record and associated level details, approval chains, approvers, and conditions before you submit the record for an approval.

For example, a sales rep working on a quote can preview the approval levels for a quote before submitting the quote for approval.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| flowApiName | String | API name of the auto-launched flow. | Required | 65.0 |
| objectApiName | String | API name of the object to preview the approvals for. | Required | 65.0 |
| recordId | String | ID of the record to preview the approvals for. | Required | 65.0 |

Response body for POST

[Preview Approval](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_preview_approval_output.htm "Output representation of the details of a preview approval request.")

## Code Examples

```
/connect/advanced-approvals/approval-submission/preview
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/advanced-approvals/approval-submission/preview
```

```
{
  "flowApiName": "QuoteApprovals",
  "objectApiName": "Quote",
  "recordId": "0Q0DU0000005HZC0A2"
}
```

## Related Topics

- Preview
              Approval (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_preview_approval_output.htm)
