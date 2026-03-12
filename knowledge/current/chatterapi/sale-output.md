---
title: "Sale Output"
domain: chatterapi
topic: sale-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.018Z
estimatedTokens: 275
keywords: [Sale, Output, Payment]
---

# Sale Output

> Payment sale output.

# Sale Output

Payment sale output.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error response representation for the payment sale request. | Big, 54.0 | 54.0 |
| gatewayResponse | Sale Gateway Response | Gateway log response containing details about gateway logs created during the processing of the capture request. | Big, 54.0 | 54.0 |
| payment | Payment Output | Payment response object for the capture request. Contains the information related to a payment object created during request processing. | Big, 54.0 | 54.0 |
| paymentGatewayLogs | Gateway Log Output[] | Payment gateway log response containing details of the PaymentGatewayLog entity records created during the processing of the sale request. | Big, 54.0 | 54.0 |
| paymentGroup | Payment Group Output | Represents a payment group sent to the gateway as part of the sale request. | Big, 54.0 | 54.0 |
| paymentMethod | Payment Method Output | Represents the payment method sent with the sale request. | Big, 54.0 | 54.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Sale Gateway Response (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_sale_gateway_response.htm)
- Payment Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_output.htm)
- Gateway Log Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_gateway_log_output.htm)
- Payment Group Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_group.htm)
- Payment Method Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_method_output.htm)
