---
title: "Clone Sales Transaction (POST)"
domain: revenue-cloud
topic: clone-sales-transaction-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.669Z
estimatedTokens: 407
keywords: [Clone, Sales, Transaction, POST, Create, clone, sales, transaction, such, quote, order., line, item, order, record, its, related, records, configurations.]
---

# Clone Sales Transaction (POST)

> Create a clone of a sales transaction, such as a quote or an order.
      You can also clone a quote line item or an order item record with its related records and
      configurations.

# Clone Sales Transaction (POST)

Create a clone of a sales transaction, such as a quote or an order. You can also clone a quote line item or an order item record with its related records and configurations.

This API supports the cloning of records for these objects.

-   Quote
-   QuoteLineItem
-   OrderItem
-   QuoteLineGroup
-   Order
-   OrderItemGroup

You can clone all items in a quote line group or order item group when the record to clone is a quote line group or an order item group record.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

This is a sample request to clone a record within a sales transaction.

```

```

This is a sample request to clone all line items in a ramped group within a sales transaction.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordIds | String[] | ID of the record to be cloned. You can specify a single record ID only. | Required | 64.0 |
| salesTransactionId | String | ID of the sales transaction related to the record IDs to clone. | Required | 64.0 |
| options | Clone Options Input | Specifies options to clone a ramp segment within a sales transaction. You can clone only the last ramp segment. | Optional | 65.0 |

Response body for POST

[Clone Sales Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_clone_sales_transaction_output.htm "Output representation for the result of cloning records within a sales transaction.")

## Code Examples

```
/connect/rev/sales-transaction/actions/clone
```

```
https://<varname>yourInstance</varname>.salesforce.com/services/data/v64.0/connect/rev/sales-transaction/actions/clone
```

```
{
  "recordIds": ["0QLxx0000004CBYGA2"],
  "salesTransactionId": "0Q0xx0000004CE0CAM"
}
```

```
{
  "recordIds": ["0QLxx0000004CBYGA2"],
  "salesTransactionId": "0Q0xx0000004CE0CAM",
  "options": {
    "lineScope": "AllLines"
  }
}
```

## Related Topics

- Clone Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_clone_options_input.htm)
- Clone Sales
              Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_clone_sales_transaction_output.htm)
