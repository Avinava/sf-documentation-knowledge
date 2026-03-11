---
title: "ConnectApi.PaymentInitiationSourceInputRepresentation"
domain: apex-reference
topic: connectapipaymentinitiationsourceinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.421Z
keywords: [ConnectApi.PaymentInitiationSourceInputRepresentation]
---

# ConnectApi.PaymentInitiationSourceInputRepresentation

# ConnectApi.PaymentInitiationSourceInputRepresentation

Payment initiation source input representation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| application | ConnectApi.​Application | Application that initiated this payment, such as Revenue Lifecycle Management (RLM). | Optional | 63.0 |
| channel | String | Channel that submitted the payment. | Optional | 63.0 |
| customFields | Map<String, String> | Map containing custom field names and their corresponding IDs. | Optional | 63.0 |
| process | String | Process or component of the application that submitted the payment, such as the Billing component of RLM. | Optional | 63.0 |
| standard​References | Map<String, String> | Map of standard reference fields and their corresponding IDs. | Optional | 63.0 |