---
title: "ConnectApi.AbstractGatewayCommonResponse"
domain: apex-reference
topic: connectapiabstractgatewaycommonresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.781Z
keywords: [ConnectApi.AbstractGatewayCommonResponse]
---

# ConnectApi.AbstractGatewayCommonResponse

# ConnectApi.AbstractGatewayCommonResponse

Payment gateway response fields commonly used in payment services.

This class is abstract.

Superclass of [ConnectApi.AbstractGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_gateway_txn_response.htm "Payment gateway response fields used in sale, authorization, and capture services.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| gatewayAvsCode | String | Used to verify the address mapped to a payment method when the payments platform requests tokenization from the payment gateway. | 50.0 |
| gatewayDate | Datetime | Date when the notification occurred. Some gateways don’t send this value. | 50.0 |
| gatewayMessage | String | Error messages that the gateway returned for the notification request. Maximum length of 255 characters. | 50.0 |
| gatewayResultCode | String | Gateway-specific result code. You can map the result code to a Salesforce-specific result code. Maximum length of 64 characters. | 50.0 |
| gatewayResultCodeDescription | String | A description of the gateway-specific result code that a payment gateway returned. Maximum length of 1,000 characters. | 50.0 |
| salesforceResultCode | String | The Salesforce result code for the gateway result code. | 50.0 |