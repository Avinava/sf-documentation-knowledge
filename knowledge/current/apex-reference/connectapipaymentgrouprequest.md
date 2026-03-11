---
title: "ConnectApi.PaymentGroupRequest"
domain: apex-reference
topic: connectapipaymentgrouprequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.413Z
keywords: [ConnectApi.PaymentGroupRequest]
---

# ConnectApi.PaymentGroupRequest

# ConnectApi.PaymentGroupRequest

Payment group input consumed by a payment group service.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| createPaymentGroup | Boolean | Specifies whether Salesforce needs to create a payment group (true) or not (false). | Optional | 50.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Optional | 50.0 |
| id | String | ID of the payment group record. | Optional | 50.0 |
| sourceObjectId | String | Source object ID of the payment group record. Supports only OrderId. | Optional | 50.0 |