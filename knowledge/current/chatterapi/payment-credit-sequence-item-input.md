---
title: "Payment Credit Sequence Item Input"
domain: chatterapi
topic: payment-credit-sequence-item-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.342Z
estimatedTokens: 131
keywords: [Payment, Credit, Sequence, Item, Input, Order, Summary, amount, individual, items, specific, applied, transaction]
---

# Payment Credit Sequence Item Input

> Order Payment Summary ID, credit amount, and credit type for individual payment credit
    items. Each item represents a specific payment method and the amount of credit to be applied to
    it with the type of credit transaction.

# Payment Credit Sequence Item Input

Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it with the type of credit transaction.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditType | String | The type of payment credit that will be issued. Must be a valid value on the Credit Type picklist. | Required | 65.0 |
