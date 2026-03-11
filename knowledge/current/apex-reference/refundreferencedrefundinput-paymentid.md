---
title: "refund(ReferencedRefundInput, paymentId)"
domain: apex-reference
topic: refundreferencedrefundinput-paymentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.516Z
keywords: [refund, ReferencedRefundInput, paymentId, Refund, authorized, payment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# refund(ReferencedRefundInput, paymentId)

> Refund an authorized payment.

### refund(ReferencedRefundInput, paymentId)

Refund an authorized payment.

To access Payments methods, you need these permissions.

-   Salesforce Order Management License
-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License. Your Salesforce admin assigns it to your profile.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.ReferencedRefundResponse refund(ConnectApi.ReferencedRefundRequest ReferencedRefundInput, String paymentId)

#### Parameters

ReferencedRefundInput

Type: [ConnectApi.ReferencedRefundRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_referenced_refund.htm "Referenced refund input.")

A ConnectApi.ReferencedRefundRequest object with information about the refund.

paymentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the payment to be refunded. Required.

#### Return Value

Type: [ConnectApi.ReferencedRefundResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_service_output.htm "Refund comprehensive output.")