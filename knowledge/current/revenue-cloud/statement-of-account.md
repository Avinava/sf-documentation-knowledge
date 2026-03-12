---
title: "Statement of Account"
domain: revenue-cloud
topic: statement-of-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.546Z
estimatedTokens: 243
keywords: [Statement, Account, Output, representation, details, generated, statement, account, async, tracking, details.]
---

# Statement of Account

> Output representation of the details of the generated statement of account with async
    tracking details.

# Statement of Account

Output representation of the details of the generated statement of account with async tracking details.

JSON example

This example shows a sample successful response.

```

```

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Primary account ID the statement is generated for. | Big, 66.0 | 66.0 |
| errors | Error Response[] | List of errors encountered during the processing of the API request. | Big, 66.0 | 66.0 |
| requestIdentifier | String | Unique identifier for the request. | Big, 66.0 | 66.0 |
| statusURL | String | Status URL to track the operation. | Big, 66.0 | 66.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Big, 66.0 | 66.0 |
| templateId | String | Document template ID that's used to generate the PDF. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "requestIdentifier": "a0Bxx000000001ZEAQ",
  "statusURL": "/services/data/v60.0/commerce/billing/document-generation-process/a0Bxx000000001ZEAQ/status",
  "success": true,
  "accountId": "001xx000003DGb2AAG",
  "templateId": "0TRxx000000001XGAQ",
  "errors": null
}
```

```
{
  "success": false,
  "errors": [
    {
      "code": "ACCOUNT_NOT_FOUND",
      "message": "Account with ID 001XX000004DKy5YAG not found",
      "field": "accountId"
    }
  ]
}
```

## Related Topics

- Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_error_response.htm)
