---
title: "ConnectApi.AttributeSetInputRepresentation"
domain: apex-reference
topic: connectapiattributesetinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.357Z
estimatedTokens: 134
keywords: [ConnectApi.AttributeSetInputRepresentation, Attribute, set, information, input.]
---

# ConnectApi.AttributeSetInputRepresentation

> Attribute set information input.

# ConnectApi.AttributeSetInputRepresentation

Attribute set information input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | List<String> | List of up to 5 attribute API names. Required if creating a new attribute set. | Optional | 62.0 |
| id | String | If updating an attribute set, the ID of the existing attribute set for the variation parent product. | Optional | 62.0 |
| name | String | Attribute set name for a new attribute set. | Optional | 62.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
