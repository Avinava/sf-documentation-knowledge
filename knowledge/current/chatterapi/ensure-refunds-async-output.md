---
title: "Ensure Refunds Async Output"
domain: chatterapi
topic: ensure-refunds-async-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.454Z
estimatedTokens: 284
keywords: [Ensure, Refunds, Async, Output, asynchronous, background, operation, includes, regardless, whether, call, made, external, payment, gateway]
---

# Ensure Refunds Async Output

> ID of the asynchronous background operation. This output only
      includes the operation ID, regardless of whether a call is made to an external payment
      gateway. It doesn’t include any errors from the operation.

# Ensure Refunds Async Output

ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​OperationId | String | ID of the background operation. | Big, 47.0 | 47.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 48.0 | 48.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 48.0 | 48.0 |

#### See Also

-   [Order Summaries, Ensure Refunds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Order Summaries, Ensure Refunds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm)
