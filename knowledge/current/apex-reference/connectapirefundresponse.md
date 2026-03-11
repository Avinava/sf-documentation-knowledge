---
title: "ConnectApi.RefundResponse"
domain: apex-reference
topic: connectapirefundresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.912Z
keywords: [ConnectApi.RefundResponse]
---

# ConnectApi.RefundResponse

# ConnectApi.RefundResponse

Refund output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | ID of the account related to the refund record. | 50.0 |
| amount | Double | Total amount of the refund transaction performed in the payment request. | 50.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | 50.0 |
| effectiveDate | Datetime | Date that the refund becomes effective. | 50.0 |
| id | String | ID of the refund record. | 50.0 |
| refundNumber | String | Number of the refund record that was created as a result of the request processing. | 50.0 |
| requestDate | Datetime | Date when the refund occurred. | 50.0 |
| status | String | Indicates the results of processing the refund transaction in the gateway. Can be DRAFT, PROCESSED or CANCELLED. | 50.0 |