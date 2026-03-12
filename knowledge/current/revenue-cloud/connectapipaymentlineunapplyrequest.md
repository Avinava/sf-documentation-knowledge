---
title: "ConnectApi.PaymentLineUnapplyRequest"
domain: revenue-cloud
topic: connectapipaymentlineunapplyrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.109Z
estimatedTokens: 132
keywords: [ConnectApi.PaymentLineUnapplyRequest, Input, representation, payment, line, covers, specify, revert, application]
---

# ConnectApi.PaymentLineUnapplyRequest

> Input representation of the payment line details. This representation covers fields that
    you can specify to revert a payment line application.

# ConnectApi.PaymentLineUnapplyRequest

Input representation of the payment line details. This representation covers fields that you can specify to revert a payment line application.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| comments | String | Comments that you can add when you revert a payment line application. | Optional | 64.0 |
| effective​Date | Datetime | Date from when the reversal of the payment line application is in effect. | Optional | 64.0 |
