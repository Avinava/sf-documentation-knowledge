---
title: "ConnectApi.ReferencedRefundResponse"
domain: apex-reference
topic: connectapireferencedrefundresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.917Z
keywords: [ConnectApi.ReferencedRefundResponse]
---

# ConnectApi.ReferencedRefundResponse

# ConnectApi.ReferencedRefundResponse

Refund comprehensive output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error response representation for the refund. | 50.0 |
| gatewayResponse | ConnectApi.​RefundGatewayResponse | Gateway response received for the processed refund request. | 50.0 |
| paymentGatewayLogs | List<ConnectApi.​GatewayLogResponse> | Gateway log collection representation for the refund. | 50.0 |
| paymentGroup | ConnectApi.​PaymentGroupResponse | Payment group associated with the refund. | 50.0 |
| refund | ConnectApi.​RefundResponse | Refund response representation. | 50.0 |