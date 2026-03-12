---
title: "Invoice Draft to Posted Status (POST)"
domain: revenue-cloud
topic: invoice-draft-to-posted-status-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.612Z
estimatedTokens: 346
keywords: [Invoice, Draft, Posted, Status, POST]
---

# Invoice Draft to Posted Status (POST)

> Update the status of the invoice from Draft to
    Posted.

# Invoice Draft to Posted Status (POST)

Update the status of the invoice from Draft to Posted.

This API calls an external tax engine or provides information to your tax adapter implementation to calculate taxes for the draft invoice, post the invoice, and update the related billing schedules and billing periods.

Special Access Rules

You need the Billing Operations User permission set to use this API.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Splunk correlation ID to track the messages that are related to the request and are logged in Splunk by the different services involved in the request. If the ID isn’t specified, the service creates a random Universally Unique Identifier (UUID). | Optional | 62.0 |
| invoiceIds | String[] | IDs of the invoice records in Draft status to be posted. You can post one draft invoice per API request. | Required | 62.0 |

Response body for POST

[Revenue Async Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_revenue_async_output.htm "Output representation of the result of the API request with the request identifier.")

## Code Examples

```
/commerce/invoicing/invoices/collection/actions/post
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoices/collection/actions/post
```

```
{
  "invoiceIds": ["3ttxx0000004CIjAAM"]
}
```

## Related Topics

- Revenue Async Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_revenue_async_output.htm)
