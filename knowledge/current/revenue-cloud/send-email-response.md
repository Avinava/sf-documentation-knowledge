---
title: "Send Email Response"
domain: revenue-cloud
topic: send-email-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.939Z
estimatedTokens: 320
keywords: [Send, Email, Output, representation, API, emails, posted, invoices]
---

# Send Email Response

> Output representation of the API request to send emails for posted
    invoices.

# Send Email Response

Output representation of the API request to send emails for posted invoices.

JSON example

This example shows a sample response when the request is successful.

```

```

This example shows a sample response with an error scenario.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Send Email Error[] | List of errors that occurred while trying to enqueue the request. In case of errors while sending emails, you can check the Revenue Transaction Error Logs of the InvoiceBatchRun record and associated Invoice record.An error occurs for these scenarios.The contact email or user isn't configured.The configured email template isn't valid.Email is sent through a contact email, and the contact doesn't have an associated user. In this scenario, the emails are counted against the general email limits. An error is thrown if you exceed the email limits. | Big, 65.0 | 65.0 |
| requestIdentifier | String | Unique identifier for the request, which corresponds to the invoice batch run ID. | Big, 65.0 | 65.0 |
| success | Boolean | Indicates whether the request to start the email sending process was successfully enqueued (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "requestIdentifier": "5IRLT000001SIJB4A4",
  "success": true
}
```

```
{
  "errors": [
    {
      "errorCode": "INVALID_API_INPUT",
      "errorMessage": "Specify a valid invoiceBatchRunId."
    }
  ],
  "requestIdentifier": "5IRxx0000004CKKGA2",
  "success": false
}
```

## Related Topics

- Send Email Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_send_email_for_invoice_batch_run_error.htm)
