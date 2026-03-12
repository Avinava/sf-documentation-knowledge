---
title: "ConnectApi.PaymentCreditSequenceItemInputRepresentation"
domain: apex-reference
topic: connectapipaymentcreditsequenceiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.519Z
estimatedTokens: 134
keywords: [Order, Payment, Summary, credit, amount, individual, items, item, specific, applied, transaction]
---

# ConnectApi.PaymentCreditSequenceItemInputRepresentation

> Order Payment Summary ID, credit amount, and credit type for individual payment credit
    items. Each item represents a specific payment method and the amount of credit to be applied to
    it with the type of credit transaction.

# ConnectApi.PaymentCreditSequenceItemInputRepresentation

Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it with the type of credit transaction.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditType | String | The type of payment credit that will be issued. Must be a valid value on the Credit Type picklist. | Required | 65.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
