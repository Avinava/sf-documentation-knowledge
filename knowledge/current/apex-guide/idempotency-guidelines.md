---
title: "Idempotency Guidelines"
domain: apex-guide
topic: idempotency-guidelines
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:46.706Z
keywords: [Idempotency, Guidelines]
---

# Idempotency Guidelines

# Idempotency Guidelines

Idempotency represents the ability of a payment gateway to recognize duplicate requests submitted either in error or maliciously, and then process the duplicate requests accordingly. When working with an idempotent gateway, consider these important guidelines.

| Available in: Salesforce Spring ’20 |
| --- |
  

To access the commercepayments API, you need the PaymentPlatform org permission.

The payment gateway adapter class is linked to a paymentGatewayProvider object record. CCS Payments provides its own layer of idempotency for its own service request. Each payment gateway can also specify their idempotencySupported value in the paymentGatewayProvider object record. If Salesforce CCS Payment APIs detects a duplicate request and the gateway provider supports idempotency, the request body’s duplicate parameter becomes True.

```

```

The idempotency key can be fetched from the request object.

String idempotencyKey = request.idempotencyKey