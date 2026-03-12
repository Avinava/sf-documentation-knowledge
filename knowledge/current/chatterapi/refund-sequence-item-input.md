---
title: "Refund Sequence Item Input"
domain: chatterapi
topic: refund-sequence-item-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.689Z
estimatedTokens: 118
keywords: [Refund, Sequence, Item, Input, Order, Payment, Summary, amount, individual, items, processed]
---

# Refund Sequence Item Input

> The Order Payment Summary ID and amount for the individual refund items in a sequence.
    Each item has a payment method and refund amount to be processed for that method.

# Refund Sequence Item Input

The Order Payment Summary ID and amount for the individual refund items in a sequence. Each item has a payment method and refund amount to be processed for that method.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | The amount being refunded. | Required | 65.0 |
| orderPaymentSummaryId | String | The order payment summary’s ID. | Required | 65.0 |
