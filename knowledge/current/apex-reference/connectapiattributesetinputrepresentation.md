---
title: "ConnectApi.AttributeSetInputRepresentation"
domain: apex-reference
topic: connectapiattributesetinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.447Z
keywords: [ConnectApi.AttributeSetInputRepresentation]
---

# ConnectApi.AttributeSetInputRepresentation

# ConnectApi.AttributeSetInputRepresentation

Attribute set information input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | List<String> | List of up to 5 attribute API names. Required if creating a new attribute set. | Optional | 62.0 |
| id | String | If updating an attribute set, the ID of the existing attribute set for the variation parent product. | Optional | 62.0 |
| name | String | Attribute set name for a new attribute set. | Optional | 62.0 |