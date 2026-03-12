---
title: "ConnectApi.RefundLineApplyRequest"
domain: revenue-cloud
topic: connectapirefundlineapplyrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.078Z
estimatedTokens: 182
keywords: [ConnectApi.RefundLineApplyRequest, Input, representation, details, transaction, refund, request., outlines, including, amount, payment, credit, memo, record, applied, to.]
---

# ConnectApi.RefundLineApplyRequest

> Input representation of the details of a transaction refund request. This representation
    outlines the properties of a refund, including the refund amount and ID of the payment or credit
    memo record that the refund is applied to.

# ConnectApi.RefundLineApplyRequest

Input representation of the details of a transaction refund request. This representation outlines the properties of a refund, including the refund amount and ID of the payment or credit memo record that the refund is applied to.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount to refund. | Required | 64.0 |
| appliedToId | String | ID of a payment or credit memo record. The refund is applied to this object. | Required | 64.0 |
| comments | String | Additional details of the refund request. | Optional | 64.0 |
| effectiveDate | Datetime | Date from when the refund is in effect. | Optional | 64.0 |
