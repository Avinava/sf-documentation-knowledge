---
title: "Multiple Ensure Funds Async Input"
domain: chatterapi
topic: multiple-ensure-funds-async-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.141Z
estimatedTokens: 245
keywords: [Multiple, Ensure, Funds, Async, Input, Invoices, associated, OrderSummaries]
---

# Multiple Ensure Funds Async Input

> List of Invoices and the associated OrderSummaries.

# Multiple Ensure Funds Async Input

List of Invoices and the associated OrderSummaries.

Root XML tag

<multipleEnsureFundsAsyncInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| asyncInputs | Inner Ensure Funds Async Input[] | List of Invoices to ensure funds for and the associated OrderSummaries. | Required | 56.0 |

#### See Also

-   [Order Summaries, Multiple Ensure Funds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_multiple_ensure_funds_async.htm "Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

## Code Examples

```
{
  "asyncInputs": [
    {
      "orderSummaryId": "1Osxx0000000001",
      "invoiceId": "3ttxx0000000001"
    },
    {
      "orderSummaryId": "1Osxx0000000002",
      "invoiceId": "3ttxx0000000002"
    }
  ]
}
```

## Related Topics

- Inner
                        Ensure Funds Async Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_inner_ensure_funds_async_input.htm)
- Order Summaries, Multiple Ensure Funds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_multiple_ensure_funds_async.htm)
