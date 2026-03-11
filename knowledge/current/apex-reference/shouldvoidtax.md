---
title: "shouldVoidTax"
domain: apex-reference
topic: shouldvoidtax
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.213Z
keywords: [shouldVoidTax, Indicates, whether, void, tax, transaction, associated, document, that's, mentioned, referenceDocumentCode, property, value, taxType, set, Actual, isCommit, true., Signature, Property]
---

# shouldVoidTax

> Indicates whether to void the tax transaction associated with a
      document that's mentioned in the referenceDocumentCode
      property value with taxType property value set to Actual and isCommit property
      value set to true.

### shouldVoidTax

Indicates whether to void the tax transaction associated with a document that's mentioned in the referenceDocumentCode property value with taxType property value set to Actual and isCommit property value set to true.

#### Signature

global commercetax.CalculateTaxType shouldVoidTax {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")