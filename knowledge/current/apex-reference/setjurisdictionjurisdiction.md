---
title: "setJurisdiction(jurisdiction)"
domain: apex-reference
topic: setjurisdictionjurisdiction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.326Z
keywords: [setJurisdiction, jurisdiction, Sets, Jurisdiction, field, TaxDetailsResponse, instance, JurisdictionResponse, class., Signature, Parameters, Return, Value]
---

# setJurisdiction(jurisdiction)

> Sets the Jurisdiction field of the TaxDetailsResponse using an instance of the JurisdictionResponse class.

### setJurisdiction(jurisdiction)

Sets the Jurisdiction field of the TaxDetailsResponse using an instance of the JurisdictionResponse class.

#### Signature

global void setJurisdiction(commercetax.JurisdictionResponse jurisdiction)

#### Parameters

jurisdiction

Type: [JurisdictionResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_JurisdictionResponse.htm#apex_class_commercetax_JurisdictionResponse "Stores details from the external tax engine about the tax jurisdiction used in the tax calculation process. A tax jurisdiction represents a government entity that collects tax.")

Contains address information about the tax jurisdiction used in the tax calculation process.

#### Return Value

Type: void