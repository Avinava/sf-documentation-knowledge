---
title: "setImposition(imposition)"
domain: apex-reference
topic: setimpositionimposition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.326Z
keywords: [setImposition, imposition, Sets, Imposition, field, TaxDetailsResponse, class, instance, ImpositionResponse, class., Signature, Parameters, Return, Value]
---

# setImposition(imposition)

> Sets the Imposition field of the TaxDetailsResponse class using an instance of the ImpositionResponse class.

### setImposition(imposition)

Sets the Imposition field of the TaxDetailsResponse class using an instance of the ImpositionResponse class.

#### Signature

global void setImposition(commercetax.ImpositionResponse imposition)

#### Parameters

imposition

Type: [ImpositionResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ImpositionResponse.htm#apex_class_commercetax_ImpositionResponse "Stores details of tax impositions from the external tax engine.")

Contains information about why tax was imposed on a line item.

#### Return Value

Type: void