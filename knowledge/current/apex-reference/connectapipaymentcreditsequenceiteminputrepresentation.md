---
title: "ConnectApi.PaymentCreditSequenceItemInputRepresentation"
domain: apex-reference
topic: connectapipaymentcreditsequenceiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.410Z
keywords: [ConnectApi.PaymentCreditSequenceItemInputRepresentation]
---

# ConnectApi.PaymentCreditSequenceItemInputRepresentation

# ConnectApi.PaymentCreditSequenceItemInputRepresentation

Order Payment Summary ID, credit amount, and credit type for individual payment credit items. Each item represents a specific payment method and the amount of credit to be applied to it with the type of credit transaction.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditType | String | The type of payment credit that will be issued. Must be a valid value on the Credit Type picklist. | Required | 65.0 |