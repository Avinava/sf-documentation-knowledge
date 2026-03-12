---
title: "Capture Output"
domain: chatterapi
topic: capture-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.481Z
estimatedTokens: 242
keywords: [Capture, Output, representation]
---

# Capture Output

> Capture output representation.

# Capture Output

Capture output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error response representation for capture. | Big, 48.0 | 48.0 |
| gatewayResponse | Capture Gateway Response Output | Gateway log response containing details about gateway logs created during the processing of the capture request. | Big, 48.0 | 48.0 |
| payment | Payment Output | Payment response object for the capture request. Contains the information related to a payment object created during request processing. | Big, 48.0 | 48.0 |
| paymentGateway​Logs | Gateway Log Output[] | Payment gateway log response containing details of the PaymentGatewayLog entity records created during the processing of the capture request. | Big, 48.0 | 48.0 |
| paymentGroup | Payment Group Output | Contains details related to the payment group record. | Big, 48.0 | 48.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Capture Gateway Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_capture_gateway_response.htm)
- Payment Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_output.htm)
- Gateway Log Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_gateway_log_output.htm)
- Payment Group Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_group.htm)
