---
title: "setRetryCategory(retryCategory)"
domain: apex-reference
topic: setretrycategoryretrycategory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.161Z
keywords: [setRetryCategory, retryCategory, Sets, retry, category, returned, payment, gateway, failed, batch, flow., Signature, Parameters, Return, Value]
---

# setRetryCategory(retryCategory)

> Sets the retry category returned by the payment gateway for the failed payment for a
    batch flow.

### setRetryCategory(retryCategory)

Sets the retry category returned by the payment gateway for the failed payment for a batch flow.

#### Signature

public void setRetryCategory(commercepayments.RetryCategory retryCategory)

#### Parameters

retryCategory

Type: commercepayments.[RetryCategory](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RetryCategory.htm "Specifies the retry category.")

Specifies the payment failure category used to determine retry eligibility.

#### Return Value

Type: void