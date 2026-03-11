---
title: "setCustomTaxAttributes(customTaxAttributes)"
domain: apex-reference
topic: setcustomtaxattributescustomtaxattributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.326Z
keywords: [setCustomTaxAttributes, customTaxAttributes, Uses, instance, CustomTaxAttributesResponse, class, include, additional, attributes, tax, response, line, item, level., Signature, Parameters, Return, Value]
---

# setCustomTaxAttributes(customTaxAttributes)

> Uses an instance of CustomTaxAttributesResponse class to include additional attributes in the tax
      response at the tax line item level.

### setCustomTaxAttributes(customTaxAttributes)

Uses an instance of CustomTaxAttributesResponse class to include additional attributes in the tax response at the tax line item level.

#### Signature

global void setCustomTaxAttributes(commercetax.CustomTaxAttributesResponse customTaxAttributes)

#### Parameters

customTaxAttributes

Type: [CustomTaxAttributesResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CustomTaxAttributesResponse.htm#apex_class_commercetax_CustomTaxAttributesResponse "Sets additional data or custom attributes in the tax response.")

Additional data or custom attributes to include in the tax response.

#### Return Value

Type: void