---
title: "ConnectApi.SaleRequest"
domain: apex-reference
topic: connectapisalerequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.558Z
keywords: [ConnectApi.SaleRequest]
---

# ConnectApi.SaleRequest

# ConnectApi.SaleRequest

Payment sale input consumed by the payment sale service.

Subclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Reference to account. | Required | 54.0 |
| amount | Double | The amount of the sale request. | Required | 54.0 |
| comments | String | Optional comment for the sale request. | Optional | 54.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment output. | Required | 54.0 |
| effectiveDate | Datetime | Date that the sale request takes effect. | Required | 54.0 |
| submittedBy​Merchant | Boolean | Indicates whether the sale request is submitted by the merchant (true) or not (false). Default value is false, | Optional | 62.0 |
| paymentGatewayId | String | The payment gateway that receives the sale request. | Required | 54.0 |
| paymentGroup | ConnectApi.Payment​GroupRequest | Payment group information for the sale request. | Optional | 54.0 |
| paymentMethod | ConnectApi.SaleApi​PaymentMethod​Request | Payment method used within the sale request. | Reqiured | 54.0 |