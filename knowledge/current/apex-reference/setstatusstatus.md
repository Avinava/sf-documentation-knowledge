---
title: "setStatus(status)"
domain: apex-reference
topic: setstatusstatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.228Z
keywords: [setStatus, status, Sets, value, Status, field, CalculateTaxResponse, object., Signature, Parameters, Return, Value]
---

# setStatus(status)

> Sets the value of the Status field of the CalculateTaxResponse object.

### setStatus(status)

Sets the value of the Status field of the CalculateTaxResponse object.

#### Signature

global void setStatus(commercetax.TaxTransactionStatus status)

#### Parameters

status

Type: [TaxTransactionStatus](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_TaxTransactionStatus.htm "Shows whether the tax transaction has been committed or uncommitted.")

Indicates whether a tax transaction has been committed.

#### Return Value

Type: void