---
title: "Context Metadata Input"
domain: omnistudio
topic: context-metadata-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.125Z
keywords: [Context, Metadata, Input]
---

# Context Metadata Input

# Context Metadata Input

Input representation of context metadata.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextDefinitionId | String | The ID of the context definition to use for validating and creating the context record. | Required | 59.0 |
| mappingId | String | The ID of the context mapping to use for resolving the provided context data attributes. | Required | 59.0 |
| taggedData | Boolean | Parameter to return tagged attribute names instead of raw names in the created context record. | Optional | 59.0 |