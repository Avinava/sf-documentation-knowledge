---
title: "evaluate(contextObject)"
domain: apex-reference
topic: evaluatecontextobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.490Z
keywords: [evaluate, contextObject, Calculates, formula, expression, returns, output., Signature, Parameters, Return, Value]
---

# evaluate(contextObject)

> Calculates the formula expression and returns the formula output.

### evaluate(contextObject)

Calculates the formula expression and returns the formula output.

#### Signature

public Object evaluate(Object contextObject)

#### Parameters

contextObject

Type: Object

An instance of the Apex class as generated with the FormulaBuilder.builder() method.

#### Return Value

Type: Object

Apex type that corresponds to the Apex class as configured by the withType() method in the FormulaBuilder class.