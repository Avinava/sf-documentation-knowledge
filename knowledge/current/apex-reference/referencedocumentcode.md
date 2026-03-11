---
title: "referenceDocumentCode"
domain: apex-reference
topic: referencedocumentcode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.376Z
keywords: [referenceDocumentCode, Identifier, combines, original, invoice, previous, tax, transaction, type, engine, used, calculations, negative, lines., Signature, Property, Value]
---

# referenceDocumentCode

> Identifier that combines the original invoice ID, previous tax
      transaction type, and tax engine ID, used in tax calculations for negative invoice
    lines.

### referenceDocumentCode

Identifier that combines the original invoice ID, previous tax transaction type, and tax engine ID, used in tax calculations for negative invoice lines.

For example, a referenceDocumentCode parameter value 3ttxx00000004Bh\_Debit-4wAxx0000000001EAA indicates 3ttxx00000004Bh is the original invoice ID and 4wAxx0000000001EAA is the tax engine ID.

#### Signature

global String referenceDocumentCode {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")