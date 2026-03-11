---
title: "ConnectApi.CaptureResponse"
domain: apex-reference
topic: connectapicaptureresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.086Z
keywords: [ConnectApi.CaptureResponse]
---

# ConnectApi.CaptureResponse

# ConnectApi.CaptureResponse

Capture output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error response representation for an authorization capture. | 50.0 |
| gatewayResponse | ConnectApi.​CaptureGatewayResponse | Gateway log response containing details about gateway logs created during the process of the capture request. | 50.0 |
| payment | ConnectApi.​PaymentResponse | Payment response object for the capture request. Contains the information related to a payment object created during request processing. | 50.0 |
| paymentGatewayLogs | List<ConnectApi.​GatewayLogResponse> | Gateway log collection for an authorization capture. | 50.0 |
| paymentGroup | ConnectApi.​PaymentGroupResponse | Payment group associated with the capture request. | 50.0 |