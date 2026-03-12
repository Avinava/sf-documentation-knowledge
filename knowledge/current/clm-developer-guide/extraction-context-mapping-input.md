---
title: "Extraction Context Mapping Input"
domain: clm-developer-guide
topic: extraction-context-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.169Z
estimatedTokens: 127
keywords: [Extraction, Context, Mapping, Input, representation]
---

# Extraction Context Mapping Input

> Input representation of a extraction context mapping.

# Extraction Context Mapping Input

Input representation of a extraction context mapping.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| context​AttributeMapping | Extraction Context Attribute Mapping Input[] | List of attributes and their mappings. | Yes | 61.0 |
| context​UseCase​Mapping | Extraction Context Use Case Mapping Input | Details of the use case for which the mapping is defined. | Yes | 61.0 |

## Code Examples

```
{
  "ContextUsecaseMapping": {
    "templateName": "ContractExtractionTemplate",
    "contextDefinitionDeveloperName": "ContractExtractionContextDefinition",
    "mappingName": "ContractExtractionMappingName",
    "targetObject": "Contract",
    "recordType": "CLM"
  },
  "contextAttributeMapping": [
    {
      "attributeId": "11nxx000001hOozAAE",
      "description": "extract startDate from the document"
    },
    {
      "attributeId": "11nxx000001hOozAAV",
      "description": "extract startDate from the document"
    },
    {
      "attributeId": "11nxx000001hOozAAR",
      "description": "extract startDate from the document"
    }
  ]
}
```

## Related Topics

- Extraction Context Attribute Mapping
                      Input[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_extraction_context_attribute_mapping_input.htm)
- Extraction Context Use Case Mapping Input (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_extraction_context_use_case_mapping_input.htm)
