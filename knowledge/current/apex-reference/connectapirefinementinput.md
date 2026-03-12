---
title: "ConnectApi.RefinementInput"
domain: apex-reference
topic: connectapirefinementinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.468Z
estimatedTokens: 208
keywords: [ConnectApi.RefinementInput, Attribute-based, refinement, input, product, search.]
---

# ConnectApi.RefinementInput

> Attribute-based refinement input for product search.

# ConnectApi.RefinementInput

Attribute-based refinement input for product search.

This class is abstract and is a superclass of [ConnectApi.DistinctValueRefinementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distinct_value_refinement.htm "Attribute-based refinement with distinct values for product search.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeType | ConnectApi.​CommerceSearch​AttributeType | Search attribute type.CustomProductAttributeStandard | Required | 52.0 |
| nameOrId | String | Developer name of the attribute. In version 52.0 and later, the ID of the attribute isn’t supported. | Required | 52.0 |
| type | ConnectApi.​CommerceSearch​FacetType | Search facet type. Value is:DistinctValueRange | Required | 52.0 |

## Related Topics

- ConnectApi.DistinctValueRefinementInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distinct_value_refinement.htm)
- ConnectApi.​CommerceSearch​AttributeType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CommerceSearch​FacetType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
