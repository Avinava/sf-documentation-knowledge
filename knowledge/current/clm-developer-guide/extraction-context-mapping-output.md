---
title: "Extraction Context Mapping Output"
domain: clm-developer-guide
topic: extraction-context-mapping-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.519Z
estimatedTokens: 184
keywords: [Extraction, Context, Mapping, Output, representation]
---

# Extraction Context Mapping Output

> Output representation of extraction context mapping.

# Extraction Context Mapping Output

Output representation of extraction context mapping.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| context​Attribute​Mapping | Context Attribute Mapping[] | List of extraction context attribute mappings.. | Small, 61.0 | 61.0 |
| context​UseCase​Mapping | Extraction Context Use Case Mapping | Details of extraction context use case mapping. | Small, 61.0 | 61.0 |
| context​UseCase​Mapping​Id | String | Record ID of the context use case mapping. | Small, 61.0 | 61.0 |
| isSuccess | Boolean | Indicates whether the retrieval of mapping was successful (true) or not false. | Small, 61.0 | 61.0 |

## Code Examples

```
{
  "contextUseCaseMapping": {
    "templateName": "ContractExtractionTemplate",
    "targetObject": "Contract",
    "recordType": "CLM",
    "contextDefinitionName": {
      "id": "11Oxx0000007MnhEAE",
      "developerName": "David Taylor",
      "name": "Dav"
    },
    "contextMapping": {
      "id": "11Oxx0000007MnhEAE",
      "name": "David Taylor"
    }
  },
  "contextAttributeMapping": [
    {
      "attributeName": "ContractName",
      "attributeId": "11nxx000001hOozAAE",
      "targetObjectField": "Contract",
      "description": "extract startDate from the document",
      "isCustom": false
    },
    {
      "attributeName": "ContractCustomField",
      "attributeId": "11nxx000001hOozAAE",
      "targetObjectField": "Contract",
      "description": "extract startDate from the document",
      "isCustom": true
    },
    {
      "attributeName": "Description",
      "attributeId": "11nxx000001hOozAAE",
      "targetObjectField": "Contract",
      "description": "extract startDate from the document",
      "isCustom": false
    }
  ],
  "isSuccess": true,
  "contextUseCaseMappingId": "ContextUseCaseMappingId"
}
```

## Related Topics

- Context Attribute Mapping[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_attribute_mapping.htm)
- Extraction Context Use Case Mapping (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_extraction_context_use_case_mapping.htm)
