---
title: "setRetryDecision(retryDecision)"
domain: apex-reference
topic: setretrydecisionretrydecision
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.161Z
keywords: [setRetryDecision, retryDecision, Sets, retry, decision., Signature, Parameters, Return, Value]
---

# setRetryDecision(retryDecision)

> Sets the retry decision.

### setRetryDecision(retryDecision)

Sets the retry decision.

#### Signature

public void setRetryDecision(commercepayments.RetryDecision retryDecision)

#### Parameters

retryDecision

Type: commercepayments.[RetryDecision](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RetryDecision.htm "Specifies the retry decision.")

Determines whether the payment operation can be retried based on the retry category.

#### Return Value

Type: void