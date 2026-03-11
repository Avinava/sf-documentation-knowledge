---
title: "Context Mappings Input"
domain: omnistudio
topic: context-mappings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.123Z
keywords: [Context, Mappings, Input]
---

# Context Mappings Input

# Context Mappings Input

Input representation of context mapping.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextMappingId | String | ID of this context mapping. Required for update. | Required | 59.0 |
| contextNodeMappings | Context Node Mappings Input[] | List of context node mappings. | Optional | 59.0 |
| description | String | Description of context mapping. | Optional | 59.0 |
| isDefault | Boolean | Indicates whether to make a default mapping for the context definition (true) or not (false). | Optional | 59.0 |
| intents | List<String> | Purpose that's used to identify the type of required context mapping.Valid values are:HYDRATION—To load cache from a data source.PERSISTENCE—To load the sink objects from cache. Sink objects are the final destinations for the processed data.ASSOCIATION—To create a mapping without validating database relationships, attaching context structure nodes and their attributes with data source nodes and their attributes.TRANSLATION—To transform the data loaded in the cache to another representation defined by the mapping. | Optional | 61.0 |
| name | String | Name of the context mapping. | Required | 59.0 |