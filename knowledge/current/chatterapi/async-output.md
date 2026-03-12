---
title: "Async Output"
domain: chatterapi
topic: async-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.258Z
estimatedTokens: 335
keywords: [Async, Output, representation, operation]
---

# Async Output

> Output representation of the async operation.

# Async Output

Output representation of the async operation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​OperationId | String | ID of the background operation. | Big, 56.0 | 56.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 56.0 | 56.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 56.0 | 56.0 |

#### See Also

-   [Order Summaries, Multiple Ensure Funds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_multiple_ensure_funds_async.htm "Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

-   [Multiple Async Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_async_output.htm "IDs of the asynchronous background operations. This output only includes the operation IDs, regardless of whether calls are made to an external payment gateway. It doesn’t include any errors from the operations.")

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Order Summaries, Multiple Ensure Funds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_multiple_ensure_funds_async.htm)
- Multiple Async Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_async_output.htm)
