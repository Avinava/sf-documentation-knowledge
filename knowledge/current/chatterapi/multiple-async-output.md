---
title: "Multiple Async Output"
domain: chatterapi
topic: multiple-async-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:19.790Z
estimatedTokens: 298
keywords: [Multiple, Async, Output, IDs, asynchronous, background, operations, includes, operation, regardless, whether, calls, made, external, payment]
---

# Multiple Async Output

> IDs of the asynchronous background operations. This output only
      includes the operation IDs, regardless of whether calls are made to an external payment
      gateway. It doesn’t include any errors from the operations.

# Multiple Async Output

IDs of the asynchronous background operations. This output only includes the operation IDs, regardless of whether calls are made to an external payment gateway. It doesn’t include any errors from the operations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asyncOutputs | Async Output[] | List of IDs of background operations. | Big, 56.0 | 56.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 56.0 | 56.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 56.0 | 56.0 |

#### See Also

-   [Order Summaries, Multiple Ensure Funds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_multiple_ensure_funds_async.htm "Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

## Related Topics

- Async
                  Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_async_output.htm)
- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Order Summaries, Multiple Ensure Funds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_multiple_ensure_funds_async.htm)
