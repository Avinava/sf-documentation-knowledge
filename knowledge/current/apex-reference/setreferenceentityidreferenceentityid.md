---
title: "setReferenceEntityId(referenceEntityId)"
domain: apex-reference
topic: setreferenceentityidreferenceentityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.228Z
keywords: [setReferenceEntityId, referenceEntityId, Sets, value, ReferenceEntityId, field, CalculateTaxResponse, object., Signature, Parameters, Return, Value]
---

# setReferenceEntityId(referenceEntityId)

> Sets the value of the ReferenceEntityId field of the CalculateTaxResponse object.

### setReferenceEntityId(referenceEntityId)

Sets the value of the ReferenceEntityId field of the CalculateTaxResponse object.

#### Signature

global void setReferenceEntityId(String referenceEntityId)

#### Parameters

referenceEntityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an entity related to the line items submitted for tax calculation. For example, if order items were sent for tax calculation, you could use the ID of their parent order.

#### Return Value

Type: void