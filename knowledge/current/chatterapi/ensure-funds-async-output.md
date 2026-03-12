---
title: "Ensure Funds Async Output"
domain: chatterapi
topic: ensure-funds-async-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.447Z
estimatedTokens: 306
keywords: [Ensure, Funds, Async, Output, asynchronous, background, operation, includes, regardless, whether, call, made, external, payment, gateway]
---

# Ensure Funds Async Output

> ID of the asynchronous background operation. This output only
      includes the operation ID, regardless of whether a call is made to an external payment
      gateway. It doesn’t include any errors from the operation.

# Ensure Funds Async Output

ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| background​OperationId | String | ID of the background operation. | Big, 48.0 | 48.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 48.0 | 48.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 48.0 | 48.0 |

#### See Also

-   [Order Summaries, Ensure Funds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_funds_async.htm "Ensure funds for an Invoice and apply them to it and optional define a sequence to capture payments in. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status.")

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Order Summaries, Ensure Funds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_funds_async.htm)
