---
title: "ConnectApi.SaleResponse"
domain: apex-reference
topic: connectapisaleresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.969Z
keywords: [ConnectApi.SaleResponse]
---

# ConnectApi.SaleResponse

# ConnectApi.SaleResponse

Payment sale response.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error representation for the payment sale. | 54.0 |
| gatewayResponse | ConnectApi.​SaleGatewayResponse | Information from the payment gateway following the sale request. | 54.0 |
| payment | ConnectApi.​PaymentResponse | Information about the payment used in the sale request. | 54.0 |
| paymentGateway​Logs | List<ConnectApi.​GatewayLogResponse> | Collection of responses from the gateway following the sale request. | 54.0 |
| paymentGroup | ConnectApi.​PaymentGroupResponse | Payment group used in the sale request. | 54.0 |
| paymentMethod | ConnectApi.​PaymentMethodResponse | Payment method used in the sale request. | 54.0 |