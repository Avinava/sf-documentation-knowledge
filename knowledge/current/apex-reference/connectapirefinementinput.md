---
title: "ConnectApi.RefinementInput"
domain: apex-reference
topic: connectapirefinementinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.518Z
keywords: [ConnectApi.RefinementInput]
---

# ConnectApi.RefinementInput

# ConnectApi.RefinementInput

Attribute-based refinement input for product search.

This class is abstract and is a superclass of [ConnectApi.DistinctValueRefinementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distinct_value_refinement.htm "Attribute-based refinement with distinct values for product search.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeType | ConnectApi.​CommerceSearch​AttributeType | Search attribute type.CustomProductAttributeStandard | Required | 52.0 |
| nameOrId | String | Developer name of the attribute. In version 52.0 and later, the ID of the attribute isn’t supported. | Required | 52.0 |
| type | ConnectApi.​CommerceSearch​FacetType | Search facet type. Value is:DistinctValueRange | Required | 52.0 |