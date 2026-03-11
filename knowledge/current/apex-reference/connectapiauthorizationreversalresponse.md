---
title: "ConnectApi.AuthorizationReversalResponse"
domain: apex-reference
topic: connectapiauthorizationreversalresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.991Z
keywords: [ConnectApi.AuthorizationReversalResponse]
---

# ConnectApi.AuthorizationReversalResponse

# ConnectApi.AuthorizationReversalResponse

Authorization Reversal output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error response representation for the authorization reversal. | 51.0 |
| gatewayResponse | ConnectApi.​AuthReversal​GatewayResponse | Gateway response representation for authorization reversal. | 51.0 |
| paymentAuthAdjustment | ConnectApi.​PaymentAuth​AdjustmentResponse | Payment authorization adjustment response representation for the authorization reversal. | 51.0 |
| paymentGatewayLogs | List<ConnectApi.​GatewayLogResponse> | Gateway log collection representation for the authorization reversal. | 51.0 |